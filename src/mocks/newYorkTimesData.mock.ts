import { NewYorkTimesResponseApi } from "../models/new-york-times.types";

export const mockNewYorkTimesResponse: NewYorkTimesResponseApi = {
  status: "OK",
  copyright: "© 2024 The New York Times Company. All Rights Reserved.",
  response: {
    docs: [
      {
        abstract: "This is a mock abstract for the article.",
        web_url: "https://www.nytimes.com/mock-article",
        snippet: "Mock snippet of the article.",
        lead_paragraph: "This is a mock lead paragraph.",
        source: "The New York Times",
        multimedia: [
          {
            rank: 0,
            subtype: "xlarge",
            caption: "Mock image caption",
            credit: "Mock image credit",
            type: "image",
            url: "https://www.nytimes.com/mock-image.jpg",
            height: 600,
            width: 800,
            legacy: {
              xlarge: "https://www.nytimes.com/mock-image-xlarge.jpg",
              xlargewidth: 800,
              xlargeheight: 600,
            },
            subType: "mock-subtype",
            crop_name: "mock-crop-name",
          },
        ],
        headline: {
          main: "Mock Headline Title",
          kicker: "Mock kicker",
          content_kicker: "Mock content kicker",
          print_headline: "Mock print headline",
          name: "Mock name",
          seo: "Mock SEO",
          sub: "Mock sub",
        },
        keywords: [
          {
            name: "mock-keyword",
            value: "mock-value",
            rank: 1,
            major: "Y",
          },
        ],
        pub_date: "2024-08-26T00:00:00Z",
        document_type: "article",
        news_desk: "News Desk",
        section_name: "Section Name",
        byline: {
          original: "By John Doe",
          person: [
            {
              firstname: "John",
              middlename: null,
              lastname: "Doe",
              qualifier: null,
              title: null,
              role: "Reporter",
              organization: "The New York Times",
              rank: 1,
            },
          ],
          organization: null,
        },
        type_of_material: "News",
        _id: "mock-article-id",
        word_count: 1234,
        uri: "nyt://article/mock-article-id",
      },
    ],
  },
};
