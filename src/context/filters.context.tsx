import { createContext } from "react";
import { FiltersContextBase } from "../models/filters.types";

const setFilters = () => null;
export const FiltersContext = createContext<FiltersContextBase>({
  filters: {
    query: "",
    date: "",
    sources: [],
    authors: [],
    categories: [],
    selectedSources: [],
    selectedAuthors: [],
    selectedCategories: [],
  },
  setFilters,
});
