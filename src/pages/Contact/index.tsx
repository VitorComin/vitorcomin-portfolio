const Contact: React.FC = () => {
  return (
    <div id="#contact">
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
        <span style={{ fontSize: "30px", margin: "0px 10px" }}>Contato</span>
        <div
          style={{ width: "20%", height: "3px", backgroundColor: "#D46A00" }}
        />
      </div>
    </div>
  );
};

export default Contact;
