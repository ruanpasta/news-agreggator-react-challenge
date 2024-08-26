import { Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";

const EmptyFallback = (search: any) => {
  return (
    <Card variant="filled" marginTop="1rem">
      <CardHeader>
        <Heading size="md"> Results not found </Heading>
      </CardHeader>
      <CardBody>
        {typeof search === "string" && (
          <Text>
            Unfortunately, we can not find results with the search: {search}.
          </Text>
        )}
        <Text>Please try again.</Text>
      </CardBody>
    </Card>
  );
};

export default EmptyFallback;
