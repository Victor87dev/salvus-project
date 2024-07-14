import { useState, useEffect} from "react"
import "./ProductForm.css"
import Input from "../../Form/Input"
import SubmitButton from "../../Form/SubmitButton"
import Message from "../../layout/Message"

const ProjectForm = ({ handleSubmit, btnText, productData})=>{

  const [product, setProduct] = useState(productData || {})
  const [message, setMessage] = useState()
  const [type, setType] = useState()

  useEffect(()=>{
    fetch("https://db-json-server-six.vercel.app/categories",{
     method: "GET",
     headers: {
      'Content-Type': 'application/json'
     }
    })
    .then((resp) => resp.json())
    .then((data) => {
      setCategories(data)
    })
    .catch((err) => console.log(err))
  }, [])
  
  const submit = (e)=>{
    if(product.name === undefined || product.descricao === undefined || product.budget === undefined || product.data === undefined || product.name === '' || product.descricao === '' || product.budget === '' || product.data === ''){
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
    console.log(product.name)
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
        <Input type="text" text="Nome do produto" name="name" placeholder="Insira o nome do produto" handleOnChange={handleChange} value={product.name ? product.name : ''}/>
        <Input type="text" text="Descrição do produto" name="descricao" placeholder="Insira uma descrição" handleOnChange={handleChange} value={product.descricao ? product.descricao : ''}/>
        <Input type="number" text="Valor do produto" name="budget" placeholder="Insira o valor" handleOnChange={handleChange} value={product.budget ? product.budget : ''}/>
        <Input type="date" text="Data de criação" name="data" placeholder="Insira a data" handleOnChange={handleChange} value={product.data ? product.data : ''}/>
        <SubmitButton text={btnText}/>
    </form>
  </>
    
  )
}

export default ProjectForm