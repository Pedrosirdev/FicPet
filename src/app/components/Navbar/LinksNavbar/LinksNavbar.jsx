import { Link } from 'react-router-dom'

export default function LinksNavbar (){
  return (
    <div className="div-links-navbar">
      <Link to="/">Home</Link>
      <Link to="/Sobre">Sobre</Link>
      <Link to="/Servicos">Serviços</Link>
      <a>Contato</a>
    </div>
  )
}