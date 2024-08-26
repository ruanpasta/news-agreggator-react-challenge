import { act, render, screen } from "@testing-library/react";
import NoticeList from "../componesnts/NoticeList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";

jest.mock("../componesnts/Notice", () =>
  jest.fn(() => <div>Mocked Notice</div>)
);

jest.mock("../environment", () => ({
  getApiUrl: jest.fn(() => ({
    newsApiUrl: "https://mocked.newsapi.com/",
    newsApiKey: "mocked-api-key",
    theGuardianApiUrl: "https://mocked.theguardian.com/",
    theGuardianApiKey: "mocked-api-key",
    newYorkTimesApiUrl: "https://mocked.nytimes.com/",
    newYorkTimesApiKey: "mocked-api-key",
  })),
}));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 0,
    },
  },
});

describe("NoticeListLayout", () => {
  const notices = [
    {
      title: "Sample Notice",
      author: "Author Name",
      source: "Source Name",
      description: "Sample description.",
      publishedAt: "2024-08-23T12:20:12Z",
      url: "https://example.com/image.jpg",
      urlToImage: "https://example.com/image.jpg",
    },
    {
      title: "Second Sample Notice",
      author: "Second Author Name",
      source: "Second Source Name",
      description: "Second Sample description.",
      publishedAt: "2024-08-24T12:20:12Z",
      url: "https://example.com/image.jpg",
      urlToImage: "https://example.com/image.jpg",
    },
  ];

  it("should render the list with the MSW mock data", async () => {
    await act(async () => {
      render(
        <QueryClientProvider client={queryClient}>
          <ErrorBoundary fallback={<div>Erro</div>}>
            <NoticeList />
          </ErrorBoundary>
        </QueryClientProvider>
      );
    });
    const noticeList = screen.getAllByText("Mocked Notice");
    expect(noticeList).toHaveLength(notices.length);
  });
  // it("should render a grid with the right quantity of notice elements", () => {
  //   const noticeList = screen.getAllByText("Mocked Notice");
  //   expect(noticeList).toHaveLength(notices.length);
  // });

  // it("should set the correct templateColumns", () => {
  //   const gridElement = screen.getByTestId("notice-list-container");
  //   expect(gridElement).toHaveStyle(
  //     "grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))"
  //   );
  // });
});
