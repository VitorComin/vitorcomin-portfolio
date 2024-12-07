import { GithubIcon, LinkedInIcon, MailIcon } from "../../assets/icons/Icons";

const HomeSocialMediaButtons: React.FC = () => {
  return (
    <div className="home-social-medias-container">
      <div className="brown-line" />
      <a
        href="https://www.github.com/VitorComin"
        target="_blank"
        className="home-social-media-icons"
        rel="noreferrer"
      >
        <GithubIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/vitorgabrielcomin/"
        target="_blank"
        className="home-social-media-icons"
        rel="noreferrer"
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
  );
};

export default HomeSocialMediaButtons;
