import ContPhraseButton from "../shared/ContPhraseButton/ContPhraseButton";
import ImgWomanCat from "./ImgWomanCat/ImgWomanCat";

export default function Section02(){
  return (

      <section id="section02">
          <ImgWomanCat />
          <ContPhraseButton
          title={"Também trabalhamos com adoções!"}
          subTitle={"Adotar um pet é abrir as portas do coração para um amor incondicional que transforma vidas."}
          btn={"Ver pets disponiveis"} to="/AdoptionPage"
          />
        </section>
  )
}