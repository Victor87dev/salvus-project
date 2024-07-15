import { useState } from "react"
import "./ProductForm.css"
import Input from "../../Form/Input"
import LinkButton from "../../layout/LinkButton"
import Message from "../../layout/Message"

const ProjectForm = ({ handleSubmit, btnText, productData})=>{

  const [product, setProduct] = useState(productData || {})
  const [message, setMessage] = useState()
  const [type, setType] = useState()
  
  const submit = (e)=>{
    if(product.nome === undefined || product.descricao === undefined || product.preco === undefined || product.data === undefined || product.nome === '' || product.descricao === '' || product.preco === '' || product.data === ''){
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
        <Input type="text" text="Nome do produto" name="nome" placeholder="Insira o nome do produto" handleOnChange={handleChange} value={product.nome ? product.nome : ''}/>
        <Input type="text" text="Descrição do produto" name="descricao" placeholder="Insira uma descrição" handleOnChange={handleChange} value={product.descricao ? product.descricao : ''}/>
        <Input type="number" text="Valor do produto" name="preco" placeholder="Insira o valor" handleOnChange={handleChange} value={product.preco ? product.preco : ''}/>
        <Input type="date" text="Data de criação" name="DATA" placeholder="Insira a data" handleOnChange={handleChange} value={product.DATA ? product.DATA : ''}/>
        <LinkButton to="/" text={btnText}/>
    </form>
  </>
    
  )
}

export default ProjectForm