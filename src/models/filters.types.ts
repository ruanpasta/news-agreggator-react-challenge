import { Dispatch, SetStateAction } from "react";

export type FiltersSet = Dispatch<SetStateAction<FiltersBase>> | (() => void)

export type FiltersContextBase = {
  filters: FiltersBase
  setFilters: FiltersSet
}

export type FiltersBase = {
  query: string
  date: string
  selectedSources: string[],
  selectedAuthors: string[],
  selectedCategories: string[],
  sources: string[]
  authors: string[]
  categories: string[]
}


export type SelectsFilters = {
  filterKey: "selectedCategories" | "selectedAuthors" | "selectedSources";
  fieldKey: "selectedCategory" | "selectedAuthor" | "selectedSource";
  dataKey: "categories" | "authors" | "sources";
  label: string;
};