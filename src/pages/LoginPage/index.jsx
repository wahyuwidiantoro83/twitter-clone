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
import logo from "./logo.png";

const LoginPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
                onClick={onOpen}
              >
                Sign In
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} size={"xl"} isCentered>
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
            <Heading>Sign Up</Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack gap={"15px"}>
              <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input type="email" placeholder="Enter your email" />
              </FormControl>
              <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Input type="text" placeholder="Enter your full name" />
              </FormControl>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input type="text" placeholder="Enter your username" />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder="Enter your password" />
              </FormControl>
            </Stack>
          </ModalBody>

          <ModalFooter justifyContent={"center"}>
            <Button
              width={"100%"}
              h={"50px"}
              borderRadius={"full"}
              colorScheme="blue"
            >
              Sign Up
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default LoginPage;
