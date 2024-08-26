import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import { FallbackProps } from "react-error-boundary";

const ErrorFallback = ({ resetErrorBoundary }: FallbackProps) => {

  return (
    <Card variant="filled" border="1px solid red" marginTop='2rem'>
      <CardHeader>
        <Heading size="md"> Oops, something went wrong: </Heading>
      </CardHeader>
      <CardBody>
        <Text>We can not get the news</Text>
        <Button onClick={resetErrorBoundary} colorScheme="teal" mt="10px">
          Try Again
        </Button>
      </CardBody>
    </Card>
  );
};

export default ErrorFallback;
