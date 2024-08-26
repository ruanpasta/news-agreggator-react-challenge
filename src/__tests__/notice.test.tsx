import { act, render, screen } from "@testing-library/react";
import { useColorMode } from "@chakra-ui/react";
import Notice from "../componesnts/Notice";
import { NoticeBase } from "../models/notice.types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";

jest.mock("@chakra-ui/react", () => ({
  ...jest.requireActual("@chakra-ui/react"),
  useColorMode: jest.fn(),
  useBreakpointValue: jest.fn().mockReturnValue("span 1"),
}));

beforeEach(() => {
  (useColorMode as jest.Mock).mockReturnValue({ colorMode: "dark" });
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 0,
    },
  },
});

describe("Notice", () => {
  const notice: NoticeBase = {
    title: "Sample Notice",
    author: "Aly",
    source: "Sour",
    description: "Sample description.",
    publishedAt: "2024-08-23T12:20:12Z",
    category: "Film",
    url: "https://example.com/image.jpg",
    urlToImage: "https://example.com/image.jpg",
    id: "123",
  };

  it("should render the title, author, source and description", async () => {
    await act(async () => {
      render(
        <QueryClientProvider client={queryClient}>
          <ErrorBoundary fallback={<div>Erro</div>}>
            <Notice notice={notice} index={0} />
          </ErrorBoundary>
        </QueryClientProvider>
      );
    });
    // render(<Notice notice={notice} index={0} />);
    const authorAndSource = screen.getByTestId("notice-author-source");
    expect(screen.getByText(notice.title)).toBeInTheDocument();
    expect(authorAndSource).toHaveTextContent(notice.author);
    expect(authorAndSource).toHaveTextContent(notice.source);
    expect(screen.getByText(notice.description)).toBeInTheDocument();
  });

  it("should set the correct background color in dark mode", async () => {
    (useColorMode as jest.Mock).mockReturnValue({ colorMode: "dark" });
    // render(<Notice notice={notice} index={0} />);
    await act(async () => {
      render(
        <QueryClientProvider client={queryClient}>
          <ErrorBoundary fallback={<div>Erro</div>}>
            <Notice notice={notice} index={0} />
          </ErrorBoundary>
        </QueryClientProvider>
      );
    });
    const noticeElement = screen.getByTestId("notice-container");
    expect(noticeElement).toHaveStyle("background-color: gray.700");
  });

  it("should format the date correctly with the en-US pattern", async () => {
    // render(<Notice notice={notice} index={0} />);
    await act(async () => {
      render(
        <QueryClientProvider client={queryClient}>
          <ErrorBoundary fallback={<div>Erro</div>}>
            <Notice notice={notice} index={0} />
          </ErrorBoundary>
        </QueryClientProvider>
      );
    });
    expect(screen.getByText("08/23/2024")).toBeInTheDocument();
  });

  it("should render the image element if is not the first element", async () => {
    // render(<Notice notice={notice} index={1} />);
    await act(async () => {
      render(
        <QueryClientProvider client={queryClient}>
          <ErrorBoundary fallback={<div>Erro</div>}>
            <Notice notice={notice} index={1} />
          </ErrorBoundary>
        </QueryClientProvider>
      );
    });
    const image = screen.getByAltText(`Image of news: ${notice.title}`);
    expect(image).toBeInTheDocument();
  });

  it("should not render the image element if is the first element", async () => {
    // render(<Notice notice={notice} index={0} />);
    await act(async () => {
      render(
        <QueryClientProvider client={queryClient}>
          <ErrorBoundary fallback={<div>Erro</div>}>
            <Notice notice={notice} index={0} />
          </ErrorBoundary>
        </QueryClientProvider>
      );
    });
    const image = screen.queryByAltText(`Image of news: ${notice.title}`);
    expect(image).toBeNull();
  });
});
