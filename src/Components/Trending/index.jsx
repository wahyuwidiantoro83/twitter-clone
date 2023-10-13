import React from "react";
import { Box, Text, Heading, Icon, HStack } from "@chakra-ui/react";
import { FaEllipsisH } from "react-icons/fa";

const Trends = () => {
  const trendList = [
    {
      id: 1,
      category: "Trending in Indonesia",
      object: "Manchester United Tsunami Tropy",
      nilai: "143,456 posts",
    },
    {
      id: 2,
      category: "Trending in Indonesia",
      object: "Manchester City terkena kasus pencucian uang",
      nilai: "563,456 posts",
    },
    {
      id: 3,
      category: "Trending in Indonesia",
      object: "Manchester United klub dengan thropy terbanyak",
      nilai: "673,456 posts",
    },
    {
      id: 4,
      category: "Trending in Indonesia",
      object: "Manchester City terduga suap wasit",
      nilai: "573,456 posts",
    },
]



  const printData = () => {
    return trendList.map((val) => {
      return (
        <Box
          key={val.id}
          p={2}
          bg="gray.700"
          rounded="lg"
          _hover={{ bg: "gray.800" }}
          display={"flex"}
          flexDirection={"column"}
          alignItems="left"
        >
          <Text fontSize={"11"} color="gray">
            {val.category}
          </Text>
          <Text fontSize="md" color="white">
            {val.object}
          </Text>
          <Text fontSize={"11"} color="gray">
            {val.nilai}
          </Text>
          <HStack ml="auto" spacing={2}>
            <Icon as={FaEllipsisH} color="white" />
          </HStack>
        </Box>
      );
    });
  };

  return (
    <Box p={3} bg="gray.700" rounded="xl">
      <Heading as="h3" size="lg" mb={2} color="white">
        Trends For You
      </Heading>
      {printData()}
    </Box>
  );
};

export default Trends;

