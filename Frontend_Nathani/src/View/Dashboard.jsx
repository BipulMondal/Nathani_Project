import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem("Authorization")
  useEffect(() => {
    console.log("eeee", localStorage.getItem("userType"), "Student")
    if(localStorage.getItem("userType") === "Student"){
      navigate("/studentProfile");
    }
    else{
      navigate("/");
    }
  }, [token])


  return (
    <div>
      This is dashboard
    </div>
  )
}

export default Dashboard
