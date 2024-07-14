import "./ProductCard.css"
import { Link } from "react-router-dom"
import { BsPencil, BsFillTrashFill } from "react-icons/bs"

const ProductCard = ({id, name, descricao, budget, data, handleRemove})=>{

    const remove = (e)=>{
     e.preventDefault
     handleRemove(id)
    }

    return(
        <div className="product_card">
            <h4>{name}</h4>
            <p>
               <span>Descrição</span> {descricao}
            </p>
            <p>
               <span>Preço</span> R${budget}
            </p>
            <p>
               <span>Data</span> {data}
            </p>
            <div className="product_card_actions">
                <Link to={`/editar_produto/${id}`}>
                    <BsPencil className="color_yellow"/> Editar
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill className="color_yellow"/> Excluir
                </button>
            </div>

        </div>
    )
}

export default ProductCard