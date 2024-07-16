import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"

import Message from "../../layout/Message"
import Container from "../../layout/Container"
import LinkButton from "../../layout/LinkButton"
import Loading from "../../layout/Loading"
import ProductCard from "../Product/ProductCard"

import "./Home.css"

const Home = () => {

  const [products, setProducts] = useState([])
  const [removeLoading, setRemoveLoading] = useState(false)
  const [productMessage, setProductMessage] = useState('')

  const location = useLocation()
  let message = ''
  if(location.state && products.length > 0){
    message = location.state.message
  }

  useEffect(()=>{
    setTimeout(()=>{
      fetch('http://localhost:3000/produtos',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        })
        .then((resp)=>resp.json())
        .then(data => {
          setProducts(data)
          setRemoveLoading(true)
        })
        .catch((err)=>console.log(err))
      }, 1800)
  }, [])

  function removeProduct(id){

    setProductMessage('')

    fetch(`http://localhost:3000/produto/${id}`,{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        })
        .then((resp)=>resp.json())
        .then(() => {
          
        })
        .catch((err)=>console.log(err))
        setProducts(products.filter((product) => product.id !== id))
        setProductMessage('Produto removido com sucesso!')

        setTimeout(()=>{
          setProductMessage('')
        }, 1800)
  }

  return (
    <div className="product_container">
      <div className="title_container">
        <h1 className="title">Meus Produtos</h1>
        <LinkButton to="/novo_produto" text="Criar Produto"/>
      </div>
      {message && <Message  type="sucess" msg={message}/>}
      {productMessage && <Message  type="sucess" msg={productMessage}/>}
      <Container customClass="start">
        {products.length > 0 &&
          products.map((product) => (
            <ProductCard 
            id={product.id}
            nome={product.nome}
            descricao={product.descricao}
            preco={product.preco}
            DATA={product.DATA}
            key={product.id}
            handleRemove={removeProduct}
            />
          ))}
          {!removeLoading && <Loading />}
          {removeLoading && products.length === 0 && (
            <p>Não há produtos cadastrados!</p>
          )
          }
      </Container>
    </div>
  )
}

export default Home