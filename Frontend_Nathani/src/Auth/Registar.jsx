import React, { useEffect, useState } from "react";
import logo from "../images/NATHANI_LOGO.png";
import { toast } from "react-toastify";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Registar = () => {
  const initial = {
    registeredBy: "",
    aadharNo: "",
    AadharLinkedMobileNo: null,
    otp: null,
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    mobile: null,
    email: "",
    gender: "",
    state: "",
    city: "",
    loginId: "",
    password: "",
    confirmpassword: "",
    userType:"user"
  };
  const navigate = useNavigate()
  const [registerData, setRegisterData] = useState(initial);
  const [loading, setLoading] = useState(false)
  console.log("asdasd", registerData);

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setRegisterData((prev) => ({
      ...prev,
      [name]: name === "AadharLinkedMobileNo" || name === "otp" || name === "mobile" ? Number(value) : value,
    }));
  };

  const handleValidation = () => {
    if (!registerData.registeredBy) {
      toast.error("Registered by is required");
      return false;
    }
    if (!registerData.aadharNo) {
      toast.error("Aadhar No is required");
      return false;
    }
    if (
      registerData.aadharNo.length > 16 ||
      registerData.aadharNo.length < 16
    ) {
      toast.error("please select 16 digit Aadhar No");
      return false;
    }
    if (!registerData.AadharLinkedMobileNo) {
      toast.error("Aadhar link mobile No is required");
      return false;
    }
    if (
      registerData.AadharLinkedMobileNo.length > 10 ||
      registerData.AadharLinkedMobileNo.length < 10
    ) {
      toast.error("please select 16 digit Aadhar No");
      return false;
    }
    if (!registerData.otp) {
      toast.error("otp is required");
      return false;
    }
    if (!registerData.firstName) {
      toast.error("first name is required");
      return false;
    }
    if (!registerData.lastName) {
      toast.error("last name is required");
      return false;
    }
    if (!registerData.dob) {
      toast.error("date of birth is required");
      return false;
    }
    if (!registerData.mobile) {
      toast.error("mobile no is required");
      return false;
    }
    if (!registerData.email) {
      toast.error("email id is required");
      return false;
    }
    if (
      new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}").test(registerData.email) ===
      false
    ) {
      toast.error("please enter a valid email");
      return false;
    }
    if (!registerData.gender) {
      toast.error("gender is required");
      return false;
    }
    if (!registerData.state) {
      toast.error("state is required");
      return false;
    }
    if (!registerData.city) {
      toast.error("state is required");
      return false;
    }
    if (!registerData.loginId) {
      toast.error("login id is required");
      return false;
    }
    if (!registerData.password) {
      toast.error("password is required");
      return false;
    }
    if (registerData.password.length < 8) {
      toast.error("password must be 8 character long");
      return false;
    }
    if (!registerData.confirmpassword) {
      toast.error("confirm password is required");
      return false;
    }
    if (registerData.password !== registerData.confirmpassword) {
      toast.error("password and confirm password does not matched");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = registerData;

    setLoading(true)
    try {
      if (handleValidation()) {
        let res = await axios.post(
          "http://localhost:8025/api/v1/user/registration",
          data
        );
        if(res && res.status){
          toast.success(res.message)
          setLoading(false)
          setRegisterData(initial)
          navigate("/studentProfile");
        }
        else{
          setLoading(false)
        }
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(error)
      setLoading(false)
      // Handle error response
    }
  };

  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <hr className="hr1" />
      <div className="container reg_container" style={{}}>
        <img id="registration_img" src={logo} alt="logo" />
        <h3
          style={{
            padding: "70px 0",
            textalign: "center",
            marginLeft: "200px",
            fontSize: "18px",
            fontWeight: "400",
          }}
        >
          <i className="fa fa-graduation-cap"></i> NATHANI CHARITABLE TRUST
        </h3>
      </div>
      <hr className="hr3"></hr>
      <div className="container reg_container mx-auto mt-10 p-6 bg-white shadow-lg">
        <div className="d-flex justify-content-around">
          <div className="reg_left reg_body">
            <h1 className="reg_nathini_text"> NATHANI CHARITABLE TRUST </h1>
            <div className="mb-4">
              <hr className="hr2" />
              <h2 className="head_txt mb-2">
                {" "}
                <i className="fa fa-info-circle" aria-hidden="true"></i>{" "}
                Guidelines for applying for education scholarship:{" "}
              </h2>
              <ul className="list-disc text-sm text_content">
                <li>
                  {" "}
                  Please read all the instructions before filling the form.{" "}
                </li>
                <li>
                  {" "}
                  Acceptance of the registration/application form does not
                  GUARANTEE AID.{" "}
                </li>
                <li>
                  {" "}
                  The financial aid for education is provided from ZAKAT FUND
                  especially for the economically backward &amp; underprivileged
                  students from the community who seek admission in higher
                  professional courses or educational institutions.{" "}
                </li>
                <li>
                  {" "}
                  Nathani Charitable Trust has the right to reclaim the help
                  granted, if the information is found incorrect or false later
                  on.{" "}
                </li>
                <li>
                  {" "}
                  Please note that students falling under GENERAL category will
                  be supported from std XII onwards. Only children of
                  widow/divorcee/orphan/separated/deserted or child of disabled
                  deserving parents will be supported from nursery onwards.
                  (Divorce Certificate / Divorce Deed in case of divorcee, Death
                  Certificate of father/husband in case of widow is compulsory).{" "}
                </li>
                <li>
                  {" "}
                  Decision of our committee regarding acceptance or rejection of
                  application will remain final and no correspondence or
                  clarification will be provided.{" "}
                </li>
                <li>
                  {" "}
                  Non zakat case will be considered based on availability of
                  funds.{" "}
                </li>
              </ul>
            </div>
            <div>
              <hr className="hr2" />
              <h2 className="head_txt mb-2">
                {" "}
                <i className="fa fa-info-circle" aria-hidden="true"></i>{" "}
                Required documents (To be scan):{" "}
              </h2>
              <ol className="list-decimal text-sm text_content">
                <li> Student's Aadhar Card. </li>
                <li> Student's Disability Certificate (If applicable). </li>
                <li>
                  {" "}
                  Orphan document of student (Mother's/Father's Death
                  Certificate) (If applicable).{" "}
                </li>
                <li>
                  {" "}
                  Parents' Status Document (e.g. Divorce Paper, Death
                  Certificate, Jamat Letter (If applicable).{" "}
                </li>
                <li>
                  {" "}
                  Family Member's Disability Certificate / Parents Disability
                  Certificate / Medical Certificate (if applicable).{" "}
                </li>
                <li> Income Certificate. </li>
                <li> Last Three Years Results. </li>
                <li>
                  {" "}
                  Note: If Result is Not Declare from College /
                  Institute/University, download "Undertaking Letter" and
                  "Commitment Letter" given below. Take the print of it, fill it
                  properly with College/Institute / University stamp and
                  signature. Kindly Scan the document and Upload it in result's
                  attachment Tab.{" "}
                </li>
                <li> Bonafide Certificate. </li>
                <li>
                  {" "}
                  All Fees Structures / Receipts &amp; Other Expenses Documents.{" "}
                </li>
                <li> Bank Passbook (Only front page). </li>
                <li>
                  {" "}
                  Scan copy of signatures (Student &amp; Parents / Guardian).{" "}
                </li>
              </ol>
            </div>
          </div>
          <div className="reg_right reg_body">
            <div className="mb-4">
              <h2 className="reg_nathini_text"> Ⓡ Register Yourself! </h2>
              <hr className="hr2" />
              <form action="" method="">
                <div class="row mb-3">
                  <div className="col-md-12">
                    <label for="registered_by" class="form-label">
                      Registered By:
                    </label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      name="registeredBy"
                      value={registerData.registeredBy}
                      onChange={(e) => handleChange(e)}
                    >
                      <option value="">--select--</option>
                      <option value="Student">Student</option>
                      <option value="Trusty">Trusty</option>
                      <option value="Guardian">Guardian</option>
                    </select>
                  </div>
                </div>

                <div class="row mb-3">
                  <div class="col-md-6">
                    <label for="aadharNo" class="form-label">
                      Aadhar no.<span className="astric">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="aadharNo"
                      name="aadharNo"
                      value={registerData.aadharNo}
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="AadharLinkedMobileNo" class="form-label">
                      Aadhar linked Mobile No<span className="astric">*</span>
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="AadharLinkedMobileNo"
                      name="AadharLinkedMobileNo"
                      value={registerData.AadharLinkedMobileNo}
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                </div>

                <div class="mb-3">
                  <label for="otp" class="form-label">
                    OTP<span className="astric">*</span>
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="otp"
                    name="otp"
                    value={registerData.otp}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>

                <div class="row mb-3">
                  <div class="col-md-6">
                    <label for="firstName" class="form-label">
                      First Name<span className="astric">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="firstName"
                      name="firstName"
                      value={registerData.firstName}
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="middleName" class="form-label">
                      Middle Name<span className="astric">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="middleName"
                      name="middleName"
                      value={registerData.middleName}
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                </div>

                <div class="row mb-3">
                  <div class="col-md-6">
                    <label for="lastName" class="form-label">
                      Last Name / Surname<span className="astric">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="lastName"
                      name="lastName"
                      value={registerData.lastName}
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="dob" class="form-label">
                      Date of Birth<span className="astric">*</span>
                    </label>
                    <input
                      type="date"
                      class="form-control"
                      id="dob"
                      name="dob"
                      value={registerData.dob}
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                </div>

                <div class="row mb-3">
                  <div class="col-md-6">
                    <label for="mobile" class="form-label">
                      Mobile Number<span className="astric">*</span>
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="mobile"
                      name="mobile"
                      value={registerData.mobile}
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="email" class="form-label">
                      Email-ID<span className="astric">*</span>
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      name="email"
                      value={registerData.email}
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                </div>

                <div class="d-flex mb-3 ">
                  <label class="form-label">
                    Gender<span className="astric">*</span>
                  </label>

                  <div class="form-check gender_checkbox">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gender"
                      id="gender-male"
                      value="male"
                      onChange={(e) => handleChange(e)}
                    />
                    <label class="form-check-label" for="gender-male">
                      Male
                    </label>
                  </div>
                  <div class="form-check gender_checkbox">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gender"
                      id="gender-female"
                      value="female"
                      onChange={(e) => handleChange(e)}
                    />
                    <label class="form-check-label" for="gender-female">
                      Female
                    </label>
                  </div>
                  <div class="form-check gender_checkbox">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gender"
                      id="gender-transgender"
                      value="transgender"
                      onChange={(e) => handleChange(e)}
                    />
                    <label class="form-check-label" for="gender-transgender">
                      Transgender
                    </label>
                  </div>
                </div>

                <div class="row mb-3">
                  <div class="col-md-6">
                    <label for="state" class="form-label">
                      State<span className="astric">*</span>
                    </label>
                    <select
                      class="form-select"
                      id="state"
                      name="state"
                      value={registerData.state}
                      onChange={(e) => handleChange(e)}
                      required
                    >
                      <option value="">--select--</option>
                      <option value="State">State One</option>
                    </select>
                  </div>
                  <div class="col-md-6">
                    <label for="city" class="form-label">
                      City<span className="astric">*</span>
                    </label>
                    <select
                      class="form-select"
                      id="city"
                      name="city"
                      required
                      value={registerData.city}
                      onChange={(e) => handleChange(e)}
                    >
                      <option value="">--select--</option>
                      <option value="City">City One</option>
                    </select>
                  </div>
                </div>

                <div class="mb-3">
                  <label for="loginId" class="form-label">
                    Login Id<span className="astric">*</span>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="loginId"
                    name="loginId"
                    value={registerData.loginId}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>

                <div class="row mb-3">
                  <div class="col-md-6">
                    <label for="password" class="form-label">
                      Password<span className="astric">*</span>
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      name="password"
                      value={registerData.password}
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="confirmpassword" class="form-label">
                      Confirm Password<span className="astric">*</span>
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="confirmpassword"
                      name="confirmpassword"
                      value={registerData.confirmpassword}
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                </div>

                <div class="mb-3">
                  <button
                    type="submit"
                    class="btn btn-primary"
                    onClick={(e) => handleSubmit(e)}
                  >
                    Submit
                  </button>
                </div>

                <div class="text-muted">
                  NOTE: Please provide your correct number for future
                  communication.
                </div>
                <div class="mt-2">
                  <p>
                    Already Registered? Click <Link to="/login"> Here </Link>
                    to Login
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registar;
