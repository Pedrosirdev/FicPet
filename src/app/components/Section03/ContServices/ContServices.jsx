import ImgDogs from "../../shared/ImgDogs/ImgDogs";
import SubTitle from "../../shared/SubTitle/SubTitle";

function ContServices(props){
  return (
    <div>
      <SubTitle subTitle={props.subTitle}/>
      <ImgDogs height={props.height} width={props.width} src={props.src} alt={props.alt}/>
    </div>
  )
}

export default ContServices;