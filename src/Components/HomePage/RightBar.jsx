import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import FollowBar from "../Followbar";
import Trends from "../Trending";

const RightBar = () => {
  return (
    <Box>
      <Flex
        position={"fixed"}
        width="350px"
        right={"0"}
        background={"black"}
        padding={"4"}
        flexDirection={"column"}
        height={"100vh"}
        shadow={"lg"} 
        roundedLeft={"2xl"}
      >
        <FollowBar/>
        <Trends/>
      </Flex>
    </Box>
  );
};

export default RightBar;
