import { GithubIcon, PreviewIcon } from "../../assets/icons/Icons";
import { useTranslation } from "react-i18next";
import { IProjectSlide } from "../../types";

const ProjectSlide: React.FC<IProjectSlide> = ({ project }) => {
  const { t } = useTranslation();

  return (
    <div className={"page-item"}>
      <img src={project?.imageSrc} alt={t(project?.imageAlt)} />
      <div className="project-description">
        <strong>{t(project?.title)}</strong>

        <span>{t(project?.description)}</span>

        <div className="project-buttons-container">
          {project?.githubLink && (
            <button
              className="project-buttons"
              onClick={() => window.open(project.githubLink, "_blank")}
            >
              <GithubIcon />
              {t("code")}
            </button>
          )}
          {project?.previewLink && (
            <button
              className="project-buttons preview-button"
              onClick={() => window.open(project.previewLink, "_blank")}
            >
              <PreviewIcon />
              {t("preview")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectSlide;
