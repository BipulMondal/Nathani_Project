import React, { useEffect, useState } from "react";
import StudentProfile from "../View/StudentProfile";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Layout from "../layouts";
import Login from "../Auth/Login";
import Registar from "../Auth/Registar";
import Dashboard from "../View/Dashboard";
import PrintForm from "../View/PrintForm";

const AppRoutes = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.pathname || "/";
  const [loggedIn, setloggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("Authorization");
    const userType = localStorage.getItem("userType");

    if (token && userType) {
      if (from === "/") {
        navigate("/");
      } else {
        navigate(from, { replace: true });
      }
      setloggedIn(true);
    } else if (from !== "/register") { // Avoid infinite redirection loop
      navigate("/login");
    }
  }, [loggedIn, navigate, from]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/studentProfile" element={<StudentProfile />} />
        <Route path="/studentProfile/print" element={<PrintForm />} />
      </Route>
      <Route path="/register" element={<Registar />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
