import React from "react";
import {
    Box,
    Input,
    InputGroup,
    InputLeftElement,
    Icon,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa"; // Menggunakan ikon pencarian dari react-icons

const FollowBar = () => {
    return (
        <Box p={4}>
            <InputGroup size="lg">
                <InputLeftElement
                    pointerEvents="none"
                    children={<Icon as={FaSearch} color="gray.300" />}
                />
                <Input
                    rounded={"lg"}
                    placeholder="Search"
                    variant="filled"
                    bg="gray.700"
                    color="white"
                />
            </InputGroup>
        </Box>
    );
};

export default FollowBar;

  