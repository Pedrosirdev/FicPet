import Title from "../Title/Title";

function ContactComponent(){
  return (
    <div className="container-contact">
      <div className="container-text-contact">
      <i class="bi bi-x-circle"></i>
      <Title title="Nos envie um email" />
      <form action="">
        <input placeholder="Seu nome:" type="text" name="name" id="name" />
        <input placeholder="Seu email:" type="text" name="email" id="email" />
        <input placeholder="Digite sua mensagem:" type="text" name="message" id="message" />
        <input type="submit" value="Enviar!" />
      </form>
      <Title title="Ou converse conosco:" />
      <div className="div-phone-whats">
          <div>
          <i class="bi bi-telephone-fill"></i> <span>+55 999 888 000</span>
          </div>
          <span className="trace">|</span>
          <div>
          <i class="bi bi-whatsapp"></i> <span>+55 999 888 000</span>
          </div>
      </div>
      </div>
    </div>
  )
};

export default ContactComponent;