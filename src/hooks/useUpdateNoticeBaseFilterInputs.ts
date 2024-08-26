import { useEffect } from "react";
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

  const removeFilterInput = (key: SelectedFilterKey, item: string) => {
    if (filters[key] === "date") return setFilters({ ...filters, [key]: "" });
    const items = (filters[key] as string[]).filter((value) => value !== item);
    setFilters({ ...filters, [key]: items });
  };

  const removeAllFilters = () => {
    setFilters({
      ...filters,
      selectedAuthors: [],
      selectedCategories: [],
      selectedSources: [],
      date: "",
    });
  };

  useEffect(() => {
    localStorage.setItem("filters", JSON.stringify(filters));
  }, [filters]);

  return { updateFilterInput, removeFilterInput, removeAllFilters };
};
