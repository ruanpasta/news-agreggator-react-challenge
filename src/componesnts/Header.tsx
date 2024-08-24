import {
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import NewsIcon from "../assets/news.svg";

const Header = () => {
  const handleClick = () => console.log("handling");

  return (
    <header>
      <Grid
        backgroundColor="gray.900"
        padding="0.75rem"
        gap="1rem"
        borderRadius="8px"
        gridTemplateColumns="repeat(auto-fit, minmax(380px, 1fr))"
        alignItems="center"
      >
        <Flex gap="1rem" alignItems="center">
          <Image src={NewsIcon} alt="logo" height="64px" />
          <Heading>News Agreggator</Heading>
        </Flex>
        <InputGroup size="md">
          <Input placeholder="Type your search" />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              Search
            </Button>
          </InputRightElement>
        </InputGroup>
      </Grid>
    </header>
  );
};

export default Header;
