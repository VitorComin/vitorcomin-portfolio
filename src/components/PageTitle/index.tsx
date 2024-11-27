import { IPageTitle } from "../../types";

const PageTitle: React.FC<IPageTitle> = ({ title }) => {
  return (
    <div className="page-title-container">
      <div className="brown-line" />
      <span style={{ fontSize: "30px", margin: "0px 10px" }}>{title}</span>
      <div className="brown-line" />
    </div>
  );
};

export default PageTitle;
