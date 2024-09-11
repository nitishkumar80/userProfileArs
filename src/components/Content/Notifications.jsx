import { Box, Heading, Text, Flex, Button, Icon } from '@chakra-ui/react';


function PlanPage() {
  return (
    <Box p={6} maxW="800px" mx="auto">
      {/* Plan Description Section */}
      <Flex alignItems="center" mb={6}>
        <Icon w={8} h={8} color="teal.500" mr={3} />
        <Heading as="h2" size="lg">
          Plan Description
        </Heading>
      </Flex>

      <Box
        bg="white"
        p={6}
        borderRadius="md"
        boxShadow="md"
        border="1px solid"
        borderColor="gray.200"
        mb={8}
      >
        <Text fontSize="md" color="gray.700" lineHeight="tall">
          This plan helps improve endurance and muscle strength, offering a balanced mix of aerobic exercises, resistance training, and recovery days to ensure you achieve optimal fitness results.
        </Text>
      </Box>

      {/* Change Subscription Plan Section */}
      <Flex alignItems="center" mb={6}>
        <Icon  w={8} h={8} color="teal.500" mr={3} />
        <Heading as="h2" size="lg">
          Change Subscription Plan
        </Heading>
      </Flex>

      <Box
        bg="white"
        p={6}
        borderRadius="md"
        boxShadow="md"
        border="1px solid"
        borderColor="gray.200"
        mb={8}
      >
        <Text fontSize="lg" mb={4}>
          <strong>Current Plan:</strong> Gold
        </Text>
        <Button
          colorScheme="teal"
          size="md"
          onClick={() => alert('Upgrading to Platinum')}
        >
          Upgrade to Platinum
        </Button>
      </Box>
    </Box>
  );
}

export default PlanPage;
