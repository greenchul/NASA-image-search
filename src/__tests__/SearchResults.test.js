import { render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
  const validProps = ["test", "test"];
  test("component renders correctly", () => {
    const { asFragment } = render(<SearchResults results={validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });
  test("correct amount of images render on page", () => {
    render(<SearchResults results={validProps} />);
    const images = screen.getAllByAltText("space");

    expect(images.length).toEqual(2);
    expect(images[0]).toBeInTheDocument();
    expect(images[0]).toHaveClass("search-results__image");
  });
});
