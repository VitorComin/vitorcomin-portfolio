import { render, screen } from "@testing-library/react";
import PageTitle from "../components/PageTitle";

describe("<PageTitle />", () => {
  test("it should render correctly with the title given as parameter", () => {
    render(<PageTitle title={"Testing Example"} />);

    const titleElement = screen.getByText("Testing Example");

    expect(titleElement).toBeInTheDocument();
  });

  test("should render the brown lines on both sides of the title", () => {
    const { container } = render(<PageTitle title={"Test Title"} />);

    const lines = container.querySelectorAll(".brown-line");

    expect(lines).toHaveLength(2);
  });
});
