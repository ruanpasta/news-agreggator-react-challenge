import { SelectedFilterKey } from "../models/filters-hook.types";
import { FiltersBase, FiltersSet } from "../models/filters.types";

export const useUpdateNoticeBaseFilterInputs = (
  filters: FiltersBase,
  setFilters: FiltersSet
) => {
  const updateFilterInput = (
    key: SelectedFilterKey,
    items: string[] | string
  ) => {
    setFilters({ ...filters, [key]: items });
  };

  const removeFilterInput = (key: SelectedFilterKey, item: string | string[]) => {
    if (filters[key] === "date" || typeof filters[key] === 'string') return setFilters({ ...filters, [key]: "" });
    const items = filters[key].filter((value) => value !== item)
    setFilters({ ...filters, [key]: items });
  };

  return [updateFilterInput, removeFilterInput];
};
