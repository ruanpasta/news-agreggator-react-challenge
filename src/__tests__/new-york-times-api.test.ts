import { NewYorkTimesResponseApi } from '../models/new-york-times.types';
import { NewYorkTimesApi } from '../strategies/NewYorkTimesApi';

// Mocking the environment function
jest.mock('../environment', () => ({
  getApiUrl: jest.fn(() => ({
    newYorkTimesApiUrl: 'https://api.nytimes.com/',
    newYorkTimesApiKey: 'mock-api-key',
  })),
}));

// Mocking fetch
global.fetch = jest.fn();

describe('NewYorkTimesApi', () => {
  let newYorkTimesApi: NewYorkTimesApi;

  beforeEach(() => {
    newYorkTimesApi = new NewYorkTimesApi();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('should construct the correct API URL and fetch data', async () => {
    const search = { query: 'test', date: '2023-08-25T00:00:00Z' };
    const mockResponse = {
      response: {
        docs: [
          {
            byline: {
              original: 'Author Name',
              person: [{ firstname: 'First', lastname: 'Last' }],
            },
            headline: { main: 'Title1' },
            abstract: 'Description1',
            pub_date: '2023-08-25T00:00:00Z',
            web_url: 'https://example.com/title1',
            multimedia: [{ url: 'image1.jpg' }],
            source: 'Source1',
            section_name: 'Section1',
            _id: '12345',
          },
        ],
      },
    } as NewYorkTimesResponseApi;

    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    await newYorkTimesApi.fetchNotices(search);

    expect(fetch).toHaveBeenCalledWith(
      'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=mock-api-key&q=test&begin_date=2023-08-25&end_date=2023-08-25'
    );
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test('should transform API response to NoticeBase format', async () => {
    const search = { query: 'test', date: '2023-08-25' };
    const mockResponse = {
      response: {
        docs: [
          {
            byline: {
              original: 'Author Name',
              person: [{ firstname: 'First', lastname: 'Last' }],
            },
            headline: { main: 'Title1' },
            abstract: 'Description1',
            pub_date: '2023-08-25T00:00:00Z',
            web_url: 'https://example.com/title1',
            multimedia: [{ url: 'image1.jpg' }],
            source: 'Source1',
            section_name: 'Section1',
            _id: '12345',
          },
        ],
      },
    } as NewYorkTimesResponseApi;

    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const result = await newYorkTimesApi.fetchNotices(search);

    expect(result).toEqual({
      notices: [
        {
          author: 'Author Name',
          title: 'Title1',
          description: 'Description1',
          publishedAt: '2023-08-25T00:00:00Z',
          url: 'https://example.com/title1',
          urlToImage: 'https://www.nytimes.com/image1.jpg',
          source: 'Source1',
          category: 'Section1',
          id: '12345',
        },
      ],
      id: 'new-york-times-api-data',
    });
  });
});
