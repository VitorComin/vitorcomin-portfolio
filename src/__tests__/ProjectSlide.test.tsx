import { render, screen } from "@testing-library/react";
import { IProject } from "../types";
import ProjectSlide from "../components/ProjectSlide";
import userEvent from "@testing-library/user-event";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

const project: IProject = {
  title: "Test Project",
  description: "This is a test project description.",
  imageSrc: "http://example.com/image.jpg",
  imageAlt: "Test Project Image",
  githubLink: "http://github.com/test",
  previewLink: "http://example.com/preview",
};

describe("<ProjectSlide />", () => {
  test("should render project details correctly", () => {
    render(<ProjectSlide project={project} />);

    const projectTitle = screen.getByText("Test Project");
    const projectDescription = screen.getByText(
      "This is a test project description."
    );
    const projectImage = screen.getByAltText("Test Project Image");

    expect(projectTitle).toBeInTheDocument();
    expect(projectDescription).toBeInTheDocument();
    expect(projectImage).toHaveAttribute("src", "http://example.com/image.jpg");
  });

  test("should call window.open when clicking on one of the buttons", async () => {
    render(<ProjectSlide project={project} />);

    const openMock = jest
      .spyOn(window, "open")
      .mockImplementation(() => window);
    const githubButton = screen.getByText("code");

    await userEvent.click(githubButton);

    expect(githubButton).toBeInTheDocument();
    expect(openMock).toHaveBeenCalledWith("http://github.com/test", "_blank");

    openMock.mockRestore();
  });
});
