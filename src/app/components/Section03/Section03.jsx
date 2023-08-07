import Title from "../shared/Title/Title";
import ContServices from "./ContServices/ContServices";

import DogBath from "../../../assets/images/dog-bath.png"
import DogTrainer from "../../../assets/images/dog-trainer.png";
import DogVeterinarian from "../../../assets/images/dog-veterinarian.png";

function Section03(){
  return (
    <section id="section03">
      <Title title={"Nossos serviços"}/>
      <ContServices
      src={DogBath}
      alt={"Cachorro sendo tosado."}
      subTitle={"Banho e Tosa"}
      />
      <ContServices
      src={DogVeterinarian}
      alt={"Cachorro sendo cuidado por um veterinário.."}
      subTitle={"Tratamento veterinário"}
      />
      <ContServices
      src={DogTrainer}
      alt={"Cachorro com adestrador."}
      subTitle={"Adestramento"}
      />
    </section>
  )
}

export default Section03;