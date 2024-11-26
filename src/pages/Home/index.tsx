import { GithubIcon, LinkedInIcon, MailIcon } from "../../assets/icons/Icons";

const Home: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "92vh",
        display: "flex",
      }}
    >
      <div
        style={{
          width: "50%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span style={{ fontSize: "30px" }}>Olá visitante!👋</span>
        <span style={{ fontSize: "50px" }}>Meu nome é Vitor Comin</span>
        <span style={{ fontSize: "30px" }}>Desenvolvedor Full-Stack</span>
        <div
          style={{
            width: "100%",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{ width: "20%", height: "3px", backgroundColor: "#D46A00" }}
          />
          <a
            href="https://www.github.com/VitorComin"
            target="_blank"
            style={{
              margin: "0px 10px",
              color: "#000000",
              textDecoration: "none",
            }}
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/vitorgabrielcomin/"
            target="_blank"
            style={{
              margin: "0px 10px",
              color: "#000000",
              textDecoration: "none",
            }}
          >
            <LinkedInIcon />
          </a>
          <a
            href="mailto:vitorgabrielcomin@gmail.com"
            style={{
              margin: "0px 10px",
              color: "#000000",
              textDecoration: "none",
            }}
          >
            <MailIcon />
          </a>
          <div
            style={{ width: "20%", height: "3px", backgroundColor: "#D46A00" }}
          />
        </div>
      </div>
      <div
        style={{
          width: "50%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "70%",
            aspectRatio: "1",
            backgroundColor: "#D46A00",
            borderRadius: "50%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <img
            src="/template-imagem.png"
            alt="Template"
            style={{ height: "70%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
