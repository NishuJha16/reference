import React, { useEffect } from 'react'
import NavBar from '../../components/navbar'
import { useNavigate } from 'react-router-dom';
import "./index.styles.scss";
import RaisedRetentionRequests from "../../components/raised-retention-requests";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user?.name]);

  return (
    <div className="home-page">
      <NavBar />
      <div className="request-table">
        <RaisedRetentionRequests />
      </div>
    </div>
  );
};

export default Home