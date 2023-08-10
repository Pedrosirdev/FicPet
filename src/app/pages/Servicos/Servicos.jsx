import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ContServices from "../../components/Section03/ContServices/ContServices";
import Title from "../../components/shared/Title/Title";
import DogBath from "../../../assets/images/dog-bath.png";
import DogVeterinarian from "../../../assets/images/dog-veterinarian.png";
import DogTrainer from "../../../assets/images/dog-trainer.png";
import WomanWithCat from "../../../assets/images/woman-with-cat.png";
import DogDonation from "../../../assets/images/dog-donation-services.png";

function Servicos(){
  return (
    <>
      <Navbar />
        <section id="servicos">
          <Title title="Nossos serviços" />
          <div className="services-imgs">
            <ContServices height={259} width={242} subTitle="Banho e tosa" src={DogBath} alt="Banho e tosa"  />
            <ContServices height={259} width={242} subTitle="Tratamento veterinário" src={DogVeterinarian} alt="Tratamento veterinário"  />
            <ContServices height={259} width={242} subTitle="Adestramento" src={DogTrainer} alt="Adestramento"  />
            <ContServices height={259} width={242} subTitle="Adotar" src={WomanWithCat} alt="Adotar"  />
            <ContServices height={259} width={242} subTitle="Ajude abrigos" src={DogDonation} alt="Ajude abrigos"  />
          </div>
        </section>
      <Footer />
    </>
  )
};

export default Servicos;
