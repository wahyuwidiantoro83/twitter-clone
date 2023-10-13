import React from "react";
import {
    Box,
    Text,
    Input,
    Button,
    Stack,
  } from "@chakra-ui/react";
  
  const FollowBar = () => {
    return (
      <Box p={4} display={{ base: "none", lg: "block" }}>
            <Input
            rounded={"xl"}
              placeholder="Search"
              size="lg"
              variant="filled"
              bg="gray.700"
              color="white"
            />
      </Box>
    );
  };
  
  export default FollowBar;
  