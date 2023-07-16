import React, { useState } from "react";
import NavLogo from "../../icons/nav-logo.svg";
import Logout from "../../icons/logout.svg";
import "./index.style.scss";
import { useNavigate } from "react-router-dom";
import ConfirmationModal from "../confirmation-modal";
import { Typography } from "@mui/material";

const NavBar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    setOpen(true);
  };

  const onLogout = () => {
    setOpen(false);
    localStorage.clear();
    navigate("/");
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  return (
    <div className="navbar">
      <img src={NavLogo} alt="logo" onClick={() => navigate("/")} />
      <div className="right-section">
        <img
          src={user?.profileImage}
          alt="profile"
          className="profile"
          onClick={handleProfile}
        />
        <img
          src={Logout}
          alt="logout"
          onClick={handleLogout}
          className="logout"
        />
        {open && (
          <ConfirmationModal
            confirmText="Log out"
            title="Log out"
            onConfirm={onLogout}
            open={open}
            onCancel={() => setOpen(false)}
          >
            <Typography variant="h7">
              Are you sure you want to Log out?
            </Typography>
          </ConfirmationModal>
        )}
      </div>
    </div>
  );
};

export default NavBar;
