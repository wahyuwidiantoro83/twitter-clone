import React, { useState, useEffect } from "react";
import { Box, Heading, Button, Text } from "@chakra-ui/react";
import Recommendation from "../../Components/Recomendation";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { FaUser } from "react-icons/fa"
import { BsPersonCircle } from "react-icons/bs"

const Follow = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [following, setFollowing] = useState([]);
  const [userAccounts, setUserAccounts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Ambil data akun rekomendasi, akun yang diikuti, dan data akun user dari API JSON Server
    axios
      .get("http://localhost:2023/recommendations")
      .then((response) => setRecommendations(response.data));

    axios
      .get("http://localhost:2023/following")
      .then((response) => setFollowing(response.data));

    axios
      .get("http://localhost:2023/userAccounts")
      .then((response) => setUserAccounts(response.data));
  }, []);

  const handleFollow = (userId) => {
   
    axios
      .post("http://localhost:2023/following", { userId })
      .then((response) => {
        // Update state setelah melakukan follow
        setFollowing([...following, response.data]);
      });
  };

  const handleNavigate = (userId) => {
    // Navigasi ke halaman akun dengan ID userId
    navigate(`/account/${userId}`);
  };



  const renderRecommendations = () => {
    return recommendations.map((user) => (
      <Box
        key={user.id}
        p={"2"}
        bg="gray.700"
        rounded="lg"
        _hover={{ bg: "gray.800" }}
        display="flex"
        flexDirection="row" // Menggunakan row untuk meletakkan ikon dan teks berdampingan
        alignItems="center" // Menyentuh ikon ke tengah vertikal
      >
        <BsPersonCircle size={48} color="white" /> 
        <Box ml={2}>
          <Text fontSize={"md"} color={"white"}>{user.name}</Text>
          <Text fontSize={"sm"} color={"gray"}>
            @{user.username}
          </Text>
        </Box>
        <Button
          colorScheme="blue"
          size="sm"
          onClick={() => handleFollow(user.id)}
          ml="auto" // Meletakkan tombol "Follow" ke ujung kanan
        >
          Follow +
        </Button>
      </Box>
    ));
  };
  
  return (
    <Box p={3} bg="gray.700" rounded="xl" mt={"2"}>
      <Heading as="h3" size={"sm"} mb={2} color="white">
        Who to follow
      </Heading>
      {renderRecommendations()}
    </Box>
  );
  
};

export default Follow;
