import {
  Box,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Image,
  Heading,
  Stack,
  Button,
  Divider,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { json, useNavigate } from "react-router-dom";
import { signinAction } from "../../redux/action/accountAction";
import { API_URL } from "../../helper";
import Swal from "sweetalert2";
import Mixinalert from "../../components/Alert/Mixinalert";

const LoginPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [signinStatus, setSigninStatus] = useState(false);
  const [signinData, setSigninData] = useState({
    username: "",
    password: "",
  });
  const [signupData, setSignupData] = useState({
    email: "",
    name: "",
    username: "",
    password: "",
    confirm: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const togleCLose = () => {
    onClose();
    setSigninStatus(false);
    setSigninData({
      username: "",
      password: "",
    });
    setSignupData({
      email: "",
      name: "",
      username: "",
      password: "",
      confirm: "",
    });
  };

  const onButtonSubmit = () => {
    if (signinStatus) {
      if (signinData.username && signinData.password) {
        axios
          .get(API_URL + "/user", {
            params: {
              username: signinData.username,
              password: signinData.password,
            },
          })
          .then((response) => {
            console.log(response.data);
            if (response.data.length !== 0) {
              console.log(response.data[0]);
              dispatch(signinAction(response.data[0]));
              localStorage.setItem(
                "loginData",
                JSON.stringify(response.data[0])
              );
              navigate("/timeline");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      if (
        signupData.email &&
        signupData.name &&
        signupData.username &&
        signupData.password &&
        signupData.confirm
      ) {
        axios
          .get(API_URL + `/user`, {
            params: {
              email: signupData.email,
              username: signupData.username,
            },
          })
          .then((response) => {
            if (response.data.length > 0) {
              Mixinalert(false, "Account already exist");
            } else {
              axios
                .post(API_URL + `/user`, {
                  email: signupData.email,
                  name: signupData.name,
                  username: signupData.username,
                  password: signupData.password,
                  img: "",
                })
                .then((response) => {
                  console.log(response.data);
                  Mixinalert(true, "Signup succes, Login now to explore");
                })
                .catch((err) => {
                  console.log(err);
                });
            }
          });
      }
    }
  };

  console.log(signinData);

  return (
    <Container
      minHeight={"100vh"}
      backgroundColor={"blackAlpha.900"}
      minWidth={"100vw"}
      alignItems={"center"}
      color={"whiteAlpha.900"}
    >
      <Flex width={"100%"} minHeight={"inherit"}>
        <Flex
          flexDir={"column"}
          width={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box boxSize={"350px"}>
            <Image src={logo} />
          </Box>
        </Flex>
        <Flex width={"100%"} alignItems={"center"}>
          <Stack gap={"30px"}>
            <Heading size={"3xl"}>Discover Something New</Heading>
            <Heading>Join Now!</Heading>
            <Stack width={"60%"} mt={"20px"}>
              <Button
                fontSize={"lg"}
                colorScheme={"blue"}
                borderRadius={"full"}
                h={"50px"}
                onClick={onOpen}
              >
                Sign Up
              </Button>
              <small>
                By registering, you agree to the Terms of Service and Privacy
                Policy, including Use of Cookies.
              </small>
              <Divider orientation="horizontal" mt={"20px"} />
              <Text fontWeight={"bold"} mt={"20px"}>
                Already have an account?
              </Text>
              <Button
                fontSize={"lg"}
                colorScheme="blue"
                variant={"outline"}
                borderRadius={"full"}
                h={"50px"}
                onClick={() => {
                  onOpen();
                  setSigninStatus(true);
                }}
              >
                Sign In
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </Flex>
      <Modal isOpen={isOpen} onClose={togleCLose} size={"xl"} isCentered>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent
          backgroundColor={"black"}
          color={"whiteAlpha.900"}
          borderRadius={"20px"}
          padding={"20px"}
        >
          <ModalHeader>
            <Heading>{signinStatus ? "Sign In" : "Sign Up"}</Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack gap={"15px"}>
              {signinStatus ? (
                <>
                  <FormControl>
                    <FormLabel>Username</FormLabel>
                    <Input
                      type="text"
                      placeholder="Enter your username"
                      onChange={(e) =>
                        setSigninData({
                          ...signinData,
                          username: e.target.value,
                        })
                      }
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      onChange={(e) =>
                        setSigninData({
                          ...signinData,
                          password: e.target.value,
                        })
                      }
                    />
                  </FormControl>
                </>
              ) : (
                <>
                  <FormControl>
                    <FormLabel>Email address</FormLabel>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      onChange={(e) => {
                        setSignupData({ ...signupData, email: e.target.value });
                      }}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Full Name</FormLabel>
                    <Input
                      type="text"
                      placeholder="Enter your full name"
                      onChange={(e) => {
                        setSignupData({ ...signupData, name: e.target.value });
                      }}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Username</FormLabel>
                    <Input
                      type="text"
                      placeholder="Enter your username"
                      onChange={(e) => {
                        setSignupData({
                          ...signupData,
                          username: e.target.value,
                        });
                      }}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      onChange={(e) => {
                        setSignupData({
                          ...signupData,
                          password: e.target.value,
                        });
                      }}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Confirm Password</FormLabel>
                    <Input
                      type="password"
                      placeholder="Confirm your password"
                      onChange={(e) => {
                        setSignupData({
                          ...signupData,
                          confirm: e.target.value,
                        });
                      }}
                    />
                  </FormControl>
                </>
              )}
            </Stack>
          </ModalBody>

          <ModalFooter justifyContent={"center"}>
            <Button
              width={"100%"}
              h={"50px"}
              borderRadius={"full"}
              colorScheme="blue"
              onClick={() => {
                onButtonSubmit();
                togleCLose();
              }}
            >
              {signinStatus ? "Sign In" : "Sign Up"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default LoginPage;
