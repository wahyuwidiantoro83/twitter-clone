import React from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi";
import { GoLock } from "react-icons/go";
import { Box, Text, Image, Divider, Avatar } from "@chakra-ui/react";

const UserManagement = () => {
  const navigate = useNavigate();
  const [settingMenu, setSettingMenu] = React.useState([
    {
      id: 1,
      title: "Change User Profile",
      desc: "Change your Name, Email and Avatar",
      path: "/change/username",
      icon: <HiOutlineUser />,
    },
    {
      id: 2,
      title: "Change User Password",
      desc: "Change yourPassword",
      path: "/change/userPassword",
      icon: <GoLock />,
    },
  ]);

  const printSettingOption = () => {
    return settingMenu.map((val, id) => (
      <div>
        <Box
          key={val.id}
          borderRadius={"md"}
          cursor={"context-menu"}
          onClick={() => navigate(val.path)}
          w={"2xl"}
          h={"44"}
          ml={"16"}
          display={"flex"}
          borderBottom={"1px"}
          borderBottomColor={"whiteAlpha.400"}
          _hover={{bg:"cyan.900"}}
        
        >
          <Text my={"auto"} fontSize={"8xl"} fontWeight={"light"}>
            {val.icon}
          </Text>
          <Box
            ml={"6"}
            mt={"10"}
            display={"flex"}
            flexDirection={"column"}
            w={"full"}
          >
            <Text fontSize={"2xl"}>{val.title}</Text>
            {/* <Divider mt={2} mb={2}/> */}
            <Text color={"whiteAlpha.500"}>{val.desc}</Text>
          </Box>
        </Box>
      </div>
    ));
  };

  return (
    <Box bg={"black"} w={"full"} h={"100vh"} color={"white"} display={"flex"}>
      <Box
        w={"full"}
        display={"flex"}
        position={"fixed"}
        backgroundColor={"black"}
        // zIndex={"overlay"}
        // borderBottom={"1px"} borderBottomColor={"white"}
        // pb={"6"}
      >
        <Text fontSize={"4xl"} ml={"4"} mt={"4"} fontWeight={"bold"}>
          Account Management
        </Text>
        <Image src="src/logo.png" boxSize={"40px"} mt={"6"} mx={"60"}></Image>
      </Box>
      <Box display={"flex"} flexDirection={"column"} mt={"32"}>
        {printSettingOption()}
      </Box>
    </Box>
  );
};

export default UserManagement;
