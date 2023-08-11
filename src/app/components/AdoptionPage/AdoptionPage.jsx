import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import AdoptionProfile from "../shared/AdoptionProfile/AdoptionProfile";
import Title from "../shared/Title/Title";
import WhiteCatAdoption from '../../../assets/images/white-cat-adoption.png';
import Simba from '../../../assets/images/simba-adoption.png';
function AdoptionPage(){
  return (
    <>
    <Navbar />
    <section id="adoptionPage">
      <Title title="Pets disponíveis para adoção!" />
    <div className="cont-adoption-profile">
      <AdoptionProfile classNameCardFooter="card-footer" namePet="Luna" descriptionPet="Elegante e brincalhona companheira felina." agePet="1 ano" classNameImg="img-card" className="card" src={WhiteCatAdoption} alt="Frederico para adoção" />
      <AdoptionProfile classNameCardFooter="card-footer" namePet="Simba" classNameImg="img-card" className="card" src={Simba} alt="Frederico para adoção" />
    </div>
    </section>
    <Footer />
    </>
    
  )
};

export default AdoptionPage;