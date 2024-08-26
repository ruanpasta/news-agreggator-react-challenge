import {
  Flex,
  Heading,
  Image,
  Link,
  Text,
  Tooltip,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import { NoticeBase } from "../models/notice.types";
import { memo } from "react";

interface Props {
  notice: NoticeBase;
  index: number;
}

const Notice = ({ notice, index }: Props) => {
  const { colorMode } = useColorMode();
  const isFirst = index % 6 === 0;
  const isSecond = index % 6 === 1;
  const colSpan = isFirst ? 3 : isSecond ? 2 : 1;
  const colSpanLg = isFirst ? 3 : isSecond ? 1 : 1;

  const gridColum = useBreakpointValue({
    base: `span 1`,
    md: `span ${colSpan}`,
    lg: `span ${colSpanLg}`,
  });

  const formattedDate = () => {
    const options: Intl.DateTimeFormatOptions = {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    };
    return new Date(notice.publishedAt).toLocaleDateString("en-US", options);
  };

  const backgroundColor = colorMode === "dark" ? "gray.700" : "gray.100";

  const textIsFirstColors = isFirst &&
    notice.urlToImage && {
      backgroundColor:
        colorMode === "dark"
          ? "rgba(100, 100, 100, 0.8)"
          : "rgba(200, 200, 200, 0.8)",
      borderRadius: "8px",
      padding: "0.5rem",
    };

  return (
    <Flex
      data-testid="notice-container"
      backgroundColor={backgroundColor}
      borderRadius="8px"
      padding="1rem"
      direction="column"
      gap="1rem"
      gridColumn={gridColum}
      backgroundImage={isFirst ? notice.urlToImage : ""}
    >
      {!isFirst && notice.urlToImage && (
        <Image
          src={notice.urlToImage}
          alt={`Image of news: ${notice.title}`}
          height="128px"
          width="240px"
          objectFit="cover"
          borderRadius="8px"
          minWidth="100%"
        />
      )}
      <Link href={notice.url}>
        <Flex {...textIsFirstColors} direction="column" gap="1rem">
          <Heading size="md">{notice.title}</Heading>
          <Flex gap="0.5rem">
          <Tooltip label={notice.author + ' - ' + notice.source} hasArrow>
            <Text
              data-testid="notice-author-source"
              fontSize="sm"
              fontStyle="italic"
              maxWidth="200px"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
            >
              {notice.author}
              {notice.source && <span> - </span>}
              {notice.source}
            </Text>
          </Tooltip>
          </Flex>
          <Text fontSize="md">{notice.description}</Text>
          <Text fontSize="sm" fontStyle="italic">
            {formattedDate()}
          </Text>
        </Flex>
      </Link>
    </Flex>
  );
};

export default memo(Notice);
