import React, { useEffect } from 'react'
import NavBar from '../../components/navbar'
import { useNavigate } from 'react-router-dom';
import "./index.styles.scss";
import RaisedRetentionRequests from "../../components/raised-retention-requests";
import AsdmHome from "../../components/asdm-home";
import HrbpHome from "../../components/hrbp-home";
import { availableRoles } from "../../helpers/constants";
import HrHome from "../../components/hr-home";
import CpoHome from "../../components/cpo-home";
import VhHome from "../../components/vh-home";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user?.name]);

  const getComponent = () => {
    switch (user?.role) {
      case availableRoles.ASDM:
        return <AsdmHome />;
      case availableRoles.HR:
        return <HrHome />;
      case availableRoles.HRBP:
        return <HrbpHome />;
      case availableRoles.CPO:
        return <CpoHome />;
      default:
        return <VhHome />;
    }
  };

  return (
    <div className="home-page">
      <NavBar />
      {getComponent()}
    </div>
  );
};

export default Home