import { Suspense } from "react";
import Header from "../componesnts/Header";
import NoticeList from "../componesnts/NoticeList";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../componesnts/ErrorFallback";
import LoadingFallback from "../componesnts/LoadingFallback";
import { QueryErrorResetBoundary } from "@tanstack/react-query";

const Home = () => {
  console.log("HOME");

  return (
    <>
      <Header />

      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary onReset={reset} FallbackComponent={ErrorFallback}>
            <Suspense fallback={<LoadingFallback />}>
              <NoticeList />
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </>
  );
};

export default Home;
