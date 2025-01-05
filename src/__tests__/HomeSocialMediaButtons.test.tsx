import { render, screen } from "@testing-library/react";
import HomeSocialMediaButtons from "../components/HomeSocialMediaButtons";

describe("<HomeSocialMediaButtons />", () => {
  test("should render all social media icons", () => {
    render(<HomeSocialMediaButtons />);

    const socialMediaLinks = screen.getAllByRole("link");

    expect(socialMediaLinks).toHaveLength(3);
  });

  test("should have correct href links for social media", () => {
    render(<HomeSocialMediaButtons />);

    const socialMediaLinks = screen.getAllByRole("link");

    expect(socialMediaLinks[0]).toHaveAttribute(
      "href",
      "https://www.github.com/VitorComin"
    );
    expect(socialMediaLinks[1]).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/vitorgabrielcomin/"
    );
    expect(socialMediaLinks[2]).toHaveAttribute(
      "href",
      "mailto:vitorgabrielcomin@gmail.com"
    );
  });
});
