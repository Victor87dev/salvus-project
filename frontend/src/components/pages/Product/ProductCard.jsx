import "./ProductCard.css"
import { Link } from "react-router-dom"
import { BsPencil, BsFillTrashFill } from "react-icons/bs"

const ProductCard = ({id, nome, descricao, preco, DATA, handleRemove})=>{

    const remove = (e)=>{
     e.preventDefault
     handleRemove(id)
    }

    return(
        <div className="product_card">
            <h4>{nome}</h4>
            <p>
               <span>Descrição</span> {descricao}
            </p>
            <p>
               <span>Preço</span> R${preco}
            </p>
            <p>
               <span>Data</span> {DATA}
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