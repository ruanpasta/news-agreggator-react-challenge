import { NoticeBaseStrategy, NoticeSearch } from "./NoticesBaseStrategy";

export class NewYorkTimesApi implements NoticeBaseStrategy {
  async fetchNotices(search: NoticeSearch) {
    return await fetch('https://api.sourceA.com/news').then(res => res.json());
  }
}