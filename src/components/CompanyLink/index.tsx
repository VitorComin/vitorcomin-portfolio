import { ICompanyLink } from "../../types";

const CompanyLink: React.FC<ICompanyLink> = ({ href, children }) => {
  return (
    <a className="company-link" href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

export default CompanyLink;
