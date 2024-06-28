import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate()

  useEffect(() => {
    console.log("eeee", localStorage.getItem("userType"))
    if(localStorage.getItem("userType") === "Student"){
      navigate("/studentProfile");
    }
    else{
      navigate("/");
    }
  }, [])


  return (
    <div>
      This is dashboard
    </div>
  )
}

export default Dashboard
