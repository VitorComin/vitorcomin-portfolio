import { render, screen } from "@testing-library/react";
import PageContentTitles from "../components/PageContentTitles";

describe("<PageContentTitles />", () => {
  test("it should render correctly the title", () => {
    render(<PageContentTitles title={"Example"} />);

    const titleElement = screen.getByText(/Example/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("should render the blank title, and not giving an error", () => {
    expect(() => render(<PageContentTitles title={""} />)).not.toThrow();
  });
});
