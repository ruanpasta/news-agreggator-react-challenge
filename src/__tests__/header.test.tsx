import { act, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../componesnts/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";

jest.mock("../assets/news.svg", () => "mocked-news-icon.svg");

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 0,
    },
  },
});

describe("Header component", () => {
  beforeEach(async () => {
    await act(async () => {
      render(
        <QueryClientProvider client={queryClient}>
          <ErrorBoundary fallback={<div>Erro</div>}>
            <Header />
          </ErrorBoundary>
        </QueryClientProvider>
      );
    });
  });

  test("should render the logo and heading", () => {
    const logo = screen.getByAltText("logo");
    const heading = screen.getByText("News Agreggator");

    expect(logo).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
  });

  test("should render the input with placeholder", () => {
    const input = screen.getByPlaceholderText("Type your search");

    expect(input).toBeInTheDocument();
  });

  test("should render the search button", () => {
    const button = screen.getByRole("button", { name: /search/i });

    expect(button).toBeInTheDocument();
  });
});
