import { IPageContentTitles } from "../../types";

const PageContentTitles: React.FC<IPageContentTitles> = ({ title }) => {
  return (
    <div className={"content-title-container"}>
      <span>{title}</span>
      <div className="brown-line under-text" />
    </div>
  );
};

export default PageContentTitles;
