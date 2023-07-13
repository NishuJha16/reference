import React, { useEffect } from "react";
import "./index.style.scss";
import NavBar from "../navbar";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";

const MyProfile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user?.name]);

  return (
    <div>
      <NavBar />
      <Paper elevation={3} />
    </div>
  );
};

export default MyProfile;
