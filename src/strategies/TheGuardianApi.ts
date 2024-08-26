import { NoticeBase } from "../models/notice.types";
import { NoticeBaseStrategy, NoticeSearch } from "../models/strategy.types";
import { TheGuardianApiResponse, TheGuardianArticle } from "../models/the-guardian.types";

const apiUrl = import.meta.env.VITE_THE_GUARDIAN_API_URL;
const apiKey = import.meta.env.VITE_THE_GUARDIAN_API_KEY;

export class TheGuardianApi implements NoticeBaseStrategy {
  async fetchNotices(search: NoticeSearch) {
    const query = search.query ? `&q=${search.query}` : `&q=undefined`
    return await fetch(
      `${apiUrl}/search?api-key=${apiKey}${query}`
    )
      .then((res) => res.json())
      .then((res: TheGuardianApiResponse) => this.toNotice(res));
  }

  private toNotice(value: TheGuardianApiResponse): any {
    const notices: NoticeBase[] = value.response.results
      .map((article: TheGuardianArticle) => ({
        author: article.sectionName,
        title: article.webTitle,
        publishedAt: article.webPublicationDate,
        description: '',
        url: article.webUrl,
        urlToImage: '',
        source: '',
        id: article.id,
      }));
    return { notices, id: "the-guardian-api-data" };
  }
}
