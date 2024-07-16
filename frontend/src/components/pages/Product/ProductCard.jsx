import "./ProductCard.css"
import { Link } from "react-router-dom"
import { BsPencil, BsFillTrashFill } from "react-icons/bs"

const ProductCard = ({id, nome, descricao, preco, DATA, handleRemove})=>{

    const remove = (e)=>{
     e.preventDefault
     handleRemove(id)
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}/${month}/${day}`; // Formato AAAA-MM-DD
    };

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
               <span>Data</span> {formatDate(DATA)}
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