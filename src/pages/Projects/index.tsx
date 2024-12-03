import PageTitle from "../../components/PageTitle";
import { useTranslation } from "react-i18next";

const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="#projects"
      style={{ marginTop: "1%", flexDirection: "column" }}
    >
      <PageTitle title={t("projects")} />
      <div className="projects-container">
        <div className="pages-container-columns">
          <img src="projeto-template.png" style={{ width: "70%" }} />
        </div>
        <div className="pages-container-columns">
          <h1>{t("working_on_projects")}</h1>
        </div>
      </div>
    </section>
  );
};

export default Projects;
