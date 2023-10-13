import React from "react";
import { useNavigate } from "react-router-dom";
import { BiHomeCircle } from "react-icons/bi";
import { BsSearch, BsFillPersonFill } from "react-icons/bs";
import { MdNotificationsActive, MdMessage } from "react-icons/md";
import { FaListAlt } from "react-icons/fa";
import { Box, Flex, Text, Spacer, Avatar} from "@chakra-ui/react";

const SideNav = () => {
  const navigate = useNavigate();

  const sideNavStyle = {
    position: "fixed",
    left: 0,
    top: 0,
    bottom: 0,
    width: "300px", 
    background: "black",
  };

  const [menu, setMenu] = React.useState([
    {
      id: 2,
      title: "Home",
      icon: <BiHomeCircle size={35} style={{ margin: "auto" }} />,
    },
    {
      id: 3,
      title: "Explore",
      icon: <BsSearch size={35} style={{ margin: "auto" }} />,
    },
    {
      id: 4,
      title: "Notifications",
      icon: <MdNotificationsActive size={35} style={{ margin: "auto" }} />,
    },
    {
      id: 5,
      title: "Messages",
      icon: <MdMessage size={35} style={{ margin: "auto" }} />,
    },
    {
      id: 6,
      title: "Lists",
      icon: <FaListAlt size={35} style={{ margin: "auto" }} />,
    },
    {
      id: 7,
      title: "Profile",
      icon: <BsFillPersonFill size={35} style={{ margin: "auto" }} />,
    },
  ]);

  const userProfile = {
    name: "Nama Pengguna",
    username: "@username",
    avatarUrl: "URL_FOTO_PROFIL", // Gantilah dengan URL foto profil pengguna Anda
  };

  return (
    <Box style={sideNavStyle} padding={"4"} shadow={"lg"} roundedRight={"2xl"}>
      <Flex flexDirection={"column"} alignContent={"center"} gap={"4"}>
        {menu.map((val, idx) => {
          return (
            <Flex
              key={val.id}
              // onClick={() => navigate(val.path)}
              align={"center"}
              color={"gray.400"}
              _hover={{
                color: "gray",
                textColor: "gray",
                bg: "gray-200",
                rounded: "md",
              }}
              cursor={"pointer"}
            >
              <Box margin={"3"} _hover={{ color: "green" }}>{val.icon}</Box>
              <Text
                fontSize={"xl"}
                textAlign={"center"}
                _hover={{ color: "green" }}
              >
                {val.title}
              </Text>
            </Flex>
          );
        })}
      </Flex>
      <Flex flexDirection="row" align="center" style={{ position: "absolute", bottom: "20px" }}>
        <Avatar size="md" src={userProfile.avatarUrl} />
        <Flex flexDirection="column" marginLeft="2">
          <Text fontSize="sm" fontWeight="bold">{userProfile.name}</Text>
          <Text fontSize="xs">{userProfile.username}</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default SideNav;
