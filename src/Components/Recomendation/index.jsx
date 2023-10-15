import React from "react";
import { Box, Text, Image, Button, Link } from "@chakra-ui/react";

const Recommendation = ({ user, onFollow, onNavigate }) => {
  return (
    <Box p={4} display="flex" alignItems="center" borderBottom="1px solid #ccc" margin={"4"}>
      <Image src={user.profileImage} alt={user.username} w={12} h={12} mr={4} />
      <Box flex="1">
        <Link onClick={() => onNavigate(user.id)}>
          <Text fontSize="lg">{user.name}</Text>
          <Text fontSize="md" color="gray">
            @{user.username}
          </Text>
        </Link>
      </Box>
      <Button colorScheme="blue" size="sm" onClick={() => onFollow(user.id)}>
        Follow
      </Button>
    </Box>
  );
};

export default Recommendation;
