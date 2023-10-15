import React, { useState } from 'react';
import { Box, Button, Textarea, VStack, Flex, Input, Icon, Image } from '@chakra-ui/react';
import { BsImage, BsEmojiSmile, BsFillCalendarDateFill } from 'react-icons/bs';
import { AiOutlineGif, AiOutlineClose } from "react-icons/ai"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { RiBarChart2Line } from "react-icons/ri"
import axios from 'axios';

const CreateInput = ({ user }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showEmojis, setShowEmojis] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  const addEmoji = (e) => {
    let sym = e.unified.split('-');
    let codesArray = [];
    sym.forEach((el) => codesArray.push('0x' + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };

  const resetInput = () => {
    setInput('');
  };

  const sendPost = async () => {
    if (loading) return;
    setLoading(true);

    // mengirim data ke json server
    const postData = {
      id: user.id,
      username: user.name,
      userImg: user.image,
      text: input,
      timestamp: new Date().toISOString(),
    };

    // server URL posts
    const serverURL = 'http://localhost:3000/posts';

    try {
      await axios.post(serverURL, postData);
      // Handle unggah gambar di sini (jika ada)

      setLoading(false);
      resetInput(); // Reset input after sending the post
      setSelectedFile(null);
      // setShowEmojis(false); // Comment this line out if you want to keep emojis visible
    } catch (error) {
      console.error('Gagal mengirim pos', error);
      setLoading(false);
    }
  };

  return (
    <VStack spacing={4} mt={4} p={4} opacity={loading ? 0.6 : 1}>
      <Flex>
        <Textarea
          w="100%"
          bg="transparent"
          border="none"
          fontSize="20px"
          cols="20" // Set the number of columns to 20
          placeholder="What's Happening?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </Flex>

      {selectedFile && (
        <Box position="relative" mb={4}>
          <Box
            pos="absolute"
            w="8"
            h="8"
            bg="#15181c"
            _hover={{ bg: '#272c26' }}
            bgOpacity="75"
            rounded="full"
            d="flex"
            alignItems="center"
            justifyContent="center"
            top="1"
            left="1"
            cursor="pointer"
            onClick={() => setSelectedFile(null)}
          >
            <Icon as={AiOutlineClose} color="white" h="5" />
          </Box>
          <Image src={selectedFile} alt=""  />
        </Box>
      )}

      <Flex justifyContent="space-between" alignItems="center" spacing="4">
        <Flex spacing="4" fontSize="20px" color="#1d9bf0">
          <label htmlFor="file">
            <Icon as={BsImage} cursor="pointer" />
          </label>
          <input id="file" type="file" hidden onChange={addImageToPost} />
          <Box border="1px" borderColor="#1d9bf0" rounded="md" h="18px" fontSize="16px" d="grid" placeItems="center">
            <Icon as={AiOutlineGif} />
          </Box>
          <Icon as={RiBarChart2Line} transform="rotate(90deg)" />
          <Icon as={BsEmojiSmile} cursor="pointer" onClick={() => setShowEmojis(!showEmojis)} />
          <Icon as={BsFillCalendarDateFill} />
          <Icon as={HiOutlineLocationMarker} />
        </Flex>
        <Button
          bgColor="#1d9bf0"
          color="white"
          rounded="full"
          fontWeight="bold"
          shadow="md"
          _hover={{ bgColor: '#1a8cd8' }}
          isDisabled={!input.trim() && !selectedFile}
          onClick={sendPost}
        >
          Tweet
        </Button>
      </Flex>

      {showEmojis && (
        <Box pos="absolute" mt="-10px" ml="-40px" maxW="320px" rounded="20px">
        </Box>
      )}
    </VStack>
  );
};

export default CreateInput;




