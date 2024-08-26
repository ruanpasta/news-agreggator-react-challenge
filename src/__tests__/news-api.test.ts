// NewsApi.test.js
import { NewsApiResponse, NewsApiArticle } from "../models/news-api.types";
import { NewsApi } from "../strategies/NewsApi";

jest.mock("../environment", () => ({
  getApiUrl: jest.fn(() => ({
    newsApiUrl: "https://api.example.com/",
    newsApiKey: "mock-api-key",
  })),
}));

global.fetch = jest.fn();

describe("NewsApi", () => {
  let newsApi: NewsApi;

  beforeEach(() => {
    newsApi = new NewsApi();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("should construct the correct API URL and fetch data", async () => {
    const search = { query: "test", date: "2023-08-25T00:00:00Z" };
    const mockResponse = {
      articles: [
        {
          author: "Author1",
          title: "Title1",
          description: "Description1",
          publishedAt: "2023-08-25T00:00:00Z",
          url: "https://example.com/title1",
          urlToImage: "https://example.com/image1",
          source: { name: "Source1" },
        },
      ],
    } as NewsApiResponse;

    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    await newsApi.fetchNotices(search);

    expect(fetch).toHaveBeenCalledWith(
      "https://api.example.com/v2/everything?apiKey=mock-api-key&pageSize=10&q=test&from=2023-08-25T00:00:00Z"
    );
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test("should transform API response to NoticeBase format", async () => {
    const search = { query: "test", date: "2023-08-25" };
    const mockResponse = {
      articles: [
        {
          author: "Author1",
          title: "Title1",
          description: "Description1",
          publishedAt: "2023-08-25T00:00:00Z",
          url: "https://example.com/title1",
          urlToImage: "https://example.com/image1",
          source: { name: "Source1" },
        } as NewsApiArticle,
        {
          author: "Removed Author",
          title: "Removed Title",
          description: "Description2",
          publishedAt: "2023-08-25T00:00:00Z",
          url: "https://example.com/title2",
          urlToImage: "",
          source: { name: "Source2" },
        } as NewsApiArticle,
      ],
    } as NewsApiResponse;

    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const result = await newsApi.fetchNotices(search);

    expect(result).toEqual({
      notices: [
        {
          author: "Author1",
          title: "Title1",
          description: "Description1",
          publishedAt: "2023-08-25T00:00:00Z",
          url: "https://example.com/title1",
          urlToImage: "https://example.com/image1",
          source: "Source1",
          category: "Others",
          id: "Title1Author1",
        },
      ],
      id: "news-api-data",
    });
  });
});
