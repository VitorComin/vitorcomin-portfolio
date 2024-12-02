import PageTitle from "../../components/PageTitle";
import { useForm, ValidationError } from "@formspree/react";
import { useRef } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("xjkvpprn");
  const formRef = useRef<HTMLFormElement>(null);
  const MySwal = withReactContent(Swal);

  if (state.succeeded) {
    MySwal.fire({
      title: "Enviado!",
      text: "Sua mensagem foi enviada ao meu e-mail com sucesso.",
      icon: "success",
      confirmButtonText: "Fechar",
    });
    if (formRef.current) {
      formRef.current.reset();
    }
  }

  return (
    <section id="#contact" style={{ marginTop: "1%", flexDirection: "column" }}>
      <PageTitle title={"Contato"} />
      <div
        style={{
          height: "100%",
          display: "flex",
          marginTop: "10%",
          justifyContent: "center",
        }}
      >
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", width: "50%" }}
        >
          <label htmlFor="full-name">Nome Completo</label>
          <input type="text" name="full-name" id="full-name" />
          <label style={{ marginTop: "5%" }} htmlFor="email">
            Endereço de E-mail
          </label>
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label style={{ marginTop: "5%" }} htmlFor="email">
            Mensagem
          </label>
          <textarea id="message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            className="submit-button"
            type="submit"
            disabled={state.submitting}
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
