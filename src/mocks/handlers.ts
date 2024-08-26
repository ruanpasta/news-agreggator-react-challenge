import { http, HttpResponse } from "msw";
import { mockNewYorkTimesResponse } from "./newYorkTimesData.mock";
import { mockTheGuardianApiResponse } from "./theGuardianData.mocks";
import { mockNewsApiResponse } from "./newsApiData.mock";

export const handlers = [
  http.get(
    "https://mocked.nytimes.com/svc/search/v2/articlesearch.json",
    ({ request }) => {
      const url = new URL(request.url);
      const apiKey = url.searchParams.get("api-key");

      if (!apiKey) return new HttpResponse(null, { status: 404 });

      return new HttpResponse(JSON.stringify(mockNewYorkTimesResponse), {
        status: 200,
      });
    }
  ),
  http.get("https://mocked.theguardian.com/search", ({ request }) => {
    const url = new URL(request.url);
    const apiKey = url.searchParams.get("api-key");

    if (!apiKey) return new HttpResponse(null, { status: 404 });

    return HttpResponse.text(JSON.stringify(mockTheGuardianApiResponse));
  }),
  http.get("https://mocked.newsapi.com/v2/everything", ({ request }) => {
    const url = new URL(request.url);
    const apiKey = url.searchParams.get("api-key");

    if (!apiKey) return new HttpResponse(null, { status: 404 });

    return HttpResponse.text(JSON.stringify(mockNewsApiResponse));
  }),
];
