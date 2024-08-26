import { Suspense, useState } from "react";
import Header from "../componesnts/Header";
import NoticeList from "../componesnts/NoticeList";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../componesnts/ErrorFallback";
import LoadingFallback from "../componesnts/LoadingFallback";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { FiltersContext } from "../context/filters.context";
import { FiltersBase } from "../models/filters.types";
import NoticeFilters from "../componesnts/NoticeFilters/NoticeFilters";

const Home = () => {
  const [filters, setFilters] = useState<FiltersBase>({
    query: "",
    date: "",
    selectedSources: [],
    selectedAuthors: [],
    selectedCategories: [],
    sources: [],
    authors: [],
    categories: [],
  });

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      <Header />

      <NoticeFilters />

      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary onReset={reset} FallbackComponent={ErrorFallback}>
            <Suspense fallback={<LoadingFallback />}>
              <NoticeList />
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </FiltersContext.Provider>
  );
};

export default Home;
