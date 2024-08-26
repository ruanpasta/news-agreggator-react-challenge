import { Card, CardBody, useDisclosure } from "@chakra-ui/react";
import NoticeFiltersHeader from "./NoticeFiltersHeader";
import { SelectsFilters } from "../../models/filters.types";
import NoticeFiltersBody from "./NoticeFiltersBody";

const NoticeFilters = () => {
  const { isOpen, onToggle } = useDisclosure();

  const selectedValueKeys: SelectsFilters[] = [
    {
      filterKey: "selectedCategories",
      fieldKey: "selectedCategory",
      dataKey: "categories",
      label: "Categories",
    },
    {
      filterKey: "selectedAuthors",
      fieldKey: "selectedAuthor",
      dataKey: "authors",
      label: "Authors",
    },
    {
      filterKey: "selectedSources",
      fieldKey: "selectedSource",
      dataKey: "sources",
      label: "Sources",
    },
  ];

  return (
    <Card variant="filled" marginTop="1rem">
      <CardBody>
        <NoticeFiltersHeader
          selectedValueKeys={selectedValueKeys}
          isOpen={isOpen}
          onToggle={onToggle}
        />
        <NoticeFiltersBody
          selectedValueKeys={selectedValueKeys}
          isOpen={isOpen}
        />
      </CardBody>
    </Card>
  );
};

export default NoticeFilters;
