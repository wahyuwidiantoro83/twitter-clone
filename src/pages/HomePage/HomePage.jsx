import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BiHomeCircle } from 'react-icons/bi';
import { BsSearch, BsFillPersonFill } from 'react-icons/bs';
import { MdNotificationsActive, MdMessage } from 'react-icons/md';
import { FaListAlt } from 'react-icons/fa';
import { Box, Flex, Text, Spacer, Avatar, Button } from '@chakra-ui/react';
import { FaTwitter } from 'react-icons/fa'; // Added Twitter icon

const SideNav = () => {
  const navigate = useNavigate();

  const sideNavStyle = {
    left: 0,
    top: 0,
    bottom: 0,
    width: '300px',
  };

  const [menu, setMenu] = React.useState([
    {
      id: 1, 
      label: '',
      icon: <FaTwitter size={35} style={{ margin: 'auto' }}/>
    },
    {
      id: 2,
      label: 'Home',
      icon: <BiHomeCircle size={35} style={{ margin: 'auto' }}/>
    },
    {
      id: 3,
      label: 'Explore',
      icon: <BsSearch size={35} style={{ margin: 'auto' }}/>
    },
    {
      id: 4,
      label: 'Notifications',
      icon: <MdNotificationsActive size={35} style={{ margin: 'auto' }}/>
    },
    {
      id: 5,
      label: 'Messages',
      icon: <MdMessage size={35} style={{ margin: 'auto' }}/>
    },
    {
      id: 6,
      label: 'Lists',
      icon: <FaListAlt size={35} style={{ margin: 'auto' }}/>
    },
    {
      id: 7,
      label: 'Profile',
      icon: <BsFillPersonFill size={35} style={{ margin: 'auto' }}/>
    },
  ]);

  const userProfile = {
    name: 'Nama Pengguna',
    username: '@username',
    avatarUrl: 'URL_FOTO_PROFIL', // Replace with your profile picture URL
  };

  return (
    <Box
      style={sideNavStyle}
      padding={'4'}
      shadow={'lg'}
      roundedRight={'2xl'}
      bg={"blackAlpha.900"}
      borderRight={'2px solid white'}
    >
      <Flex flexDirection={'column'} alignContent={'center'} gap={'4'}>
        {menu.map((val, idx) => {
          return (
            <Flex
              key={val.id}
              // onClick={() => navigate(val.path)}
              align={'center'}
              color={'gray.400'}
              _hover={{
                color: '#1a8cd8', // Updated hover text color
                bg: 'transparent', // Updated hover background
                cursor: 'pointer',
              }}
            >
              <Box margin={'3'}>{val.icon}</Box>
              <Text fontSize={'xl'} textAlign={'center'}>
                {val.label}
              </Text>
            </Flex>
          );
        })}
      </Flex>
      <Flex
        flexDirection="row"
        align="center"
        style={{ position: 'absolute', bottom: '20px' }}
      >
        <Avatar size="md" src={userProfile.avatarUrl} />
        <Flex flexDirection="column" marginLeft="2">
          <Text fontSize="sm" fontWeight="bold">
            {userProfile.name}
          </Text>
          <Text fontSize="xs">{userProfile.username}</Text>
        </Flex>
      </Flex>
      {/* Added a "Tweet" button with a Twitter icon */}
      <Button
        colorScheme="blue"
        leftIcon={<FaTwitter />}
        marginTop="4"
        width="100%"
        // Apply similar hover effect to the "Tweet" button
        _hover={{
          bg: '#1a8cd8',
        }}
      >
        Tweet
      </Button>
    </Box>
  );
};

export default SideNav;


