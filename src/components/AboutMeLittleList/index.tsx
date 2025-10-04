import {
  GraduationIcon,
  LocationIcon,
  WorkIcon,
} from "../../assets/icons/Icons";
import { useTranslation } from "react-i18next";
import CompanyLink from "../CompanyLink";

const AboutMeLittleList: React.FC = () => {
  const { t } = useTranslation();

  return (
    <ul style={{ marginBottom: 0 }}>
      <li>
        <GraduationIcon /> {t("education")}
        <CompanyLink href="https://www.univille.edu.br/">Univille</CompanyLink>.
      </li>
      <li>
        <WorkIcon /> {t("work")}
        <CompanyLink href="https://www.totvs.com/">TOTVS</CompanyLink>.
      </li>
      <li>
        <LocationIcon /> {t("location")}
      </li>
    </ul>
  );
};

export default AboutMeLittleList;
