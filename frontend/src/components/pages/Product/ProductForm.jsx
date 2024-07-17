import { useState } from "react"
import "./ProductForm.css"
import Input from "../../Form/Input"
import SubmitButton from "../../Form/SubmitButton"
import Message from "../../layout/Message"

const ProductForm = ({ handleSubmit, btnText, productData})=>{

  const [product, setProduct] = useState(productData || {})
  const [message, setMessage] = useState()
  const [type, setType] = useState()
 
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`; // Formato AAAA-MM-DD
};

  
  const submit = (e)=>{
    if(product.nome === undefined || product.descricao === undefined || product.preco === undefined || product.DATA === undefined || product.nome === '' || product.descricao === '' || product.preco === '' || product.DATA === ''){
      e.preventDefault()
      setMessage('Informações incompletas, certifique-se de completar as informações!')
      setType('error')
      console.log('meu erro')

      setTimeout(()=>{
        setMessage('')
      }, 2400)

      return false 
    }
    console.log('funciona')
    console.log(product.nome)
    e.preventDefault()
    // console.log(project)
    handleSubmit(product)
  }

  function handleChange(e){
    setProduct({ ...product, [e.target.name]: e.target.value})
  }
  
  

  return(<>
  {message && <Message type={type} msg={message}/>}
    <form onSubmit={submit} className="form">
        <Input type="text" text="Nome do produto" name="nome" placeholder={product.nome === "" ? "Insira o novo nome" : "Insira o nome"} handleOnChange={handleChange} value={product.nome}/>
        <Input type="text" text="Descrição do produto" name="descricao" placeholder={product.descricao === "" ? "Insira uma nova descrição" : "Insira uma descrição"} handleOnChange={handleChange} value={product.descricao}/>
        <Input type="number" text="Valor do produto" name="preco" placeholder={product.preco === null ? "Insira o novo preço" : "Insira o preço"} handleOnChange={handleChange} value={product.preco}/>
        <Input type="date" text="Data de criação" name="DATA" placeholder="Insira a data" handleOnChange={handleChange} value={product.DATA}/>
        <SubmitButton text={btnText}/>
    </form>
  </>
    
  )
}

export default ProductForm