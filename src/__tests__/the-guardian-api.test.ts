// TheGuardianApi.test.js
import { TheGuardianApiResponse, TheGuardianArticle } from '../models/the-guardian.types';
import { TheGuardianApi } from '../strategies/TheGuardianApi';

jest.mock('../environment', () => ({
  getApiUrl: jest.fn(() => ({
    theGuardianApiUrl: 'https://content.guardianapis.com',
    theGuardianApiKey: 'mock-api-key',
  })),
}));

global.fetch = jest.fn();

describe('TheGuardianApi', () => {
  let theGuardianApi: TheGuardianApi;

  beforeEach(() => {
    theGuardianApi = new TheGuardianApi();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('should construct the correct API URL and fetch data', async () => {
    const search = { query: 'test', date: '2023-08-25T00:00:00Z' };
    const mockResponse = {
      response: {
        results: [
          {
            sectionName: 'Section1',
            webTitle: 'Title1',
            webPublicationDate: '2023-08-25T00:00:00Z',
            webUrl: 'https://example.com/title1',
            id: '12345',
          } as TheGuardianArticle,
        ],
      },
    } as TheGuardianApiResponse;

    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    await theGuardianApi.fetchNotices(search);

    expect(fetch).toHaveBeenCalledWith(
      'https://content.guardianapis.com/search?api-key=mock-api-key&q=test&from-date=2023-08-25'
    );
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test('should transform API response to NoticeBase format', async () => {
    const search = { query: 'test', date: '2023-08-25' };
    const mockResponse = {
      response: {
        results: [
          {
            sectionName: 'Section1',
            webTitle: 'Title1',
            webPublicationDate: '2023-08-25T00:00:00Z',
            webUrl: 'https://example.com/title1',
            id: '12345',
          } as TheGuardianArticle,
        ],
      },
    } as TheGuardianApiResponse;

    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const result = await theGuardianApi.fetchNotices(search);

    expect(result).toEqual({
      notices: [
        {
          category: 'Section1',
          title: 'Title1',
          publishedAt: '2023-08-25T00:00:00Z',
          url: 'https://example.com/title1',
          id: '12345',
          author: 'Unknown',
          description: '',
          urlToImage: '',
          source: 'The Guardian',
        },
      ],
      id: 'the-guardian-api-data',
    });
  });
});
