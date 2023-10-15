import React, { useState, useEffect } from 'react';
import { Box, Image, Text, IconButton, Flex } from '@chakra-ui/react';
import { BsChat } from 'react-icons/bs';
import { FaRetweet } from 'react-icons/fa';
import { AiOutlineHeart, AiOutlineShareAlt, AiFillHeart } from 'react-icons/ai';
import Moment from 'react-moment';
import axios from 'axios';

const Post = ({ post }) => {


  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      padding="4"
      cursor="pointer"
    >
      <Flex>
        <Image
          src={post.userImg}
          alt={post.username}
          boxSize="50px"
          borderRadius="full"
        />
        <Box ml="3">
          <Text fontSize="lg" fontWeight="medium">{post.username}</Text>
          <Flex>
            <Text color="gray.500" mr="1">@{post.tag} · </Text>
            <Text color="gray.500">
              <Moment fromNow>{post.timestamp}</Moment>
            </Text>
          </Flex>
        </Box>
      </Flex>
      <Text mt="4">{post.text}</Text>
      <Image
        src={post.image}
        maxH="450px"
        objectFit="cover"
        borderRadius="lg"
        mt="2"
      />
      <Flex mt="4" justify="space-between">
        <Flex align="center">
          <IconButton
            icon={<BsChat />}
            onClick={() => openModal()}
          />
          {comments.length > 0 && <Text fontSize="sm">{comments.length}</Text>}
        </Flex>
        <IconButton icon={<FaRetweet />} />
        <Flex align="center" onClick={toggleLike}>
          {liked ? (
            <IconButton icon={<AiFillHeart />} color="pink.700" />
          ) : (
            <IconButton icon={<AiOutlineHeart />} />
          )}
          {likes.length > 0 && (
            <Text fontSize="sm" color={liked ? "pink.700" : undefined}>
              {likes.length}
            </Text>
          )}
        </Flex>
        <IconButton icon={<AiOutlineShareAlt />} />
      </Flex>
    </Box>
  );
};

export default Post;


