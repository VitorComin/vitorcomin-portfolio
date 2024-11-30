import PageTitle from "../../components/PageTitle";

const Projects: React.FC = () => {
  return (
    <section
      id="#projects"
      style={{ marginTop: "1%", flexDirection: "column" }}
    >
      <PageTitle title={"Projetos"} />
      <div className="projects-container">
        <div className="pages-container-columns">
          <img src="projeto-template.png" style={{ width: "70%" }} />
        </div>
        <div className="pages-container-columns">
          <h1>Projetos em construção...</h1>
        </div>
      </div>
    </section>
  );
};

export default Projects;
