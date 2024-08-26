import { useContext } from "react";
import { FiltersContext } from "../../context/filters.context";
import { Badge, Flex, Heading, IconButton } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon, CloseIcon } from "@chakra-ui/icons";
import { useUpdateNoticeBaseFilterInputs } from "../../hooks/useUpdateNoticeBaseFilterInputs";
import { SelectsFilters } from "../../models/filters.types";

type Props = {
  selectedValueKeys: SelectsFilters[];
  isOpen: boolean;
  onToggle: () => void;
};

const NoticeFiltersHeader = ({
  selectedValueKeys,
  isOpen,
  onToggle,
}: Props) => {
  const { filters, setFilters } = useContext(FiltersContext);
  const { removeFilterInput } = useUpdateNoticeBaseFilterInputs(
    filters,
    setFilters
  );

  const badgeColorScheme = (value: string) =>  {
    if (value === 'categories') return 'green'; 
    if (value === 'authors') return 'yellow';
    return 'purple' 
  }

  return (
    <Flex
      justifyContent="space-between"
      gap={4}
      alignItems="center"
      marginBottom="1rem"
    >
      <Heading size="md"> Filters: </Heading>
      <Flex gap={2} flexWrap="wrap" alignItems="center" justifyContent="center">
        {selectedValueKeys.map((selectedValueKey) => {
          return filters[selectedValueKey.filterKey]?.map((select) => (
            <Badge
              colorScheme={badgeColorScheme(selectedValueKey.dataKey)}
              key={`selects-badge-${select}`}
              maxWidth={{ base: "80px", md: "120px", lg: "150px" }}
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              cursor='pointer'
              tabIndex={1}
              onClick={() => removeFilterInput(selectedValueKey.filterKey, select)}
            >
              {select}{" "}
              <IconButton
                icon={<CloseIcon />}
                aria-label="close"
                onClick={() =>
                  removeFilterInput(selectedValueKey.filterKey, select)
                }
                variant="solid"
                size="xl"
                margin="0.25rem"
              />
            </Badge>
          ));
        })}
      </Flex>
      <IconButton
        icon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        aria-label={isOpen ? "Collapse" : "Expand"}
        onClick={onToggle}
        variant="outline"
        mb={2}
        alignSelf="flex-start"
      />
    </Flex>
  );
};

export default NoticeFiltersHeader;
