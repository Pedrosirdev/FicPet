import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import SubTitle from "../../components/shared/SubTitle/SubTitle";
import Title from "../../components/shared/Title/Title";

function Sobre(){
  return (
    <>
    <Navbar />
    <section id="sobre">
      <Title title="Sobre nós"/>
      <SubTitle subTitle="Quisque eu massa at eros facilisis tincidunt eget at dui. Sed  augue risus, vestibulum ut tristique quis, dictum
sit amet leo. Donec porttitor euismod ex sit amet maximus. Ut ac tristique dui. Vivamus gravida iaculis ips
um nec ullamcorper. Aenean eget dui id elit efficitur elementum. Vestibulum ante ipsum primis infaucibusorciluctus et ultricesposuere cubilia curae; Nullam tempus nunc ut justo porta, non rhoncus metus cursus.Suspendisse potenti."/>
    </section>
    <Footer />
    </>
  )
}

export default Sobre;