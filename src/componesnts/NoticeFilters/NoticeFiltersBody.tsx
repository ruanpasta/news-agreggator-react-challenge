import { useContext } from "react";
import { FiltersContext } from "../../context/filters.context";
import {
  Box,
  Checkbox,
  CheckboxGroup,
  Collapse,
  Flex,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useUpdateNoticeBaseFilterInputs } from "../../hooks/useUpdateNoticeBaseFilterInputs";
import { SelectsFilters } from "../../models/filters.types";

type Props = {
  selectedValueKeys: SelectsFilters[];
  isOpen: boolean;
};

const NoticeFiltersBody = ({ selectedValueKeys, isOpen }: Props) => {
  const { filters, setFilters } = useContext(FiltersContext);
  const [updateFilterInput] = useUpdateNoticeBaseFilterInputs(
    filters,
    setFilters
  );

  return (
    <Collapse in={isOpen}>
      <Input
        placeholder="Select Date and Time"
        size="md"
        type="datetime-local"
        marginBottom={4}
        onChange={(event) => updateFilterInput("date", event.target.value)}
      />
      <Flex flexWrap="wrap" gap={6} justifyContent="space-between">
        {selectedValueKeys.map((selectedValueKey) => (
          <Box
            display="flex"
            flexDirection="column"
            gap="0.5rem"
            key={`group-box-${selectedValueKey.fieldKey}`}
          >
            <Heading size="sm"> {selectedValueKey.label}: </Heading>
            <CheckboxGroup
              value={filters[selectedValueKey.filterKey]}
              onChange={(event: string[]) =>
                updateFilterInput(selectedValueKey.filterKey, event)
              }
            >
              <Stack spacing={4}>
                {filters[selectedValueKey.dataKey].map((value) => (
                  <Checkbox key={value} value={value}>
                    {value}
                  </Checkbox>
                ))}
              </Stack>
            </CheckboxGroup>
          </Box>
        ))}
      </Flex>
    </Collapse>
  );
};

export default NoticeFiltersBody;
