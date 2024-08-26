import { getApiUrl } from "../environment";
import { NoticeBase } from "../models/notice.types";
import { NoticeBaseStrategy, NoticeSearch } from "../models/strategy.types";
import {
  TheGuardianApiResponse,
  TheGuardianArticle,
} from "../models/the-guardian.types";

const apiUrl = getApiUrl().theGuardianApiUrl;
const apiKey = getApiUrl().theGuardianApiKey;

export class TheGuardianApi implements NoticeBaseStrategy {
  async fetchNotices(search: NoticeSearch) {
    const query = search.query ? `&q=${search.query}` : `&q=undefined`;
    const date = search.date?.split('T')[0] ? search.date?.split('T')[0] : search.date;
    const dateQuery = date ? `&from-date=${date}` : '';
    return await fetch(`${apiUrl}/search?api-key=${apiKey}${query}${dateQuery}`)
      .then((res) => res.json())
      .then((res: TheGuardianApiResponse) => this.toNotice(res));
  }

  private toNotice(value: TheGuardianApiResponse): any {
    const notices: NoticeBase[] =
      value.response.results.map((article: TheGuardianArticle) => ({
        category: article.sectionName,
        title: article.webTitle,
        publishedAt: article.webPublicationDate,
        url: article.webUrl,
        id: article.id,
        author: "Unknown",
        description: "",
        urlToImage: "",
        source: "The Guardian",
      })) || [];
    return { notices, id: "the-guardian-api-data" };
  }
}
