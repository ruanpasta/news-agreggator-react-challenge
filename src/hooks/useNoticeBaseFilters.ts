import { FiltersBase } from "../models/filters.types";
import { NoticeBase } from "../models/notice.types";

export const useNoticeBaseFilters = (
  notices: NoticeBase[],
  filters: FiltersBase
) => {
  let filteredNotices: NoticeBase[] = [];

  filteredNotices = !filters.selectedCategories?.length
    ? notices
    : notices.filter((notice) =>
        filters.selectedCategories.includes(notice.category)
      );

  filteredNotices = !filters.selectedAuthors?.length
    ? filteredNotices
    : filteredNotices.filter((notice) =>
        filters.selectedAuthors.includes(notice.author)
      );

  filteredNotices = !filters.selectedSources?.length
    ? filteredNotices
    : filteredNotices.filter((notice) =>
        filters.selectedSources.includes(notice.source)
      );

  filteredNotices = !filters.date?.length
    ? filteredNotices
    : filteredNotices.filter((notice) => {
        const noticeDate = new Date(notice.publishedAt);
        const filterDate = new Date(filters.date);

        return (
          noticeDate.getFullYear() === filterDate.getFullYear() &&
          noticeDate.getMonth() === filterDate.getMonth() &&
          noticeDate.getDate() === filterDate.getDate()
        );
      });

  return [filteredNotices];
};
