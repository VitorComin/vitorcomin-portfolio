import { GithubIcon, PreviewIcon } from "../../assets/icons/Icons";
import { useTranslation } from "react-i18next";
import { IProjectSlide } from "../../types";

const ProjectSlide: React.FC<IProjectSlide> = ({ project }) => {
  const { t } = useTranslation();

  return (
    <div className={`slide ${project.firstProject ? "first" : ""}`}>
      <div className="project-half-container">
        <img src={project.imageSrc} alt={t(project.imageAlt)} />
      </div>
      <div className="project-half-container project-description">
        <strong>{t(project.title)}</strong>
        <br />
        <span>{t(project.description)}</span>
        <br />
        <div className="project-buttons-container">
          <button
            className="project-buttons"
            onClick={() => window.open(project.githubLink, "_blank")}
          >
            <GithubIcon />
            {t("repo")}
          </button>
          <button
            className="project-buttons"
            disabled={!project?.previewLink}
            onClick={() =>
              project?.previewLink &&
              window.open(project?.previewLink, "_blank")
            }
          >
            <PreviewIcon />
            {t("preview")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlide;
