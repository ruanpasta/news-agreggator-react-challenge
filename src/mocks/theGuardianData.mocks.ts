import { TheGuardianApiResponse } from "../models/the-guardian.types";

export const mockTheGuardianApiResponse: TheGuardianApiResponse = {
  response: {
    status: 'ok',
    userTier: 'free',
    total: 2,
    startIndex: 0,
    pageSize: 2,
    currentPage: 1,
    pages: 1,
    orderBy: 'newest',
    results: [
      {
        id: 'mock-article-id-1',
        type: 'article',
        sectionId: 'world',
        sectionName: 'World',
        webPublicationDate: '2024-08-26T00:00:00Z',
        webTitle: 'Mock Article Title 1',
        webUrl: 'https://www.theguardian.com/mock-article-1',
        apiUrl: 'https://content.guardianapis.com/mock-article-1',
        isHosted: false,
        pillarId: 'news',
        pillarName: 'News',
      },
      {
        id: 'mock-article-id-2',
        type: 'article',
        sectionId: 'technology',
        sectionName: 'Technology',
        webPublicationDate: '2024-08-25T00:00:00Z',
        webTitle: 'Mock Article Title 2',
        webUrl: 'https://www.theguardian.com/mock-article-2',
        apiUrl: 'https://content.guardianapis.com/mock-article-2',
        isHosted: false,
        pillarId: 'culture',
        pillarName: 'Culture',
      },
    ],
  },
};
