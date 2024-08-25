import { render, screen } from "@testing-library/react";
import { useColorMode } from "@chakra-ui/react";
import Notice from "../componesnts/Notice";

jest.mock("@chakra-ui/react", () => ({
  ...jest.requireActual("@chakra-ui/react"),
  useColorMode: jest.fn(),
  useBreakpointValue: jest.fn().mockReturnValue("span 1"),
}));

beforeEach(() => {
  (useColorMode as jest.Mock).mockReturnValue({ colorMode: "dark" });
})

describe("Notice", () => {
  const notice = {
    title: "Sample Notice",
    author: "Author Name",
    source: "Source Name",
    description: "Sample description.",
    publishedAt: "2024-08-23T12:20:12Z",
    url: "https://example.com/image.jpg",
    urlToImage: "https://example.com/image.jpg",
  };

  it("should render the title, author, source and description", () => {
    render(<Notice notice={notice} index={0} />);

    expect(screen.getByText("Sample Notice")).toBeInTheDocument();
    expect(screen.getByText("Author Name")).toBeInTheDocument();
    expect(screen.getByText("Source Name")).toBeInTheDocument();
    expect(screen.getByText("Sample description.")).toBeInTheDocument();
  });

  it("should set the correct background color in dark mode", () => {
    (useColorMode as jest.Mock).mockReturnValue({ colorMode: "dark" });
    render(<Notice notice={notice} index={0} />);

    const noticeElement = screen.getByTestId("notice-container");
    expect(noticeElement).toHaveStyle("background-color: gray.700");
  });

  it("should format the date correctly with the en-US pattern", () => {
    render(<Notice notice={notice} index={0} />);
    expect(screen.getByText("08/23/2024")).toBeInTheDocument();
  });

  it("should render the image element if is not the first element", () => {
    render(<Notice notice={notice} index={1} />);
    const image = screen.getByAltText(`Image of news: ${notice.title}`);
    expect(image).toBeInTheDocument();
  });

  it("should not render the image element if is the first element", () => {
    render(<Notice notice={notice} index={0} />);
    const image = screen.queryByAltText(`Image of news: ${notice.title}`);
    expect(image).toBeNull();
  });
});