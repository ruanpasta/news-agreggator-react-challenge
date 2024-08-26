import { NoticeBase } from "../models/notice.types";
import { NoticeBaseStrategy, NoticeSearch } from "./NoticesBaseStrategy";

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
    return await fetch(
      `${apiUrl}/everything?apiKey=${apiKey}&q=${search.query}`
    )
      .then((res) => res.json())
      .then((res) => this.toNotice(res));
  }

  private toNotice(value: any): any {
    const notices: NoticeBase[] = value.articles
      .filter((article: NewsApiArticle) => !article.title.toLowerCase().includes("removed"))
      .map((article: NewsApiArticle) => ({
        author: article.author,
        title: article.title,
        description: article.description,
        publishedAt: article.publishedAt,
        url: article.url,
        urlToImage: article.urlToImage,
        source: article.source.name,
        id: article.title + article.author,
      }));
    return { notices, ...value, id: "news-api-data" };
  }
}
