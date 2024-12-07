import PageTitle from "../../components/PageTitle";
import { useForm, ValidationError } from "@formspree/react";
import { useRef } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useTranslation } from "react-i18next";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("xjkvpprn");
  const formRef = useRef<HTMLFormElement>(null);
  const MySwal = withReactContent(Swal);

  if (state.succeeded) {
    MySwal.fire({
      title: t("sent"),
      text: t("message_sent"),
      icon: "success",
      confirmButtonText: t("close"),
    });
    if (formRef.current) {
      formRef.current.reset();
    }
  }

  return (
    <section id="#contact" className={"contact-section"}>
      <PageTitle title={t("contact")} />
      <div className="contact-container">
        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="full-name">{t("full_name")}</label>
          <input type="text" name="full-name" id="full-name" />

          <label style={{ marginTop: "5%" }} htmlFor="email">
            {t("mail_address")}
          </label>
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label style={{ marginTop: "5%" }} htmlFor="email">
            {t("message")}
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
            {t("send")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
