import { useEffect, useRef, useState } from "react";
import { DarkModeIcon } from "../../assets/icons/Icons";
import Flag from "react-flagkit";
import { sections } from "../../utils/configs";

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState("#home");
  const navListRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const sectionTop = section.offsetTop;
      const offset = 8;

      window.scrollTo({
        top: sectionTop - (window.innerHeight * offset) / 100,
      });
    }
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

  function handleMenuVisibility() {
    if (navListRef.current) {
      navListRef.current.classList.toggle("active");
    }
    if (mobileMenuRef.current) {
      mobileMenuRef.current.classList.toggle("active");
    }
  }

  return (
    <header>
      <nav>
        <div>
          <a href={"#home"} className="header-nav-logo">
            {"<V"} <span style={{ color: "#D46A00" }}>C</span> {" />"}
          </a>
        </div>
        <div style={{ display: "flex", overflowX: "hidden" }}>
          <div ref={navListRef} className={"nav-list"}>
            {sections?.map((section, index) => (
              <a
                key={index}
                href={section.id}
                style={{
                  color: activeSection === section.id ? "#D46A00" : "black",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo(section.id);
                }}
                className="header-nav-links"
              >
                {section.label}
              </a>
            ))}
          </div>
          <a className="header-nav-icons">
            <Flag country="BR" />
          </a>
          <a className="header-nav-icons">
            <Flag country="US" />
          </a>
          <a className="header-nav-icons">
            <DarkModeIcon />
          </a>
          <div
            ref={mobileMenuRef}
            className="mobile-menu"
            onClick={handleMenuVisibility}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
