import {
  GraduationIcon,
  LocationIcon,
  WorkIcon,
} from "../../assets/icons/Icons";
import PageTitle from "../../components/PageTitle";

const About: React.FC = () => {
  return (
    <section
      id="#about"
      style={{
        flexDirection: "column",
        marginTop: "5%",
      }}
    >
      <PageTitle title={"Sobre Mim"} />
      <div
        style={{
          height: "100%",
          width: "100%",
          flexDirection: "row",
          display: "flex",
        }}
      >
        <div className="pages-container-columns" style={{ padding: "0 4%" }}>
          <div
            style={{
              width: "100%",
              height: "fit-content",
            }}
          >
            <div style={{ width: "fit-content", marginBottom: "4%" }}>
              <span style={{ fontSize: "22px" }}>Um pouco sobre mim:</span>
              <div
                className="brown-line"
                style={{ width: "100%", height: 2 }}
              />
            </div>
            <span
              style={{
                fontSize: 16,
                color: "#575757",
                wordBreak: "break-word",
                margin: "4% 0",
              }}
            >
              Vitor, 22 anos, é apaixonado por tecnologia e encontra nela um
              universo de possibilidades que o inspira a sonhar e crescer. Com
              dedicação e motivação, busca se desenvolver continuamente,
              encarando cada desafio como uma oportunidade para avançar ainda
              mais. Seu amor pelo que faz e o desejo constante de evolução são
              as forças que impulsionam sua entrega e sua dedicação todos os
              dias.
              <ul style={{ marginBottom: 0 }}>
                <li>
                  <GraduationIcon /> Bacharel em Sistemas de Informação,
                  UNIVILLE (8º semestre de 9).{" "}
                </li>
                <li>
                  <WorkIcon /> Atua como Desenvolvedor Full-Stack há mais de 1
                  ano.
                </li>
                <li>
                  <LocationIcon /> Joinville, Santa Catarina. Brasil.
                </li>
              </ul>
              <br />
            </span>
            <div style={{ width: "fit-content", margin: "4% 0" }}>
              <span style={{ fontSize: "22px" }}>Minhas habilidades:</span>
              <div
                className="brown-line"
                style={{ width: "100%", height: 2 }}
              />
            </div>
            <span
              style={{
                fontSize: 18,
                color: "#575757",
                wordBreak: "break-word",
                margin: "4% 0",
                gap: "10px",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              <img
                src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"
                alt="React"
              />
              <img
                src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"
                alt="TypeScript"
              />
              <img
                src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
                alt="JavaScript"
              />
              <img
                src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                alt="CSS"
              />
              <img
                src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                alt="HTML"
              />
              <img
                src="https://img.shields.io/badge/Rails-CC0000?style=for-the-badge&logo=ruby-on-rails&logoColor=white"
                alt="Ruby on Rails"
              />
              <img
                src="https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white"
                alt="Ruby"
              />
              <img
                src="https://img.shields.io/badge/Postgres-336791?style=for-the-badge&logo=postgresql&logoColor=white"
                alt="PostgreSQL"
              />
              <img
                src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white"
                alt="Jest"
              />
              <img
                src="https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white"
                alt="Vitest"
              />
            </span>
          </div>
        </div>
        <div className="pages-container-columns">
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

export default About;
