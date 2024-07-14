import { useNavigate } from "react-router-dom"

import ProductForm from "../Product/ProductForm"

import "./NewProduct.css"

const NewProduct = ()=>{

    const navigate = useNavigate()

    const createProd = (product)=>{
      // initialize cost and services
      product.products = []

      fetch('https://db-json-server-six.vercel.app/projects',{
      method: "POST",
      headers: {
      'Content-type': 'application/json',
      },
      body: JSON.stringify(product),
      })
      .then((resp) => resp.json())
      .then((data) => {
       console.log(data)
      })
      .catch((err) => console.log(err))
      // redirect
      navigate('/home', { state: { message: 'Produto criado com sucesso!' } })
    }
    
    return (
        <div className="newproject_container">
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProductForm handleSubmit={createProd} btnText="Criar Produto"/>
        </div>
    )
}

export default NewProduct