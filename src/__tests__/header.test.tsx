import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import Header from "../componesnts/Header";


// Mock do ícone de notícia
jest.mock("../assets/news.svg", () => "mocked-news-icon.svg");

describe("Header component", () => {
  test("renders the logo and heading", () => {
    render(<Header />);

    const logo = screen.getByAltText("logo");
    const heading = screen.getByText("News Agreggator");

    expect(logo).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
  });

  test("renders the input with placeholder", () => {
    render(<Header />);

    const input = screen.getByPlaceholderText("Type your search");

    expect(input).toBeInTheDocument();
  });

  test("renders the search button", () => {
    render(<Header />);

    const button = screen.getByRole("button", { name: /search/i });

    expect(button).toBeInTheDocument();
  });
});