import { GithubIcon, LinkedInIcon, MailIcon } from "../../assets/icons/Icons";

const Home: React.FC = () => {
  return (
    <section id="#home">
      <div className="home-container-columns">
        <span style={{ fontSize: "30px" }}>Olá visitante!👋</span>
        <span style={{ fontSize: "50px" }}>Meu nome é Vitor Comin</span>
        <span style={{ fontSize: "30px" }}>Desenvolvedor Full-Stack</span>
        <div className="home-social-medias-container">
          <div className="brown-line" />
          <a
            href="https://www.github.com/VitorComin"
            target="_blank"
            className="home-social-media-icons"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/vitorgabrielcomin/"
            target="_blank"
            className="home-social-media-icons"
          >
            <LinkedInIcon />
          </a>
          <a
            href="mailto:vitorgabrielcomin@gmail.com"
            className="home-social-media-icons"
          >
            <MailIcon />
          </a>
          <div className="brown-line" />
        </div>
      </div>
      <div className="home-container-columns">
        <div className="home-brown-circle">
          <img
            src="/template-imagem.png"
            alt="Template"
            style={{ height: "70%" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
