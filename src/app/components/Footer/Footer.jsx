import IconBoostrap from "../shared/IconsBootstrap/IconsBootstrap";
import ImgComponent from "../shared/ImgComponent/ImgComponent";
import SubTitle from "../shared/SubTitle/SubTitle";
import Title from "../shared/Title/Title";
import UsefulLinks from "../shared/UsefulLinks/UsefulLinks";

function Footer(){
  return(
    <footer id="footer">
    <div>
      <Title title="Endereço" />
      <UsefulLinks class="useful-links" text="+55 999 000 589" />
      <UsefulLinks class="useful-links" text="Rua random, Bairro random, Brazil" />
    </div>
    <div>
      <Title title="Nossos serviços" />
      <UsefulLinks class="useful-links" text="Banho e tosa" />
      <UsefulLinks class="useful-links" text="Tratamento veterinário" />
      <UsefulLinks class="useful-links" text="Adestramento" />
      <UsefulLinks class="useful-links" text="Adoção" />
      <UsefulLinks class="useful-links" text="Como doar?" />
    </div>
    <div>
      <Title title="Links úteis" />
      <UsefulLinks class="useful-links" text="Quem somos" />
      <UsefulLinks class="useful-links" text="Sobre" />
      <UsefulLinks class="useful-links" text="Créditos de imagens" />
    </div>
    <div>
      <ImgComponent alt="imagem" />
      <div>
        <IconBoostrap class="bi bi-alarm" />
        <IconBoostrap class="bi bi-alarm" />
        <IconBoostrap class="bi bi-alarm" />
      </div>
    </div>
    </footer>
  )
}

export default Footer;