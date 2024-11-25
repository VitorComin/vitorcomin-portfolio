import { DarkModeIcon } from "../../assets/icons/Icons";
import Flag from "react-flagkit";

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <div>
          <a className="header-nav-logo">
            {"<V"} <span style={{ color: "#D46A00" }}>C</span> {" />"}
          </a>
        </div>
        <div style={{ display: "flex" }}>
          <a className="header-nav-links">{"Início"}</a>
          <a className="header-nav-links">{"Sobre"}</a>
          <a className="header-nav-links">{"Projetos"}</a>
          <a className="header-nav-links">{"Contato"}</a>
          <a className="header-nav-icons">
            <Flag country="BR" />
          </a>
          <a className="header-nav-icons">
            <Flag country="US" />
          </a>
          <a className="header-nav-icons">
            <DarkModeIcon />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
