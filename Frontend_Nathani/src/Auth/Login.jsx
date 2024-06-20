import React, { useState, useEffect } from "react";
import logo from "../images/NATHANI_LOGO.png";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const initial = {
    email: "",
    password: "",
  };

  const [loginData, setLoginData] = useState(initial);
  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();

    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  console.log("vvfvfvf", loginData);

  const handleValidation = () => {
    if (!loginData.email) {
      toast.error("email is required");
      return false;
    }
    if (
      new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}").test(loginData.email) === false
    ) {
      toast.error("please enter a valid email");
      return false;
    }
    if (!loginData.password) {
      toast.error("password is required");
      return false;
    }
    if (loginData.password.length < 8) {
      toast.error("password must be 8 character long");

      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = loginData;

    setLoading(true)
    try {
      if (handleValidation()) {
        let res = await axios.post(
          "http://localhost:8088/api/v1/user/login",
          data
        );
        if(res && res.status){
          toast.success(res.message)
          localStorage.setItem("Authorization", res?.data?.token);
          localStorage.setItem("userType", res?.data?.userType);
          setLoading(false)
          setLoginData(initial)
          navigate("/studentProfile");
        }
        else{
          toast.error(res.message)
          setLoading(false)
        }
      }
    } catch (error) {
      // console.error("Error_sdfds", error);
      toast.error(error)
      setLoading(false)
      // Handle error response
    }
  };

  return (
    <div className="container login_container">
      <img src={logo} alt="Logo" />
      <h3 style={{ marginTop: "20px" }}>
        <i className="fa fa-graduation-cap"></i> NATHANI CHARITABLE TRUST
      </h3>
      <div className="row" style={{ marginTop: "110px" }}>
        <div className="col-md-4 offset-md-4">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Please Sign In</h3>
            </div>
            <div className="card-body">
              <form role="form" method="post" action="">
                <fieldset>
                  <div className="form-group mb-3">
                    <input
                      className="form-control"
                      placeholder="E-mail"
                      name="email"
                      type="email"
                      autoFocus
                      value={loginData?.email}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <div className="eye_main_div">
                      <input
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        type={show ? "text" : "password"}
                        value={loginData?.password}
                        onChange={(e) => handleChange(e)}
                      />
                      <div className="eye_div">
                        {!show ? (
                          <i
                            class="fa-solid fa-eye-slash"
                            onClick={() => setShow(!show)}
                          ></i>
                        ) : (
                          <i
                            class="fa-solid fa-eye"
                            onClick={() => setShow(!show)}
                          ></i>
                        )}
                      </div>
                    </div>
                  </div>
                  <button
                    className="btn btn-large btn-primary sign_btn"
                    type="submit"
                    onClick={(e) => handleSubmit(e)}
                  >
                    Sign in
                  </button>
                  <p style={{ marginLeft: "160px", marginTop: "10px" }}>
                    Click <Link to="/register">here</Link> To Register
                  </p>
                  <div className="forgot-password">
                    <a href="forgot-password.php">Forgot Password?</a>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
