import { FiltersBase } from "../models/filters.types";
import { NoticeBase } from "../models/notice.types";

export const useNoticeBaseFilters = (
  notices: NoticeBase[],
  filters: FiltersBase
) => {
  const filteredByCategories = !filters.selectedCategories?.length
    ? notices
    : notices.filter((notice) =>
        filters.selectedCategories.includes(notice.category)
      );

  const filteredByAuthors = !filters.selectedAuthors?.length
    ? notices
    : notices.filter((notice) =>
        filters.selectedAuthors.includes(notice.author)
      );

  const filteredBySources = !filters.selectedSources?.length
    ? notices
    : notices.filter((notice) =>
        filters.selectedSources.includes(notice.source)
      );

  const filteredByDate = !filters.date?.length
    ? notices
    : notices.filter((notice) => {
        const noticeDate = new Date(notice.publishedAt);
        const filterDate = new Date(filters.date);

        return (
          noticeDate.getFullYear() === filterDate.getFullYear() &&
          noticeDate.getMonth() === filterDate.getMonth() &&
          noticeDate.getDate() === filterDate.getDate()
        );
      });

  const filteredNotices = [
    filteredByCategories,
    filteredByAuthors,
    filteredBySources,
    filteredByDate,
  ].reduce(
    (acc, curr) => acc.filter((notice) => curr.includes(notice)),
    notices
  );

  return [filteredNotices];
};
