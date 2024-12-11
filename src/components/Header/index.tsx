import { useEffect, useRef, useState } from "react";
import { ArrowUpward, DarkModeIcon } from "../../assets/icons/Icons";
import Flag from "react-flagkit";
import { sections } from "../../utils/configs";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../contexts/ThemeContext";

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState("#home");
  const { toggleTheme } = useTheme();
  const headerRef = useRef<HTMLElement>(null);
  const buttonUpRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current && buttonUpRef.current) {
        if (window.scrollY > 0) {
          headerRef.current.classList.add("header-shadow");
          buttonUpRef.current.classList.add("show-button-up");
        } else {
          headerRef.current.classList.remove("header-shadow");
          buttonUpRef.current.classList.remove("show-button-up");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const sectionTop = section.offsetTop;
      const offset = window.innerWidth <= 999 ? 0 : 8;

      setTimeout(() => {
        window.scrollTo({
          top: sectionTop - (window.innerHeight * offset) / 100,
          behavior: "smooth",
        });
      }, 100);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section.id);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header ref={headerRef}>
      <nav>
        <div>
          <a
            href={"#home"}
            className="header-nav-logo"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo("#home");
            }}
          >
            {"<V"} <span style={{ color: "#D46A00" }}>C</span> {" />"}
          </a>
        </div>
        <div style={{ display: "flex", overflow: "hidden" }}>
          <div className={"nav-list"}>
            {sections?.map((section, index) => (
              <a
                key={index}
                href={section.id}
                style={{
                  color: activeSection === section.id ? "#D46A00" : "",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo(section.id);
                }}
                className="header-nav-links"
              >
                {t(section.label)}
              </a>
            ))}
          </div>
          <a className="header-nav-icons" onClick={() => changeLanguage("pt")}>
            <Flag country="BR" />
          </a>
          <a className="header-nav-icons" onClick={() => changeLanguage("en")}>
            <Flag country="US" />
          </a>
          <a className="header-nav-icons theme-icon" onClick={toggleTheme}>
            <DarkModeIcon />
          </a>
        </div>
      </nav>
      <button
        ref={buttonUpRef}
        className="button-up"
        onClick={handleScrollToTop}
      >
        <ArrowUpward />
      </button>
    </header>
  );
};

export default Header;
