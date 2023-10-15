import React from "react";
import { Box, Flex } from "@chakra-ui/react"; // Import Scrollbar component

import FollowBar from "../../Components/Followbar";
import Trends from "../../Components/Trending";
import Follow from "../AccountUser";

const RightBar = () => {
  return (
    <Box bg={"blackAlpha.900"}>
      <Flex
        width="350px"
        right={"0"}
        background={"blackAlpha.900"}
        padding={"4"}
        flexDirection={"column"}
        height={"100vh"}
        shadow={"lg"}
        roundedLeft={"2xl"}
        overflowY="auto" // Enable vertical scrolling
        maxH="100vh" // Set a maximum height
        
      >
        <FollowBar />
        <Trends />
        <Follow/>
      </Flex>
    </Box>
  );
};

export default RightBar;


