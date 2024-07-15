import "./EditProduct.css"

import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import Loading from "../../layout/Loading"
import Container from "../../layout/Container"
import ProductForm from "../Product/ProductForm"
import Message from "../../layout/Message"
import LinkButton from "../../layout/LinkButton"

const EditProduct = ()=>{

  const { id } = useParams()
  const [product, setProduct] = useState([])
  const [message, setMessage] = useState()
  const [type, setType] = useState()

  const navigate = useNavigate()

  useEffect(()=>{
    
      fetch(`http://localhost:3000/produto/${id}`,{
         method: 'GET',
         headers: {
          'Content-Type': 'application/json',
         },    
      })
      .then((resp)=>resp.json())
      .then((data) => {
      setProduct(data)
      })
      .catch((err)=>console.log(err))
      
  }, [id])

  function editPost(product){

    setMessage('')

    console.log(product)

      fetch(`http://localhost:3000/produto/${id}`,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      })
      .catch((err) => console.log(err))
      
      setMessage('Seu projeto será atualizado em instantes!')
      setType('sucess')

      setTimeout(()=>{
        navigate(`/`)
      }, 1800)
  }

  return(<>
    {product.name ? (
     <div className="product_details">
      <Container customClass="column">
        {message && <Message type={type} msg={message}/>}
        <div className="details_container">
          <h1><span className="spanDestaque">Produto:</span> {product.nome}</h1>
          <LinkButton to="/" text="Voltar" />
          <div className="product_info">
              <ProductForm handleSubmit={editPost} btnText="Concluir edição" productData={product}/>
          </div>
        </div>
      </Container>
     </div>
    )
     : 
     (
     <Loading />
     )}
  </>)
}

export default EditProduct