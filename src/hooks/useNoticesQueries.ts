import {
  UseQueryOptions,
  useSuspenseQueries,
} from "@tanstack/react-query";
import { getActiveStrategies } from "../strategies/NoticesManager";
import { NoticeSearch, StrategyKey } from "../models/strategy.types";

type NoticesQueryResult = {
  data: any;
  error: any;
  isLoading: boolean;
};

export const useNoticesQueries = (
  selectedSources: StrategyKey[],
  search?: NoticeSearch
): NoticesQueryResult[] => {
  const activeStrategies = getActiveStrategies(selectedSources);
  const { query, date } = search || {};

  const queries: UseQueryOptions<any, unknown, any>[] = activeStrategies.map(
    (strategy, index) => ({
      queryKey: [index, strategy.constructor.name, query, date],
      queryFn: () => strategy.fetchNotices({ query, date }),
    })
  );

  const queryResults = useSuspenseQueries({ queries });

  return queryResults.map((result: NoticesQueryResult) => ({
    data: result.data,
    error: result.error,
    isLoading: result.isLoading,
  }));
};
