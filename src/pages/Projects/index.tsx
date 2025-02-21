import PageTitle from "../../components/PageTitle";
import { useTranslation } from "react-i18next";
import ProjectSlide from "../../components/ProjectSlide";
import { projects } from "../../utils/configs";

const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="#projects" className={"pages-sections projects"}>
      <PageTitle title={t("projects")} />
      <div className={"pages-container projects-container"}>
        {projects?.map((project, index) => (
          <ProjectSlide key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
