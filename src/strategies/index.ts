import { NewsApi } from "./NewsApi";
import { NewYorkTimesApi } from "./NewYorkTimesApi";
import { NoticeBaseStrategy } from "./NoticesBaseStrategy";

export const strategies: Record<string, NoticeBaseStrategy> = {
  newsApi: new NewsApi(),
  newYorkTimes: new NewYorkTimesApi(),
};