import { render, screen } from "@testing-library/react";
import LoadingFallback from "../componesnts/LoadingFallback";

describe("LoadingFallback", () => {
  test("should render the spinner with the hidden loadding message", () => {
    const { container } = render(<LoadingFallback />);

    const spinner = container.querySelector(".chakra-spinner");
    expect(spinner).toBeInTheDocument();

    expect(spinner).toHaveTextContent("Loading...");
  });

  test("should render the spinner inside a Flex container with correct styles", () => {
    render(<LoadingFallback />);

    const flexContainer = screen.getByTestId("loading-fallback-container");
    expect(flexContainer).toBeInTheDocument();

    expect(flexContainer).toHaveStyle("justify-content: center");
    expect(flexContainer).toHaveStyle("margin-top: 3rem");
  });
});
