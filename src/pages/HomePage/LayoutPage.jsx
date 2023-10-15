import React from 'react';
import SideNav from './HomePage';
import { Box, Flex} from '@chakra-ui/react'; // Import komponen Chakra UI yang dibutuhkan
import RightBar from './RightBar';
import Header from '../../Components/Header';

const LayoutPage = (props) => {
  return (
    <Flex minWidth={"100%"} bg={"blackAlpha.900"}>
      <SideNav />
      <Box padding={{ base: "4" }} maxWidth={"full"} flex={1} bg={"blackAlpha.900"}>
        {props.children}
        <Header/>
      </Box>
      <RightBar/>
    </Flex>
  );
};



export default LayoutPage;


