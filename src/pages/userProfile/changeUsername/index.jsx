import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import axios from "axios";
import { API_URL } from "../../../helper";
import React from "react";
import { useSelector } from "react-redux";

 const ChangeUsername = () => {
  const [account, setAccount] = React.useState([]);
  const [inName, setInName] = React.useState("");
  const [inEmail, setInEmail] = React.useState("");
  const [inImg, setInImg] = React.useState("");
  const getName = useSelector((state)=> state.accountReducer.name)
  const getEmail = useSelector((state)=> state.accountReducer.email)

  const getAccount = () => {
    axios
      .get(API_URL + `/user`)
      .then((response) => {a
        setAccount(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    getAccount();
  }, []);

  const onConfirmAccount = () => {
    
  }

  console.log(account);

  return (
    <>
      <Box
        display={"flex"}
        bg={"black"}
        height={"full"}
        color={"white"}
        flexDirection={"column"}
        h={"full"}
        pb={"8"}
      >
        <Box
          display={"flex"}
          position={"fixed"}
          backgroundColor={"black"}
          zIndex={"overlay"}
        >
          <Text fontSize={"4xl"} ml={"4"} mt={"4"} fontWeight={"bold"}>
            Change User Profile
          </Text>
          <Image src="src/logo.png" boxSize={"40px"} mt={"6"} mx={"80"}></Image>
        </Box>

        <Box ml={"44"} mt={"32"}>
          <Box fontSize={"3xl"} bg={"black"}>
            <FormControl width={"fit-content"} pb={"4"} mb={"4"}>
              <FormLabel fontSize={"xl"}>Username</FormLabel>
              <Text fontSize={"small"} color={"whiteAlpha.700"}>
                Your Current Name {getName()}
              </Text>
              <Input
                width={"2xl"}
                type="text"
                placeholder="Input Your New Name"
                rounded={"lg"}
                onChange={(e) => setInName(e.target.value)}
              />
            </FormControl>
            <FormControl pb={"4"} mb={"4"}>
              <FormLabel fontSize={"xl"}>Email</FormLabel>
              <Text fontSize={"small"} color={"whiteAlpha.700"}>
                Your Current Email {getEmail()}
              </Text>
              <Input
                width={"2xl"}
                type="text"
                placeholder="Input Your New Email"
                rounded={"lg"}
                onChange={(e) => setInEmail(e.target.value)}
              />
            </FormControl>
            <FormControl pb={"4"} mb={"4"}>
              <FormLabel fontSize={"xl"}>Avatar</FormLabel>
              <Text fontSize={"small"} color={"whiteAlpha.700"}>
                Input Your New Avatar Image
              </Text>
              <Input
                width={"2xl"}
                type="text"
                placeholder="Input Your New Avatar"
                rounded={"lg"}
                onChange={(e) => setInImg(e.target.value)}
              />
            </FormControl>
            
            <ButtonGroup
              display={"flex"}
              justifyContent={"end"}
              width={"2xl"}
              mt={"10"}
            >
              <Button type="button" colorScheme="whatsapp">
                Confirm
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
      </Box>
    </>
  );
};


export default ChangeUsername