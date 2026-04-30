import PageTitle from "../../components/PageTitle";
import { useTranslation } from "react-i18next";
import { projects } from "../../utils/configs";
import CardSlide from "../../components/CardSlide";

const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="#projects" className={"pages-sections projects"}>
      <PageTitle title={t("projects")} />
      <div className={"pages-container projects-container"}>
        {projects?.map((project, index) => (
          <CardSlide key={index} card={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
