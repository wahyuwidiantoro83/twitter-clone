import React, { useEffect, useState } from "react";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { HiOutlineSparkles } from "react-icons/hi";
import Input from "../Input"; 
import axios from "axios";
import CreateInput from "../Input";

function Header() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Replace this URL with the JSON Server endpoint
    axios
      .get("http://localhost:3000/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Box
      w="100%"
      minH="100vh"
      borderRight="2px"
      borderColor="gray.400"
      color="white"
      py={2}
      bg={"blackAlpha.900"}
    >
      <Box
        top={0}
        bg="blackAlpha.900"
        display="flex"
        justifyContent="space-between"
        fontSize="20px"
        px={4}
        py={2}
      >
        Home
        <Icon as={HiOutlineSparkles} />
      </Box>

      <CreateInput/>

      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </Box>
  );
}

function Post({ post }) {
  return (
    <Box p={4} borderBottom="1px" borderColor="gray.400">
      <Text>{post.title}</Text>
      <Text>{post.body}</Text>
    </Box>
  );
}

export default Header;
