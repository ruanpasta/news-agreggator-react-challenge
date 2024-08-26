import { Grid } from "@chakra-ui/react";
import { NoticeBase } from "../models/notice.types";
import Notice from "./Notice";
import { useNoticesQueries } from "../hooks/useNoticesQueries";
import { memo, useContext } from "react";
import { FiltersContext } from "../context/filters.context";

const NoticeList = () => {
  const { filters } = useContext(FiltersContext);
  const noticesQueries = useNoticesQueries(
    ["newsApi", "theGuardianApi",  "newYorkTimes"],
    filters
  );
  const notices = noticesQueries
    .map((noticeQuery) => noticeQuery.data.notices)
    .flat();

  console.log("NOTICE LIST");

  return (
    <>
      <Grid
        data-testid="notice-list-container"
        templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        gap={3}
        marginTop="1rem"
      >
        {notices?.map((notice: NoticeBase, index: number) => (
          <Notice notice={notice} index={index} key={notice.id} />
        ))}
      </Grid>
    </>
  );
};

export default memo(NoticeList);
