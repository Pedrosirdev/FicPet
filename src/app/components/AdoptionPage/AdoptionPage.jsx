import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import AdoptionProfile from "../shared/AdoptionProfile/AdoptionProfile";
import Title from "../shared/Title/Title";
import WhiteCatAdoption from '../../../assets/images/white-cat-adoption.png';

function AdoptionPage(){
  return (
    <>
    <Navbar />
    <section id="adoptionPage">
      <Title title="Pets disponíveis para adoção!" />
    <div className="cont-adoption-profile">
      <AdoptionProfile src={WhiteCatAdoption} />
    </div>
    </section>
    <Footer />
    </>
    
  )
};

export default AdoptionPage;