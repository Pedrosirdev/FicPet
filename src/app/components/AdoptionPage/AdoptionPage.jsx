import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import AdoptionProfile from "../shared/AdoptionProfile/AdoptionProfile";
import Title from "../shared/Title/Title";
import WhiteCatAdoption from '../../../assets/images/white-cat-adoption.png';
import Simba from '../../../assets/images/simba-adoption.png';
import Max from '../../../assets/images/max-adoption.png';
import Bella from '../../../assets/images/bella-adoption.png';

function AdoptionPage(){
  return (
    <>
    <Navbar />
    <section id="adoptionPage">
      <Title title="Pets disponíveis para adoção!" />
    <div className="cont-adoption-profile">
      <AdoptionProfile classNameCardFooter="card-footer" namePet="Luna" descriptionPet="Elegante e brincalhona companheira felina." agePet="1 ano de idade." classNameImg="img-card" className="card" src={WhiteCatAdoption} alt="Luna para adoção" />
      <AdoptionProfile classNameCardFooter="card-footer" namePet="Simba" descriptionPet="Curioso e adorável explorador peludo." agePet="3 meses de idade." classNameImg="img-card" className="card" src={Simba} alt="Simba para adoção" />
      <AdoptionProfile classNameCardFooter="card-footer" namePet="Max" descriptionPet="Leal e amoroso companheiro canino." agePet="1 ano de idade." classNameImg="img-card" className="card" src={Max} alt="Max para adoção" />
      <AdoptionProfile classNameCardFooter="card-footer" namePet="Bella" descriptionPet="Doce e enérgica amiga de 4 patas." agePet="3 meses de idade." classNameImg="img-card" className="card" src={Bella} alt="Bella para adoção" />
    </div>
    </section>
    <Footer />
    </>
    
  )
};

export default AdoptionPage;