import { Flex, Spinner } from '@chakra-ui/react';

const LoadingFallback = () => {
  return (
    <Flex justifyContent='center' marginTop='3rem'>
      <Spinner size='xl' />
    </Flex>
  );
};

export default LoadingFallback;
