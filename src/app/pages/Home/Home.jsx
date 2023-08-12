import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Section from "../../components/Section01/Section01";
import Section02 from "../../components/Section02/Section02";
import Section03 from "../../components/Section03/Section03";
import Section04 from "../../components/Section04/Section04";
import ContactComponent from "../../components/shared/ContactComponent/ContactComponent";

function Home(){
  return (
    <>
      <Navbar />
      <ContactComponent />
      <Section />
      <Section02 />
      <Section03 />
      <Section04 />
      <Footer />
    </>
  )
}

export default Home;