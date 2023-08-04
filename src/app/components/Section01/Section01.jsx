import ContPhraseButton from "../shared/ContPhraseButton/ContPhraseButton";
import ImgDog from "./ImgDog/ImgDog";


export default function Section() {
  return (
    <section id="section01">
      <ContPhraseButton
      title={"Cuide do seu pet conosco!"}
      subTitle={"Oferecemos desde banho e tosa até o melhor tratamento veterinário e muito mais!"}
      btn={"Agende uma visita!"}
      />
      <ImgDog />
    </section>
  )
}