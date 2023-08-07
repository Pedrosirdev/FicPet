// import ContPhraseButton from "../shared/ContPhraseButton/ContPhraseButton";
import ImgDogs from "../shared/ImgDogs/ImgDogs";
import DogDonation from "../../../assets/images/dog-donation.png";
import DogDonationMd from "../../../assets/images/dog-donation-md.png";
import IconBoostrap from "../shared/IconsBootstrap/IconsBootstrap";
import SubTitle from "../shared/SubTitle/SubTitle";
import Title from "../shared/Title/Title";
import DefaultButton from "../shared/DefaultButton/DefaultButton";

function Section04(){
  return (
    <section id="section04">
      <ImgDogs src={DogDonation} />
      <ImgDogs src={DogDonationMd} />
    <div>
    <Title title="Ajude os abrigos de animais!" />
      <div className="div-donation-icon">
        <SubTitle subTitle="Seja um doador!" />
        <IconBoostrap class={"bi bi-heart-fill"} />
      </div>
      <DefaultButton btn="Ajudar agora!" />
    </div>

    </section>
  )
}

export default Section04;