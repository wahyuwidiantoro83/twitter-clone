import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import SideNav from "./HomePage";
import RightBar from "./RightBar";

const LayoutPage = (props) => {
  return (
    <Flex width={"full"} justifyContent={"flex-start"}>
      <SideNav />
        {props.children}
        <RightBar/>
    </Flex>
  );
};

export default LayoutPage;
