import { Route, Routes } from "react-router-dom"

import Home from "../pages/Home/Home"
import NewProduct from "../pages/NewProduct/NewProduct"
import EditProduct from "../pages/EditProduct/EditProduct"
import Container from "../layout/Container"


const AppRoutes = () => {
return(
        <Container>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/novo_produto" element={<NewProduct />} />
                <Route path="/editar_produto" element={<EditProduct />} />
            </Routes>
        </Container>
)
}

export default AppRoutes