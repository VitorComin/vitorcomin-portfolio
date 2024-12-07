import {
  GraduationIcon,
  LocationIcon,
  WorkIcon,
} from "../../assets/icons/Icons";
import { useTranslation } from "react-i18next";

const AboutMeLittleList: React.FC = () => {
  const { t } = useTranslation();

  return (
    <ul style={{ marginBottom: 0 }}>
      <li>
        <GraduationIcon /> {t("education")}
      </li>
      <li>
        <WorkIcon /> {t("work")}{" "}
        <a
          className="company-link"
          href={"https://tiflux.com/"}
          target="_blank"
          rel="noreferrer"
        >
          Tiflux
        </a>
        .
      </li>
      <li>
        <LocationIcon /> {t("location")}
      </li>
    </ul>
  );
};

export default AboutMeLittleList;
