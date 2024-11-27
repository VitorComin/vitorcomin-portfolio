import PageTitle from "../../components/PageTitle";

const Projects: React.FC = () => {
  return (
    <section
      id="#projects"
      style={{ marginTop: "5%", flexDirection: "column" }}
    >
      <PageTitle title={"Projetos"} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100%",
        }}
      >
        <div className="pages-container-columns" style={{ paddingLeft: "4%" }}>
          <img src="projeto-template.png" style={{ height: "65%" }} />
        </div>
        <div className="pages-container-columns" style={{ paddingRight: "4%" }}>
          <h1>Projetos em construção...</h1>
        </div>
      </div>
    </section>
  );
};

export default Projects;
