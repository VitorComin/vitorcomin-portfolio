import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";
import Projects from "../../pages/Projects";
import Header from "../Header";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Layout;
