import LinkButton from "../../layout/LinkButton"
import "./Home.css"

const Home = () => {
  return (
    <div className="product_container">
      <div className="title_container">
        <h1 className="title">Meus <span className="span_produtos">Produtos</span></h1>
        <LinkButton to="/cadastro_produto" text="Criar Produto"/>
      </div>
    </div>
  )
}

export default Home