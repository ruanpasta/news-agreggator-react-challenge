import { NewYorkTimesResponseApi } from "../models/new-york-times.types";
import { NoticeBase } from "../models/notice.types";
import { NoticeBaseStrategy, NoticeSearch } from "../models/strategy.types";

const apiUrl = import.meta.env.VITE_NEW_YORK_TIMES_API_URL;
const apiKey = import.meta.env.VITE_NEW_YORK_TIMES_API_KEY;

export class NewYorkTimesApi implements NoticeBaseStrategy {
  async fetchNotices(search: NoticeSearch) {
    const query = search.query ? `&q=${search.query}` : '';
    return await fetch(`${apiUrl}svc/search/v2/articlesearch.json?api-key=${apiKey}${query}`)
      .then((res) => res.json())
      .then((res: NewYorkTimesResponseApi) => this.toNotice(res));
  }

  private toNotice(value: NewYorkTimesResponseApi): any {
    const notices: NoticeBase[] = value.response?.docs?.map((doc) => ({
      author: doc.byline.person
        .map((person) => `${person.firstname} ${person.lastname}`)
        .join(", "),
      title: doc.headline.main,
      description: doc.abstract,
      publishedAt: doc.pub_date,
      url: doc.web_url,
      urlToImage:
        doc.multimedia.length > 0
          ? `https://www.nytimes.com/${doc.multimedia[0].url}`
          : "",
      source: doc.source,
      id: doc._id,
    }));
    return { notices, id: "new-york-times-api-data" };
  }
}
