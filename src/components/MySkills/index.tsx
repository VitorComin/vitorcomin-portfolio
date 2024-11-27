import { skillBadges } from "../../utils/configs";

const MySkills: React.FC = () => {
  return (
    <span className="my-skills-container">
      {skillBadges.map((badge) => (
        <img src={badge.src} alt={badge.alt} />
      ))}
    </span>
  );
};

export default MySkills;
