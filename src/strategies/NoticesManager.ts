import { strategies } from ".";
import { NoticeBaseStrategy } from "./NoticesBaseStrategy";

export const getActiveStrategies = (selectedSources: string[]): NoticeBaseStrategy[] => {
  return selectedSources.map(source => strategies[source]);
}