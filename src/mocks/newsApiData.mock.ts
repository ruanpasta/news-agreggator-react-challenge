import { NewsApiResponse } from "../models/news-api.types";

export const mockNewsApiResponse: NewsApiResponse = {
  status: 'ok',
  totalResults: 78768,
  articles: [
    {
      source: {
        id: null,
        name: '[Removed]',
      },
      author: null,
      title: '[Removed]',
      description: '[Removed]',
      url: 'https://removed.com',
      urlToImage: null,
      publishedAt: '1970-01-01T00:00:00Z',
      content: '[Removed]',
    },
  ],
};
