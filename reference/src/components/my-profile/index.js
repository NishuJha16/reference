import React, { useEffect } from "react";
import "./index.style.scss";
import NavBar from "../navbar";
import { useNavigate } from "react-router-dom";
import CustomInput from "../input";

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
      <div className="profile-wrapper">
        <div className="title">
          <div className="title-text">My Details</div>
        </div>
        <div className="profile-content">
          <div className="profile-img">
            <img src={user.profileImage} />
          </div>
          <div className="details">
            <CustomInput
              label={"Full Name"}
              value={user?.name}
              disabled
              className="disabled-input"
            />
            <CustomInput
              label={"Email Address"}
              value={user?.email}
              disabled
              className="disabled-input"
            />
            <CustomInput
              label={"Employee ID"}
              value={user?.employeeId}
              disabled
              className="disabled-input"
            />
          </div>
          <div className="details">
            <CustomInput
              label={"Designation"}
              value={user?.designation}
              disabled
              className="disabled-input"
            />
            <CustomInput
              label={"Phone No."}
              value={user?.mobile}
              disabled
              className="disabled-input"
            />
            <CustomInput
              label={"Experience"}
              value={user?.experience}
              disabled
              className="disabled-input"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
