import React, { useEffect } from 'react'
import NavBar from '../../components/navbar'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  useEffect(()=>{
    if(!user){
      navigate("/login");
    }
  },[user?.name])
  
  return (
    <div>
      <NavBar/>
    </div>
  )
}

export default Home