import React, { useState, useEffect, useContext } from "react";
import Loader from "../Loader/Loader";
import { useLocation, useNavigate, Link } from "react-router-dom";
import queryString from "query-string";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import AllStatedata from "../constant/config.json";

const Application = () => {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const tab = query.tab || "current_academic_details";
  const navigate = useNavigate();
  const stateNames = Object.keys(AllStatedata);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const {
    studentInformation,
    setStudentInformation,
    getStudentData,
    allFamilyDetails,
    setAllFamilyDetails,
    academicInfo,
    setAcademicInfo,
    organizationSupport,
    setorganizationSupport,
  } = useContext(GlobalContext);

  console.log("organizationSupport", organizationSupport);

  const [copyParmanantAddress, setCopyPermantAddress] = useState(false);
  const [filteredCities, setFilteredCities] = useState([]);
  const [memonCities, setMemonCities] = useState([]);
  const [academicCity, setAcademicCity] = useState([]);
  const [otherTrustCity, setOthertrustCity] = useState([]);
  const [otherContributionCity, setOtherContributionCity] = useState([]);
  const [currentTab, setCurrentTab] = useState("current_academic_details");
  const [loading, setLoading] = useState(false);
  const aadharNo = localStorage.getItem("aadharNO");
  const userType = localStorage.getItem("userType");
  const [buttonShow, setbuttonSchow] = useState(false);

  const tabs = ["current_academic_details", "fees_details", "bank_details"];
  const tabNames = {
    current_academic_details: "Current Academic Details",
    fees_details: "Fees Details",
    bank_details: "Bank Details",
  };

  const handlePrev = () => {
    const currentIndex = tabs.indexOf(currentTab);
    console.log("currentIndex", currentIndex)
    if (currentIndex > 0) {
      setCurrentTab(tabs[currentIndex - 1]);
      navigate(`/application?tab=${tabs[currentIndex - 1]}`);
    }else{
      navigate(`/studentProfile?tab=confirmation`)
    }
    
  };

  const handleNext = () => {
    const currentIndex = tabs.indexOf(currentTab);
    if (currentIndex < tabs.length - 1) {
      const nextTab = tabs[currentIndex + 1];
      setCurrentTab(nextTab);
      console.log("nextTab", nextTab);
      navigate(`/application?tab=${nextTab}`);
    }
  };

  const handleSubmit = () => {};

  return (
    <>
      {loading && <Loader />}
      <div id="page-wrapper">
        <div className="row infoHead">
          <div className="col-lg-12 topic_div">
            <div>
              <ul className="nav nav-pills navinfo">
                {tabs.map((tab) => (
                  <li
                    key={tab}
                    className={`nav-item ${currentTab === tab ? "active" : ""}`}
                  >
                    <Link
                      className="nav-link"
                      to={`/application?tab=${tab}`}
                      onClick={() => setCurrentTab(tab)}
                    >
                      {tabNames[tab]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row rowMargin">
        <div className="col-lg-12">
          <div className="panel panel-default">
            {/* <div className="panel-heading">Students Information</div> */}
            <div className="panel-heading">{tab}</div>
            <div className="panel-body">
              <div className="row">
                <div className="col-lg-12">
                  <form role="form">
                    {tab === "current_academic_details" && (
                      <>
                        <div class="col-sm-12">
                          <div class="form-group">
                            <div class="row">
                              <div class="col-sm-3 topMargin">
                                <label>
                                  Currently studying in Std{" "}
                                  <span style={{ color: "red" }}>*</span>
                                </label>
                                <select
                                  class="form-control step6Class"
                                  id="txt6scLevelOfCourse"
                                >
                                  <option selected="selected" value="0">
                                    --select--
                                  </option>
                                  <option category="School" value="19">
                                    Aalima Courses
                                  </option>
                                  <option category="School" value="20">
                                    Nursery
                                  </option>
                                  <option category="School" value="24">
                                    Junior KG
                                  </option>
                                  <option category="School" value="25">
                                    Senior KG
                                  </option>
                                  <option category="School" value="26">
                                    Special Cases{" "}
                                  </option>
                                  <option category="School" value="1">
                                    1st
                                  </option>
                                  <option category="School" value="2">
                                    2nd
                                  </option>
                                  <option category="School" value="3">
                                    3rd
                                  </option>
                                  <option category="School" value="4">
                                    4th
                                  </option>
                                  <option category="School" value="5">
                                    5th
                                  </option>
                                  <option category="School" value="6">
                                    6th
                                  </option>
                                  <option category="School" value="7">
                                    7th
                                  </option>
                                  <option category="School" value="8">
                                    8th
                                  </option>
                                  <option category="School" value="9">
                                    9th
                                  </option>
                                  <option category="School" value="10">
                                    10th
                                  </option>
                                  <option category="JrCollege" value="11">
                                    11th
                                  </option>
                                  <option category="JrCollege" value="12">
                                    12th
                                  </option>
                                  <option category="Graduation" value="13">
                                    Graduation
                                  </option>
                                  <option category="PostGraduation" value="14">
                                    Post-Graduation
                                  </option>
                                  <option category="Diploma" value="15">
                                    Diploma in Engineering
                                  </option>
                                  <option category="Diploma" value="16">
                                    Other Diplomas
                                  </option>
                                  <option category="Entrance" value="17">
                                    Entrance Exams and other professional
                                    courses
                                  </option>
                                  <option category="Vocational" value="18">
                                    Vocational
                                  </option>
                                </select>
                              </div>
                              <div
                                class="col-sm-3 topMargin"
                                id="Div_OtherStd_Step6"
                              >
                                <label>Special Case</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="txtSpecialCase_Step6"
                                  placeholder="Special Case"
                                />
                              </div>
                              <div class="col-sm-3 topMargin" id="txtDegree">
                                <label>
                                  Course Name
                                  <span style={{ color: "red" }}></span>
                                </label>
                                <select id="txt6scDegree" class="form-control">
                                  <option selected="selected" value="select">
                                    --select--
                                  </option>
                                  <option value="0">Other</option>
                                </select>
                              </div>
                              <div
                                class="col-sm-3 topMargin"
                                id="LevelOfCourse_Step6"
                              >
                                <label>
                                  Level of course{" "}
                                  <span style={{ color: "red" }}>*</span>
                                </label>
                                <select
                                  class="form-control select2"
                                  id="txt5LevelOfCourse_Step6"
                                  style={{ width: "100%" }}
                                >
                                  <option value="NA">--select--</option>
                                  <option value="1st year">1st year</option>
                                  <option value="2nd year">2nd year</option>
                                  <option value="3rd year">3rd year</option>
                                  <option value="4th year">4th year</option>
                                  <option value="5th year">5th year</option>
                                  <option value="6th year">6th year</option>
                                  <option value="other">Other</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div class="form-group">
                            <div class="row">
                              <div
                                class="col-sm-3 topMargin"
                                id="txtOtherCourse_Step6"
                              >
                                <label>
                                  Other Course
                                  <span style={{ color: "red" }}></span>
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="txt6OtherCourse_Step6"
                                  placeholder="Other course"
                                />
                              </div>

                              <div
                                class="col-sm-3 topMargin"
                                id="txtOtherLevelOfCourse_Step6"
                              >
                                <label>
                                  Other Level Of Course
                                  <span style={{ color: "red" }}></span>
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="txt6OtherLevelOfCourse_Step6"
                                  placeholder="Other Level of course"
                                />
                              </div>
                              <div
                                class="col-sm-3 topMargin"
                                id="Div_Field_Step6_other"
                              >
                                <label>
                                  Other Field{" "}
                                  <span style={{ color: "red" }}>*</span>
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="txt5Field_Step6Other"
                                  placeholder="other Field"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="form-group">
                            <div class="row">
                              <div
                                class="col-sm-3 topMargin"
                                id="Div_Field_Step6"
                              >
                                <label>
                                  Field <span style={{ color: "red" }}>*</span>
                                </label>
                                <select
                                  class="form-control select2"
                                  id="txt5Field_Step6"
                                  style={{ width: "100%" }}
                                >
                                  <option selected="selected" value="select">
                                    --select--
                                  </option>
                                  <option value="164">Arts</option>
                                  <option value="165">Commerce</option>
                                  <option value="166">Science</option>
                                  <option value="0">Other</option>
                                </select>
                              </div>
                              <div
                                class="col-sm-3 topMargin"
                                id="Div_Duration_Step6"
                              >
                                <label>
                                  Duration{" "}
                                  <span style={{ color: "red" }}>*</span>
                                </label>
                                <select
                                  class="form-control select2"
                                  id="txt6scDurationOfCourse"
                                  style={{ width: "100%" }}
                                >
                                  <option value="NA">--select--</option>
                                  <option value="1 year">1 year</option>
                                  <option value="1.5 year">1.5 year</option>
                                  <option value="2 year">2 year</option>
                                  <option value="2.5 year">2.5 year</option>
                                  <option value="3 year">3 year</option>
                                  <option value="3.5 year">3.5 year</option>
                                  <option value="4 year">4 year</option>
                                  <option value="4.5 year">4.5 year</option>
                                  <option value="5 year">5 year</option>
                                  <option value="5.5 year">5.5 year</option>
                                  <option value="6 year">6 year</option>
                                  <option value="other">Other</option>
                                </select>
                              </div>
                              <div class="col-sm-3 topMargin">
                                <label>
                                  Medium Of Instruction
                                  <span style={{ color: "red" }}>*</span>
                                </label>
                                <select
                                  class="form-control select2"
                                  id="txt6scMediumOfInstruction"
                                  style={{ width: "100%" }}
                                >
                                  <option value="NA">--select--</option>
                                  <option value="English">English</option>
                                  <option value="Gujarati">Gujarati</option>
                                  <option value="Hindi">Hindi</option>
                                  <option value="Marathi">Marathi</option>
                                  <option value="Semi-English">
                                    Semi-English
                                  </option>
                                  <option value="Urdu">Urdu</option>
                                  <option value="Other">Other</option>
                                </select>
                              </div>
                              <div
                                class="col-sm-3 topMargin"
                                id="Div_PatternOfCourse"
                              >
                                <label>
                                  Pattern Of The Course
                                  <span style={{ color: "red" }}></span>
                                </label>
                                <select
                                  class="form-control select2"
                                  id="txt6scPatternOfCourse"
                                  style={{ width: "100%" }}
                                >
                                  <option value="NA">--select--</option>
                                  <option value="Annual">Annual</option>
                                  <option value="Semester">Semester</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div class="form-group">
                            <div class="row">
                              <div
                                class="col-sm-3 topMargin"
                                id="txtOtherDurationOfCourse"
                              >
                                <label>
                                  Other Duration of Course
                                  <span style={{ color: "red" }}></span>
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="txt6OtherDurationOfCourse"
                                  placeholder="Other Duration of Course"
                                />
                              </div>
                              <div
                                class="col-sm-3 topMargin"
                                id="txtOtherCourse"
                              >
                                <label>
                                  Other Course
                                  <span style={{ color: "red" }}></span>
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="txt6OtherCourse"
                                  placeholder="Other Course"
                                />
                              </div>
                              <div
                                class="col-sm-3 topMargin"
                                id="DivOtherOption_Step6"
                              >
                                <label>
                                  Other Medium
                                  <span style={{ color: "red" }}>*</span>
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="txt6OtherMediumOption"
                                  placeholder="Other Medium"
                                />
                              </div>
                            </div>
                          </div>

                          <div class="form-group">
                            <div class="row">
                              <div class="col-sm-3 topMargin">
                                <label>
                                  Name Of the School / College / Institutions
                                  <span style={{ color: "red" }}>*</span>
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="txt6scNameOfSchool"
                                  placeholder="Name Of the School/College/Institutions"
                                />
                              </div>
                              <div class="col-sm-3 topMargin">
                                <label>
                                  Name Of the Board/University
                                  <span style={{ color: "red" }}></span>
                                </label>
                                <div class="input-group">
                                  <div
                                    class="input-group-addon"
                                    id="loadUniversity4"
                                  >
                                    <i class="icon ion-university"></i>
                                  </div>
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="ddlscNameOfBoard"
                                    placeholder="Name Of the Board/University"
                                  />
                                </div>
                              </div>
                              <div class="col-sm-3 topMargin">
                                <label>
                                  Type of school / college / institution
                                  <span style={{ color: "red" }}>*</span>
                                </label>
                                <select
                                  class="form-control select2"
                                  id="txt6scModeOfBoard"
                                  style={{ width: "100%" }}
                                >
                                  <option value="NA">--select--</option>
                                  <option value="Govt">Government</option>
                                  <option value="Private">Private</option>
                                  <option value="Semi Govt">
                                    Semi Government
                                  </option>
                                </select>
                              </div>
                              <div class="col-sm-3 topMargin">
                                <label>
                                  If Private
                                  <span style={{ color: "red" }}>*</span>
                                </label>
                                <select
                                  class="form-control select2"
                                  id="txt6scIfPrivate"
                                  style={{ width: "100%" }}
                                >
                                  <option value="NA">--select--</option>
                                  <option value="Aided">Aided</option>
                                  <option value="Unaided">Unaided</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div class="form-group">
                            <div class="row">
                              <div class="col-sm-3 topMargin">
                                <label>
                                  School/ College / Institute Address
                                  <span style={{ color: "red" }}>*</span>
                                </label>
                                <textarea
                                  class="form-control"
                                  id="txt6scAddress"
                                  placeholder="School/ College / Institute Address"
                                ></textarea>
                              </div>
                              <div class="col-sm-3 topMargin">
                                <label>
                                  City<span style={{ color: "red" }}>*</span>
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="txt6scCity"
                                  placeholder="City"
                                />
                              </div>
                              <div class="col-sm-3 topMargin">
                                <label>
                                  Pincode<span style={{ color: "red" }}></span>
                                </label>
                                <input
                                  type="text"
                                  class="form-control number"
                                  id="txt6PinCode"
                                  placeholder="Pincode"
                                  data-inputmask="'mask': ['999999']"
                                  data-mask=""
                                />
                              </div>
                              <div class="col-sm-3 topMargin">
                                <label>
                                  District<span style={{ color: "red" }}></span>
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="txt6scDistrict"
                                  placeholder="District"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="form-group">
                            <div class="row">
                              <div class="col-sm-3 topMargin">
                                <label>
                                  State<span style={{ color: "red" }}>*</span>
                                </label>
                                <select id="txt6scState" class="form-control">
                                  <option value="NA">--select--</option>
                                  <option value="Andhra Pradesh">
                                    Andhra Pradesh
                                  </option>
                                  <option value="Arunachal Pradesh">
                                    Arunachal Pradesh
                                  </option>
                                  <option value="Assam">Assam</option>
                                  <option value="Bihar">Bihar</option>
                                  <option value="Chhattisgarh">
                                    Chhattisgarh
                                  </option>
                                  <option value="Goa">Goa</option>
                                  <option value="Gujarat">Gujarat</option>
                                  <option value="Haryana">Haryana</option>
                                  <option value="Himachal Pradesh">
                                    Himachal Pradesh
                                  </option>
                                  <option value="Jammu &amp; Kashmir">
                                    Jammu &amp; Kashmir
                                  </option>
                                  <option value="Jharkhand">Jharkhand</option>
                                  <option value="Karnataka">Karnataka</option>
                                  <option value="Kerala">Kerala</option>
                                  <option value="Madhya Pradesh">
                                    Madhya Pradesh
                                  </option>
                                  <option value="Maharashtra">
                                    Maharashtra
                                  </option>
                                  <option value="Manipur">Manipur</option>
                                  <option value="Meghalaya">Meghalaya</option>
                                  <option value="Mizoram">Mizoram</option>
                                  <option value="Nagaland">Nagaland</option>
                                  <option value="Odisha">Odisha</option>
                                  <option value="Punjab">Punjab</option>
                                  <option value="Rajasthan">Rajasthan</option>
                                  <option value="Sikkim">Sikkim</option>
                                  <option value="Tamil Nadu">Tamil Nadu</option>
                                  <option value="Telangana">Telangana</option>
                                  <option value="Tripura">Tripura</option>
                                  <option value="Uttar Pradesh">
                                    Uttar Pradesh
                                  </option>
                                  <option value="Uttarakhand">
                                    Uttarakhand
                                  </option>
                                  <option value="West Bengal">
                                    West Bengal
                                  </option>
                                </select>
                              </div>
                              <div class="col-sm-3 topMargin">
                                <label>
                                  Country<span style={{ color: "red" }}></span>
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="txt6scCountry"
                                  placeholder="Country"
                                  value="India"
                                  disabled="disabled"
                                />
                              </div>
                              <div class="col-sm-3 topMargin">
                                <label>
                                  Email<span style={{ color: "red" }}></span>
                                </label>
                                <input
                                  type="email"
                                  class="form-control"
                                  id="txt6scEmail"
                                  placeholder="Email"
                                />
                              </div>
                              <div class="col-sm-3 topMargin">
                                <label>
                                  Website<span style={{ color: "red" }}></span>
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="txt6scWebsite"
                                  placeholder="Website"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="form-group">
                            <div class="row">
                              <div class="col-sm-3 topMargin">
                                <label>
                                  Landline Number
                                  <span style={{ color: "red" }}></span>
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="txt6LandlineNumber"
                                  placeholder="Landline Number"
                                />
                              </div>
                              <div class="col-sm-3 topMargin">
                                <label>
                                  School/ College / Institute Contact number
                                  <span style={{ color: "red" }}>*</span>
                                </label>
                                <input
                                  type="text"
                                  class="form-control number"
                                  id="txt6scAlterNumber"
                                  placeholder="School/ College / Institute Contact number"
                                />
                              </div>
                              <div class="col-sm-3 topMargin">
                                <label>
                                  Mobile Number
                                  <span style={{ color: "red" }}></span>
                                </label>
                                <input
                                  type="text"
                                  class="form-control number"
                                  id="txt6LandlineNumber_Step6"
                                  placeholder="Mobile Number"
                                  data-inputmask="'mask': ['9999999999']"
                                  data-mask=""
                                />
                              </div>
                            </div>
                          </div>
                          <div class="form-group">
                            <div class="row">
                              <div class="col-sm-3 topMargin">
                                <label>
                                  Bonafide Certificate Front
                                  <span style={{ color: "red" }}>*</span>
                                </label>
                                <input
                                  type="file"
                                  class="form-control"
                                  name="bonafied_certificate"
                                  id="bonafied_certificate"
                                />
                              </div>
                              <div class="col-lg-3">
                                <img
                                  id="bonafied_certificate_prev"
                                  src="#"
                                  alt="Bonafide Certificate Front"
                                  style={{ height: "100px", width: "100px" }}
                                />
                              </div>
                              <div class="col-sm-3 topMargin">
                                <label>Bonafide Certificate Backside</label>
                                <input
                                  type="file"
                                  class="form-control"
                                  name="bonafied_back"
                                  id="bonafied_back"
                                />
                              </div>
                              <div class="col-lg-3">
                                <img
                                  id="bonafied_back_prev"
                                  src="#"
                                  alt="Bonafide Certificate Backside"
                                  style={{ height: "100px", width: "100px" }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    <br />

                    {tab === "fees_details" && (
                      <>
                        <div class="col-sm-12">
                          <div
                            class="row"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <div class="col-sm-8 topMargin">
                              <table class="table table-bordered" id="myTable">
                                <thead>
                                  <tr>
                                    <th>SrNo</th>
                                    <th>Particulars of fees</th>
                                    <th>Amount(in ₹)</th>
                                  </tr>
                                </thead>
                                <tbody class="txt7Hover">
                                  <tr>
                                    <th>A</th>
                                    <th>
                                      Term fees{" "}
                                      <span
                                        style={{
                                          color: "red",
                                          fontWeight: "bold",
                                        }}
                                      ></span>
                                    </th>
                                    <td>
                                      <input
                                        type="text"
                                        class="form-control decimal allownumericwithdecimal"
                                        id="txt7feeTermFees"
                                        min="0"
                                        placeholder="Term fees"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td></td>
                                    <td>
                                      School/College tution fees{" "}
                                      <span
                                        style={{
                                          color: "red",
                                          fontWeight: "bold",
                                        }}
                                      ></span>
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        class="form-control decimal allownumericwithdecimal"
                                        id="txt7feeTutionFees"
                                        min="0"
                                        placeholder="School/College tution fees"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td></td>
                                    <td>
                                      School/College Other Fees{" "}
                                      <span
                                        style={{
                                          color: "red",
                                          fontWeight: "bold",
                                        }}
                                      ></span>
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        class="form-control decimal allownumericwithdecimal"
                                        id="txt7feeOtherFees"
                                        min="0"
                                        placeholder="School/College Other Fees"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td></td>
                                    <td>
                                      Total fees{" "}
                                      <span
                                        style={{
                                          color: "red",
                                          fontWeight: "bold",
                                        }}
                                      ></span>
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        class="form-control decimal allownumericwithdecimal"
                                        id="txt7feeTotalFees"
                                        min="0"
                                        placeholder="Total fees"
                                        readonly=""
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>B</th>
                                    <th>
                                      Tuition/Coaching classes fees{" "}
                                      <span
                                        style={{
                                          color: "red",
                                          fontWeight: "bold",
                                        }}
                                      ></span>
                                    </th>
                                    <td>
                                      <input
                                        type="text"
                                        class="form-control decimal allownumericwithdecimal"
                                        id="txt7feeClassesFees"
                                        min="0"
                                        placeholder="Tuition/Coaching classes fees"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>C</th>
                                    <th>Other Expenses's "C"</th>
                                    <th>Amount(in ₹)</th>
                                  </tr>
                                  <tr>
                                    <td></td>
                                    <td>
                                      Hostel Fees{" "}
                                      <span
                                        style={{
                                          color: "red",
                                          fontWeight: "bold",
                                        }}
                                      ></span>
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        class="form-control decimal allownumericwithdecimal"
                                        id="txt7feeHostalFees"
                                        min="0"
                                        placeholder="Hostel Fees"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td></td>
                                    <td>
                                      Mess Fees{" "}
                                      <span
                                        style={{
                                          color: "red",
                                          fontWeight: "bold",
                                        }}
                                      ></span>
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        class="form-control decimal allownumericwithdecimal"
                                        id="txt7feeMessFees"
                                        min="0"
                                        placeholder="Mess Fees"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td></td>
                                    <td>
                                      Conveyance{" "}
                                      <span
                                        style={{
                                          color: "red",
                                          fontWeight: "bold",
                                        }}
                                      ></span>
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        class="form-control decimal allownumericwithdecimal"
                                        id="txt7feeConveyance"
                                        min="0"
                                        placeholder="Conveyance"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td></td>
                                    <td>
                                      Books &amp; Stationary{" "}
                                      <span
                                        style={{
                                          color: "red",
                                          fontWeight: "bold",
                                        }}
                                      ></span>
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        class="form-control decimal allownumericwithdecimal"
                                        id="txt7feeStationary"
                                        min="0"
                                        placeholder="Books &amp; Stationary"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td></td>
                                    <td>
                                      Project &amp; Instrument{" "}
                                      <span
                                        style={{
                                          color: "red",
                                          fontWeight: "bold",
                                        }}
                                      ></span>
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        class="form-control decimal allownumericwithdecimal"
                                        id="txt7feeProjectInstrument"
                                        min="0"
                                        placeholder="Project &amp; Instrument"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td></td>
                                    <td>
                                      Any Other(please specify){" "}
                                      <span
                                        style={{
                                          color: "red",
                                          fontWeight: "bold",
                                        }}
                                      ></span>
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        class="form-control decimal allownumericwithdecimal"
                                        id="txt7feeAnyOther"
                                        min="0"
                                        placeholder="Any Other(please specify)"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td></td>
                                    <th>
                                      Total Expenses{" "}
                                      <span
                                        style={{
                                          color: "red",
                                          fontWeight: "bold",
                                        }}
                                      ></span>
                                    </th>
                                    <td>
                                      <input
                                        type="text"
                                        class="form-control decimal allownumericwithdecimal"
                                        id="txt7feeTotalExpenses"
                                        min="0"
                                        placeholder="Total Expenses"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td></td>
                                    <th>
                                      Total Fees Required From NCT(A+B+C){" "}
                                      <span
                                        style={{
                                          color: "red",
                                          fontWeight: "bold",
                                        }}
                                      ></span>
                                    </th>
                                    <td>
                                      <input
                                        type="text"
                                        class="form-control decimal allownumericwithdecimal"
                                        id="txt7feeTotalabc"
                                        min="0"
                                        placeholder="Total fees(A+B+C)"
                                        readonly=""
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>D</th>
                                    <th>
                                      Own contribution
                                      <span
                                        style={{
                                          color: "red",
                                          fontWeight: "bold",
                                        }}
                                      ></span>{" "}
                                    </th>
                                    <td>
                                      <input
                                        type="text"
                                        class="form-control decimal allownumericwithdecimal"
                                        id="txt7feeOwnContribution"
                                        min="0"
                                        placeholder="Own contribution"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <th></th>
                                    <th>
                                      TOTAL(A+B+C-D)
                                      <span
                                        style={{
                                          color: "red",
                                          fontWeight: "bold",
                                        }}
                                      ></span>{" "}
                                    </th>
                                    <td>
                                      <input
                                        type="text"
                                        class="form-control decimal allownumericwithdecimal"
                                        id="txt7TotalFees"
                                        min="0"
                                        placeholder="Total Fees"
                                        readonly=""
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td></td>
                                    <td colspan="4">
                                      <div class="col-sm-12 topMargin">
                                        <p>
                                          <b>Note:</b>Hostel &amp; Mess fees
                                          will be provided only for special
                                          category cases on case to case basis.
                                          Education aid is subject to decision
                                          of committee members.
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {tab === "bank_details" && (
                      <>
                        <div class="col-lg-12">
                          <form role="form">
                            <div class="form-group">
                              <div class="row">
                                <div class="col-sm-12">
                                  <div class="row">
                                    <div class="col-sm-4 topMargin">
                                      <label>
                                        Name(as per passbook){" "}
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        class="form-control"
                                        id="txt10bdName"
                                        placeholder="Name(as passbook)"
                                      />
                                    </div>
                                    <div class="col-sm-4 topMargin">
                                      <label>
                                        Account no
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        class="form-control numberValidation"
                                        id="txt10bdAccountNumber"
                                        placeholder="Account no"
                                      />
                                    </div>
                                    <div class="col-sm-4 topMargin">
                                      <label>
                                        Bank Name
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      <div class="input-group">
                                        <div
                                          class="input-group-addon"
                                          id="loadbdBankName"
                                        >
                                          <i class="icon ion-university"></i>
                                        </div>
                                        <select
                                          id="txt10bdBankName"
                                          class="form-control"
                                        >
                                          <option
                                            selected="selected"
                                            value="NA"
                                          >
                                            --select--
                                          </option>
                                          <option value="ABHYUDAYA COOPERATIVE BANK LIMITED">
                                            ABHYUDAYA COOPERATIVE BANK LIMITED
                                          </option>
                                          <option value="ABU DHABI COMMERCIAL BANK">
                                            ABU DHABI COMMERCIAL BANK
                                          </option>
                                          <option value="AHMEDABAD MERCANTILE COOPERATIVE BANK">
                                            AHMEDABAD MERCANTILE COOPERATIVE
                                            BANK
                                          </option>
                                          <option value="AKOLA JANATA COMMERCIAL COOPERATIVE BANK">
                                            AKOLA JANATA COMMERCIAL COOPERATIVE
                                            BANK
                                          </option>
                                          <option value="ALLAHABAD BANK">
                                            ALLAHABAD BANK
                                          </option>
                                          <option value="ALMORA URBAN COOPERATIVE BANK LIMITED">
                                            ALMORA URBAN COOPERATIVE BANK
                                            LIMITED
                                          </option>
                                          <option value="ANDHRA BANK">
                                            ANDHRA BANK
                                          </option>
                                          <option value="ANDHRA PRAGATHI GRAMEENA BANK">
                                            ANDHRA PRAGATHI GRAMEENA BANK
                                          </option>
                                          <option value="APNA SAHAKARI BANK LIMITED">
                                            APNA SAHAKARI BANK LIMITED
                                          </option>
                                          <option value="AUSTRALIA AND NEW ZEALAND BANKING GROUP LIMITED">
                                            AUSTRALIA AND NEW ZEALAND BANKING
                                            GROUP LIMITED
                                          </option>
                                          <option value="AXIS BANK">
                                            AXIS BANK
                                          </option>
                                          <option value="B N P PARIBAS">
                                            B N P PARIBAS
                                          </option>
                                          <option value="BANDHAN BANK LIMITED">
                                            BANDHAN BANK LIMITED
                                          </option>
                                          <option value="BANK INTERNASIONAL INDONESIA">
                                            BANK INTERNASIONAL INDONESIA
                                          </option>
                                          <option value="BANK OF AMERICA">
                                            BANK OF AMERICA
                                          </option>
                                          <option value="BANK OF BAHARAIN AND KUWAIT BSC">
                                            BANK OF BAHARAIN AND KUWAIT BSC
                                          </option>
                                          <option value="BANK OF BARODA">
                                            BANK OF BARODA
                                          </option>
                                          <option value="BANK OF CEYLON">
                                            BANK OF CEYLON
                                          </option>
                                          <option value="BANK OF INDIA">
                                            BANK OF INDIA
                                          </option>
                                          <option value="BANK OF MAHARASHTRA">
                                            BANK OF MAHARASHTRA
                                          </option>
                                          <option value="BANK OF TOKYO MITSUBISHI LIMITED">
                                            BANK OF TOKYO MITSUBISHI LIMITED
                                          </option>
                                          <option value="BARCLAYS BANK">
                                            BARCLAYS BANK
                                          </option>
                                          <option value="BASSEIN CATHOLIC COOPERATIVE BANK LIMITED">
                                            BASSEIN CATHOLIC COOPERATIVE BANK
                                            LIMITED
                                          </option>
                                          <option value="BHARAT COOPERATIVE BANK MUMBAI LIMITED">
                                            BHARAT COOPERATIVE BANK MUMBAI
                                            LIMITED
                                          </option>
                                          <option value="BHARATIYA MAHILA BANK LIMITED">
                                            BHARATIYA MAHILA BANK LIMITED
                                          </option>
                                          <option value="CANARA BANK">
                                            CANARA BANK
                                          </option>
                                          <option value="CAPITAL LOCAL AREA BANK LIMITED">
                                            CAPITAL LOCAL AREA BANK LIMITED
                                          </option>
                                          <option value="CATHOLIC SYRIAN BANK LIMITED">
                                            CATHOLIC SYRIAN BANK LIMITED
                                          </option>
                                          <option value="CENTRAL BANK OF INDIA">
                                            CENTRAL BANK OF INDIA
                                          </option>
                                          <option value="CHINATRUST COMMERCIAL BANK LIMITED">
                                            CHINATRUST COMMERCIAL BANK LIMITED
                                          </option>
                                          <option value="CITI BANK">
                                            CITI BANK
                                          </option>
                                          <option value="CITIZEN CREDIT COOPERATIVE BANK LIMITED">
                                            CITIZEN CREDIT COOPERATIVE BANK
                                            LIMITED
                                          </option>
                                          <option value="CITY UNION BANK LIMITED">
                                            CITY UNION BANK LIMITED
                                          </option>
                                          <option value="COMMONWEALTH BANK OF AUSTRALIA">
                                            COMMONWEALTH BANK OF AUSTRALIA
                                          </option>
                                          <option value="CORPORATION BANK">
                                            CORPORATION BANK
                                          </option>
                                          <option value="CREDIT AGRICOLE CORPORATE AND INVESTMENT BANK CALYON BANK">
                                            CREDIT AGRICOLE CORPORATE AND
                                            INVESTMENT BANK CALYON BANK
                                          </option>
                                          <option value="CREDIT SUISEE AG">
                                            CREDIT SUISEE AG
                                          </option>
                                          <option value="DCB BANK LIMITED">
                                            DCB BANK LIMITED
                                          </option>
                                          <option value="DENA BANK">
                                            DENA BANK
                                          </option>
                                          <option value="DEPOSIT INSURANCE AND CREDIT GUARANTEE CORPORATION">
                                            DEPOSIT INSURANCE AND CREDIT
                                            GUARANTEE CORPORATION
                                          </option>
                                          <option value="DEUSTCHE BANK">
                                            DEUSTCHE BANK
                                          </option>
                                          <option value="DEVELOPMENT BANK OF SINGAPORE">
                                            DEVELOPMENT BANK OF SINGAPORE
                                          </option>
                                          <option value="DHANALAKSHMI BANK">
                                            DHANALAKSHMI BANK
                                          </option>
                                          <option value="DOHA BANK">
                                            DOHA BANK
                                          </option>
                                          <option value="DOHA BANK QSC">
                                            DOHA BANK QSC
                                          </option>
                                          <option value="DOMBIVLI NAGARI SAHAKARI BANK LIMITED">
                                            DOMBIVLI NAGARI SAHAKARI BANK
                                            LIMITED
                                          </option>
                                          <option value="EXPORT IMPORT BANK OF INDIA">
                                            EXPORT IMPORT BANK OF INDIA
                                          </option>
                                          <option value="FEDERAL BANK">
                                            FEDERAL BANK
                                          </option>
                                          <option value="FIRSTRAND BANK LIMITED">
                                            FIRSTRAND BANK LIMITED
                                          </option>
                                          <option value="G P PARSIK BANK">
                                            G P PARSIK BANK
                                          </option>
                                          <option value="HDFC BANK">
                                            HDFC BANK
                                          </option>
                                          <option value="HSBC BANK">
                                            HSBC BANK
                                          </option>
                                          <option value="ICICI BANK LIMITED">
                                            ICICI BANK LIMITED
                                          </option>
                                          <option value="IDBI BANK">
                                            IDBI BANK
                                          </option>
                                          <option value="IDFC BANK LIMITED">
                                            IDFC BANK LIMITED
                                          </option>
                                          <option value="INDIAN BANK">
                                            INDIAN BANK
                                          </option>
                                          <option value="INDIAN OVERSEAS BANK">
                                            INDIAN OVERSEAS BANK
                                          </option>
                                          <option value="INDUSIND BANK">
                                            INDUSIND BANK
                                          </option>
                                          <option value="INDUSTRIAL AND COMMERCIAL BANK OF CHINA LIMITED">
                                            INDUSTRIAL AND COMMERCIAL BANK OF
                                            CHINA LIMITED
                                          </option>
                                          <option value="INDUSTRIAL BANK OF KOREA">
                                            INDUSTRIAL BANK OF KOREA
                                          </option>
                                          <option value="ING VYSYA BANK">
                                            ING VYSYA BANK
                                          </option>
                                          <option value="JALGAON JANATA SAHAKARI BANK LIMITED">
                                            JALGAON JANATA SAHAKARI BANK LIMITED
                                          </option>
                                          <option value="JAMMU AND KASHMIR BANK LIMITED">
                                            JAMMU AND KASHMIR BANK LIMITED
                                          </option>
                                          <option value="JANAKALYAN SAHAKARI BANK LIMITED">
                                            JANAKALYAN SAHAKARI BANK LIMITED
                                          </option>
                                          <option value="JANASEVA SAHAKARI BANK BORIVLI LIMITED">
                                            JANASEVA SAHAKARI BANK BORIVLI
                                            LIMITED
                                          </option>
                                          <option value="JANASEVA SAHAKARI BANK LIMITED">
                                            JANASEVA SAHAKARI BANK LIMITED
                                          </option>
                                          <option value="JANATA SAHAKARI BANK LIMITED">
                                            JANATA SAHAKARI BANK LIMITED
                                          </option>
                                          <option value="JP MORGAN BANK">
                                            JP MORGAN BANK
                                          </option>
                                          <option value="KALLAPPANNA AWADE ICHALKARANJI JANATA SAHAKARI BANK LIMITED">
                                            KALLAPPANNA AWADE ICHALKARANJI
                                            JANATA SAHAKARI BANK LIMITED
                                          </option>
                                          <option value="KALUPUR COMMERCIAL COOPERATIVE BANK">
                                            KALUPUR COMMERCIAL COOPERATIVE BANK
                                          </option>
                                          <option value="KALYAN JANATA SAHAKARI BANK">
                                            KALYAN JANATA SAHAKARI BANK
                                          </option>
                                          <option value="KAPOL COOPERATIVE BANK LIMITED">
                                            KAPOL COOPERATIVE BANK LIMITED
                                          </option>
                                          <option value="KARNATAKA BANK LIMITED">
                                            KARNATAKA BANK LIMITED
                                          </option>
                                          <option value="KARNATAKA VIKAS GRAMEENA BANK">
                                            KARNATAKA VIKAS GRAMEENA BANK
                                          </option>
                                          <option value="KARUR VYSYA BANK">
                                            KARUR VYSYA BANK
                                          </option>
                                          <option value="KEB Hana Bank">
                                            KEB Hana Bank
                                          </option>
                                          <option value="KERALA GRAMIN BANK">
                                            KERALA GRAMIN BANK
                                          </option>
                                          <option value="KOTAK MAHINDRA BANK LIMITED">
                                            KOTAK MAHINDRA BANK LIMITED
                                          </option>
                                          <option value="LAXMI VILAS BANK">
                                            LAXMI VILAS BANK
                                          </option>
                                          <option value="MAHANAGAR COOPERATIVE BANK">
                                            MAHANAGAR COOPERATIVE BANK
                                          </option>
                                          <option value="MAHARASHTRA STATE COOPERATIVE BANK">
                                            MAHARASHTRA STATE COOPERATIVE BANK
                                          </option>
                                          <option value="MASHREQBANK PSC">
                                            MASHREQBANK PSC
                                          </option>
                                          <option value="MIZUHO CORPORATE BANK LIMITED">
                                            MIZUHO CORPORATE BANK LIMITED
                                          </option>
                                          <option value="NAGAR URBAN CO OPERATIVE BANK">
                                            NAGAR URBAN CO OPERATIVE BANK
                                          </option>
                                          <option value="NAGPUR NAGARIK SAHAKARI BANK LIMITED">
                                            NAGPUR NAGARIK SAHAKARI BANK LIMITED
                                          </option>
                                          <option value="NATIONAL AUSTRALIA BANK LIMITED">
                                            NATIONAL AUSTRALIA BANK LIMITED
                                          </option>
                                          <option value="NATIONAL BANK OF ABU DHABI PJSC">
                                            NATIONAL BANK OF ABU DHABI PJSC
                                          </option>
                                          <option value="NEW INDIA COOPERATIVE BANK LIMITED">
                                            NEW INDIA COOPERATIVE BANK LIMITED
                                          </option>
                                          <option value="NKGSB COOPERATIVE BANK LIMITED">
                                            NKGSB COOPERATIVE BANK LIMITED
                                          </option>
                                          <option value="NUTAN NAGARIK SAHAKARI BANK LIMITED">
                                            NUTAN NAGARIK SAHAKARI BANK LIMITED
                                          </option>
                                          <option value="ORIENTAL BANK OF COMMERCE">
                                            ORIENTAL BANK OF COMMERCE
                                          </option>
                                          <option value="PRAGATHI KRISHNA GRAMIN BANK">
                                            PRAGATHI KRISHNA GRAMIN BANK
                                          </option>
                                          <option value="PRATHAMA BANK">
                                            PRATHAMA BANK
                                          </option>
                                          <option value="PRIME COOPERATIVE BANK LIMITED">
                                            PRIME COOPERATIVE BANK LIMITED
                                          </option>
                                          <option value="PUNJAB AND MAHARSHTRA COOPERATIVE BANK">
                                            PUNJAB AND MAHARSHTRA COOPERATIVE
                                            BANK
                                          </option>
                                          <option value="PUNJAB AND SIND BANK">
                                            PUNJAB AND SIND BANK
                                          </option>
                                          <option value="PUNJAB NATIONAL BANK">
                                            PUNJAB NATIONAL BANK
                                          </option>
                                          <option value="RABOBANK INTERNATIONAL">
                                            RABOBANK INTERNATIONAL
                                          </option>
                                          <option value="RAJGURUNAGAR SAHAKARI BANK LIMITED">
                                            RAJGURUNAGAR SAHAKARI BANK LIMITED
                                          </option>
                                          <option value="RAJKOT NAGRIK SAHAKARI BANK LIMITED">
                                            RAJKOT NAGRIK SAHAKARI BANK LIMITED
                                          </option>
                                          <option value="RBL Bank Limited">
                                            RBL Bank Limited
                                          </option>
                                          <option value="RESERVE BANK OF INDIA">
                                            RESERVE BANK OF INDIA
                                          </option>
                                          <option value="SAHEBRAO DESHMUKH COOPERATIVE BANK LIMITED">
                                            SAHEBRAO DESHMUKH COOPERATIVE BANK
                                            LIMITED
                                          </option>
                                          <option value="SAMARTH SAHAKARI BANK LTD">
                                            SAMARTH SAHAKARI BANK LTD
                                          </option>
                                          <option value="SARASWAT COOPERATIVE BANK LIMITED">
                                            SARASWAT COOPERATIVE BANK LIMITED
                                          </option>
                                          <option value="SBER BANK">
                                            SBER BANK
                                          </option>
                                          <option value="SBM BANK MAURITIUS LIMITED">
                                            SBM BANK MAURITIUS LIMITED
                                          </option>
                                          <option value="SHIKSHAK SAHAKARI BANK LIMITED">
                                            SHIKSHAK SAHAKARI BANK LIMITED
                                          </option>
                                          <option value="SHINHAN BANK">
                                            SHINHAN BANK
                                          </option>
                                          <option value="SHIVALIK MERCANTILE CO OPERATIVE BANK LTD">
                                            SHIVALIK MERCANTILE CO OPERATIVE
                                            BANK LTD
                                          </option>
                                          <option value="SHRI CHHATRAPATI RAJASHRI SHAHU URBAN COOPERATIVE BANK LIMITED">
                                            SHRI CHHATRAPATI RAJASHRI SHAHU
                                            URBAN COOPERATIVE BANK LIMITED
                                          </option>
                                          <option value="SOCIETE GENERALE">
                                            SOCIETE GENERALE
                                          </option>
                                          <option value="SOLAPUR JANATA SAHAKARI BANK LIMITED">
                                            SOLAPUR JANATA SAHAKARI BANK LIMITED
                                          </option>
                                          <option value="SOUTH INDIAN BANK">
                                            SOUTH INDIAN BANK
                                          </option>
                                          <option value="STANDARD CHARTERED BANK">
                                            STANDARD CHARTERED BANK
                                          </option>
                                          <option value="STATE BANK OF BIKANER AND JAIPUR">
                                            STATE BANK OF BIKANER AND JAIPUR
                                          </option>
                                          <option value="STATE BANK OF HYDERABAD">
                                            STATE BANK OF HYDERABAD
                                          </option>
                                          <option value="STATE BANK OF INDIA">
                                            STATE BANK OF INDIA
                                          </option>
                                          <option value="STATE BANK OF MYSORE">
                                            STATE BANK OF MYSORE
                                          </option>
                                          <option value="STATE BANK OF PATIALA">
                                            STATE BANK OF PATIALA
                                          </option>
                                          <option value="STATE BANK OF TRAVANCORE">
                                            STATE BANK OF TRAVANCORE
                                          </option>
                                          <option value="SUMITOMO MITSUI BANKING CORPORATION">
                                            SUMITOMO MITSUI BANKING CORPORATION
                                          </option>
                                          <option value="SURAT NATIONAL COOPERATIVE BANK LIMITED">
                                            SURAT NATIONAL COOPERATIVE BANK
                                            LIMITED
                                          </option>
                                          <option value="SUTEX COOPERATIVE BANK LIMITED">
                                            SUTEX COOPERATIVE BANK LIMITED
                                          </option>
                                          <option value="SYNDICATE BANK">
                                            SYNDICATE BANK
                                          </option>
                                          <option value="TAMILNAD MERCANTILE BANK LIMITED">
                                            TAMILNAD MERCANTILE BANK LIMITED
                                          </option>
                                          <option value="THE A.P. MAHESH COOPERATIVE URBAN BANK LIMITED">
                                            THE A.P. MAHESH COOPERATIVE URBAN
                                            BANK LIMITED
                                          </option>
                                          <option value="THE AKOLA DISTRICT CENTRAL COOPERATIVE BANK">
                                            THE AKOLA DISTRICT CENTRAL
                                            COOPERATIVE BANK
                                          </option>
                                          <option value="THE ANDHRA PRADESH STATE COOPERATIVE BANK LIMITED">
                                            THE ANDHRA PRADESH STATE COOPERATIVE
                                            BANK LIMITED
                                          </option>
                                          <option value="THE BANK OF NOVA SCOTIA">
                                            THE BANK OF NOVA SCOTIA
                                          </option>
                                          <option value="THE COSMOS CO OPERATIVE BANK LIMITED">
                                            THE COSMOS CO OPERATIVE BANK LIMITED
                                          </option>
                                          <option value="THE DELHI STATE COOPERATIVE BANK LIMITED">
                                            THE DELHI STATE COOPERATIVE BANK
                                            LIMITED
                                          </option>
                                          <option value="THE GADCHIROLI DISTRICT CENTRAL COOPERATIVE BANK LIMITED">
                                            THE GADCHIROLI DISTRICT CENTRAL
                                            COOPERATIVE BANK LIMITED
                                          </option>
                                          <option value="THE GREATER BOMBAY COOPERATIVE BANK LIMITED">
                                            THE GREATER BOMBAY COOPERATIVE BANK
                                            LIMITED
                                          </option>
                                          <option value="THE GUJARAT STATE COOPERATIVE BANK LIMITED">
                                            THE GUJARAT STATE COOPERATIVE BANK
                                            LIMITED
                                          </option>
                                          <option value="THE HASTI COOP BANK LTD">
                                            THE HASTI COOP BANK LTD
                                          </option>
                                          <option value="THE JALGAON PEOPELS COOPERATIVE BANK LIMITED">
                                            THE JALGAON PEOPELS COOPERATIVE BANK
                                            LIMITED
                                          </option>
                                          <option value="THE KANGRA CENTRAL COOPERATIVE BANK LIMITED">
                                            THE KANGRA CENTRAL COOPERATIVE BANK
                                            LIMITED
                                          </option>
                                          <option value="THE KANGRA COOPERATIVE BANK LIMITED">
                                            THE KANGRA COOPERATIVE BANK LIMITED
                                          </option>
                                          <option value="THE KARAD URBAN COOPERATIVE BANK LIMITED">
                                            THE KARAD URBAN COOPERATIVE BANK
                                            LIMITED
                                          </option>
                                          <option value="THE KARANATAKA STATE COOPERATIVE APEX BANK LIMITED">
                                            THE KARANATAKA STATE COOPERATIVE
                                            APEX BANK LIMITED
                                          </option>
                                          <option value="THE KURMANCHAL NAGAR SAHAKARI BANK LIMITED">
                                            THE KURMANCHAL NAGAR SAHAKARI BANK
                                            LIMITED
                                          </option>
                                          <option value="THE MEHSANA URBAN COOPERATIVE BANK">
                                            THE MEHSANA URBAN COOPERATIVE BANK
                                          </option>
                                          <option value="THE MUMBAI DISTRICT CENTRAL COOPERATIVE BANK LIMITED">
                                            THE MUMBAI DISTRICT CENTRAL
                                            COOPERATIVE BANK LIMITED
                                          </option>
                                          <option value="THE MUNICIPAL COOPERATIVE BANK LIMITED">
                                            THE MUNICIPAL COOPERATIVE BANK
                                            LIMITED
                                          </option>
                                          <option value="THE NAINITAL BANK LIMITED">
                                            THE NAINITAL BANK LIMITED
                                          </option>
                                          <option value="THE NASIK MERCHANTS COOPERATIVE BANK LIMITED">
                                            THE NASIK MERCHANTS COOPERATIVE BANK
                                            LIMITED
                                          </option>
                                          <option value="THE PANDHARPUR URBAN CO OP. BANK LTD. PANDHARPUR">
                                            THE PANDHARPUR URBAN CO OP. BANK
                                            LTD. PANDHARPUR
                                          </option>
                                          <option value="THE RAJASTHAN STATE COOPERATIVE BANK LIMITED">
                                            THE RAJASTHAN STATE COOPERATIVE BANK
                                            LIMITED
                                          </option>
                                          <option value="THE ROYAL BANK OF SCOTLAND N V">
                                            THE ROYAL BANK OF SCOTLAND N V
                                          </option>
                                          <option value="THE SEVA VIKAS COOPERATIVE BANK LIMITED">
                                            THE SEVA VIKAS COOPERATIVE BANK
                                            LIMITED
                                          </option>
                                          <option value="THE SHAMRAO VITHAL COOPERATIVE BANK">
                                            THE SHAMRAO VITHAL COOPERATIVE BANK
                                          </option>
                                          <option value="THE SURAT DISTRICT COOPERATIVE BANK LIMITED">
                                            THE SURAT DISTRICT COOPERATIVE BANK
                                            LIMITED
                                          </option>
                                          <option value="THE SURATH PEOPLES COOPERATIVE BANK LIMITED">
                                            THE SURATH PEOPLES COOPERATIVE BANK
                                            LIMITED
                                          </option>
                                          <option value="THE TAMIL NADU STATE APEX COOPERATIVE BANK">
                                            THE TAMIL NADU STATE APEX
                                            COOPERATIVE BANK
                                          </option>
                                          <option value="THE THANE BHARAT SAHAKARI BANK LIMITED">
                                            THE THANE BHARAT SAHAKARI BANK
                                            LIMITED
                                          </option>
                                          <option value="THE THANE DISTRICT CENTRAL COOPERATIVE BANK LIMITED">
                                            THE THANE DISTRICT CENTRAL
                                            COOPERATIVE BANK LIMITED
                                          </option>
                                          <option value="THE VARACHHA COOPERATIVE BANK LIMITED">
                                            THE VARACHHA COOPERATIVE BANK
                                            LIMITED
                                          </option>
                                          <option value="THE VISHWESHWAR SAHAKARI BANK LIMITED">
                                            THE VISHWESHWAR SAHAKARI BANK
                                            LIMITED
                                          </option>
                                          <option value="THE WEST BENGAL STATE COOPERATIVE BANK">
                                            THE WEST BENGAL STATE COOPERATIVE
                                            BANK
                                          </option>
                                          <option value="THE ZOROASTRIAN COOPERATIVE BANK LIMITED">
                                            THE ZOROASTRIAN COOPERATIVE BANK
                                            LIMITED
                                          </option>
                                          <option value="TJSB SAHAKARI BANK LIMITED">
                                            TJSB SAHAKARI BANK LIMITED
                                          </option>
                                          <option value="TJSB SAHAKARI BANK LTD">
                                            TJSB SAHAKARI BANK LTD
                                          </option>
                                          <option value="TUMKUR GRAIN MERCHANTS COOPERATIVE BANK LIMITED">
                                            TUMKUR GRAIN MERCHANTS COOPERATIVE
                                            BANK LIMITED
                                          </option>
                                          <option value="UCO BANK">
                                            UCO BANK
                                          </option>
                                          <option value="UNION BANK OF INDIA">
                                            UNION BANK OF INDIA
                                          </option>
                                          <option value="UNITED BANK OF INDIA">
                                            UNITED BANK OF INDIA
                                          </option>
                                          <option value="UNITED OVERSEAS BANK LIMITED">
                                            UNITED OVERSEAS BANK LIMITED
                                          </option>
                                          <option value="VASAI VIKAS SAHAKARI BANK LIMITED">
                                            VASAI VIKAS SAHAKARI BANK LIMITED
                                          </option>
                                          <option value="VASAI VIKAS SAHAKARI BANK LTD">
                                            VASAI VIKAS SAHAKARI BANK LTD
                                          </option>
                                          <option value="VIJAYA BANK">
                                            VIJAYA BANK
                                          </option>
                                          <option value="WESTPAC BANKING CORPORATION">
                                            WESTPAC BANKING CORPORATION
                                          </option>
                                          <option value="WOORI BANK">
                                            WOORI BANK
                                          </option>
                                          <option value="YES BANK">
                                            YES BANK
                                          </option>
                                          <option value="ZILA SAHAKRI BANK LIMITED GHAZIABAD">
                                            ZILA SAHAKRI BANK LIMITED GHAZIABAD
                                          </option>
                                          <option value="Other">Other</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div
                                      class="col-sm-4 topMargin"
                                      id="OtherBank"
                                      // style={{display: "none"}}
                                    >
                                      <label>
                                        Other Bank{" "}
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        class="form-control"
                                        id="txt10OtherBank"
                                        placeholder="Other Bank"
                                      />
                                    </div>
                                    <div class="col-sm-4 topMargin">
                                      <label>
                                        Branch
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        class="form-control"
                                        id="txt10bdBranch"
                                        placeholder="Branch"
                                      />
                                    </div>
                                    <div class="col-sm-4 topMargin">
                                      <label>
                                        IFSC Code{" "}
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        class="form-control AllLetterCapital"
                                        id="txt10bdIfscCode"
                                        placeholder="IFSC Code"
                                      />
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col-sm-3 topMargin">
                                      <label>
                                        Pass Book{" "}
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      <input
                                        type="file"
                                        class="form-control"
                                        id="txt10PassbookFile"
                                      />
                                    </div>
                                    <div class="col-sm-1 topMargin">
                                      <a id="PassbookFileView">
                                        <img
                                          mandatory="yes"
                                          class="img-rounded"
                                          style={{
                                            height: "35px",
                                            width: "40px",
                                            marginTop: "23px",
                                            marginLeft: "-20px",
                                          }}
                                          id="imgPassbookFileView"
                                          src="../admission/PassbookFile/202026_PassbookFile.jpg"
                                          alt="Photo"
                                        />
                                      </a>
                                      <i
                                        class="fa fa-close form-control clearFile"
                                        style={{
                                          padding: "0px",
                                          height: "2px",
                                          width: "2px",
                                          fontWeight: "bold",
                                          marginLeft: "0px",
                                          marginTop: "0px",
                                          color: "red",
                                        }}
                                      ></i>
                                    </div>

                                    <div class="col-sm-3 topMargin">
                                      <label>Pass Book Backside </label>
                                      <input
                                        type="file"
                                        class="form-control"
                                        id="txt10PassbookFileBackside"
                                      />
                                    </div>
                                    <div class="col-sm-1 topMargin">
                                      <a id="PassbookFileViewBackside">
                                        <img
                                          mandatory="No"
                                          class="img-rounded"
                                          style={{
                                            height: "35px",
                                            width: "40px",
                                            marginTop: "23px",
                                            marginLeft: "-20px",
                                          }}
                                          id="imgPassbookFileViewBackside"
                                          src="../dist/img/edu_profile_blank.png"
                                          alt="Photo"
                                        />
                                      </a>
                                      <i
                                        class="fa fa-close form-control clearFile"
                                        style={{
                                          padding: "0px",
                                          height: "2px",
                                          width: "2px",
                                          fontWeight: "bold",
                                          marginLeft: "0px",
                                          marginTop: "0px",
                                          color: "red",
                                        }}
                                      ></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <button type="submit" class="btn btn-default">
                              Submit Button
                            </button>
                            <button type="reset" class="btn btn-default">
                              Reset Button
                            </button>
                          </form>
                        </div>
                      </>
                    )}
                  </form>
                  <div className="center">
                    <button
                      type="submit"
                      id="submit-btn"
                      className="btn btn-default"
                      onClick={(e) => handleSubmit(e, "saveAsDraft")}
                      style={{ display: buttonShow ? "none" : "block" }}
                    >
                      Save
                    </button>
                  </div>

                  <div className="prev_nxt_btn">
                    <button
                      //  className={`btn btn-primary ${tabs.indexOf(currentTab) === 0 ? 'd-none' : 'd-block'}`}
                      className={"btn btn-primary"}
                      onClick={handlePrev}
                      // disabled={tabs.indexOf(currentTab) === 0}
                    >
                      Previous
                    </button>
                    <button
                      className="btn btn-primary"
                      disabled={tabs.indexOf(currentTab) === tabs.length - 1}
                      onClick={(e) => {
                        handleNext();
                        handleSubmit(e, "saveAsDraft");
                      }}
                    >
                      save_nxt_btn
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Application;
