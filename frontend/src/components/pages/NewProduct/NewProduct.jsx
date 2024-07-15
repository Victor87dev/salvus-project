import { useNavigate } from "react-router-dom"

import ProductForm from "../Product/ProductForm"

import "./NewProduct.css"

const NewProduct = ()=>{

    const navigate = useNavigate()
    
    const createProd = (product, id)=>{
       
     product.products = []

    fetch(`http://localhost:3000/produtos`,{
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
            <h1>Criar Produto</h1>
            <p>Crie seu produto</p>
            <ProductForm handleSubmit={createProd} btnText="Criar Produto"/>
        </div>
    )
}

export default NewProduct