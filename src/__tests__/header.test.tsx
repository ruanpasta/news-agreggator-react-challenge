import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Header from "../componesnts/Header";

jest.mock("../assets/news.svg", () => "mocked-news-icon.svg");

describe("Header component", () => {
  test("should render the logo and heading", () => {
    render(<Header />);

    const logo = screen.getByAltText("logo");
    const heading = screen.getByText("News Agreggator");

    expect(logo).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
  });

  test("should render the input with placeholder", () => {
    render(<Header />);

    const input = screen.getByPlaceholderText("Type your search");

    expect(input).toBeInTheDocument();
  });

  test("should render the search button", () => {
    render(<Header />);

    const button = screen.getByRole("button", { name: /search/i });

    expect(button).toBeInTheDocument();
  });
});