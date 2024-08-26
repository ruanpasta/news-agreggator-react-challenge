import { getApiUrl } from "../environment";
import { NewsApiArticle, NewsApiResponse } from "../models/news-api.types";
import { NoticeBase } from "../models/notice.types";
import { NoticeBaseStrategy, NoticeSearch } from "../models/strategy.types";

const apiUrl = getApiUrl().newsApiUrl;
const apiKey = getApiUrl().newsApiKey;

export class NewsApi implements NoticeBaseStrategy {
  async fetchNotices(search: NoticeSearch) {
    const query = search.query ? `&q=${search.query}` : `&q=undefined`;
    const date = search.date?.split('T')[0] ? search.date?.split('T')[0] : search.date;
    const dateQuery = date ? `&from=${search.date}` : '';
    return await fetch(
      `${apiUrl}v2/everything?apiKey=${apiKey}&pageSize=10${query}${dateQuery}`
    )
      .then((res) => res.json())
      .then((res: NewsApiResponse) => this.toNotice(res));
  }

  private toNotice(value: NewsApiResponse): any {
    const notices: NoticeBase[] =
      value.articles
        .filter(
          (article: NewsApiArticle) =>
            !article.title.toLowerCase().includes("removed")
        )
        .map((article: NewsApiArticle) => ({
          author: article.author ?? '',
          title: article.title,
          description: article.description,
          publishedAt: article.publishedAt,
          url: article.url,
          urlToImage: article.urlToImage || '',
          source: article.source.name,
          category: "Others",
          id: article.title + article.author,
        })) || [];
    return { notices, id: "news-api-data" };
  }
}
