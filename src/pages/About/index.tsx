const About: React.FC = () => {
  return (
    <section
      id="#about"
      style={{
        backgroundColor: "lightgray",
      }}
    >
      <div
        style={{
          height: "10%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <div
          style={{ width: "20%", height: "3px", backgroundColor: "#D46A00" }}
        />
        <span style={{ fontSize: "30px", margin: "0px 10px" }}>Sobre Mim</span>
        <div
          style={{ width: "20%", height: "3px", backgroundColor: "#D46A00" }}
        />
      </div>
    </section>
  );
};

export default About;
