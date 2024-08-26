import { NoticeBaseStrategy, StrategyKey } from "../models/strategy.types";
import { NewsApi } from "./NewsApi";
import { NewYorkTimesApi } from "./NewYorkTimesApi";
import { TheGuardianApi } from "./TheGuardianApi";

export const strategies: Record<StrategyKey, NoticeBaseStrategy> = {
  newsApi: new NewsApi(),
  newYorkTimes: new NewYorkTimesApi(),
  theGuardianApi: new TheGuardianApi(),
};