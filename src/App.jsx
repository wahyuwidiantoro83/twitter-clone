import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "@chakra-ui/react";
// import SideNav from "./Components/HomePage/HomePage";
// import RightBar from "./Components/HomePage/RightBar";
import LayoutPage from "./Components/HomePage/LayoutPage";

function App() {
  return (
    <Container
      padding={"unset"}
      shadow={"md"}
      bg={"gray.100"}
      overflow={"hidden"}
      maxW={"6xl"}
      height={"100vh"}
    >
      <Routes>
        <Route path="/" element={<LayoutPage />} />
      </Routes>
    </Container>
  );
}

export default App;
