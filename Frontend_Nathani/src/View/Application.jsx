import React, { useState, useEffect, useContext } from "react";
import Loader from "../Loader/Loader";
import { useLocation, useNavigate, Link } from "react-router-dom";
import queryString from "query-string";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import AllStatedata from "../constant/config.json";

const Application = () => {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const tab = query.tab || "student_info";
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
  const [currentTab, setCurrentTab] = useState("student_info");
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
                    <div class="col-sm-12">
                      <div class="form-group">
                        <div class="row">
                          <div class="col-sm-3 topMargin">
                            <label>
                              Currently studying in Std{" "}
                              <span style={{color: "red"}}>*</span>
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
                                Entrance Exams and other professional courses
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
                              Course Name<span style={{color: "red"}}></span>
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
                              Level of course <span style={{color: "red"}}>*</span>
                            </label>
                            <select
                              class="form-control select2"
                              id="txt5LevelOfCourse_Step6"
                              style={{width: "100%"}}
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
                              Other Course<span style={{color: "red"}}></span>
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
                              <span style={{color: "red"}}></span>
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
                              Other Field <span style={{color: "red"}}>*</span>
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
                          <div class="col-sm-3 topMargin" id="Div_Field_Step6">
                            <label>
                              Field <span style={{color: "red"}}>*</span>
                            </label>
                            <select
                              class="form-control select2"
                              id="txt5Field_Step6"
                              style={{width: "100%"}}
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
                              Duration <span style={{color: "red"}}>*</span>
                            </label>
                            <select
                              class="form-control select2"
                              id="txt6scDurationOfCourse"
                              style={{width: "100%"}}
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
                              <span style={{color: "red"}}>*</span>
                            </label>
                            <select
                              class="form-control select2"
                              id="txt6scMediumOfInstruction"
                              style={{width: "100%"}}
                            >
                              <option value="NA">--select--</option>
                              <option value="English">English</option>
                              <option value="Gujarati">Gujarati</option>
                              <option value="Hindi">Hindi</option>
                              <option value="Marathi">Marathi</option>
                              <option value="Semi-English">Semi-English</option>
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
                              <span style={{color: "red"}}></span>
                            </label>
                            <select
                              class="form-control select2"
                              id="txt6scPatternOfCourse"
                              style={{width: "100%"}}
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
                              <span style={{color: "red"}}></span>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="txt6OtherDurationOfCourse"
                              placeholder="Other Duration of Course"
                            />
                          </div>
                          <div class="col-sm-3 topMargin" id="txtOtherCourse">
                            <label>
                              Other Course<span style={{color: "red"}}></span>
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
                              Other Medium<span style={{color: "red"}}>*</span>
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
                              <span style={{color: "red"}}>*</span>
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
                              <span style={{color: "red"}}></span>
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
                              <span style={{color: "red"}}>*</span>
                            </label>
                            <select
                              class="form-control select2"
                              id="txt6scModeOfBoard"
                              style={{width: "100%"}}
                            >
                              <option value="NA">--select--</option>
                              <option value="Govt">Government</option>
                              <option value="Private">Private</option>
                              <option value="Semi Govt">Semi Government</option>
                            </select>
                          </div>
                          <div class="col-sm-3 topMargin">
                            <label>
                              If Private<span style={{color: "red"}}>*</span>
                            </label>
                            <select
                              class="form-control select2"
                              id="txt6scIfPrivate"
                              style={{width: "100%"}}
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
                              <span style={{color: "red"}}>*</span>
                            </label>
                            <textarea
                              class="form-control"
                              id="txt6scAddress"
                              placeholder="School/ College / Institute Address"
                            ></textarea>
                          </div>
                          <div class="col-sm-3 topMargin">
                            <label>
                              City<span style={{color: "red"}}>*</span>
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
                              Pincode<span style={{color: "red"}}></span>
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
                              District<span style={{color: "red"}}></span>
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
                              State<span style={{color: "red"}}>*</span>
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
                              <option value="Chhattisgarh">Chhattisgarh</option>
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
                              <option value="Maharashtra">Maharashtra</option>
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
                              <option value="Uttarakhand">Uttarakhand</option>
                              <option value="West Bengal">West Bengal</option>
                            </select>
                          </div>
                          <div class="col-sm-3 topMargin">
                            <label>
                              Country<span style={{color: "red"}}></span>
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
                              Email<span style={{color: "red"}}></span>
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
                              Website<span style={{color: "red"}}></span>
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
                              Landline Number<span style={{color: "red"}}></span>
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
                              <span style={{color: "red"}}>*</span>
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
                              Mobile Number<span style={{color: "red"}}></span>
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
                              <span style={{color: "red"}}>*</span>
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
                               style={{height:"100px" , width:"100px"}}
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
                               style={{height:"100px" , width:"100px"}}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    {/* <div class="form-group">
                      <div
                        class="row"
                        style={{display: "flex" , justifyContent: "center"}}
                      >
                        <button
                          type="submit"
                          id="submit-btn"
                          class="btn btn-default"
                        >
                          Save
                        </button>
                      </div>
                    </div> */}
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

                    {tab === "family_details" && (
                      <button
                        type="submit"
                        id="submit-btn"
                        className="btn btn-default"
                        //  onClick={(e) => handleAddFamilyMember(e)}
                      >
                        {buttonShow ? "Update" : "Add"} member
                      </button>
                    )}
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
