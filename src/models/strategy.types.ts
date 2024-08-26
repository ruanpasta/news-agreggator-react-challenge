export type StrategyKey = 'newsApi' | 'newYorkTimes' | 'theGuardianApi';

export type NoticeSearch = {
  query?: string
  date?: string
  sort?: string
}

export interface NoticeBaseStrategy {
  fetchNotices(search: NoticeSearch): Promise<any>;
}