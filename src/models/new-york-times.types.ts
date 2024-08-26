interface NewYorkTimesResponseMultimedia {
  rank: number;
  subtype: string;
  caption: string | null;
  credit: string | null;
  type: string;
  url: string;
  height: number;
  width: number;
  legacy: {
    xlarge: string;
    xlargewidth: number;
    xlargeheight: number;
  };
  subType: string;
  crop_name: string;
}

interface NewYorkTimesResponseHeadline {
  main: string;
  kicker: string | null;
  content_kicker: string | null;
  print_headline: string | null;
  name: string | null;
  seo: string | null;
  sub: string | null;
}

interface NewYorkTimesResponseKeyword {
  name: string;
  value: string;
  rank: number;
  major: string;
}

interface NewYorkTimesResponsePerson {
  firstname: string;
  middlename: string | null;
  lastname: string;
  qualifier: string | null;
  title: string | null;
  role: string;
  organization: string;
  rank: number;
}

interface NewYorkTimesResponseByline {
  original: string;
  person: NewYorkTimesResponsePerson[];
  organization: string | null;
}

interface NewYorkTimesResponseDoc {
  abstract: string;
  web_url: string;
  snippet: string;
  lead_paragraph: string;
  source: string;
  multimedia: NewYorkTimesResponseMultimedia[];
  headline: NewYorkTimesResponseHeadline;
  keywords: NewYorkTimesResponseKeyword[];
  pub_date: string;
  document_type: string;
  news_desk: string;
  section_name: string;
  byline: NewYorkTimesResponseByline;
  type_of_material: string;
  _id: string;
  word_count: number;
  uri: string;
}

interface NewYorkTimesResponse {
  docs: NewYorkTimesResponseDoc[];
}

export interface NewYorkTimesResponseApi {
  status: string;
  copyright: string;
  response: NewYorkTimesResponse;
}