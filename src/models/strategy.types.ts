export type StrategyKey = 'newsApi' | 'newYorkTimes' | 'theGuardianApi';

export type NoticeSearch = {
  query?: string
  date?: string
}

export interface NoticeBaseStrategy {
  fetchNotices(search: NoticeSearch): Promise<any>;
}