import { NoticeBase } from "../models/notice.types";
import { NoticeBaseStrategy, NoticeSearch } from "../models/strategy.types";

const apiUrl = import.meta.env.VITE_NEWS_API_URL;
const apiKey = import.meta.env.VITE_NEWS_API_KEY;

type NewsApiArticle = {
  author: any;
  title: any;
  description: any;
  publishedAt: any;
  url: any;
  urlToImage: any;
  source: { name: any };
};

export class NewsApi implements NoticeBaseStrategy {
  async fetchNotices(search: NoticeSearch) {
    const query = search.query ? `&q=${search.query}` : `&q=undefined`;
    return await fetch(
      `${apiUrl}v2/everything?apiKey=${apiKey}&pageSize=10${query}`
    )
      .then((res) => res.json())
      .then((res) => this.toNotice(res));
  }

  private toNotice(value: any): any {
    const notices: NoticeBase[] =
      value.articles
        .filter(
          (article: NewsApiArticle) =>
            !article.title.toLowerCase().includes("removed")
        )
        .map((article: NewsApiArticle) => ({
          author: article.author,
          title: article.title,
          description: article.description,
          publishedAt: article.publishedAt,
          url: article.url,
          urlToImage: article.urlToImage,
          source: article.source.name,
          category: "",
          id: article.title + article.author,
        })) || [];
    return { notices, id: "news-api-data" };
  }
}
