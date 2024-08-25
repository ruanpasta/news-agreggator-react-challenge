import { Grid } from "@chakra-ui/react";
import { NoticeBase } from "../models/notice.types";
import Notice from "./Notice";

interface Props {
  notices: NoticeBase[];
}

const NoticeListLayout = ({ notices }: Props) => {
  console.log("Render List Layout");

  return (
    <Grid
      data-testid="notice-list-container"
      templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
      gap={3}
      marginTop="1rem"
    >
      {notices.map((notice: NoticeBase, index: number) => (
        <Notice notice={notice} index={index} />
      ))}
    </Grid>
  );
};

export default NoticeListLayout;
