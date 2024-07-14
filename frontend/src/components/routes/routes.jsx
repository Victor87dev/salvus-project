import { Route, Routes } from "react-router-dom"

import Home from "../pages/Home/Home"
import CadastroProduto from "../pages/CadastroProduto/CadastroProduto"
import EditarProduto from "../pages/EditarProduto/EditarProduto"

const AppRoutes = () => {
return(
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro_produto" element={<CadastroProduto />} />
        <Route path="/editar_produto" element={<EditarProduto />} />
    </Routes>
)
}

export default AppRoutes