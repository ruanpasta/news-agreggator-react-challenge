import { Dispatch, SetStateAction } from "react";

export type FiltersContextBase = {
  filters: FiltersBase
  setFilters: Dispatch<SetStateAction<FiltersBase>> | (() => void)
}

export type FiltersBase = {
  query: string
  date: string
}