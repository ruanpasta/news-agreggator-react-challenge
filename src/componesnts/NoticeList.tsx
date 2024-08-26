import { Grid } from "@chakra-ui/react";
import { NoticeBase } from "../models/notice.types";
import Notice from "./Notice";
import { useNoticesQueries } from "../hooks/useNoticesQueries";

const NoticeList = () => {
  console.log("NOTICE LIST");
  const noticesQueries = useNoticesQueries(["newsApi"]);

  return (
    <>
      {noticesQueries?.map((noticeQuerie, index) => (
        <Grid
          data-testid="notice-list-container"
          templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
          gap={3}
          marginTop="1rem"
          key={noticeQuerie.data?.id || index}
        >
          {noticeQuerie.data?.notices?.map(
            (notice: NoticeBase, index: number) => (
              <Notice notice={notice} index={index} key={notice.id} />
            )
          )}
        </Grid>
      ))}
    </>
  );
};

export default NoticeList;
