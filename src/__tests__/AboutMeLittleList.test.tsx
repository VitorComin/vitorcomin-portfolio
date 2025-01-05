import { render, screen } from "@testing-library/react";
import AboutMeLittleList from "../components/AboutMeLittleList";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe("<AboutMeLittleList />", () => {
  test("should render the icons correctly", () => {
    render(<AboutMeLittleList />);

    const listItems = screen.getAllByRole("listitem");

    expect(listItems).toHaveLength(3);
  });

  test("should render the company link correctly", () => {
    render(<AboutMeLittleList />);

    const companyLink = screen.getByText("Tiflux");

    expect(companyLink).toBeInTheDocument();
    expect(companyLink).toHaveAttribute("href", "https://tiflux.com/");
    expect(companyLink).toHaveAttribute("target", "_blank");
  });
});
