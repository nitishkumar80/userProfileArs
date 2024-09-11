import { Box, Heading, Text, Flex, Icon } from '@chakra-ui/react';


function DietPlan() {
  return (
    <Box p={6} maxW="800px" mx="auto">
      {/* Diet Plan Section Header */}
      <Flex alignItems="center" mb={6}>
        <Icon  w={8} h={8} color="teal.500" mr={3} />
        <Heading as="h2" size="lg">
          Diet Plan
        </Heading>
      </Flex>

      {/* Diet Plan Card */}
      <Box
        bg="white"
        p={6}
        borderRadius="md"
        boxShadow="md"
        border="1px solid"
        borderColor="gray.200"
        mb={8}
      >
        <Heading as="h3" size="md" mb={4} color="teal.600">
          Daily Diet Schedule
        </Heading>
        <Text fontSize="lg" mb={2}>
          <strong>Morning:</strong> Oats, Eggs
        </Text>
        <Text fontSize="lg" mb={2}>
          <strong>Afternoon:</strong> Chicken, Rice
        </Text>
        <Text fontSize="lg" mb={2}>
          <strong>Evening:</strong> Fish, Veggies
        </Text>
      </Box>

      {/* Plan Description */}
      <Box
        bg="gray.50"
        p={6}
        borderRadius="md"
        boxShadow="md"
        border="1px solid"
        borderColor="gray.200"
      >
        <Heading as="h3" size="md" mb={4} color="teal.600">
          Plan Description
        </Heading>
        <Text fontSize="md" color="gray.700" lineHeight="tall">
          This diet plan is crafted to provide balanced nutrition throughout the day. The morning meal is rich in proteins and fibers, helping boost energy levels. The afternoon includes a balanced portion of carbohydrates and proteins to maintain stamina, while the evening focuses on light proteins and veggies to aid digestion and recovery.
        </Text>
      </Box>
    </Box>
  );
}

export default DietPlan;
