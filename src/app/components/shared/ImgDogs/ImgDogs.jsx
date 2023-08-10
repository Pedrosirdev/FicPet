import { Link } from 'react-router-dom'

function ImgDogs(props){
  return (
      <Link>
    <img height={props.height} width={props.width} src={props.src} alt={props.alt} />
      </Link>
  )
}

export default ImgDogs;