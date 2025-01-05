import { render, screen } from "@testing-library/react";
import MySkills from "../components/MySkills";
import { skillBadges } from "../utils/configs";

jest.mock("../utils/configs", () => ({
  skillBadges: [
    { src: "path/to/skill1.png", alt: "Skill 1" },
    { src: "path/to/skill2.png", alt: "Skill 2" },
    { src: "path/to/skill3.png", alt: "Skill 3" },
  ],
}));

describe("<MySkills />", () => {
  test("should render all skill badges", () => {
    render(<MySkills />);

    const skillImages = screen.getAllByRole("img");

    expect(skillImages).toHaveLength(skillBadges.length);
  });

  test("should render skill badges with correct src attributes", () => {
    render(<MySkills />);

    const skillImages = screen.getAllByRole("img");

    skillBadges.forEach((badge, index) => {
      expect(skillImages[index]).toHaveAttribute("src", badge.src);
    });
  });
});
