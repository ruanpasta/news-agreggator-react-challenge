import { render, screen, fireEvent } from "@testing-library/react";
import ErrorFallback from "../componesnts/ErrorFallback";

describe("ErrorFallback", () => {
  test("should render the error message and the Try Again button", () => {
    const resetErrorBoundary = jest.fn();

    render(
      <ErrorFallback
        resetErrorBoundary={resetErrorBoundary}
        error={undefined}
      />
    );

    expect(screen.getByText("Oops, something went wrong:")).toBeInTheDocument();
    expect(screen.getByText("We can not get the news")).toBeInTheDocument();

    const tryAgainButton = screen.getByTestId("error-fallback-try-again-button");
    expect(tryAgainButton).toBeInTheDocument();
  });

  test("should call resetErrorBoundary when the Try Again button is clicked", () => {
    const resetErrorBoundary = jest.fn();

    render(
      <ErrorFallback
        resetErrorBoundary={resetErrorBoundary}
        error={undefined}
      />
    );

    const tryAgainButton = screen.getByTestId("error-fallback-try-again-button");
    fireEvent.click(tryAgainButton);

    expect(resetErrorBoundary).toHaveBeenCalled();
  });
});
