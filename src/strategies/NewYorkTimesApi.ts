import { getApiUrl } from "../environment";
import { NewYorkTimesResponseApi } from "../models/new-york-times.types";
import { NoticeBase } from "../models/notice.types";
import { NoticeBaseStrategy, NoticeSearch } from "../models/strategy.types";

const apiUrl = getApiUrl().newYorkTimesApiUrl;
const apiKey = getApiUrl().newYorkTimesApiKey;

export class NewYorkTimesApi implements NoticeBaseStrategy {
  async fetchNotices(search: NoticeSearch) {
    const query = search.query ? `&q=${search.query}` : "";
    const date = search.date?.split('T')[0] ? search.date?.split('T')[0] : search.date;
    const dateQuery = date ? `&begin_date=${date}&end_date=${date}` : '';
    return await fetch(
      `${apiUrl}svc/search/v2/articlesearch.json?api-key=${apiKey}${query}${dateQuery}`
    )
      .then((res) => res.json())
      .then((res: NewYorkTimesResponseApi) => this.toNotice(res));
  }

  private toNotice(value: NewYorkTimesResponseApi): any {
    const notices: NoticeBase[] =
      value.response?.docs?.map((doc) => ({
        author: doc.byline.original ?? doc.byline.person
          .map((person) => `${person.firstname} ${person.lastname || ''}`)
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
        category: doc.section_name,
        id: doc._id,
      })) || [];
    return { notices, id: "new-york-times-api-data" };
  }
}
