import { useEffect } from "react";
import { NoticeBase } from "../models/notice.types";
import { FiltersBase, FiltersSet } from "../models/filters.types";

type FieldKey = "source" | "author" | "category";
type FilterKey = "sources" | "authors" | "categories";

/**
 * Set the base data from the latest notices response for use in filters, such as authors, sources, and categories.
 *
 * @param notices List of NoticeBase
 * @param filters Filters context
 * @param setFilters Function to update the Filters context
 */
export const useNoticeBaseDataFilters = (
  notices: NoticeBase[],
  filters: FiltersBase,
  setFilters: FiltersSet
) => {
  const updateFilter = (fieldKey: FieldKey, filterKey: FilterKey) => {
    const items = notices
      ?.map((notice) => notice[fieldKey])
      .filter((item, index, self) => !!item && self.indexOf(item) === index);

    if (JSON.stringify(filters[filterKey]) !== JSON.stringify(items)) {
      setFilters({ ...filters, [filterKey]: items });
    }
  };

  useEffect(() => {
    updateFilter("author", "authors");
    updateFilter("source", "sources");
    updateFilter("category", "categories");
  }, [notices]);
};
