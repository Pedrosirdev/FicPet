import { Link } from "react-router-dom";

export default function DefaultButton(props){
  return (
    <>
      <Link to={props.to} className="defaultBtn">
        {props.btn}
      </Link> 
    </>
  )
}