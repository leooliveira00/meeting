import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./Componentes/Pages/Inicio";
import Matriz from "./Componentes/Pages/Matriz";
import SaoPaulo from "./Componentes/Pages/SaoPaulo";

const AppRoutes = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Inicio/>}> </Route>
            <Route path="Matriz" element={<Matriz/>}></Route>
            <Route path="SaoPaulo" element={<SaoPaulo/>}></Route>
        </Routes>
    </BrowserRouter>
    )
}

export default AppRoutes;