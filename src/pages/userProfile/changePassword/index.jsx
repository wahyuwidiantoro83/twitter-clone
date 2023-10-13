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

  const ChangeUserPassword = () => {
    const [account, setAccount] = React.useState([]);
  const [inName, setInName] = React.useState("");
  const [inEmail, setInEmail] = React.useState("");
  const [inPassword, setInPassword] = React.useState("");
  const [inImg, setInImg] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");

  const getAccount = () => {
    axios
      .get(API_URL + `/user`)
      .then((response) => {
        setAccount(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    getAccount();
  }, []);

  const onConfirmPassword = () => {
    
  }

  console.log(account);

  return (
    <>
      <Box
        display={"flex"}
        bg={"black"}
        height={"100vh"}
        color={"white"}
        flexDirection={"column"}
        pb={"8"}
      >
        <Box
          display={"flex"}
          position={"fixed"}
          backgroundColor={"black"}
          zIndex={"overlay"}
          w={"full"}
        >
          <Text fontSize={"4xl"} ml={"4"} mt={"4"} fontWeight={"bold"}>
            Change User Password
          </Text>
          <Image src="src/logo.png" boxSize={"40px"} mt={"6"} mx={"80"}></Image>
        </Box>

        <Box ml={"44"} mt={"32"}>
          <Box fontSize={"3xl"} bg={"black"}>
            
            <FormControl display={"flex"} flexDirection={"column"} mt={"4"}>
              <FormLabel fontSize={"xl"} mb={"6"}>
                Password
              </FormLabel>
              <Input
                mb={"4"}
                width={"2xl"}
                type="password"
                placeholder="Input your password"
                rounded={"lg"}
                onChange={(e) => setInPassword(e.target.value)}
              />
              <Input
                mb={"4"}
                width={"2xl"}
                type="password"
                placeholder="Input your new password"
                rounded={"lg"}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <Input
                width={"2xl"}
                type="password"
                placeholder="confirm your new password"
                rounded={"lg"}
                onChange={(e) => setNewPassword(e.target.value)}
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
  }

  export default ChangeUserPassword