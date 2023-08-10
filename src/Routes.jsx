import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./app/pages/Home/Home";
import Sobre from "./app/pages/Sobre/Sobre";
import Servicos from "./app/pages/Servicos/Servicos";
import AdoptionPage from "./app/components/AdoptionPage/AdoptionPage";

function AppRoutes(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/Sobre" element={ <Sobre />  }></Route>
        <Route path="/Servicos" element={ <Servicos /> }></Route>
        <Route path="/AdoptionPage" element={ <AdoptionPage /> }></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;