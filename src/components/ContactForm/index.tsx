import { useTheme } from "../../contexts/ThemeContext";
import { useForm, ValidationError } from "@formspree/react";
import { FormEvent, useRef } from "react";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("xjkvpprn");
  const formRef = useRef<HTMLFormElement>(null);
  const MySwal = withReactContent(Swal);
  const { theme } = useTheme();

  async function submitForm(value: FormEvent<HTMLFormElement>) {
    await handleSubmit(value);

    MySwal.fire({
      title: t("sent"),
      text: t("message_sent"),
      icon: "success",
      confirmButtonText: t("close"),
      confirmButtonColor: "#d46a00",
      background: theme === "light" ? "rgb(244, 244, 244)" : "#050505",
      color: theme === "light" ? "#545454" : "#f4f4f4",
    });
    if (formRef.current) {
      formRef.current.reset();
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={(value) => submitForm(value)}
      className="contact-form"
    >
      <label htmlFor="full-name">{t("name")}</label>
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
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button
        className="submit-button"
        type="submit"
        disabled={state.submitting}
      >
        {t("send")}
      </button>
    </form>
  );
};

export default ContactForm;
