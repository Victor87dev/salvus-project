import { useNavigate } from "react-router-dom"

import ProductForm from "../Product/ProductForm"
import LinkButton from "../../layout/LinkButton"

import "./NewProduct.css"

const NewProduct = ()=>{

    const navigate = useNavigate()
    
    const createProd = (product)=>{

    fetch(`https://salvus-project-production.up.railway.app/produtos`,{
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
            <h1>Criar <span className="span_produto">Produto</span></h1>
            <p>Preencha os dados para criar seu produto</p>
            <ProductForm handleSubmit={createProd} btnText="Criar Produto"/>
            <LinkButton to="/" text="Voltar"/>
        </div>
    )
}

export default NewProduct