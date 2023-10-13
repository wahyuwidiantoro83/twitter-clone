import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import ChangeUserPassword from "./pages/userProfile/changePassword";
import ChangeUsername from "./pages/userProfile/changeUsername";
import AccountManagement from "./pages/userProfile";
import { Route, Routes, useNavigate } from "react-router-dom";
import TimeLine from "./pages/Timeline";
import axios from "axios";
import { API_URL } from "./helper";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("loginData")) {
      let data = JSON.parse(localStorage.getItem("loginData"));
      axios
        .get(API_URL + `/user`, {
          params: {
            id: data.id,
            username: data.username,
            password: data.password,
          },
        })
        .then((response) => {
          if (response.data.length > 0) {
            // navigate("/timeline");
          } else {
            navigate("/login");
          }
        });
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/timeline" element={<TimeLine />} />
        <Route path="/userProfile" element={<AccountManagement />} />
        <Route path="/change/username" element={<ChangeUsername />} />
        <Route path="/change/userPassword" element={<ChangeUserPassword />} />
      </Routes>
    </>
  );
}

export default App;
