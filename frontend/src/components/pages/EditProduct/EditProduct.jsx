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
  const [showProductForm, setShowProductForm] = useState(false)
  const [message, setMessage] = useState()
  const [type, setType] = useState()

  const navigate = useNavigate()

  useEffect(()=>{
    setTimeout(()=>{
      fetch(`https://salvus-project-production.up.railway.app/produtos/${id}`,{
         method: 'GET',
         headers: {
          'Content-Type': 'application/json',
         },    
      })
      .then((resp)=>resp.json())
      .then((data) => {
      setProduct(data)
      console.log(product)
      })
      .catch((err)=>console.log(err))
    }, 500)
  }, [id])
  
  function editPost(product){
    
    setTimeout(()=>{
      fetch(`https://salvus-project-production.up.railway.app/produto/${id}`,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      })
      .catch((err) => console.log(err))
      console.log(product.DATA)
      setMessage('Seu projeto será atualizado em instantes!')
      setType('sucess')

      setTimeout(()=>{
        navigate(`/`)
      }, 1800)
    }, 500)
  }

  function toggleProductForm(){
    console.log("estouaaa")
    if(product.nome !== '' && product.descricao !== '' && product.preco !== null && product.DATA !== ''){
      product[0].nome = ""
      product[0].descricao = ""
      product[0].preco = null
      product[0].DATA = ""
      console.log("entrei")
     }

     console.log(product[0].nome)
     console.log(product[0].preco)
    setShowProductForm(!showProductForm)
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${day}/${month}/${year}`; // Formato AAAA-MM-DD
};

  return(<>
  
    {product.length ? (
      
     <div className="product_details">
      <Container customClass="column">
        {message && <Message type={type} msg={message}/>}
        <div className="details_container">
          <h1><span className="spanDestaques">Produto:</span> {product[0].nome}</h1>
          <LinkButton to="/" text="Voltar" />
          <button className="btn" onClick={toggleProductForm}>
            {!showProductForm? (
            'Editar Projeto'
            ) :
            (
            'Fechar'
            )
            }
            </button>
            {!showProductForm ? (
               <div className="product_info">
                <p>
                  <span>Descrição:</span> {product[0].descricao}
                </p>
                <p>
                  <span>Preço</span> R${product[0].preco}
                </p>
                <p>
                  <span>Data</span> {formatDate(product[0].DATA)}
                </p>
               </div>
            ) 
            : 
            (
              <div className="product_info">
                <ProductForm handleSubmit={editPost} btnText="Concluir edição" productData={product[0]}/>
              </div>
            )
            }
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