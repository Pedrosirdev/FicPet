import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./app/pages/Home/Home";
import Sobre from "./app/pages/Sobre/Sobre";

function AppRoutes(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/" element={ <Sobre /> }></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;