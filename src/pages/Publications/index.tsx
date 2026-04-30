import PageTitle from "../../components/PageTitle";
import { useTranslation } from "react-i18next";
import { publications } from "../../utils/configs";
import CardSlide from "../../components/CardSlide";

const Publications: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="#publications" className={"pages-sections publications"}>
      <PageTitle title={t("publications")} />
      <div className={"pages-container publications-container"}>
        {publications?.map((publications, index) => (
          <CardSlide key={index} card={publications} />
        ))}
      </div>
    </section>
  );
};

export default Publications;
