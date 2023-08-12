import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import SubTitle from "../../components/shared/SubTitle/SubTitle";
import Title from "../../components/shared/Title/Title";
import ContactComponent from "../../components/shared/ContactComponent/ContactComponent";

function Sobre(){
  return (
    <>
    <Navbar />
    <ContactComponent />
    <section id="sobre">
      <Title title="Sobre nós"/>
      <SubTitle subTitle="Este é um site fictício de um petshop, desenvolvido por mim, Pedro Henrique Sirqueira, desenvolvedor front-end. Sou responsável desde o design inicial até a publicação do site.

O propósito deste site é demonstrar minhas habilidades em programação. Todas as receitas apresentadas são fictícias e as imagens utilizadas são apenas ilustrativas."/>
    </section>
    <Footer />
    </>
  )
}

export default Sobre;