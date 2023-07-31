import LinksNavbar from "./LinksNavbar/LinksNavbar";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";



export default function Navbar() {
  return (
    <nav id="navbar" className="navbar navbar-">
      <Logo />
      <LinksNavbar />
      <Menu />
    </nav>
  )
}