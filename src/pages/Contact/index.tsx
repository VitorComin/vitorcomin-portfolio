import PageTitle from "../../components/PageTitle";
import { useTranslation } from "react-i18next";
import ContactForm from "../../components/ContactForm";

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="#contact" className={"pages-sections contact"}>
      <PageTitle title={t("contact")} />
      <div className="pages-container">
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
