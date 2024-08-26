import {
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  useColorMode,
} from "@chakra-ui/react";
import NewsIcon from "../assets/news.svg";
import { FormEvent, useContext, useState } from "react";
import { FiltersContext } from "../context/filters.context";

const Header = () => {
  const { colorMode } = useColorMode();
  const { filters, setFilters } = useContext(FiltersContext);
  const [query, setQuery] = useState("");

  const handleClick = (event: FormEvent) => {
    event.preventDefault();
    const newFiltersQuery = { query };
    setFilters({ ...filters, ...newFiltersQuery });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <header>
      <Grid
        backgroundColor={colorMode === "dark" ? "gray.700" : "gray.100"}
        padding="0.75rem"
        gap="1rem"
        borderRadius="8px"
        gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        alignItems="center"
      >
        <Flex gap="1rem" alignItems="center">
          <Image src={NewsIcon} alt="logo" height="64px" />
          <Heading>News Agreggator</Heading>
        </Flex>
        <form onSubmit={handleClick}>
          <InputGroup size="md">
            <Input
              placeholder="Type your search"
              value={query}
              onChange={handleInputChange}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" type="submit">
                Search
              </Button>
            </InputRightElement>
          </InputGroup>
        </form>
      </Grid>
    </header>
  );
};

export default Header;
