import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";

interface Props {
  searchMessage: string;
}

const EmptyFallback = ({ searchMessage }: Props) => {
  return (
    <Card variant="filled" marginTop="1rem">
      <CardHeader>
        <Heading
          size="md"
          data-testid="empty-fallback-results-not-found-message"
        >
          {" "}
          Results not found{" "}
        </Heading>
      </CardHeader>
      <CardBody paddingTop={0}>
        <Flex
          data-testid="empty-fallback-cannot-find-results-message"
          gap="0.5rem"
        >
          <Text>Unfortunately, we can not find results with the search: </Text>
          <Text fontWeight="700">{searchMessage}.</Text>
        </Flex>

        <Text>Please try again.</Text>
      </CardBody>
    </Card>
  );
};

export default EmptyFallback;
