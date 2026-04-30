import { GithubIcon, PreviewIcon } from "../../assets/icons/Icons";
import { useTranslation } from "react-i18next";
import { type ICardSlide } from "../../types";

const CardSlide: React.FC<ICardSlide> = ({ card }) => {
  const { t } = useTranslation();

  return (
    <div className={"page-item"}>
      <img src={card?.imageSrc} alt={t(card?.imageAlt)} />
      <div className="card-description">
        <strong>{t(card?.title)}</strong>

        <span>{t(card?.description)}</span>

        <div className="card-buttons-container">
          {card?.githubLink && (
            <button
              className="card-buttons"
              onClick={() => window.open(card.githubLink, "_blank")}
            >
              <GithubIcon />
              {t("code")}
            </button>
          )}
          {card?.previewLink && (
            <button
              className="card-buttons preview-button"
              onClick={() => window.open(card.previewLink, "_blank")}
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

export default CardSlide;
