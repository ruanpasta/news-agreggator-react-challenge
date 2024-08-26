import { render, screen } from "@testing-library/react";
import EmptyFallback from "../componesnts/EmptyFallback";

describe("EmptyFallback", () => {
  test("should render the results not found message with the search string", () => {
    const searchTerm = "test search";
    render(<EmptyFallback searchMessage={searchTerm} />);

    expect(
      screen.getByTestId("empty-fallback-results-not-found-message")
    ).toBeInTheDocument();

    expect(
      screen.getByTestId("empty-fallback-cannot-find-results-message")
    ).toHaveTextContent(searchTerm);

    expect(screen.getByText("Please try again.")).toBeInTheDocument();
  });
});
