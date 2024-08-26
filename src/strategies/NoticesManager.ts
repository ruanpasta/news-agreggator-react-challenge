import { strategies } from ".";
import { NoticeBaseStrategy, StrategyKey } from "../models/strategy.types";

export const getActiveStrategies = (selectedSources: StrategyKey[]): NoticeBaseStrategy[] => {
  return selectedSources.map(source => strategies[source]);
}