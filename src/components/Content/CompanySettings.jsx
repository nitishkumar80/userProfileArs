import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

function CompanySettings() {
  return (
    <Box width="100%" p={6}>
      {/* Training Videos Section */}
      <Box mb={10}>
        <Heading as="h3" size="lg" mb={4}>
          Training Videos
        </Heading>
        <Flex overflowX="scroll" gap={4}>
          <Box flex="0 0 auto" width="300px">
            <Image
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fitness-training-youtube-thumbnail-design-template-129a539e3d0534c992daa93ea87e232d_screen.jpg?ts=1627633294"
              alt="Training Video 1"
              width="100%"
            />
            <Text mt={2}>Training Video 1</Text>
          </Box>
          <Box flex="0 0 auto" width="300px">
            <Image
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/improve-your-training-youtube-thumbnail-desig-design-template-e0574b1bbab8f122025edf3448842e6a_screen.jpg?ts=1604314169"
              alt="Training Video 2"
              width="100%"
            />
            <Text mt={2}>Training Video 2</Text>
          </Box>
          {/* Add more VideoCards as needed */}
        </Flex>
      </Box>

      {/* View Sessions Section */}
      <Box mb={10}>
        <Heading as="h3" size="lg" mb={4}>
          View Sessions
        </Heading>
        <Flex overflowX="scroll" gap={4}>
          <Box flex="0 0 auto" width="300px">
            <Image
              src="https://media.gettyimages.com/id/1439810396/video/manchester-city-squad-stretching-during-open-training-session.jpg?s=640x640&k=20&c=X5gYqM6p9hB11k3GDqYt940YbllgFvwWMmgR-hmYs-g="
              alt="Session 1"
              width="100%"
            />
            <Text mt={2}>Session 1</Text>
          </Box>
          <Box flex="0 0 auto" width="300px">
            <Image
              src="https://media.gettyimages.com/id/1439810396/video/manchester-city-squad-stretching-during-open-training-session.jpg?s=640x640&k=20&c=X5gYqM6p9hB11k3GDqYt940YbllgFvwWMmgR-hmYs-g="
              alt="Session 2"
              width="100%"
            />
            <Text mt={2}>Session 2</Text>
          </Box>
          {/* Add more SessionCards as needed */}
        </Flex>
      </Box>

      {/* View Tournament Section */}
      <Box mb={10}>
        <Heading as="h3" size="lg" mb={4}>
          View Tournament
        </Heading>
        <Flex overflowX="scroll" gap={4}>
          <Box flex="0 0 auto" width="300px">
            <Image
              src="https://ss-i.thgim.com/public/incoming/a4m111/article68598760.ece/alternates/FREE_1200/_2S36985.jpg"
              alt="Tournament 1"
              width="100%"
            />
            <Text mt={2}>Tournament 1</Text>
          </Box>
          <Box flex="0 0 auto" width="300px">
            <Image
              src="https://www.prokabaddi.com/static-assets/waf-images/0d/a9/35/16-9/fPzcglYTYH.jpg?v=2.18&w=600"
              alt="Tournament 2"
              width="100%"
            />
            <Text mt={2}>Tournament 2</Text>
          </Box>
          <Box flex="0 0 auto" width="300px">
            <Image
              src="https://www.shutterstock.com/image-vector/concept-sportsman-playing-kabaddi-banner-260nw-1446274064.jpg"
              alt="Tournament 3"
              width="100%"
            />
            <Text mt={2}>Tournament 3</Text>
          </Box>
          {/* Add more TournamentCards as needed */}
        </Flex>
      </Box>
    </Box>
  );
}

export default CompanySettings;
