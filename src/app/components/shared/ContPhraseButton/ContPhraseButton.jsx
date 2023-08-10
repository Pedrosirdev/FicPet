import DefaultButton from "../DefaultButton/DefaultButton";
import SubTitle from "../SubTitle/SubTitle";
import Title from "../Title/Title";

export default function ContPhraseButton(props){
  return (
    <div>
      <Title title={props.title} />
      <SubTitle subTitle={props.subTitle} />
      <DefaultButton to={props.to} btn={props.btn} />
    </div>
  )
}