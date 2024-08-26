import { Grid } from "@chakra-ui/react";
import { NoticeBase } from "../models/notice.types";
import Notice from "./Notice";
import { useNoticesQueries } from "../hooks/useNoticesQueries";
import { useContext } from "react";
import { FiltersContext } from "../context/filters.context";
import EmptyFallback from "./EmptyFallback";
import { useNoticeBaseFilters } from "../hooks/useNoticeBaseFilters";
import { useNoticeBaseDataFilters } from "../hooks/useNoticeBaseDataFilters";

const NoticeList = () => {
  const { filters, setFilters } = useContext(FiltersContext);

  // This strategy allows for easy switching between APIs and facilitates the addition of new APIs.
  const noticesQueries = useNoticesQueries(
    ["newYorkTimes", "theGuardianApi", "newsApi"],
    filters
  );
  const notices =
    noticesQueries && noticesQueries.length
      ? noticesQueries?.map((noticeQuery) => noticeQuery.data.notices).flat()
      : [];

  useNoticeBaseDataFilters(notices, filters, setFilters);

  const [filteredNotices] = useNoticeBaseFilters(notices, filters);

  return (
    <>
      {!notices.length && <EmptyFallback search={filters.query} />}

      <Grid
        data-testid="notice-list-container"
        templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        gap={3}
        marginTop="1rem"
      >
        {filteredNotices?.map((notice: NoticeBase, index: number) => (
          <Notice notice={notice} index={index} key={notice.id} />
        ))}
      </Grid>
    </>
  );
};

export default NoticeList;
