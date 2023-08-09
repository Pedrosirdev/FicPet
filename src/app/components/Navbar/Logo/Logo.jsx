import LogoImage from '../../../../assets/images/logo-ficPet.png'
import { Link } from 'react-router-dom'

export default function Logo(){
  return (
    <div className="div-logo">
      <Link to="/">
      <img src={LogoImage} alt="FicPet" />
      </Link>
    </div>
  )
}