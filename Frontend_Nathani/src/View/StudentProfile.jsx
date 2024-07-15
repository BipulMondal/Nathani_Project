import React, { useContext, useEffect, useState } from "react";
import { Link, json, useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";
import AllStatedata from "../constant/config.json";
import moment, { duration } from "moment";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import CityDropdown from "../components/CityDropdown";

const StudentProfile = () => {
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
    setOrganizationSupport,
    modifiedData,
    setModifiedData,
    originalData,
    setOriginalData,
    addFamilyMember,
    handleChange,
    familyData,
    setFamilyData,
    studentDetails,
    setStudentDetails,
    jamatDetails,
    setJamatDetails,
    academicDetails,
    setAcademicdetails,
    trustDetails,
    setTrustDetails,
    declarationFamily,
    setDeclarationFamily,
    baseUrl,
    url,
    imageHandler,
    id,
    getSingleStudentData
  } = useContext(GlobalContext);

  const [currentTab, setCurrentTab] = useState("student_info");
  const [loading, setLoading] = useState(false);
  const aadharNo = localStorage.getItem("aadharNO");
  const userType = localStorage.getItem("userType");
  const [buttonShow, setbuttonSchow] = useState(false);

  const tabs = [
    "student_info",
    "family_details",
    "memon_information",
    "previous_academic_information",
    "other_trust_support_information",
    "organisation_support_information",
    "parent_declaration",
    "all_documents",
    "confirmation",
    "printForm",
  ];
  const tabNames = {
    student_info: "Student Information",
    family_details: "Family Details",
    memon_information: "Memon Jamat Information",
    previous_academic_information: "Previous Academic Information",
    other_trust_support_information: "Details Of Other Trust Support",
    organisation_support_information: "Organisation Support To Family Member",
    parent_declaration: "Declaration Of Parents",
    all_documents: "Documentation",
    confirmation: "Confirmation",
    printForm: "Print Form",
  };

  const handlePrev = () => {
    const currentIndex = tabs.indexOf(currentTab);
    if (currentIndex > 0) {
      setCurrentTab(tabs[currentIndex - 1]);
      navigate(`/studentProfile?tab=${tabs[currentIndex - 1]}`);
    }
  };

  const handleNext = () => {
    if(studentDetails.aadharNo.length < 12 || studentDetails.aadharNo.length > 12){
      return false
    }
    const currentIndex = tabs.indexOf(currentTab);
    if (currentIndex < tabs.length - 1) {
      const nextTab = tabs[currentIndex + 1];
      setCurrentTab(nextTab);
      console.log("nextTab", nextTab);
      navigate(`/studentProfile?tab=${nextTab}`);
    }
  };

  

  const handleAddressCopy = (e) => {
    if (e.target.checked) {
      setStudentDetails((prev) => ({
        ...prev,
        currentAddress: prev.parmanentAddress,
      }));
    } else {
      setStudentDetails((prev) => ({
        ...prev,
        currentAddress: "",
      }));
    }
  };

  const handleValidation = () => {
    if (!studentDetails.aadharNo) {
      toast.error("Aadhar no is required");
      return false;
    }
    if (studentDetails.aadharNo < 16) {
      toast.error("Aadhar no must be 16 digit long");
      return false;
    }
    if (!studentDetails.lastName) {
      toast.error("Last name is required");
      return false;
    }
    if (!studentDetails.firstName) {
      toast.error("First name is required");
      return false;
    }
    if (!studentDetails.fatherName) {
      toast.error("Father name is required");
      return false;
    }
    if (!studentDetails.motherName) {
      toast.error("Mother name is required");
      return false;
    }
    if (!studentDetails.guardianName) {
      toast.error("Guardian name is required");
      return false;
    }
    if (!studentDetails.lastName) {
      toast.error("Last name is required");
      return false;
    }
    if (!studentDetails.dob) {
      toast.error("Date Of Birth is required");
      return false;
    }
    if (!studentDetails.birthPlace) {
      toast.error("Birth place is required");
      return false;
    }
    if (!studentDetails.gender) {
      toast.error("Gender is required");
      return false;
    }
    if (!studentDetails.maritalStatus) {
      toast.error("Marital status is required");
      return false;
    }
    if (studentDetails.maritalStatus && !studentDetails.spouseName) {
      toast.error("Spouse name is required");
      return false;
    }
    if (!studentDetails.StudentMobileNo) {
      toast.error("Mobile No is required");
      return false;
    }
    if (!studentDetails.StudentEmail) {
      toast.error("Email is required");
      return false;
    }
    if (!studentDetails.parmanentAddress) {
      toast.error("Permanent address is required");
      return false;
    }
    if (!studentDetails.currentAddress) {
      toast.error("Current address is required");
      return false;
    }
    if (!studentDetails.landMark) {
      toast.error("Land mark is required");
      return false;
    }
    if (!studentDetails.city) {
      toast.error("City is required");
      return false;
    }
    if (!studentDetails.pin) {
      toast.error("Pin Code is required");
      return false;
    }
    if (!studentDetails.district) {
      toast.error("District is required");
      return false;
    }
    if (!studentDetails.state) {
      toast.error("State is required");
      return false;
    }
    if (!studentDetails.country) {
      toast.error("Country is required");
      return false;
    }
    if (!studentDetails.physicalChallange) {
      toast.error("Physically Challanged is required");
      return false;
    }
    if (
      studentDetails.physicalChallange &&
      !studentDetails.physicalChallangeImg
    ) {
      toast.error("Physically Challange Certificate is required");
      return false;
    }
    if (!studentDetails.orphan) {
      toast.error("Orphan is required");
      return false;
    }
    if (studentDetails.orphan && !studentDetails.parentDeathCertificateImg) {
      toast.error("Parent Death Certificate is required");
      return false;
    }
    if (!studentDetails.addaharFrontImg) {
      toast.error("Aadhar front Image is required");
      return false;
    }
    if (!studentDetails.aadharBackImg) {
      toast.error("Aadhar back image is required");
      return false;
    }
    if (!studentDetails.rationFrontImg) {
      toast.error("Ration card first page image is required");
      return false;
    }
    if (!studentDetails.rationBackImg) {
      toast.error("Ration card back page image is required");
      return false;
    }
    if (!studentDetails.electricityBillImg) {
      toast.error("Electricity bill image is required");
      return false;
    }
    if (!studentDetails.category) {
      toast.error("Category is required");
      return false;
    }
    if (!studentDetails.zakatFund) {
      toast.error("Application for zakat fund required");
      return false;
    }
    if (!studentDetails.refferedBy) {
      toast.error("Referred by is required");
      return false;
    }
    if (!studentDetails.refMobileNo) {
      toast.error("Referred mobile no is required");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e, state) => {
    e.preventDefault();
    if (state === "saveAsDraft") {
      try {
        const mergedData = {
          ...originalData,
          ...modifiedData,
          studentInfo: studentDetails,
          familyDetails: familyData,
          jamatInfo: jamatDetails,
          prevAcademicInfo: academicDetails,
          othertrustSupport: trustDetails,
          organizationSupportFamily: organizationSupport,
          familyDeclaration: declarationFamily,
          saveAsDraft: true,
          _id: id ? id : localStorage.getItem("id"),
          addedBy: localStorage.getItem("addedBy"),
        };

        console.log("mergedData", mergedData);
        if (!studentDetails.aadharNo) {
          toast.error("Aadhar no is required");
          return false;
        } else if (studentDetails.aadharNo.length < 12 || studentDetails.aadharNo.length > 12) {
          toast.error("Aadhar no must be 12 digit long");
          return false;
        } else {
          setLoading(true);
          let result = await axios.post(`${url}/add_Student_data`, mergedData);
          console.log("result", result);
          if (result && result.data.status) {
            // getStudentData();
            getSingleStudentData();
            toast.success(result.data.message);
            setLoading(false);
            // setStudentInformation(initialState);
          }
        }
      } catch (error) {
        toast.error(error.response.data.message);
        setLoading(false);
      }
    } else {
      if (handleValidation()) {
        const mergedData = {
          ...originalData,
          ...modifiedData,
          studentInfo: studentDetails,
          familyDetails: familyData,
          jamatInfo: jamatDetails,
          prevAcademicInfo: academicDetails,
          othertrustSupport: trustDetails,
          organizationSupportFamily: organizationSupport,
          familyDeclaration: declarationFamily,
          saveAsDraft: true,
          _id: localStorage.getItem("id"),
          addedBy: localStorage.getItem("addedBy"),
        };
        setLoading(true);
        let res = await axios.post(`${url}/add_Student_data`, mergedData);
        if (res && res.data.status) {
          getStudentData();
          toast.success(res.data.message);
          setLoading(false);
          // setStudentInformation(initialState);
        }
      }
    }
  };

  const handleStore = (e, item, state) => {
    setStudentInformation((prev) => ({
      ...prev,
      familyDetails: prev.familyDetails.map((detail, index) =>
        index === 0 ? { ...detail, ...item } : detail
      ),
    }));
  };

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
                      to={`/studentProfile?tab=${tab}`}
                      onClick={() => setCurrentTab(tab)}
                    >
                      {/* {tab
                        .split("_")
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(" ")} */}
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
                  {/* ============ main form section  =========== */}
                  <form role="form">
                    <hr />
                    {tab === "student_info" && (
                      <div className="stud_info">
                        <h3>
                          <u>Basic Information</u>
                        </h3>
                        {/* Aadhar */}
                        <div className="form-group">
                          <div className="row">
                            <div className="col-lg-3">
                              <label>
                                Enter Aadhar No <span>*</span>
                              </label>
                              <input
                                type="numbers"
                                name="studentDetails.aadharNo"
                                className="form-control"
                                placeholder="Enter Aadhar No"
                                value={studentDetails.aadharNo}
                                onChange={(e) => {
                                  setStudentDetails((state) => {
                                    state.aadharNo = e.target.value;
                                    return JSON.parse(JSON.stringify(state));
                                  });
                                }}
                                disabled={userType === "Student"}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="row">
                            {/* last name */}
                            <div className="col-lg-3">
                              <label>
                                Enter Last Name <span>*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="studentDetails.lastName"
                                value={studentDetails.lastName}
                                placeholder="Enter Last Name"
                                onChange={(e) => {
                                  setStudentDetails((state) => {
                                    state.lastName = e.target.value;
                                    return JSON.parse(JSON.stringify(state));
                                  });
                                }}
                                required
                              />
                            </div>
                            {/* first name */}
                            <div className="col-lg-3">
                              <label>
                                Enter First Name <span>*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="studentDetails.firstName"
                                value={studentDetails.firstName}
                                placeholder="Enter First Name"
                                onChange={(e) => {
                                  setStudentDetails((state) => {
                                    state.firstName = e.target.value;
                                    return JSON.parse(JSON.stringify(state));
                                  });
                                }}
                                required
                              />
                            </div>
                            {/* father name */}
                            <div className="col-lg-3">
                              <label>
                                Enter Father's Name <span>*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="studentDetails.fatherName"
                                value={studentDetails.fatherName}
                                placeholder="Enter Father's Name"
                                onChange={(e) => {
                                  setStudentDetails((state) => {
                                    state.fatherName = e.target.value;
                                    return JSON.parse(JSON.stringify(state));
                                  });
                                }}
                                required
                              />
                            </div>
                            {/* mother name */}
                            <div className="col-lg-3">
                              <label>
                                Enter Mother's Name <span>*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="studentDetails.motherName"
                                value={studentDetails.motherName}
                                placeholder="Enter Mother's Name"
                                onChange={(e) => {
                                  setStudentDetails((state) => {
                                    state.motherName = e.target.value;
                                    return JSON.parse(JSON.stringify(state));
                                  });
                                }}
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            {/* guardian name */}
                            <div className="col-lg-3">
                              <label>
                                Enter Guardian Name <span>*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="studentDetails.guardianName"
                                value={studentDetails.guardianName}
                                placeholder="Enter Guardian Name"
                                onChange={(e) => {
                                  setStudentDetails((state) => {
                                    state.guardianName = e.target.value;
                                    return JSON.parse(JSON.stringify(state));
                                  });
                                }}
                                required
                              />
                            </div>
                            {/* dob */}
                            <div className="col-lg-3">
                              <label>
                                Enter Date Of Birth <span>*</span>
                              </label>
                              <input
                                type="date"
                                className="form-control"
                                name="studentDetails.dob"
                                value={moment(studentDetails.dob).format(
                                  "YYYY-MM-DD"
                                )}
                                onChange={(e) => {
                                  setStudentDetails((state) => {
                                    state.dob = e.target.value;
                                    return JSON.parse(JSON.stringify(state));
                                  });
                                }}
                                max={new Date().toISOString().split("T")[0]}
                                placeholder="Enter Date Of Birth"
                                required
                              />
                            </div>
                            {/* birth place */}
                            <div className="col-lg-3">
                              <label>
                                Enter Birth Place <span>*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="studentDetails.birthPlace"
                                value={studentDetails.birthPlace}
                                placeholder="Enter Birth Place"
                                onChange={(e) => {
                                  setStudentDetails((state) => {
                                    state.birthPlace = e.target.value;
                                    return JSON.parse(JSON.stringify(state));
                                  });
                                }}
                                required
                              />
                            </div>
                            {/* gender */}
                            <div className="col-lg-3">
                              <label>
                                Gender <span>*</span>
                              </label>
                              <div>
                                <label className="radio-inline">
                                  <input
                                    type="radio"
                                    name="studentDetails.gender"
                                    value="Male"
                                    onChange={(e) => {
                                      setStudentDetails((state) => {
                                        state.gender = e.target.value;
                                        return JSON.parse(
                                          JSON.stringify(state)
                                        );
                                      });
                                    }}
                                    checked={studentDetails.gender === "Male"}
                                  />{" "}
                                  Male
                                </label>
                                <label className="radio-inline">
                                  <input
                                    type="radio"
                                    name="studentDetails.gender"
                                    value="Female"
                                    onChange={(e) => {
                                      setStudentDetails((state) => {
                                        state.gender = e.target.value;
                                        return JSON.parse(
                                          JSON.stringify(state)
                                        );
                                      });
                                    }}
                                    checked={studentDetails.gender === "Female"}
                                  />{" "}
                                  Female
                                </label>
                                <label className="radio-inline">
                                  <input
                                    type="radio"
                                    name="studentDetails.gender"
                                    value="Transgender"
                                    onChange={(e) => {
                                      setStudentDetails((state) => {
                                        state.gender = e.target.value;
                                        return JSON.parse(
                                          JSON.stringify(state)
                                        );
                                      });
                                    }}
                                    checked={
                                      studentDetails.gender === "Transgender"
                                    }
                                  />{" "}
                                  Transgender
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            {/* marital status */}
                            <div className="col-lg-3">
                              <label>
                                Marital Status <span>*</span>
                              </label>
                              <select
                                className="form-control"
                                name="studentDetails.maritalStatus"
                                value={studentDetails.maritalStatus}
                                onChange={(e) => {
                                  setStudentDetails((state) => {
                                    state.maritalStatus = e.target.value;
                                    return JSON.parse(JSON.stringify(state));
                                  });
                                }}
                              >
                                <option value="">
                                  --Select Marital Status--
                                </option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                              </select>
                            </div>
                            {/* spouse name */}
                            {studentDetails.maritalStatus === "Yes" && (
                              <div className="col-lg-3">
                                <label>
                                  Enter Spouse Name <span>*</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="studentDetails.spouseName"
                                  value={studentDetails.spouseName}
                                  onChange={(e) => {
                                    setStudentDetails((state) => {
                                      state.spouseName = e.target.value;
                                      return JSON.parse(JSON.stringify(state));
                                    });
                                  }}
                                  placeholder="Enter Spouse Name"
                                  required
                                />
                              </div>
                            )}
                          </div>
                        </div>
                        <hr />
                        {/* ============= contact information =================*/}
                        <h4>
                          <u>Contact Information</u>
                        </h4>

                        <div className="form-group">
                          <div className="row">
                            {/* student mobile */}
                            <div className="col-lg-3">
                              <label className="form-label">
                                Enter Student's Mobile <span>*</span>
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                name="studentDetails.StudentMobileNo"
                                value={studentDetails.StudentMobileNo}
                                onChange={(e) => {
                                  setStudentDetails((state) => {
                                    state.StudentMobileNo = e.target.value;
                                    return JSON.parse(JSON.stringify(state));
                                  });
                                }}
                                placeholder="Enter Student's Mobile"
                                required
                              />
                            </div>
                            {/* student email */}
                            <div className="col-lg-3">
                              <label className="form-label">
                                Enter Student's Email <span>*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="studentDetails.StudentEmail"
                                value={studentDetails.StudentEmail}
                                placeholder="Enter Student's Email"
                                onChange={(e) => {
                                  setStudentDetails((state) => {
                                    state.StudentEmail = e.target.value;
                                    return JSON.parse(JSON.stringify(state));
                                  });
                                }}
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            {/* permanent address */}
                            <div className="col-lg-5">
                              <label className="form-label">
                                Permanent Address
                              </label>
                              <textarea
                                className="form-control"
                                rows="3"
                                name="studentDetails.parmanentAddress"
                                value={studentDetails.parmanentAddress}
                                onChange={(e) => {
                                  setStudentDetails((state) => {
                                    state.parmanentAddress = e.target.value;
                                    return JSON.parse(JSON.stringify(state));
                                  });
                                }}
                                placeholder="Enter Permanent Address"
                              ></textarea>
                            </div>
                            {/* permanent checkbox */}
                            <div className="col-lg-1 d-flex align-items-center">
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  name="copyParmanantAddress"
                                  onChange={handleAddressCopy}
                                  checked={
                                    studentDetails.currentAddress &&
                                    studentDetails.parmanentAddress &&
                                    studentDetails.currentAddress ===
                                      studentDetails.parmanentAddress
                                  }
                                />
                                <label className="form-check-label"></label>
                              </div>
                            </div>
                            {/* current address */}
                            <div className="col-lg-6">
                              <label className="form-label">
                                Current Address
                              </label>
                              <textarea
                                className="form-control"
                                rows="3"
                                name="studentDetails.currentAddress"
                                value={studentDetails.currentAddress}
                                onChange={(e) => {
                                  setStudentDetails((state) => {
                                    state.currentAddress = e.target.value;
                                    return JSON.parse(JSON.stringify(state));
                                  });
                                }}
                                placeholder="Enter Current Address"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            {/* enter landmar */}
                            <div className="col-lg-3">
                              <label className="form-label">
                                Enter Landmark <span>*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="studentDetails.landMark"
                                placeholder="Enter Landmark"
                                value={studentDetails.landMark}
                                onChange={(e) => {
                                  setStudentDetails((state) => {
                                    state.landMark = e.target.value;
                                    return JSON.parse(JSON.stringify(state));
                                  });
                                }}
                                required
                              />
                            </div>
                            {/* country */}
                            <div className="col-lg-3">
                              <label className="form-label">
                                Country <span>*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="studentDetails.country"
                                value={studentDetails.country}
                                onChange={(e) => {
                                  setStudentDetails((state) => {
                                    state.country = e.target.value;
                                    return JSON.parse(JSON.stringify(state));
                                  });
                                }}
                                placeholder="Enter Country"
                              />
                            </div>
                            {/* state */}
                            <div className="col-lg-3">
                              <label className="form-label">
                                State <span>*</span>
                              </label>
                              <select
                                className="form-select"
                                name="studentDetails.state"
                                value={studentDetails.state}
                                // onChange={(e) => {
                                //   handleStateChange(e);
                                // }}
                                onChange={(e) => {
                                  setStudentDetails((state) => {
                                    state.state = e.target.value;
                                    return JSON.parse(JSON.stringify(state));
                                  });
                                }}
                              >
                                <option value="">--Select State--</option>
                                {stateNames.map((state) => (
                                  <option key={state} value={state}>
                                    {state}
                                  </option>
                                ))}
                              </select>
                            </div>

                            {/* student city */}
                            <div className="col-lg-3">
                              <label className="form-label">
                                City <span>*</span>
                              </label>
                              <CityDropdown
                                state={studentDetails.state}
                                value={studentDetails.city}
                                onChange={(e) => {
                                  let updated = JSON.parse(
                                    JSON.stringify(studentDetails)
                                  );
                                  updated.city = e.target.value;
                                  setStudentDetails(updated);
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            {/* {pin code} */}
                            <div className="col-lg-3">
                              <label className="form-label">
                                Enter Pincode <span>*</span>
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                name="studentDetails.pin"
                                placeholder="Enter Pincode"
                                value={studentDetails.pin}
                                onChange={(e) => {
                                  setStudentDetails((state) => {
                                    state.pin = e.target.value;
                                    return JSON.parse(JSON.stringify(state));
                                  });
                                }}
                                required
                              />
                            </div>
                            {/* district */}
                            <div className="col-lg-3">
                              <label className="form-label">
                                District <span>*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="studentDetails.district"
                                placeholder="Enter District"
                                value={studentDetails.district}
                                onChange={(e) => {
                                  setStudentDetails((state) => {
                                    state.district = e.target.value;
                                    return JSON.parse(JSON.stringify(state));
                                  });
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <hr />
                        {/* ============= other information =================*/}

                        <h4>
                          <u>Other Information</u>
                        </h4>
                        <div className="form-group">
                          <div className="row">
                            {/* physically_challanged */}
                            <div className="col-lg-2">
                              <label>
                                Physically Challanged <span>*</span>
                              </label>
                              <select
                                className="form-control"
                                name="studentDetails.physicalChallange"
                                value={studentDetails.physicalChallange}
                                onChange={(e) => {
                                  setStudentDetails((state) => {
                                    state.physicalChallange = e.target.value;
                                    return JSON.parse(JSON.stringify(state));
                                  });
                                }}
                              >
                                <option value="">
                                  --Select Physically Challanged Status--
                                </option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                              </select>
                            </div>
                            {/* physically challanged img upload */}
                            {studentDetails.physicalChallange === "Yes" && (
                              <>
                                <div className="col-lg-2">
                                  <label>
                                    Upload Certificate <span>*</span>
                                  </label>
                                  <input
                                    type="file"
                                    name="studentDetails.physicalChallangeImg"
                                    className="form-control"
                                    onChange={(e) =>
                                      imageHandler(e, "isPhysical")
                                    }
                                  />
                                </div>

                                {/* physically challanged img show */}
                                <div className="col-lg-2">
                                  <img
                                    id="physically_challanged_chacertificate_prev"
                                    src={`${baseUrl}${studentDetails.physicalChallangeImg}`}
                                    alt="Your Certificate Preview"
                                    style={{ height: "100px", width: "100px" }}
                                  />
                                </div>
                              </>
                            )}
                            {/* student orphan */}
                            <div className="col-lg-2">
                              <label>
                                Student Orphan <span>*</span>
                              </label>
                              <select
                                className="form-control"
                                name="studentDetails.orphan"
                                value={studentDetails.orphan}
                                onChange={(e) => {
                                  setStudentDetails((state) => {
                                    state.orphan = e.target.value;
                                    return JSON.parse(JSON.stringify(state));
                                  });
                                }}
                              >
                                <option value="">
                                  --Select Student Orphan Status--
                                </option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                              </select>
                            </div>
                            {/* parent death certificate img */}
                            {studentDetails.orphan === "Yes" && (
                              <>
                                <div className="col-lg-2">
                                  <label>
                                    Parent Death Certificate <span>*</span>
                                  </label>
                                  <input
                                    type="file"
                                    className="form-control"
                                    name="parentDeathCertificateImg"
                                    id="parent_death_chacertificate"
                                    onChange={(e) =>
                                      imageHandler(e, "parentDeath")
                                    }
                                  />
                                </div>
                                {/* death certificate img show */}
                                <div className="col-lg-2">
                                  <img
                                    id="parent_death_chacertificate_prev"
                                    src={`${baseUrl}${studentDetails.parentDeathCertificateImg}`}
                                    alt="Parent Death Certificate"
                                    style={{ height: "100px", width: "100px" }}
                                  />
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            {/* aadhar front img */}
                            <div className="col-lg-3">
                              <label>
                                Upload Aadhar Card Front Photo <span>*</span>
                              </label>
                              <input
                                type="file"
                                className="form-control"
                                name="addaharFrontImg"
                                id="aadhar_card_front"
                                onChange={(e) => imageHandler(e, "aadharFront")}
                              />
                            </div>
                            {/* show aadhar front */}
                            <div className="col-lg-3">
                              <img
                                id="aadhar_card_front_prev"
                                src={`${baseUrl}${studentDetails.addaharFrontImg}`}
                                alt="Your Aadhar Card Front Photo Preview"
                                style={{ height: "100px", width: "100px" }}
                              />
                            </div>
                            {/* aadhar back img */}
                            <div className="col-lg-3">
                              <label>
                                Upload Aadhar Card Back Photo <span>*</span>
                              </label>
                              <input
                                type="file"
                                className="form-control"
                                name="aadharBackImg"
                                id="aadhar_card_back"
                                onChange={(e) => imageHandler(e, "aadharBack")}
                              />
                            </div>
                            {/* show aadhar back img */}
                            <div className="col-lg-3">
                              <img
                                id="aadhar_card_back_prev"
                                src={`${baseUrl}${studentDetails.aadharBackImg}`}
                                alt="Your Aadhar Card Back Photo Preview"
                                style={{ height: "100px", width: "100px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            {/* ration card front img */}
                            <div className="col-lg-3">
                              <label>
                                Upload Ration Card First Page Photo{" "}
                                <span>*</span>
                              </label>
                              <input
                                type="file"
                                className="form-control"
                                name="rationFrontImg"
                                id="ration_card_first"
                                onChange={(e) => imageHandler(e, "rationFront")}
                              />
                            </div>
                            {/* show ration front img */}
                            <div className="col-lg-3">
                              <img
                                id="ration_card_first_prev"
                                src={`${baseUrl}${studentDetails.rationFrontImg}`}
                                alt="Upload Ration Card First Page Photo"
                                style={{ height: "100px", width: "100px" }}
                              />
                            </div>
                            {/* ration card back img */}
                            <div className="col-lg-3">
                              <label>
                                Upload Ration Card Last Page Photo{" "}
                                <span>*</span>
                              </label>
                              <input
                                type="file"
                                className="form-control"
                                name="rationBackImg"
                                id="ration_card_last"
                                onChange={(e) => imageHandler(e, "rationBack")}
                              />
                            </div>
                            {/* show ration back img */}
                            <div className="col-lg-3">
                              <img
                                id="ration_card_last_prev"
                                src={`${baseUrl}${studentDetails.rationBackImg}`}
                                alt="Upload Ration Card Last Page Photo"
                                style={{ height: "100px", width: "100px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            {/* electric bill img */}
                            <div className="col-lg-3">
                              <label>
                                Upload Electricity Bill Photo <span>*</span>
                              </label>
                              <input
                                type="file"
                                className="form-control"
                                name="electricityBillImg"
                                id="electricity_bill"
                                onChange={(e) =>
                                  imageHandler(e, "electricityBill")
                                }
                              />
                            </div>
                            {/* show bill */}
                            <div className="col-lg-3">
                              <img
                                id="electricity_bill_prev"
                                src={`${baseUrl}${studentDetails.electricityBillImg}`}
                                alt="Upload Electricity Bill Photo"
                                style={{ height: "100px", width: "100px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            {/* religion category */}
                            <div className="col-lg-3">
                              <label>
                                Category <span>*</span>
                              </label>
                              <select
                                className="form-control"
                                name="studentDetails.category"
                                value={studentDetails.category}
                                onChange={(e) => {
                                  setStudentDetails((state) => {
                                    state.category = e.target.value;
                                    return JSON.parse(JSON.stringify(state));
                                  });
                                }}
                              >
                                <option value="">--Select Category--</option>
                                <option value="Memon">Memon</option>
                                <option value="Muslim">Muslim</option>
                                <option value="Non-Muslim">Non-Muslim</option>
                              </select>
                            </div>
                            {/* zakat fund */}
                            <div className="col-lg-3">
                              <label>
                                Application for Zakat Fund <span>*</span>
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                name="studentDetails.zakatFund"
                                value={studentDetails.zakatFund}
                                onChange={(e) => {
                                  setStudentDetails((state) => {
                                    state.zakatFund = e.target.value;
                                    return JSON.parse(JSON.stringify(state));
                                  });
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            {/* refered by */}
                            <div className="col-lg-3">
                              <label>
                                Referred By <span>*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="studentDetails.refferedBy"
                                placeholder="Enter Referred By Name"
                                value={studentDetails.refferedBy}
                                onChange={(e) => {
                                  setStudentDetails((state) => {
                                    state.refferedBy = e.target.value;
                                    return JSON.parse(JSON.stringify(state));
                                  });
                                }}
                                required
                              />
                            </div>
                            {/* refered mobile */}
                            <div className="col-lg-3">
                              <label>
                                Referrer Mobile No <span>*</span>
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                name="studentDetails.refMobileNo"
                                placeholder="Enter Referrer Mobile No"
                                value={studentDetails.refMobileNo}
                                onChange={(e) => {
                                  setStudentDetails((state) => {
                                    state.refMobileNo = e.target.value;
                                    return JSON.parse(JSON.stringify(state));
                                  });
                                }}
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* ========== family details sections ============== */}
                    {tab === "family_details" && (
                      <>
                        {/* {studentInformation.familyDetails.map( */}
                        {familyData &&
                          familyData?.map((member, index) => {
                            console.log("member", member);
                            return (
                              <div className="family_details" key={index}>
                                <div className="form-group">
                                  <div className="row">
                                    {/* parent status */}
                                    <div className="col-lg-3">
                                      <label>
                                        Parent Status <span>*</span>
                                      </label>
                                      <select
                                        className="form-control"
                                        id={`parentStatus_${index}`}
                                        name={`parentStatus_${index}`}
                                        value={member.parentStatus || ""}
                                        onChange={(e) => {
                                          setFamilyData((state) => {
                                            const newState = [...state];
                                            newState[index] = {
                                              ...newState[index],
                                              parentStatus: e.target.value,
                                            };
                                            return newState;
                                          });
                                        }}
                                      >
                                        <option selected="selected" value="">
                                          --select--
                                        </option>
                                        <option value="Divorcee">
                                          Divorcee
                                        </option>
                                        <option value="General">General</option>
                                        <option value="Separated">
                                          Separated/Destitute
                                        </option>
                                        <option value="Single Father">
                                          Single Father
                                        </option>
                                        <option value="Widow">Widow</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>

                                {member.parentStatus !== "General" &&
                                member.parentStatus !== "" ? (
                                  <div class="form-group">
                                    <div class="row">
                                      {/* parent status img 1 */}
                                      <div class="col-lg-3">
                                        <label>
                                          Parent Status File One <span>*</span>
                                        </label>
                                        <input
                                          type="file"
                                          name={`familyDetails[${index}].parentStatusOneImg`}
                                          className="form-control"
                                          onChange={(e) =>
                                            imageHandler(
                                              e,
                                              "parentStatusOne",
                                              index
                                            )
                                          }
                                        />
                                      </div>
                                      {/* shoe status img one */}
                                      <div class="col-lg-3">
                                        <img
                                          id={`parent_status_file_one_prev_${index}`}
                                          src={`${baseUrl}${member.parentStatusOneImg}`}
                                          alt="Upload Parent Status File One"
                                          style={{
                                            height: "100px",
                                            width: "100px",
                                          }}
                                        />
                                      </div>
                                      {/* Parent Status File Two img */}
                                      <div class="col-lg-3">
                                        <label>
                                          Parent Status File Two <span>*</span>
                                        </label>

                                        <input
                                          type="file"
                                          name={`familyDetails[${index}].parentStatusTwoImg`}
                                          className="form-control"
                                          onChange={(e) =>
                                            imageHandler(
                                              e,
                                              "parentStatusTwo",
                                              index
                                            )
                                          }
                                        />
                                      </div>
                                      {/* show status img two */}
                                      <div class="col-lg-3">
                                        <img
                                          id={`parent_status_file_one_prev_${index}`}
                                          src={`${baseUrl}${member.parentStatusTwoImg}`}
                                          alt="Upload Parent Status File One"
                                          style={{
                                            height: "100px",
                                            width: "100px",
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                ) : (
                                  ""
                                )}

                                <div class="form-group">
                                  <div class="row">
                                    {/* Relation With Student */}
                                    <div class="col-lg-3">
                                      <label>
                                        Relation With Student <span>*</span>
                                      </label>
                                      <select
                                        class="form-control"
                                        id={`relationWithStudent_${index}`}
                                        name={`relationWithStudent_${index}`}
                                        value={member.relationWithStudent || ""}
                                        onChange={(e) => {
                                          setFamilyData((state) => {
                                            const newState = [...state];
                                            newState[index] = {
                                              ...newState[index],
                                              relationWithStudent:
                                                e.target.value,
                                            };
                                            return newState;
                                          });
                                        }}
                                      >
                                        <option value="">--select--</option>
                                        <option value="Aunty">Aunty</option>
                                        <option value="Brother">Brother</option>
                                        <option value="Cousin Brother">
                                          Cousin Brother
                                        </option>
                                        <option value="Cousin Sister">
                                          Cousin Sister
                                        </option>
                                        <option value="Father">Father</option>
                                        <option value="Grand Father">
                                          Grand Father
                                        </option>
                                        <option value="Grand Mother">
                                          Grand Mother
                                        </option>
                                        <option value="Mother">Mother</option>
                                        <option value="Sister">Sister</option>
                                        <option value="Uncle">Uncle</option>
                                      </select>
                                    </div>
                                    {/* relation person name */}
                                    <div class="col-lg-3">
                                      <label>
                                        Enter Person Name <span>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Enter Person Name"
                                        id={`relationPersonName_${index}`}
                                        name={`relationPersonName_${index}`}
                                        value={member.relationPersonName || ""}
                                        onChange={(e) => {
                                          setFamilyData((state) => {
                                            const newState = [...state];
                                            newState[index] = {
                                              ...newState[index],
                                              relationPersonName:
                                                e.target.value,
                                            };
                                            return newState;
                                          });
                                        }}
                                        required
                                      />
                                    </div>
                                    {/* Marital Status */}
                                    <div class="col-lg-3">
                                      <label>
                                        Marital Status <span>*</span>
                                      </label>
                                      <select
                                        class="form-control"
                                        id={`relationPersonMaritalStatus_${index}`}
                                        name={`relationPersonMaritalStatus_${index}`}
                                        value={
                                          member.relationPersonMaritalStatus ||
                                          ""
                                        }
                                        onChange={(e) => {
                                          setFamilyData((state) => {
                                            const newState = [...state];
                                            newState[index] = {
                                              ...newState[index],
                                              relationPersonMaritalStatus:
                                                e.target.value,
                                            };
                                            return newState;
                                          });
                                        }}
                                      >
                                        <option value="">--select--</option>
                                        <option value="Divorce">Divorce</option>
                                        <option value="Married">Married</option>
                                        <option value="Separated">
                                          Separated
                                        </option>
                                        <option value="Unmarried">
                                          Unmarried
                                        </option>
                                        <option value="Widow">Widow</option>
                                      </select>
                                    </div>
                                    {/* relation Person DOB */}
                                    <div class="col-lg-3">
                                      <label>
                                        DOB <span>*</span>
                                      </label>
                                      <input
                                        type="date"
                                        class="form-control"
                                        placeholder="Enter DOB"
                                        id={`relationPersonDOB_${index}`}
                                        name={`relationPersonDOB_${index}`}
                                        value={member.relationPersonDOB || ""}
                                        onChange={(e) => {
                                          setFamilyData((state) => {
                                            const newState = [...state];
                                            newState[index] = {
                                              ...newState[index],
                                              relationPersonDOB: e.target.value,
                                            };
                                            return newState;
                                          });
                                        }}
                                        max={
                                          new Date().toISOString().split("T")[0]
                                        }
                                        required
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div class="form-group">
                                  <div class="row">
                                    {/* relation Person gender */}
                                    <div class="col-lg-3">
                                      <label>
                                        Gender <span>*</span>
                                      </label>
                                      <label class="radio-inline">
                                        <input
                                          type="radio"
                                          id={`relationPersonGender_${index}`}
                                          name={`relationPersonGender_${index}`}
                                          onChange={(e) => {
                                            setFamilyData((state) => {
                                              const newState = [...state];
                                              newState[index] = {
                                                ...newState[index],
                                                relationPersonGender:
                                                  e.target.value,
                                              };
                                              return newState;
                                            });
                                          }}
                                          value="Male"
                                          checked={
                                            member.relationPersonGender ===
                                            "Male"
                                          }
                                        />
                                        Male
                                      </label>
                                      <label class="radio-inline">
                                        <input
                                          type="radio"
                                          id={`relationPersonGender_${index}`}
                                          name={`relationPersonGender_${index}`}
                                          onChange={(e) => {
                                            setFamilyData((state) => {
                                              const newState = [...state];
                                              newState[index] = {
                                                ...newState[index],
                                                relationPersonGender:
                                                  e.target.value,
                                              };
                                              return newState;
                                            });
                                          }}
                                          value="Female"
                                          checked={
                                            member.relationPersonGender ===
                                            "Female"
                                          }
                                        />
                                        Female
                                      </label>
                                      <label class="radio-inline">
                                        <input
                                          type="radio"
                                          id={`relationPersonGender_${index}`}
                                          name={`relationPersonGender_${index}`}
                                          onChange={(e) => {
                                            setFamilyData((state) => {
                                              const newState = [...state];
                                              newState[index] = {
                                                ...newState[index],
                                                relationPersonGender:
                                                  e.target.value,
                                              };
                                              return newState;
                                            });
                                          }}
                                          checked={
                                            member.relationPersonGender ===
                                            "Transgender"
                                          }
                                        />
                                        Transgender
                                      </label>
                                    </div>

                                    {/* relation personaadhar card no */}
                                    <div class="col-lg-3">
                                      <label>
                                        Aadhar Card No <span>*</span>
                                      </label>
                                      <input
                                        type="number"
                                        class="form-control"
                                        id={`relationPersonAadhar_${index}`}
                                        name={`relationPersonAadhar_${index}`}
                                        value={
                                          member.relationPersonAadhar || ""
                                        }
                                        onChange={(e) => {
                                          setFamilyData((state) => {
                                            const newState = [...state];
                                            newState[index] = {
                                              ...newState[index],
                                              relationPersonAadhar:
                                                e.target.value,
                                            };
                                            return newState;
                                          });
                                        }}
                                        placeholder="Enter Aadhar Card No"
                                        required
                                      />
                                    </div>
                                    <div class="col-lg-3">
                                      <label>
                                        Age <span>*</span>
                                      </label>
                                      <input
                                        type="number"
                                        class="form-control"
                                        id={`relationPersonAge_${index}`}
                                        name={`relationPersonAge_${index}`}
                                        value={member.relationPersonAge || ""}
                                        onChange={(e) => {
                                          setFamilyData((state) => {
                                            const newState = [...state];
                                            newState[index] = {
                                              ...newState[index],
                                              relationPersonAge: e.target.value,
                                            };
                                            return newState;
                                          });
                                        }}
                                        placeholder="Enter Age"
                                        required
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="form-group">
                                  <div className="row">
                                    {/* relation person education  */}
                                    <div className="col-lg-3">
                                      <label>
                                        Education <span>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id={`relationPersonEducation_${index}`}
                                        name={`relationPersonEducation_${index}`}
                                        value={
                                          member.relationPersonEducation || ""
                                        }
                                        onChange={(e) => {
                                          setFamilyData((state) => {
                                            const newState = [...state];
                                            newState[index] = {
                                              ...newState[index],
                                              relationPersonEducation:
                                                e.target.value,
                                            };
                                            return newState;
                                          });
                                        }}
                                        placeholder="Enter Education"
                                        required
                                      />
                                    </div>
                                    {/* relation Person Occupation */}
                                    <div className="col-lg-3">
                                      <label>
                                        Occupation <span>*</span>
                                      </label>
                                      <select
                                        className="form-control"
                                        id={`relationPersonOccupation_${index}`}
                                        name={`relationPersonOccupation_${index}`}
                                        value={
                                          member.relationPersonOccupation || ""
                                        }
                                        onChange={(e) => {
                                          setFamilyData((state) => {
                                            const newState = [...state];
                                            newState[index] = {
                                              ...newState[index],
                                              relationPersonOccupation:
                                                e.target.value,
                                            };
                                            return newState;
                                          });
                                        }}
                                      >
                                        <option value="NA" selected="selected">
                                          --select--
                                        </option>
                                        <option value="Business">
                                          Business
                                        </option>
                                        <option value="Hawker">Hawker</option>
                                        <option value="House Wife">
                                          House Wife
                                        </option>
                                        <option value="Others">Others</option>
                                        <option value="Self Employed">
                                          Self Employed
                                        </option>
                                        <option value="Service">Service</option>
                                        <option value="Student">Student</option>
                                        <option value="Unemployed">
                                          Unemployed
                                        </option>
                                      </select>
                                    </div>
                                    {/* relation Person Occupation Details */}
                                    <div className="col-lg-3">
                                      <label>
                                        Occupation Details <span>*</span>
                                      </label>
                                      <textarea
                                        className="form-control"
                                        id={`relationPersonOccupationDetails_${index}`}
                                        name={`relationPersonOccupationDetails_${index}`}
                                        value={
                                          member.relationPersonOccupationDetails ||
                                          ""
                                        }
                                        onChange={(e) => {
                                          setFamilyData((state) => {
                                            const newState = [...state];
                                            newState[index] = {
                                              ...newState[index],
                                              relationPersonOccupationDetails:
                                                e.target.value,
                                            };
                                            return newState;
                                          });
                                        }}
                                        placeholder="Enter Occupation Details"
                                        required
                                      ></textarea>
                                    </div>
                                    {/* relation person monthly income */}
                                    <div className="col-lg-3">
                                      <label>
                                        Monthly Income/Fees <span>*</span>
                                      </label>
                                      <input
                                        type="number"
                                        className="form-control"
                                        id={`relationPersonMonthlyIncome_${index}`}
                                        name={`relationPersonMonthlyIncome_${index}`}
                                        value={
                                          member.relationPersonMonthlyIncome ||
                                          ""
                                        }
                                        onChange={(e) => {
                                          setFamilyData((state) => {
                                            const newState = [...state];
                                            newState[index] = {
                                              ...newState[index],
                                              relationPersonMonthlyIncome:
                                                e.target.value,
                                            };
                                            return newState;
                                          });
                                        }}
                                        placeholder="Enter Monthly Income/Fees"
                                        required
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group">
                                  <div className="row">
                                    <div className="col-lg-3">
                                      <label>
                                        Upload Income File Front<span>*</span>
                                      </label>
                                      <input
                                        type="file"
                                        className="form-control"
                                        name={`familyDetails.${index}.incomeFileFrontImg`}
                                        onChange={(e) =>
                                          imageHandler(e, "incomeFront", index)
                                        }
                                        id={`income_file_front_prev${index}`}
                                        required
                                      />
                                    </div>
                                    <div className="col-lg-3">
                                      <img
                                        id="income_file_front_prev"
                                        src={`${baseUrl}${member.incomeFileFrontImg}`}
                                        alt="Upload Income File Front"
                                        style={{
                                          height: "100px",
                                          width: "100px",
                                        }}
                                      />
                                    </div>
                                    <div className="col-lg-3">
                                      <label>
                                        Upload Income File Back<span>*</span>
                                      </label>
                                      <input
                                        type="file"
                                        className="form-control"
                                        name={`familyDetails.${index}.incomeFileBackImg`}
                                        onChange={(e) =>
                                          imageHandler(e, "incomeBack", index)
                                        }
                                        id={`income_file_back_prev${index}`}
                                        required
                                      />
                                    </div>
                                    <div className="col-lg-3">
                                      <img
                                        id="income_file_back_prev"
                                        src={`${baseUrl}${member.incomeFileBackImg}`}
                                        alt="Upload Income File Back"
                                        style={{
                                          height: "100px",
                                          width: "100px",
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group">
                                  {/* relition person disabled */}
                                  <div className="row">
                                    <div className="col-lg-3">
                                      <label>
                                        He / She / Disabled / Handicapped?{" "}
                                        <span>*</span>
                                      </label>
                                      <select
                                        className="form-control"
                                        id={`handiCapped_${index}`}
                                        name={`handiCapped_${index}`}
                                        value={member.handiCapped || ""}
                                        onChange={(e) => {
                                          setFamilyData((state) => {
                                            const newState = [...state];
                                            newState[index] = {
                                              ...newState[index],
                                              handiCapped: e.target.value,
                                            };
                                            return newState;
                                          });
                                        }}
                                      >
                                        <option value="">--select--</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                      </select>
                                    </div>
                                    {member.handiCapped === "Yes" && (
                                      <>
                                        {/* handicaped img one */}
                                        <div className="col-lg-3">
                                          <label>
                                            Handicapped File One <span>*</span>
                                          </label>
                                          <input
                                            type="file"
                                            className="form-control"
                                            name={`familyDetails.${index}.handiCapFileOneImg`}
                                            onChange={(e) =>
                                              imageHandler(
                                                e,
                                                "handicapedFront",
                                                index
                                              )
                                            }
                                            id={`handicapped_file_one_prev${index}`}
                                            required
                                          />
                                        </div>
                                        {/* handicapped img one show */}
                                        <div className="col-lg-2">
                                          <img
                                            id="handicapped_file_one_prev"
                                            src={`${baseUrl}${member.handiCapFileOneImg}`}
                                            alt="Handicapped File 1"
                                            style={{
                                              height: "100px",
                                              width: "100px",
                                            }}
                                          />
                                        </div>
                                        {/* handicaped img two */}
                                        <div className="col-lg-2">
                                          <label>
                                            Handicapped File Two <span>*</span>
                                          </label>
                                          <input
                                            type="file"
                                            className="form-control"
                                            name={`familyDetails.${index}.handiCapFileTwoImg`}
                                            onChange={(e) =>
                                              imageHandler(
                                                e,
                                                "handicapedBack",
                                                index
                                              )
                                            }
                                            id={`handicapped_file_two_prev${index}`}
                                            required
                                          />
                                        </div>
                                        {/* handicaped img two show */}
                                        <div className="col-lg-2">
                                          <img
                                            id="handicapped_file_two_prev"
                                            src={`${baseUrl}${member.handiCapFileTwoImg}`}
                                            alt="Handicapped File 2"
                                            style={{
                                              height: "100px",
                                              width: "100px",
                                            }}
                                          />
                                        </div>
                                      </>
                                    )}
                                  </div>
                                </div>
                                <div className="form-group">
                                  <div className="row">
                                    {/* name of the city */}
                                    <div className="col-lg-3">
                                      <label>
                                        Name of the city (If any) <span>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id={`personCity_${index}`}
                                        name={`personCity_${index}`}
                                        value={member.personCity || ""}
                                        onChange={(e) => {
                                          setFamilyData((state) => {
                                            const newState = [...state];
                                            newState[index] = {
                                              ...newState[index],
                                              personCity: e.target.value,
                                            };
                                            return newState;
                                          });
                                        }}
                                        placeholder="Enter Name of the city (If any)"
                                        required
                                      />
                                    </div>

                                    {/* studing */}
                                    <div className="col-lg-3">
                                      <label>
                                        Studying <span>*</span>
                                      </label>
                                      <select
                                        className="form-control"
                                        id={`personStudying_${index}`}
                                        name={`personStudying_${index}`}
                                        value={member.personStudying || ""}
                                        onChange={(e) => {
                                          setFamilyData((state) => {
                                            const newState = [...state];
                                            newState[index] = {
                                              ...newState[index],
                                              personStudying: e.target.value,
                                            };
                                            return newState;
                                          });
                                        }}
                                      >
                                        <option value="">--select--</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                      </>
                    )}

                    {/* ========== jamat info memon details sections ============== */}
                    {tab === "memon_information" && (
                      <div className="momenJamat">
                        <h3>
                          <u>Jamat Information</u>
                        </h3>
                        <div class="form-group">
                          <div class="row">
                            {/* if momen  */}
                            <div class="col-lg-3">
                              <label>
                                If memon (Yes or No) <span>*</span>
                              </label>
                              <label class="radio-inline">
                                <input
                                  type="radio"
                                  name="jamatDetails.ifMemon"
                                  id="if_memon_yes"
                                  value="Yes"
                                  onChange={(e) => {
                                    setJamatDetails((state) => {
                                      state.ifMemon = e.target.value;
                                      return JSON.parse(JSON.stringify(state));
                                    });
                                  }}
                                  checked={jamatDetails.ifMemon === "Yes"}
                                />
                                Yes
                              </label>
                              <label class="radio-inline">
                                <input
                                  type="radio"
                                  name="jamatDetails.ifMemon"
                                  onChange={(e) => {
                                    setJamatDetails((state) => {
                                      state.ifMemon = e.target.value;
                                      return JSON.parse(JSON.stringify(state));
                                    });
                                  }}
                                  id="if_memon_no"
                                  value="No"
                                  checked={jamatDetails.ifMemon === "No"}
                                />{" "}
                                no
                              </label>
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="row">
                            {/* if mother momen */}
                            <div class="col-lg-3">
                              <label>
                                If mother memon (Yes or No) <span>*</span>
                              </label>
                              <label class="radio-inline">
                                <input
                                  type="radio"
                                  name="jamatDetails.ifMotherMomen"
                                  id="mother_memon_yes"
                                  value="Yes"
                                  onChange={(e) => {
                                    setJamatDetails((state) => {
                                      state.ifMotherMomen = e.target.value;
                                      return JSON.parse(JSON.stringify(state));
                                    });
                                  }}
                                  checked={jamatDetails.ifMotherMomen === "Yes"}
                                />{" "}
                                Yes
                              </label>
                              <label class="radio-inline">
                                <input
                                  type="radio"
                                  name="jamatDetails.ifMotherMomen"
                                  id="mother_memon_no"
                                  value="No"
                                  onChange={(e) => {
                                    setJamatDetails((state) => {
                                      state.ifMotherMomen = e.target.value;
                                      return JSON.parse(JSON.stringify(state));
                                    });
                                  }}
                                  checked={jamatDetails.ifMotherMomen === "No"}
                                />{" "}
                                no
                              </label>
                            </div>
                          </div>
                        </div>
                        {jamatDetails.ifMemon === "Yes" && (
                          <>
                            <div class="form-group">
                              <div class="row">
                                {/* momen upload img one */}
                                <div class="col-lg-3">
                                  <label>
                                    Upload Memon Jamat Letter One <span>*</span>
                                  </label>
                                  <input
                                    type="file"
                                    class="form-control"
                                    name="memonJamatLetterOne"
                                    id="jamat_letter_one"
                                    onChange={(e) =>
                                      imageHandler(e, "jamatLetterOne")
                                    }
                                    required
                                  />
                                </div>
                                {/* momen img one show */}
                                <div class="col-lg-3">
                                  <img
                                    id="jamat_letter_one_prev"
                                    src={`${baseUrl}${jamatDetails.memonJamatLetterOne}`}
                                    alt="Memon Jamat Letter 1"
                                    style={{ height: "100px", width: "100px" }}
                                  />
                                </div>
                                {/* momen upload img two */}
                                <div class="col-lg-3">
                                  <label>
                                    Upload Memon Jamat Letter Two <span>*</span>
                                  </label>
                                  <input
                                    type="file"
                                    class="form-control"
                                    name="memonJamatLetterTwo"
                                    id="jamat_letter_two"
                                    onChange={(e) =>
                                      imageHandler(e, "jamatLetterTwo")
                                    }
                                    required
                                  />
                                </div>
                                {/* momen img two show */}
                                <div class="col-lg-3">
                                  <img
                                    id="jamat_letter_two_prev"
                                    src={`${baseUrl}${jamatDetails.memonJamatLetterTwo}`}
                                    alt="Memon Jamat Letter 2"
                                    style={{ height: "100px", width: "100px" }}
                                  />
                                </div>
                              </div>
                            </div>
                            <hr />
                            <h3>
                              <u>Jamat Details</u>
                            </h3>
                            <div class="form-group">
                              <div class="row">
                                {/* Belonging Jamat */}
                                <div class="col-lg-3">
                                  <label>
                                    Belonging Jamat<span>*</span>
                                  </label>
                                  <input
                                    type="text"
                                    class="form-control"
                                    name="jamatDetails.belongingJamat"
                                    value={jamatDetails.belongingJamat}
                                    onChange={(e) => {
                                      setJamatDetails((state) => {
                                        state.belongingJamat = e.target.value;
                                        return JSON.parse(
                                          JSON.stringify(state)
                                        );
                                      });
                                    }}
                                    placeholder="Belonging Jamat"
                                    required
                                  />
                                </div>
                                {/* jamat secretary name */}
                                <div class="col-lg-3">
                                  <label>
                                    Name of President/Secretary<span>*</span>
                                  </label>
                                  <input
                                    type="text"
                                    class="form-control"
                                    name="jamatDetails.jamatSecretaryName"
                                    value={jamatDetails.jamatSecretaryName}
                                    onChange={(e) => {
                                      setJamatDetails((state) => {
                                        state.jamatSecretaryName =
                                          e.target.value;
                                        return JSON.parse(
                                          JSON.stringify(state)
                                        );
                                      });
                                    }}
                                    placeholder="Name of President/Secretary"
                                    required
                                  />
                                </div>
                                {/* jamat secretary mobile */}
                                <div class="col-lg-3">
                                  <label>
                                    Mobile No of President/Secretary
                                    <span>*</span>
                                  </label>
                                  <input
                                    type="number"
                                    class="form-control"
                                    name="jamatDetails.secretaryMobile"
                                    value={jamatDetails.secretaryMobile}
                                    onChange={(e) => {
                                      setJamatDetails((state) => {
                                        state.secretaryMobile = e.target.value;
                                        return JSON.parse(
                                          JSON.stringify(state)
                                        );
                                      });
                                    }}
                                    placeholder="Mobile No of President/Secretary"
                                    required
                                  />
                                </div>
                                {/* jamat secretary email */}
                                <div class="col-lg-3">
                                  <label>
                                    Email of President/Secretary<span>*</span>
                                  </label>
                                  <input
                                    type="email"
                                    class="form-control"
                                    name="jamatDetails.secretaryEmail"
                                    value={jamatDetails.secretaryEmail}
                                    onChange={(e) => {
                                      setJamatDetails((state) => {
                                        state.secretaryEmail = e.target.value;
                                        return JSON.parse(
                                          JSON.stringify(state)
                                        );
                                      });
                                    }}
                                    placeholder="Enter Memon/President Email"
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="row">
                                {/* memon address */}
                                <div class="col-lg-3">
                                  <label>
                                    Memon Address <span>*</span>
                                  </label>
                                  <textarea
                                    class="form-control"
                                    name="jamatDetails.memonAddress"
                                    value={jamatDetails.memonAddress}
                                    onChange={(e) => {
                                      setJamatDetails((state) => {
                                        state.memonAddress = e.target.value;
                                        return JSON.parse(
                                          JSON.stringify(state)
                                        );
                                      });
                                    }}
                                    placeholder="Enter Memon Address"
                                    required
                                  ></textarea>
                                </div>
                                {/* memon state */}
                                <div class="col-lg-3">
                                  <label>
                                    State<span>*</span>
                                  </label>
                                  <select
                                    class="form-control"
                                    name="jamatDetails.memonState"
                                    required
                                    value={jamatDetails.memonState}
                                    onChange={(e) => {
                                      setJamatDetails((state) => {
                                        state.memonState = e.target.value;
                                        return JSON.parse(
                                          JSON.stringify(state)
                                        );
                                      });
                                    }}
                                  >
                                    <option value="" selected="selected">
                                      --Select State--
                                    </option>
                                    {stateNames.map((state) => (
                                      <option key={state} value={state}>
                                        {state}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                                {/* memon City */}
                                <div class="col-lg-3">
                                  <label>
                                    City<span>*</span>
                                  </label>
                                  <CityDropdown
                                    state={jamatDetails.memonState}
                                    value={jamatDetails.memonCity}
                                    onChange={(e) => {
                                      let updated = JSON.parse(
                                        JSON.stringify(jamatDetails)
                                      );
                                      updated.memonCity = e.target.value;
                                      setJamatDetails(updated);
                                    }}
                                  />
                                </div>
                                {/* memon pin code */}
                                <div class="col-lg-3">
                                  <label>
                                    Pincode<span>*</span>
                                  </label>
                                  <input
                                    type="number"
                                    class="form-control"
                                    name="jamatDetails.memonPin"
                                    value={jamatDetails.memonPin}
                                    onChange={(e) => {
                                      setJamatDetails((state) => {
                                        state.memonPin = e.target.value;
                                        return JSON.parse(
                                          JSON.stringify(state)
                                        );
                                      });
                                    }}
                                    placeholder="Enter Pincode"
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                          </>
                        )}

                        <hr />
                        <div class="form-group">
                          <div class="row">
                            {/* Received any help from Jamat */}
                            <div class="col-lg-3">
                              <label>
                                Received any help from Jamat? <span>*</span>
                              </label>
                              <label class="radio-inline">
                                <input
                                  type="radio"
                                  name="jamatDetails.helpFromJamat"
                                  onChange={(e) => {
                                    setJamatDetails((state) => {
                                      state.helpFromJamat = e.target.value;
                                      return JSON.parse(JSON.stringify(state));
                                    });
                                  }}
                                  id="jamat_help_yes"
                                  value="Yes"
                                  checked={jamatDetails.helpFromJamat === "Yes"}
                                  required
                                />
                                Yes
                              </label>
                              <label class="radio-inline">
                                <input
                                  type="radio"
                                  name="jamatDetails.helpFromJamat"
                                  onChange={(e) => {
                                    setJamatDetails((state) => {
                                      state.helpFromJamat = e.target.value;
                                      return JSON.parse(JSON.stringify(state));
                                    });
                                  }}
                                  id="jamat_help_no"
                                  value="No"
                                  checked={jamatDetails.helpFromJamat === "No"}
                                />
                                no
                              </label>
                            </div>
                          </div>
                        </div>
                        {jamatDetails.helpFromJamat === "Yes" && (
                          <>
                            <div class="form-group">
                              <div class="row">
                                {/* jamat amount receive */}
                                <div class="col-lg-3">
                                  <label>
                                    Amount Received<span>*</span>
                                  </label>
                                  <input
                                    type="number"
                                    class="form-control"
                                    name="jamatDetails.jamatReceiveAmount"
                                    value={jamatDetails.jamatReceiveAmount}
                                    onChange={(e) => {
                                      setJamatDetails((state) => {
                                        state.jamatReceiveAmount =
                                          e.target.value;
                                        return JSON.parse(
                                          JSON.stringify(state)
                                        );
                                      });
                                    }}
                                    placeholder="Enter Amount Received"
                                    required
                                  />
                                </div>
                                {/* amount Receive Purpose */}
                                <div class="col-lg-3">
                                  <label>
                                    Purpose<span>*</span>
                                  </label>
                                  <input
                                    type="text"
                                    class="form-control"
                                    name="jamatDetails.amountReceivePurpose"
                                    value={jamatDetails.amountReceivePurpose}
                                    onChange={(e) => {
                                      setJamatDetails((state) => {
                                        state.amountReceivePurpose =
                                          e.target.value;
                                        return JSON.parse(
                                          JSON.stringify(state)
                                        );
                                      });
                                    }}
                                    placeholder="Enter Purpose"
                                    required
                                  />
                                </div>
                                {/* amount type */}
                                <div class="col-lg-3">
                                  <label>
                                    Amount Type <span>*</span>
                                  </label>
                                  <select
                                    class="form-control"
                                    name="jamatDetails.amountType"
                                    required
                                    value={jamatDetails.amountType}
                                    onChange={(e) => {
                                      setJamatDetails((state) => {
                                        state.amountType = e.target.value;
                                        return JSON.parse(
                                          JSON.stringify(state)
                                        );
                                      });
                                    }}
                                  >
                                    <option value="NA">--select--</option>
                                    <option value="duringRamandan">
                                      During Ramadan
                                    </option>
                                    <option value="Monthly">Monthly</option>
                                    <option value="oneTime">One Time</option>
                                    <option value="year">Yearly</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </>
                        )}

                        <hr />
                        <div class="form-group">
                          <div class="row">
                            {/* deniyat course */}
                            <div class="col-lg-4">
                              <label>
                                Deeniyat Course. Have you attended any basic
                                course of deeniyat? <span>*</span>
                              </label>
                              <label class="radio-inline">
                                <input
                                  type="radio"
                                  name="jamatDetails.deeniyatCourse"
                                  onChange={(e) => {
                                    setJamatDetails((state) => {
                                      state.deeniyatCourse = e.target.value;
                                      return JSON.parse(JSON.stringify(state));
                                    });
                                  }}
                                  id="deeniyat_course_yes"
                                  value="Yes"
                                  checked={
                                    jamatDetails.deeniyatCourse === "Yes"
                                  }
                                  required
                                />
                                Yes
                              </label>
                              <label class="radio-inline">
                                <input
                                  type="radio"
                                  name="jamatDetails.deeniyatCourse"
                                  id="deeniyat_course_no"
                                  onChange={(e) => {
                                    setJamatDetails((state) => {
                                      state.deeniyatCourse = e.target.value;
                                      return JSON.parse(JSON.stringify(state));
                                    });
                                  }}
                                  value="No"
                                  checked={jamatDetails.deeniyatCourse === "No"}
                                />
                                no
                              </label>
                            </div>
                          </div>
                        </div>
                        {jamatDetails.deeniyatCourse === "Yes" && (
                          <>
                            <div class="form-group">
                              <div class="row">
                                {/* course name */}
                                <div class="col-lg-3">
                                  <label>
                                    Course Name<span>*</span>
                                  </label>
                                  <input
                                    type="text"
                                    class="form-control"
                                    name="jamatDetails.courseName"
                                    value={jamatDetails.courseName}
                                    onChange={(e) => {
                                      setJamatDetails((state) => {
                                        state.courseName = e.target.value;
                                        return JSON.parse(
                                          JSON.stringify(state)
                                        );
                                      });
                                    }}
                                    placeholder="Enter Course Name"
                                    required
                                  />
                                </div>
                                {/* madrasha name */}
                                <div class="col-lg-3">
                                  <label>
                                    Madrasa Name<span>*</span>
                                  </label>
                                  <input
                                    type="text"
                                    class="form-control"
                                    name="jamatDetails.madrashaName"
                                    value={jamatDetails.madrashaName}
                                    onChange={(e) => {
                                      setJamatDetails((state) => {
                                        state.madrashaName = e.target.value;
                                        return JSON.parse(
                                          JSON.stringify(state)
                                        );
                                      });
                                    }}
                                    placeholder="Enter Madrasa Name"
                                    required
                                  />
                                </div>
                                {/* any other course */}
                                <div class="col-lg-3">
                                  <label>
                                    Any Other Course Name<span>*</span>
                                  </label>
                                  <input
                                    type="text"
                                    class="form-control"
                                    name="jamatDetails.anyOtherCourse"
                                    value={jamatDetails.anyOtherCourse}
                                    onChange={(e) => {
                                      setJamatDetails((state) => {
                                        state.anyOtherCourse = e.target.value;
                                        return JSON.parse(
                                          JSON.stringify(state)
                                        );
                                      });
                                    }}
                                    placeholder="Enter Other Course Name"
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    )}

                    {/* ========== previous academic details sections ============== */}
                    {tab === "previous_academic_information" && (
                      <>
                        {academicDetails &&
                          academicDetails?.map((academic, index) => {
                            return (
                              <div className="prevAcademicDetails">
                                <div class="form-group">
                                  <div class="row">
                                    {/* previous year result */}
                                    <div
                                      class="col-sm-3 topMargin"
                                      id="txtDegree"
                                      onchange="show_grid()"
                                    >
                                      <label>
                                        Previous Year Results
                                        <span style={{ color: "red" }}></span>
                                      </label>
                                      <select
                                        id="txt6scDegree"
                                        class="form-control"
                                        name="academic.prevYearResult"
                                        value={academic.prevYearResult}
                                        onChange={(e) => {
                                          setAcademicdetails((state) => {
                                            const newState = [...state];
                                            newState[index] = {
                                              ...newState[index],
                                              prevYearResult: e.target.value,
                                            };
                                            return newState;
                                          });
                                        }}
                                      >
                                        <option
                                          selected="selected"
                                          value="select"
                                        >
                                          --select--
                                        </option>
                                        <option value="Last Year Result">
                                          Last Year Result
                                        </option>
                                        <option value="Last To Last Year Result">
                                          Last To Last Year Result
                                        </option>
                                        <option value="2 Year Back Result">
                                          2 Year Back Result
                                        </option>
                                      </select>
                                    </div>
                                  </div>
                                </div>

                                <div class="panel-collapse collapse show">
                                  <div class="panel-body">
                                    <div class="col-sm-12">
                                      <div class="form-group">
                                        <div class="row">
                                          {/* last year result img */}
                                          {academic.prevYearResult ===
                                            "Last Year Result" && (
                                            <>
                                              <div class="col-lg-2">
                                                <label>
                                                  Last Year Result{" "}
                                                  <span
                                                    style={{ color: "red" }}
                                                  >
                                                    *
                                                  </span>
                                                </label>
                                                <input
                                                  type="file"
                                                  class="form-control"
                                                  name={`academicDetails[${index}].lastYearResultImg`}
                                                  onChange={(e) =>
                                                    imageHandler(
                                                      e,
                                                      "lastYearResultImg",
                                                      index
                                                    )
                                                  }
                                                  required
                                                />
                                              </div>

                                              <div class="col-lg-2">
                                                <img
                                                  id="jamat_letter_two_prev"
                                                  src={`${baseUrl}${academic.lastYearResultImg}`}
                                                  alt="last year result"
                                                  style={{
                                                    height: "100px",
                                                    width: "100px",
                                                  }}
                                                />
                                              </div>
                                            </>
                                          )}

                                          {/* last two year img  */}
                                          {academic.prevYearResult ===
                                            "Last To Last Year Result" && (
                                            <>
                                              <div class="col-lg-2">
                                                <label>
                                                  Last To Last Year Result{" "}
                                                  <span
                                                    style={{ color: "red" }}
                                                  >
                                                    *
                                                  </span>
                                                </label>
                                                <input
                                                  type="file"
                                                  class="form-control"
                                                  name="lastTwoYearResultImg"
                                                  onChange={(e) =>
                                                    imageHandler(
                                                      e,
                                                      "lastTwoYearResultImg",
                                                      index
                                                    )
                                                  }
                                                  required
                                                />
                                              </div>
                                              <div class="col-lg-2">
                                                <img
                                                  id="jamat_letter_two_prev"
                                                  src={`${baseUrl}${academic.lastTwoYearResultImg}`}
                                                  alt="last to last year result"
                                                  style={{
                                                    height: "100px",
                                                    width: "100px",
                                                  }}
                                                />
                                              </div>
                                            </>
                                          )}
                                          {/* two year back result img */}
                                          {academic.prevYearResult ===
                                            "2 Year Back Result" && (
                                            <>
                                              <div class="col-lg-2">
                                                <label>
                                                  2 Year Back Result{" "}
                                                  <span
                                                    style={{ color: "red" }}
                                                  >
                                                    *
                                                  </span>
                                                </label>
                                                <input
                                                  type="file"
                                                  class="form-control"
                                                  name="TwoYearBackResultImg"
                                                  onChange={(e) =>
                                                    imageHandler(
                                                      e,
                                                      "TwoYearBackResultImg",
                                                      index
                                                    )
                                                  }
                                                  required
                                                />
                                              </div>
                                              <div class="col-lg-2">
                                                <img
                                                  id="jamat_letter_two_prev"
                                                  src={`${baseUrl}${academic.TwoYearBackResultImg}`}
                                                  alt="2 year back result"
                                                  style={{
                                                    height: "100px",
                                                    width: "100px",
                                                  }}
                                                />
                                              </div>
                                            </>
                                          )}
                                        </div>
                                      </div>
                                      <div class="form-group">
                                        <div class="row">
                                          {/* currently studing in  */}
                                          <div class="col-sm-3 topMargin">
                                            <label>
                                              Currently studying in Std{" "}
                                              <span style={{ color: "red" }}>
                                                *
                                              </span>
                                            </label>
                                            <select
                                              class="form-control step6Class"
                                              id="txt6scLevelOfCourse"
                                              name="academic.currentStudy"
                                              value={academic.currentStudy}
                                              onChange={(e) => {
                                                setAcademicdetails((state) => {
                                                  const newState = [...state];
                                                  newState[index] = {
                                                    ...newState[index],
                                                    currentStudy:
                                                      e.target.value,
                                                  };
                                                  return newState;
                                                });
                                              }}
                                            >
                                              <option
                                                selected="selected"
                                                value="0"
                                              >
                                                --select--
                                              </option>
                                              <option
                                                category="School"
                                                value="19"
                                              >
                                                Aalima Courses
                                              </option>
                                              <option
                                                category="School"
                                                value="20"
                                              >
                                                Nursery
                                              </option>
                                              <option
                                                category="School"
                                                value="24"
                                              >
                                                Junior KG
                                              </option>
                                              <option
                                                category="School"
                                                value="25"
                                              >
                                                Senior KG
                                              </option>
                                              <option
                                                category="School"
                                                value="26"
                                              >
                                                Special Cases
                                              </option>
                                              <option
                                                category="School"
                                                value="1"
                                              >
                                                1st
                                              </option>
                                              <option
                                                category="School"
                                                value="2"
                                              >
                                                2nd
                                              </option>
                                              <option
                                                category="School"
                                                value="3"
                                              >
                                                3rd
                                              </option>
                                              <option
                                                category="School"
                                                value="4"
                                              >
                                                4th
                                              </option>
                                              <option
                                                category="School"
                                                value="5"
                                              >
                                                5th
                                              </option>
                                              <option
                                                category="School"
                                                value="6"
                                              >
                                                6th
                                              </option>
                                              <option
                                                category="School"
                                                value="7"
                                              >
                                                7th
                                              </option>
                                              <option
                                                category="School"
                                                value="8"
                                              >
                                                8th
                                              </option>
                                              <option
                                                category="School"
                                                value="9"
                                              >
                                                9th
                                              </option>
                                              <option
                                                category="School"
                                                value="10"
                                              >
                                                10th
                                              </option>
                                              <option
                                                category="JrCollege"
                                                value="11"
                                              >
                                                11th
                                              </option>
                                              <option
                                                category="JrCollege"
                                                value="12"
                                              >
                                                12th
                                              </option>
                                              <option
                                                category="Graduation"
                                                value="13"
                                              >
                                                Graduation
                                              </option>
                                              <option
                                                category="PostGraduation"
                                                value="14"
                                              >
                                                Post-Graduation
                                              </option>
                                              <option
                                                category="Diploma"
                                                value="15"
                                              >
                                                Diploma in Engineering
                                              </option>
                                              <option
                                                category="Diploma"
                                                value="16"
                                              >
                                                Other Diplomas
                                              </option>
                                              <option
                                                category="Entrance"
                                                value="17"
                                              >
                                                Entrance Exams and other
                                                professional courses
                                              </option>
                                              <option
                                                category="Vocational"
                                                value="18"
                                              >
                                                Vocational
                                              </option>
                                            </select>
                                          </div>
                                          {/* special case */}
                                          <div
                                            class="col-sm-3 topMargin"
                                            id="Div_OtherStd_Step6"
                                          >
                                            <label>Special Case</label>
                                            <input
                                              type="text"
                                              class="form-control"
                                              name="academic.specialCase"
                                              value={academic.specialCase}
                                              onChange={(e) => {
                                                setAcademicdetails((state) => {
                                                  const newState = [...state];
                                                  newState[index] = {
                                                    ...newState[index],
                                                    specialCase: e.target.value,
                                                  };
                                                  return newState;
                                                });
                                              }}
                                              placeholder="Special Case"
                                            />
                                          </div>
                                          {/* course name */}
                                          <div
                                            class="col-sm-3 topMargin"
                                            id="txtDegree"
                                          >
                                            <label>
                                              Course Name
                                              <span
                                                style={{ color: "red" }}
                                              ></span>
                                            </label>
                                            <input
                                              type="text"
                                              class="form-control"
                                              name="academic.courseName"
                                              value={academic.courseName}
                                              onChange={(e) => {
                                                setAcademicdetails((state) => {
                                                  const newState = [...state];
                                                  newState[index] = {
                                                    ...newState[index],
                                                    courseName: e.target.value,
                                                  };
                                                  return newState;
                                                });
                                              }}
                                              placeholder="Course Name"
                                            />
                                          </div>
                                          {/* Level of course */}
                                          <div
                                            class="col-sm-3 topMargin"
                                            id="LevelOfCourse_Step6"
                                          >
                                            <label>
                                              Level of course{" "}
                                              <span style={{ color: "red" }}>
                                                *
                                              </span>
                                            </label>
                                            <select
                                              class="form-control select2"
                                              id="txt5LevelOfCourse_Step6"
                                              style={{ width: "100%" }}
                                              name="academic.levelOfCourse"
                                              value={academic.levelOfCourse}
                                              onChange={(e) => {
                                                setAcademicdetails((state) => {
                                                  const newState = [...state];
                                                  newState[index] = {
                                                    ...newState[index],
                                                    levelOfCourse:
                                                      e.target.value,
                                                  };
                                                  return newState;
                                                });
                                              }}
                                            >
                                              <option value="NA">
                                                --select--
                                              </option>
                                              <option value="1st year">
                                                1st year
                                              </option>
                                              <option value="2nd year">
                                                2nd year
                                              </option>
                                              <option value="3rd year">
                                                3rd year
                                              </option>
                                              <option value="4th year">
                                                4th year
                                              </option>
                                              <option value="5th year">
                                                5th year
                                              </option>
                                              <option value="6th year">
                                                6th year
                                              </option>
                                              <option value="other">
                                                Other
                                              </option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="form-group">
                                        <div class="row">
                                          {/* other course one */}
                                          <div
                                            class="col-sm-3 topMargin"
                                            id="txtOtherCourse_Step6"
                                          >
                                            <label>
                                              Other Course
                                              <span
                                                style={{ color: "red" }}
                                              ></span>
                                            </label>
                                            <input
                                              type="text"
                                              class="form-control"
                                              name="academic.otherCourseOne"
                                              value={academic.otherCourseOne}
                                              onChange={(e) => {
                                                setAcademicdetails((state) => {
                                                  const newState = [...state];
                                                  newState[index] = {
                                                    ...newState[index],
                                                    otherCourseOne:
                                                      e.target.value,
                                                  };
                                                  return newState;
                                                });
                                              }}
                                              id="txt6OtherCourse_Step6"
                                              placeholder="Other course"
                                            />
                                          </div>
                                          {/* other level of course */}
                                          <div class="col-sm-3 topMargin">
                                            <label>
                                              Other Level Of Course
                                              <span
                                                style={{ color: "red" }}
                                              ></span>
                                            </label>
                                            <input
                                              type="text"
                                              class="form-control"
                                              id="otherLevelOfCourse"
                                              placeholder="Other Level of course"
                                              name="academic.otherLevelOfCourse"
                                              value={
                                                academic.otherLevelOfCourse
                                              }
                                              onChange={(e) => {
                                                setAcademicdetails((state) => {
                                                  const newState = [...state];
                                                  newState[index] = {
                                                    ...newState[index],
                                                    otherLevelOfCourse:
                                                      e.target.value,
                                                  };
                                                  return newState;
                                                });
                                              }}
                                            />
                                          </div>
                                          {/* other field */}
                                          <div class="col-sm-3 topMargin">
                                            <label>
                                              Other Field{" "}
                                              <span style={{ color: "red" }}>
                                                *
                                              </span>
                                            </label>
                                            <input
                                              type="text"
                                              class="form-control"
                                              placeholder="other Field"
                                              name="academic.otherField"
                                              value={academic.otherField}
                                              onChange={(e) => {
                                                setAcademicdetails((state) => {
                                                  const newState = [...state];
                                                  newState[index] = {
                                                    ...newState[index],
                                                    otherField: e.target.value,
                                                  };
                                                  return newState;
                                                });
                                              }}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="form-group">
                                        <div class="row">
                                          {/* field  */}
                                          <div class="col-sm-3 topMargin">
                                            <label>
                                              Field{" "}
                                              <span style={{ color: "red" }}>
                                                *
                                              </span>
                                            </label>
                                            <select
                                              class="form-control select2"
                                              style={{ width: "100%" }}
                                              name="academic.field"
                                              value={academic.field}
                                              onChange={(e) => {
                                                setAcademicdetails((state) => {
                                                  const newState = [...state];
                                                  newState[index] = {
                                                    ...newState[index],
                                                    field: e.target.value,
                                                  };
                                                  return newState;
                                                });
                                              }}
                                            >
                                              <option
                                                selected="selected"
                                                value="select"
                                              >
                                                --select--
                                              </option>
                                              <option value="164">Arts</option>
                                              <option value="165">
                                                Commerce
                                              </option>
                                              <option value="166">
                                                Science
                                              </option>
                                              <option value="0">Other</option>
                                            </select>
                                          </div>
                                          {/* duration */}
                                          <div class="col-sm-3 topMargin">
                                            <label>
                                              Duration{" "}
                                              <span style={{ color: "red" }}>
                                                *
                                              </span>
                                            </label>
                                            <select
                                              class="form-control select2"
                                              style={{ width: "100%" }}
                                              name="academic.duration"
                                              value={academic.duration}
                                              onChange={(e) => {
                                                setAcademicdetails((state) => {
                                                  const newState = [...state];
                                                  newState[index] = {
                                                    ...newState[index],
                                                    duration: e.target.value,
                                                  };
                                                  return newState;
                                                });
                                              }}
                                            >
                                              <option value="NA">
                                                --select--
                                              </option>
                                              <option value="1 year">
                                                1 year
                                              </option>
                                              <option value="1.5 year">
                                                1.5 year
                                              </option>
                                              <option value="2 year">
                                                2 year
                                              </option>
                                              <option value="2.5 year">
                                                2.5 year
                                              </option>
                                              <option value="3 year">
                                                3 year
                                              </option>
                                              <option value="3.5 year">
                                                3.5 year
                                              </option>
                                              <option value="4 year">
                                                4 year
                                              </option>
                                              <option value="4.5 year">
                                                4.5 year
                                              </option>
                                              <option value="5 year">
                                                5 year
                                              </option>
                                              <option value="5.5 year">
                                                5.5 year
                                              </option>
                                              <option value="6 year">
                                                6 year
                                              </option>
                                              <option value="other">
                                                Other
                                              </option>
                                            </select>
                                          </div>
                                          {/* medium of instruction */}
                                          <div class="col-sm-3 topMargin">
                                            <label>
                                              Medium Of Instruction
                                              <span style={{ color: "red" }}>
                                                *
                                              </span>
                                            </label>
                                            <select
                                              class="form-control select2"
                                              style={{ width: "100%" }}
                                              name="academic.instructionMedium"
                                              value={academic.instructionMedium}
                                              onChange={(e) => {
                                                setAcademicdetails((state) => {
                                                  const newState = [...state];
                                                  newState[index] = {
                                                    ...newState[index],
                                                    instructionMedium:
                                                      e.target.value,
                                                  };
                                                  return newState;
                                                });
                                              }}
                                            >
                                              <option value="NA">
                                                --select--
                                              </option>
                                              <option value="English">
                                                English
                                              </option>
                                              <option value="Gujarati">
                                                Gujarati
                                              </option>
                                              <option value="Hindi">
                                                Hindi
                                              </option>
                                              <option value="Marathi">
                                                Marathi
                                              </option>
                                              <option value="Semi-English">
                                                Semi-English
                                              </option>
                                              <option value="Urdu">Urdu</option>
                                              <option value="Other">
                                                Other
                                              </option>
                                            </select>
                                          </div>
                                          {/* pattern of the course */}
                                          <div class="col-sm-3 topMargin">
                                            <label>
                                              Pattern Of The Course
                                              <span
                                                style={{ color: "red" }}
                                              ></span>
                                            </label>
                                            <select
                                              class="form-control select2"
                                              style={{ width: "100%" }}
                                              name="academic.coursePattern"
                                              value={academic.coursePattern}
                                              onChange={(e) => {
                                                setAcademicdetails((state) => {
                                                  const newState = [...state];
                                                  newState[index] = {
                                                    ...newState[index],
                                                    coursePattern:
                                                      e.target.value,
                                                  };
                                                  return newState;
                                                });
                                              }}
                                            >
                                              <option value="NA">
                                                --select--
                                              </option>
                                              <option value="Annual">
                                                Annual
                                              </option>
                                              <option value="Semester">
                                                Semester
                                              </option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="form-group">
                                        <div class="row">
                                          {/* Other Duration of Course */}
                                          <div class="col-sm-3 topMargin">
                                            <label>
                                              Other Duration of Course
                                              <span
                                                style={{ color: "red" }}
                                              ></span>
                                            </label>
                                            <input
                                              type="text"
                                              class="form-control"
                                              placeholder="Other Duration of Course"
                                              name="academic.otherDurationCourse"
                                              value={
                                                academic.otherDurationCourse
                                              }
                                              onChange={(e) => {
                                                setAcademicdetails((state) => {
                                                  const newState = [...state];
                                                  newState[index] = {
                                                    ...newState[index],
                                                    otherDurationCourse:
                                                      e.target.value,
                                                  };
                                                  return newState;
                                                });
                                              }}
                                            />
                                          </div>
                                          {/* other course two */}
                                          <div class="col-sm-3 topMargin">
                                            <label>
                                              Other Course
                                              <span
                                                style={{ color: "red" }}
                                              ></span>
                                            </label>
                                            <input
                                              type="text"
                                              class="form-control"
                                              placeholder="Other Course"
                                              name="academic.otherCourseTwo"
                                              value={academic.otherCourseTwo}
                                              onChange={(e) => {
                                                setAcademicdetails((state) => {
                                                  const newState = [...state];
                                                  newState[index] = {
                                                    ...newState[index],
                                                    otherCourseTwo:
                                                      e.target.value,
                                                  };
                                                  return newState;
                                                });
                                              }}
                                            />
                                          </div>
                                          {/* other medium */}
                                          <div class="col-sm-3 topMargin">
                                            <label>
                                              Other Medium
                                              <span style={{ color: "red" }}>
                                                *
                                              </span>
                                            </label>
                                            <input
                                              type="text"
                                              class="form-control"
                                              placeholder="Other Medium"
                                              name="academic.otherMedium"
                                              value={academic.otherMedium}
                                              onChange={(e) => {
                                                setAcademicdetails((state) => {
                                                  const newState = [...state];
                                                  newState[index] = {
                                                    ...newState[index],
                                                    otherMedium: e.target.value,
                                                  };
                                                  return newState;
                                                });
                                              }}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="form-group">
                                        <div class="row">
                                          {/* Name Of the School / College / Institutions */}
                                          <div class="col-sm-3 topMargin">
                                            <label>
                                              Name Of the School / College /
                                              Institutions
                                              <span style={{ color: "red" }}>
                                                *
                                              </span>
                                            </label>
                                            <input
                                              type="text"
                                              class="form-control"
                                              placeholder="Name Of the School/College/Institutions"
                                              name="academic.instituteName"
                                              value={academic.instituteName}
                                              onChange={(e) => {
                                                setAcademicdetails((state) => {
                                                  const newState = [...state];
                                                  newState[index] = {
                                                    ...newState[index],
                                                    instituteName:
                                                      e.target.value,
                                                  };
                                                  return newState;
                                                });
                                              }}
                                            />
                                          </div>
                                          {/* Name Of the Board/University */}
                                          <div class="col-sm-3 topMargin">
                                            <label>
                                              Name Of the Board/University
                                              <span
                                                style={{ color: "red" }}
                                              ></span>
                                            </label>
                                            <div class="input-group">
                                              <div class="input-group-addon">
                                                <i class="icon ion-university"></i>
                                              </div>
                                              <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Name Of the Board/University"
                                                name="academic.boardName"
                                                value={academic.boardName}
                                                onChange={(e) => {
                                                  setAcademicdetails(
                                                    (state) => {
                                                      const newState = [
                                                        ...state,
                                                      ];
                                                      newState[index] = {
                                                        ...newState[index],
                                                        boardName:
                                                          e.target.value,
                                                      };
                                                      return newState;
                                                    }
                                                  );
                                                }}
                                              />
                                            </div>
                                          </div>
                                          {/* Type of school / college / institution */}
                                          <div class="col-sm-3 topMargin">
                                            <label>
                                              Type of school / college /
                                              institution
                                              <span style={{ color: "red" }}>
                                                *
                                              </span>
                                            </label>
                                            <select
                                              class="form-control select2"
                                              style={{ width: "100%" }}
                                              name="academic.instituteType"
                                              value={academic.instituteType}
                                              onChange={(e) => {
                                                setAcademicdetails((state) => {
                                                  const newState = [...state];
                                                  newState[index] = {
                                                    ...newState[index],
                                                    instituteType:
                                                      e.target.value,
                                                  };
                                                  return newState;
                                                });
                                              }}
                                            >
                                              <option value="NA">
                                                --select--
                                              </option>
                                              <option value="Govt">
                                                Government
                                              </option>
                                              <option value="Private">
                                                Private
                                              </option>
                                              <option value="Semi Govt">
                                                Semi Government
                                              </option>
                                            </select>
                                          </div>
                                          {/* if private */}
                                          <div class="col-sm-3 topMargin">
                                            <label>
                                              If Private
                                              <span style={{ color: "red" }}>
                                                *
                                              </span>
                                            </label>
                                            <select
                                              class="form-control select2"
                                              style={{ width: "100%" }}
                                              name="academic.ifPrivate"
                                              value={academic.ifPrivate}
                                              onChange={(e) => {
                                                setAcademicdetails((state) => {
                                                  const newState = [...state];
                                                  newState[index] = {
                                                    ...newState[index],
                                                    ifPrivate: e.target.value,
                                                  };
                                                  return newState;
                                                });
                                              }}
                                            >
                                              <option value="NA">
                                                --select--
                                              </option>
                                              <option value="Aided">
                                                Aided
                                              </option>
                                              <option value="Unaided">
                                                Unaided
                                              </option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>

                                      <div class="form-group">
                                        <div class="row">
                                          {/* School/ College / Institute Address */}
                                          <div class="col-sm-3 topMargin">
                                            <label>
                                              School/ College / Institute
                                              Address
                                              <span style={{ color: "red" }}>
                                                *
                                              </span>
                                            </label>
                                            <textarea
                                              class="form-control"
                                              placeholder="School/ College / Institute Address"
                                              name="academic.instituteAddress"
                                              value={academic.instituteAddress}
                                              onChange={(e) => {
                                                setAcademicdetails((state) => {
                                                  const newState = [...state];
                                                  newState[index] = {
                                                    ...newState[index],
                                                    instituteAddress:
                                                      e.target.value,
                                                  };
                                                  return newState;
                                                });
                                              }}
                                            />
                                          </div>
                                          {/* institute state */}
                                          <div class="col-sm-3 topMargin">
                                            <label>
                                              State
                                              <span style={{ color: "red" }}>
                                                *
                                              </span>
                                            </label>
                                            <select
                                              class="form-control"
                                              name="academic.instituteState"
                                              value={academic.instituteState}
                                              onChange={(e) => {
                                                setAcademicdetails((state) => {
                                                  const newState = [...state];
                                                  newState[index] = {
                                                    ...newState[index],
                                                    instituteState:
                                                      e.target.value,
                                                  };
                                                  return newState;
                                                });
                                              }}
                                            >
                                              <option value="NA">
                                                --select--
                                              </option>
                                              {stateNames.map((state) => (
                                                <option
                                                  key={state}
                                                  value={state}
                                                >
                                                  {state}
                                                </option>
                                              ))}
                                            </select>
                                          </div>
                                          {/* institute city */}
                                          <div class="col-sm-3 topMargin">
                                            <label>
                                              City
                                              <span style={{ color: "red" }}>
                                                *
                                              </span>
                                            </label>
                                            <CityDropdown
                                              state={academic.instituteState}
                                              value={academic.instituteCity}
                                              name={`instituteCity_${index}`}
                                              onChange={(e) => {
                                                const updatedAcademicDetails =
                                                  academicDetails.map(
                                                    (item, idx) =>
                                                      idx === index
                                                        ? {
                                                            ...item,
                                                            instituteCity:
                                                              e.target.value,
                                                          }
                                                        : item
                                                  );
                                                setAcademicdetails(
                                                  updatedAcademicDetails
                                                );
                                              }}
                                            />
                                          </div>
                                          {/* institute pic code */}
                                          <div class="col-sm-3 topMargin">
                                            <label>
                                              Pincode
                                              <span
                                                style={{ color: "red" }}
                                              ></span>
                                            </label>
                                            <input
                                              type="number"
                                              class="form-control number"
                                              placeholder="Pincode"
                                              data-inputmask="'mask': ['999999']"
                                              data-mask=""
                                              name="academic.institutePin"
                                              value={academic.institutePin}
                                              onChange={(e) => {
                                                setAcademicdetails((state) => {
                                                  const newState = [...state];
                                                  newState[index] = {
                                                    ...newState[index],
                                                    institutePin:
                                                      e.target.value,
                                                  };
                                                  return newState;
                                                });
                                              }}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="form-group">
                                        <div class="row">
                                          {/* institute district */}
                                          <div class="col-sm-3 topMargin">
                                            <label>
                                              District
                                              <span
                                                style={{ color: "red" }}
                                              ></span>
                                            </label>
                                            <input
                                              type="text"
                                              class="form-control"
                                              id="txt6scDistrict"
                                              placeholder="District"
                                              name="academic.instituteDistrict"
                                              value={academic.instituteDistrict}
                                              onChange={(e) => {
                                                setAcademicdetails((state) => {
                                                  const newState = [...state];
                                                  newState[index] = {
                                                    ...newState[index],
                                                    instituteDistrict:
                                                      e.target.value,
                                                  };
                                                  return newState;
                                                });
                                              }}
                                            />
                                          </div>
                                          {/* institute country */}
                                          <div class="col-sm-3 topMargin">
                                            <label>
                                              Country
                                              <span
                                                style={{ color: "red" }}
                                              ></span>
                                            </label>
                                            <input
                                              type="text"
                                              class="form-control"
                                              id="txt6scCountry"
                                              placeholder="Country"
                                              name="academic.instituteCountry"
                                              value={academic.instituteCountry}
                                              onChange={(e) => {
                                                setAcademicdetails((state) => {
                                                  const newState = [...state];
                                                  newState[index] = {
                                                    ...newState[index],
                                                    instituteCountry:
                                                      e.target.value,
                                                  };
                                                  return newState;
                                                });
                                              }}
                                            />
                                          </div>
                                          {/* institute email */}
                                          <div class="col-sm-3 topMargin">
                                            <label>
                                              Email
                                              <span
                                                style={{ color: "red" }}
                                              ></span>
                                            </label>
                                            <input
                                              type="email"
                                              class="form-control"
                                              id="txt6scEmail"
                                              placeholder="Email"
                                              name="academic.instituteEmail"
                                              value={academic.instituteEmail}
                                              onChange={(e) => {
                                                setAcademicdetails((state) => {
                                                  const newState = [...state];
                                                  newState[index] = {
                                                    ...newState[index],
                                                    instituteEmail:
                                                      e.target.value,
                                                  };
                                                  return newState;
                                                });
                                              }}
                                            />
                                          </div>
                                          {/* institute website */}
                                          <div class="col-sm-3 topMargin">
                                            <label>
                                              Website
                                              <span
                                                style={{ color: "red" }}
                                              ></span>
                                            </label>
                                            <input
                                              type="text"
                                              class="form-control"
                                              id="txt6scWebsite"
                                              placeholder="Website"
                                              name="academic.instituteWebsite"
                                              value={academic.instituteWebsite}
                                              onChange={(e) => {
                                                setAcademicdetails((state) => {
                                                  const newState = [...state];
                                                  newState[index] = {
                                                    ...newState[index],
                                                    instituteWebsite:
                                                      e.target.value,
                                                  };
                                                  return newState;
                                                });
                                              }}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="form-group">
                                        <div class="row">
                                          {/* institute land line */}
                                          <div class="col-sm-3 topMargin">
                                            <label>
                                              Landline Number
                                              <span
                                                style={{ color: "red" }}
                                              ></span>
                                            </label>
                                            <input
                                              type="number"
                                              class="form-control"
                                              id="txt6LandlineNumber"
                                              placeholder="Landline Number"
                                              name="academic.instituteLandLineNo"
                                              value={
                                                academic.instituteLandLineNo
                                              }
                                              onChange={(e) => {
                                                setAcademicdetails((state) => {
                                                  const newState = [...state];
                                                  newState[index] = {
                                                    ...newState[index],
                                                    instituteLandLineNo:
                                                      e.target.value,
                                                  };
                                                  return newState;
                                                });
                                              }}
                                            />
                                          </div>
                                          {/* institute contact no */}
                                          <div class="col-sm-3 topMargin">
                                            <label>
                                              School/ College / Institute
                                              Contact number
                                              <span style={{ color: "red" }}>
                                                *
                                              </span>
                                            </label>
                                            <input
                                              type="number"
                                              class="form-control number"
                                              id="txt6scAlterNumber"
                                              placeholder="School/ College / Institute Contact number"
                                              name="academic.instituteContactNo"
                                              value={
                                                academic.instituteContactNo
                                              }
                                              onChange={(e) => {
                                                setAcademicdetails((state) => {
                                                  const newState = [...state];
                                                  newState[index] = {
                                                    ...newState[index],
                                                    instituteContactNo:
                                                      e.target.value,
                                                  };
                                                  return newState;
                                                });
                                              }}
                                            />
                                          </div>
                                          {/* institute mobile no */}
                                          <div class="col-sm-3 topMargin">
                                            <label>
                                              Mobile Number
                                              <span
                                                style={{ color: "red" }}
                                              ></span>
                                            </label>
                                            <input
                                              type="number"
                                              class="form-control number"
                                              id="txt6LandlineNumber_Step6"
                                              placeholder="Mobile Number"
                                              data-inputmask="'mask': ['9999999999']"
                                              data-mask=""
                                              name="academic.instituteMobileNo"
                                              value={academic.instituteMobileNo}
                                              onChange={(e) => {
                                                setAcademicdetails((state) => {
                                                  const newState = [...state];
                                                  newState[index] = {
                                                    ...newState[index],
                                                    instituteMobileNo:
                                                      e.target.value,
                                                  };
                                                  return newState;
                                                });
                                              }}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="form-group">
                                        <div class="row">
                                          {/* Bonafide Certificate Front img */}
                                          <div class="col-sm-3 topMargin">
                                            <label>
                                              Bonafide Certificate Front
                                              <span style={{ color: "red" }}>
                                                *
                                              </span>
                                            </label>
                                            <input
                                              type="file"
                                              class="form-control"
                                              name="bonafied_certificate"
                                              id="bonafied_certificate"
                                              onChange={(e) =>
                                                imageHandler(
                                                  e,
                                                  "bonafideCertificateFrontImg",
                                                  index
                                                )
                                              }
                                            />
                                          </div>
                                          {/* show Bonafide Certificate Front img  */}
                                          <div class="col-lg-2">
                                            <img
                                              id="jamat_letter_two_prev"
                                              src={`${baseUrl}${academic.bonafideCertificateFrontImg}`}
                                              alt="bonafide Certificate Front Image"
                                              style={{
                                                height: "100px",
                                                width: "100px",
                                              }}
                                            />
                                          </div>
                                          {/* Bonafide Certificate Back side */}
                                          <div class="col-sm-3 topMargin">
                                            <label>
                                              Bonafide Certificate Back side
                                            </label>
                                            <input
                                              type="file"
                                              class="form-control"
                                              name="bonafideCertificateBackImg"
                                              id="bonafied_back"
                                              onChange={(e) =>
                                                imageHandler(
                                                  e,
                                                  "bonafideCertificateBackImg",
                                                  index
                                                )
                                              }
                                            />
                                          </div>
                                          {/* show Bonafide Certificate back img */}
                                          <div class="col-lg-3">
                                            <img
                                              id="bonafied_back_prev"
                                              src={`${baseUrl}${academic.bonafideCertificateBackImg}`}
                                              alt="Bonafide Certificate Backside"
                                              style={{
                                                height: "100px",
                                                width: "100px",
                                              }}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                      </>
                    )}
                    {/* ========== Other Trust Support details sections ============== */}
                    {tab === "other_trust_support_information" && (
                      <div className="other_Trust_support">
                        <div class="form-group">
                          <div class="row">
                            {/* Do you have other trust support ?(Yes/No) */}
                            <div class="col-sm-4 topMargin">
                              <label>
                                Do you have other trust support ?(Yes/No)
                                <span style={{ color: "red" }}></span>
                              </label>
                              <select
                                class="form-control select2"
                                style={{ width: "100%" }}
                                name="trustDetails.otherTrustSupport"
                                value={trustDetails.otherTrustSupport}
                                onChange={(e) => {
                                  setTrustDetails((state) => {
                                    state.otherTrustSupport = e.target.value;
                                    return JSON.parse(JSON.stringify(state));
                                  });
                                }}
                              >
                                <option value="">--select--</option>
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        {trustDetails.otherTrustSupport === "Yes" && (
                          <>
                            <div class="form-group">
                              <div class="row" style={{ display: "block" }}>
                                <div class="col-sm-12 topMargin">
                                  <table class="table table-bordered">
                                    <thead>
                                      <tr>
                                        <th>Sr No</th>
                                        <th>Name Of The Trust </th>
                                        <th>
                                          Amount received current year{" "}
                                          <span style={{ color: "red" }}>
                                            *
                                          </span>
                                        </th>
                                        <th>
                                          Amount received last year{" "}
                                          <span style={{ color: "red" }}>
                                            *
                                          </span>
                                        </th>
                                        <th>
                                          State{" "}
                                          <span style={{ color: "red" }}>
                                            *
                                          </span>
                                        </th>
                                        <th>
                                          City{" "}
                                          <span style={{ color: "red" }}>
                                            *
                                          </span>
                                        </th>
                                        <th>
                                          <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={() => {
                                              // Clone the existing trust details
                                              let updatedTrustDetails =
                                                JSON.parse(
                                                  JSON.stringify(trustDetails)
                                                );

                                              // Get the last trust detail
                                              const lastTrust =
                                                updatedTrustDetails
                                                  .trustDetails[
                                                  updatedTrustDetails
                                                    .trustDetails.length - 1
                                                ];

                                              // Validation checks
                                              if (!lastTrust.trustName) {
                                                toast.error(
                                                  "Trust Name is required"
                                                );
                                                return;
                                              }
                                              if (
                                                lastTrust.currentYearAmount <= 0
                                              ) {
                                                toast.error(
                                                  "Current year amount is required"
                                                );
                                                return;
                                              }
                                              if (
                                                lastTrust.lastYearAmount <= 0
                                              ) {
                                                toast.error(
                                                  "Last year amount is required"
                                                );
                                                return;
                                              }
                                              if (!lastTrust.trustState) {
                                                toast.error(
                                                  "State is required"
                                                );
                                                return;
                                              }
                                              if (!lastTrust.trustCity) {
                                                toast.error("City is required");
                                                return;
                                              }

                                              // If all validations pass, add a new empty object
                                              setTrustDetails((prev) => ({
                                                ...prev,
                                                trustDetails: [
                                                  ...prev.trustDetails,
                                                  {
                                                    trustName: "",
                                                    currentYearAmount: 0,
                                                    lastYearAmount: 0,
                                                    trustState: "",
                                                    trustCity: "",
                                                  },
                                                ],
                                              }));
                                            }}
                                          >
                                            <i className="fa-solid fa-plus"></i>
                                          </button>
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {trustDetails.trustDetails.map(
                                        (trust, index) => (
                                          <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>
                                              <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Name Of The Trust"
                                                name={`trustName_${index}`}
                                                value={trust.trustName}
                                                onChange={(e) => {
                                                  const newTrustDetails = [
                                                    ...trustDetails.trustDetails,
                                                  ];
                                                  newTrustDetails[index] = {
                                                    ...newTrustDetails[index],
                                                    trustName: e.target.value,
                                                  };
                                                  setTrustDetails({
                                                    ...trustDetails,
                                                    trustDetails:
                                                      newTrustDetails,
                                                  });
                                                }}
                                              />
                                            </td>
                                            <td>
                                              <input
                                                type="number"
                                                class="form-control amount allownumericwithdecimal"
                                                placeholder="Amount received current year"
                                                name={`currentYearAmount_${index}`}
                                                value={trust.currentYearAmount}
                                                onChange={(e) => {
                                                  const newTrustDetails = [
                                                    ...trustDetails.trustDetails,
                                                  ];
                                                  newTrustDetails[index] = {
                                                    ...newTrustDetails[index],
                                                    currentYearAmount:
                                                      e.target.value,
                                                  };
                                                  setTrustDetails({
                                                    ...trustDetails,
                                                    trustDetails:
                                                      newTrustDetails,
                                                  });
                                                }}
                                              />
                                            </td>
                                            <td>
                                              <input
                                                type="number"
                                                class="form-control amount allownumericwithdecimal"
                                                id="txt8amt_received_yr_1"
                                                placeholder="Amount received last year"
                                                name={`lastYearAmount_${index}`}
                                                value={trust.lastYearAmount}
                                                onChange={(e) => {
                                                  const newTrustDetails = [
                                                    ...trustDetails.trustDetails,
                                                  ];
                                                  newTrustDetails[index] = {
                                                    ...newTrustDetails[index],
                                                    lastYearAmount:
                                                      e.target.value,
                                                  };
                                                  setTrustDetails({
                                                    ...trustDetails,
                                                    trustDetails:
                                                      newTrustDetails,
                                                  });
                                                }}
                                              />
                                            </td>
                                            <td>
                                              <select
                                                class="form-control"
                                                name={`trustState_${index}`}
                                                value={trust.trustState}
                                                onChange={(e) => {
                                                  const newTrustDetails = [
                                                    ...trustDetails.trustDetails,
                                                  ];
                                                  newTrustDetails[index] = {
                                                    ...newTrustDetails[index],
                                                    trustState: e.target.value,
                                                  };
                                                  setTrustDetails({
                                                    ...trustDetails,
                                                    trustDetails:
                                                      newTrustDetails,
                                                  });
                                                }}
                                              >
                                                <option value="NA">
                                                  --select--
                                                </option>
                                                {stateNames?.map((state) => (
                                                  <option
                                                    key={state}
                                                    value={state}
                                                  >
                                                    {state}
                                                  </option>
                                                ))}
                                              </select>
                                            </td>
                                            <td>
                                              <CityDropdown
                                                state={trust.trustState}
                                                value={trust.trustCity}
                                                onChange={(e) => {
                                                  let updated = JSON.parse(
                                                    JSON.stringify(trustDetails)
                                                  );
                                                  updated.trustDetails[
                                                    index
                                                  ].trustCity = e.target.value;
                                                  setTrustDetails(updated);
                                                }}
                                              />
                                            </td>
                                            <td>
                                              {trustDetails.trustDetails
                                                .length > 1 && (
                                                <button
                                                  type="button"
                                                  className="btn btn-danger"
                                                  onClick={() => {
                                                    setTrustDetails((prev) => ({
                                                      ...prev,
                                                      trustDetails:
                                                        prev.trustDetails.filter(
                                                          (item, i) =>
                                                            i !== index
                                                        ),
                                                    }));
                                                  }}
                                                >
                                                  <i className="fa-solid fa-minus"></i>
                                                </button>
                                              )}
                                            </td>
                                          </tr>
                                        )
                                      )}
                                      <tr style={{ marginTop: "10px" }}>
                                        <th>Sr No</th>
                                        <th>
                                          Contribution from other sources{" "}
                                          <span style={{ color: "red" }}>
                                            *
                                          </span>
                                        </th>
                                        <th>
                                          Amount received current year{" "}
                                          <span style={{ color: "red" }}>
                                            *
                                          </span>
                                        </th>
                                        <th>
                                          Amount received last year{" "}
                                          <span style={{ color: "red" }}>
                                            *
                                          </span>
                                        </th>
                                        <th>
                                          State{" "}
                                          <span style={{ color: "red" }}>
                                            *
                                          </span>
                                        </th>
                                        <th>
                                          City{" "}
                                          <span style={{ color: "red" }}>
                                            *
                                          </span>
                                        </th>
                                        <th>
                                          <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={() => {
                                              let updatedOtherSupportDetails =
                                                JSON.parse(
                                                  JSON.stringify(trustDetails)
                                                );

                                              // Get the last trust detail
                                              const lastTrust =
                                                updatedOtherSupportDetails
                                                  .otherContribution[
                                                  updatedOtherSupportDetails
                                                    .otherContribution.length -
                                                    1
                                                ];

                                              // Validation checks
                                              if (
                                                !lastTrust.contributionSource
                                              ) {
                                                toast.error(
                                                  "Contribution score is required"
                                                );
                                                return;
                                              }
                                              if (
                                                lastTrust.contributionCurrentyearAmunt <=
                                                0
                                              ) {
                                                toast.error(
                                                  "Current year amount is required"
                                                );
                                                return;
                                              }
                                              if (
                                                lastTrust.contributionLastyearAmunt <=
                                                0
                                              ) {
                                                toast.error(
                                                  "Last year amount is required"
                                                );
                                                return;
                                              }
                                              if (
                                                !lastTrust.contributionState
                                              ) {
                                                toast.error(
                                                  "State is required"
                                                );
                                                return;
                                              }
                                              if (!lastTrust.contributionCity) {
                                                toast.error("City is required");
                                                return;
                                              }

                                              // If all validations pass, add a new empty object
                                              setTrustDetails((prev) => ({
                                                ...prev,
                                                otherContribution: [
                                                  ...prev.otherContribution,
                                                  {
                                                    contributionSource: "",
                                                    contributionCurrentyearAmunt: 0,
                                                    contributionLastyearAmunt: 0,
                                                    contributionState: "",
                                                    contributionCity: "",
                                                  },
                                                ],
                                              }));
                                            }}
                                          >
                                            <i class="fa-solid fa-plus"></i>
                                          </button>
                                        </th>
                                      </tr>
                                      {trustDetails.otherContribution.map(
                                        (contribution, index) => {
                                          return (
                                            <tr key={index}>
                                              <td>{index + 1}</td>
                                              <td>
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  placeholder="Name Of The Trust"
                                                  name={`contributionSource_${index}`}
                                                  value={
                                                    contribution.contributionSource
                                                  }
                                                  onChange={(e) => {
                                                    const newTrustDetails = [
                                                      ...trustDetails.otherContribution,
                                                    ];
                                                    newTrustDetails[index] = {
                                                      ...newTrustDetails[index],
                                                      contributionSource:
                                                        e.target.value,
                                                    };
                                                    setTrustDetails({
                                                      ...trustDetails,
                                                      otherContribution:
                                                        newTrustDetails,
                                                    });
                                                  }}
                                                />
                                              </td>
                                              <td>
                                                <input
                                                  type="number"
                                                  class="form-control amount allownumericwithdecimal"
                                                  placeholder="Amount received current year"
                                                  name={`contributionCurrentyearAmunt_${index}`}
                                                  value={
                                                    contribution.contributionCurrentyearAmunt
                                                  }
                                                  onChange={(e) => {
                                                    const newTrustDetails = [
                                                      ...trustDetails.otherContribution,
                                                    ];
                                                    newTrustDetails[index] = {
                                                      ...newTrustDetails[index],
                                                      contributionCurrentyearAmunt:
                                                        e.target.value,
                                                    };
                                                    setTrustDetails({
                                                      ...trustDetails,
                                                      otherContribution:
                                                        newTrustDetails,
                                                    });
                                                  }}
                                                />
                                              </td>
                                              <td>
                                                <input
                                                  type="number"
                                                  class="form-control amount allownumericwithdecimal"
                                                  id="txt8amt_received_yr_1"
                                                  placeholder="Amount received last year"
                                                  name={`contributionLastyearAmunt_${index}`}
                                                  value={
                                                    contribution.contributionLastyearAmunt
                                                  }
                                                  onChange={(e) => {
                                                    const newTrustDetails = [
                                                      ...trustDetails.otherContribution,
                                                    ];
                                                    newTrustDetails[index] = {
                                                      ...newTrustDetails[index],
                                                      contributionLastyearAmunt:
                                                        e.target.value,
                                                    };
                                                    setTrustDetails({
                                                      ...trustDetails,
                                                      otherContribution:
                                                        newTrustDetails,
                                                    });
                                                  }}
                                                />
                                              </td>
                                              <td>
                                                <select
                                                  class="form-control"
                                                  name={`contributionState_${index}`}
                                                  value={
                                                    contribution.contributionState
                                                  }
                                                  onChange={(e) => {
                                                    const newTrustDetails = [
                                                      ...trustDetails.otherContribution,
                                                    ];
                                                    newTrustDetails[index] = {
                                                      ...newTrustDetails[index],
                                                      contributionState:
                                                        e.target.value,
                                                    };
                                                    setTrustDetails({
                                                      ...trustDetails,
                                                      otherContribution:
                                                        newTrustDetails,
                                                    });
                                                  }}
                                                >
                                                  <option value="">
                                                    --select--
                                                  </option>
                                                  {stateNames.map((state) => (
                                                    <option
                                                      key={state}
                                                      value={state}
                                                    >
                                                      {state}
                                                    </option>
                                                  ))}
                                                </select>
                                              </td>
                                              <td>
                                                <CityDropdown
                                                  state={
                                                    contribution.contributionState
                                                  }
                                                  value={
                                                    contribution.contributionCity
                                                  }
                                                  onChange={(e) => {
                                                    let updated = JSON.parse(
                                                      JSON.stringify(
                                                        trustDetails
                                                      )
                                                    );
                                                    updated.otherContribution[
                                                      index
                                                    ].contributionCity =
                                                      e.target.value;
                                                    setTrustDetails(updated);
                                                  }}
                                                />
                                              </td>
                                              <td>
                                                {trustDetails.otherContribution
                                                  .length > 1 && (
                                                  <button
                                                    type="button"
                                                    className="btn btn-danger"
                                                    onClick={() =>
                                                      setTrustDetails(
                                                        (prev) => ({
                                                          ...prev,
                                                          otherContribution:
                                                            prev.otherContribution.filter(
                                                              (item, i) =>
                                                                i !== index
                                                            ),
                                                        })
                                                      )
                                                    }
                                                  >
                                                    <i className="fa-solid fa-minus"></i>
                                                  </button>
                                                )}
                                              </td>
                                            </tr>
                                          );
                                        }
                                      )}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </>
                        )}

                        <div class="form-group">
                          <div class="row">
                            <hr />
                            <b>Govt. Scholarship</b>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="row">
                            {/* Did you apply for scholarship last year?(Yes/No) */}
                            <div class="col-sm-4 topMargin">
                              <label>
                                Did you apply for scholarship last year?
                                (Yes/No)
                              </label>
                              <input
                                type="radio"
                                name={`trustDetails.govtScholarshipApply`}
                                value="Yes"
                                onChange={(e) => {
                                  setTrustDetails((state) => {
                                    state.govtScholarshipApply = e.target.value;
                                    return JSON.parse(JSON.stringify(state));
                                  });
                                }}
                              />
                              Yes &nbsp;&nbsp;
                              <input
                                type="radio"
                                name={`trustDetails.govtScholarshipApply`}
                                value="No"
                                onChange={(e) => {
                                  setTrustDetails((state) => {
                                    state.govtScholarshipApply = e.target.value;
                                    return JSON.parse(JSON.stringify(state));
                                  });
                                }}
                              />
                              No
                            </div>
                          </div>
                        </div>
                        {trustDetails.govtScholarshipApply === "Yes" && (
                          <>
                            <div class="form-group">
                              <div class="row" id="govtScholarship">
                                {/* scholarship amount receive */}
                                <div class="col-sm-3 topMargin">
                                  <label>
                                    Amount received{" "}
                                    <span style={{ color: "red" }}></span>
                                  </label>
                                  <input
                                    type="number"
                                    class="form-control amount allownumericwithdecimal"
                                    placeholder=""
                                    name="trustDetails.scholarAmount"
                                    value={trustDetails.scholarAmount}
                                    onChange={(e) => {
                                      setTrustDetails((state) => {
                                        state.scholarAmount = e.target.value;
                                        return JSON.parse(
                                          JSON.stringify(state)
                                        );
                                      });
                                    }}
                                  />
                                </div>
                                {/* scholar year */}
                                <div class="col-sm-3 topMargin">
                                  <label>
                                    Year <span style={{ color: "red" }}></span>
                                  </label>
                                  <input
                                    type="number"
                                    class="form-control"
                                    placeholder=""
                                    name="trustDetails.scholarYear"
                                    value={trustDetails.scholarYear}
                                    onChange={(e) => {
                                      setTrustDetails((state) => {
                                        state.scholarYear = e.target.value;
                                        return JSON.parse(
                                          JSON.stringify(state)
                                        );
                                      });
                                    }}
                                  />
                                </div>
                                {/* scholarship name */}
                                <div class="col-sm-3 topMargin">
                                  <label>
                                    Name of the govt. scholarship{" "}
                                    <span style={{ color: "red" }}></span>
                                  </label>
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder=""
                                    name="trustDetails.scholarName"
                                    value={trustDetails.scholarName}
                                    onChange={(e) => {
                                      setTrustDetails((state) => {
                                        state.scholarName = e.target.value;
                                        return JSON.parse(
                                          JSON.stringify(state)
                                        );
                                      });
                                    }}
                                  />
                                </div>
                                {/* application id */}
                                <div class="col-sm-3 topMargin">
                                  <label>
                                    Application Id{" "}
                                    <span style={{ color: "red" }}></span>
                                  </label>
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder=""
                                    name="trustDetails.applicationId"
                                    value={trustDetails.applicationId}
                                    onChange={(e) => {
                                      setTrustDetails((state) => {
                                        state.applicationId = e.target.value;
                                        return JSON.parse(
                                          JSON.stringify(state)
                                        );
                                      });
                                    }}
                                  />
                                </div>
                                {/* application password */}
                                <div class="col-sm-3 topMargin">
                                  <label>
                                    Password{" "}
                                    <span style={{ color: "red" }}></span>
                                  </label>
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder=""
                                    name="trustDetails.applicationPass"
                                    value={trustDetails.applicationPass}
                                    onChange={(e) => {
                                      setTrustDetails((state) => {
                                        state.applicationPass = e.target.value;
                                        return JSON.parse(
                                          JSON.stringify(state)
                                        );
                                      });
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    )}

                    {/*  ====================== organisation support family information ======================== */}
                    {tab === "organisation_support_information" && (
                      <div className="organization_support">
                        <div class="row">
                          <div class="col-sm-6 topMargin">
                            <label>
                              Support receiving / received by your sibling in
                              past / current year from Nathani Charitable Trust.
                            </label>
                            <select
                              class="form-control select2"
                              id="received_sibling_orgo"
                              style={{ width: "100%" }}
                              name="organizationSupport.receivedSupport"
                              value={organizationSupport.receivedSupport}
                              onChange={(e) => {
                                setOrganizationSupport((state) => {
                                  state.receivedSupport = e.target.value;
                                  return JSON.parse(JSON.stringify(state));
                                });
                              }}
                            >
                              <option value="">--select--</option>
                              <option value="No">No</option>
                              <option value="Yes">Yes</option>
                            </select>
                          </div>
                        </div>
                        {organizationSupport.receivedSupport === "Yes" && (
                          <>
                            <div class="row" id="txt9ReceivedsiblingYes">
                              <div class="col-sm-12 topMargin">
                                <table class="table table-bordered">
                                  <thead>
                                    <tr>
                                      <th>Sr No</th>
                                      <th>Name of Brother/Sister</th>
                                      <th>ID No.</th>
                                      <th>Course</th>
                                      <th>Amount Received</th>
                                      <th>Financial year</th>
                                      <th>
                                        Last how many years they have been
                                        receiving support?
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {organizationSupport.supportFamilyDetails.map(
                                      (family, index) => {
                                        return (
                                          <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>
                                              <input
                                                type="text"
                                                class="form-control"
                                                name={`memberName${index}`}
                                                value={family.memberName || ""}
                                                onChange={(e) => {
                                                  const newSupportFamilyDetails =
                                                    [
                                                      ...organizationSupport.supportFamilyDetails,
                                                    ];
                                                  newSupportFamilyDetails[
                                                    index
                                                  ] = {
                                                    ...newSupportFamilyDetails[
                                                      index
                                                    ],
                                                    memberName: e.target.value,
                                                  };
                                                  setOrganizationSupport({
                                                    ...organizationSupport,
                                                    supportFamilyDetails:
                                                      newSupportFamilyDetails,
                                                  });
                                                }}
                                                placeholder=""
                                              />
                                            </td>
                                            <td>
                                              <input
                                                type="text"
                                                class="form-control"
                                                placeholder=""
                                                name={`memberId${index}`}
                                                value={family.memberId || ""}
                                                onChange={(e) => {
                                                  const newSupportFamilyDetails =
                                                    [
                                                      ...organizationSupport.supportFamilyDetails,
                                                    ];
                                                  newSupportFamilyDetails[
                                                    index
                                                  ] = {
                                                    ...newSupportFamilyDetails[
                                                      index
                                                    ],
                                                    memberId: e.target.value,
                                                  };
                                                  setOrganizationSupport({
                                                    ...organizationSupport,
                                                    supportFamilyDetails:
                                                      newSupportFamilyDetails,
                                                  });
                                                }}
                                              />
                                            </td>
                                            <td>
                                              <input
                                                type="text"
                                                class="form-control"
                                                placeholder=""
                                                name={`course${index}`}
                                                value={family.course || ""}
                                                onChange={(e) => {
                                                  const newSupportFamilyDetails =
                                                    [
                                                      ...organizationSupport.supportFamilyDetails,
                                                    ];
                                                  newSupportFamilyDetails[
                                                    index
                                                  ] = {
                                                    ...newSupportFamilyDetails[
                                                      index
                                                    ],
                                                    course: e.target.value,
                                                  };
                                                  setOrganizationSupport({
                                                    ...organizationSupport,
                                                    supportFamilyDetails:
                                                      newSupportFamilyDetails,
                                                  });
                                                }}
                                              />
                                            </td>
                                            <td>
                                              <input
                                                type="number"
                                                class="form-control amount allownumericwithdecimal"
                                                placeholder=""
                                                name={`amountReceived${index}`}
                                                value={
                                                  family.amountReceived || ""
                                                }
                                                onChange={(e) => {
                                                  const newSupportFamilyDetails =
                                                    [
                                                      ...organizationSupport.supportFamilyDetails,
                                                    ];
                                                  newSupportFamilyDetails[
                                                    index
                                                  ] = {
                                                    ...newSupportFamilyDetails[
                                                      index
                                                    ],
                                                    amountReceived:
                                                      e.target.value,
                                                  };
                                                  setOrganizationSupport({
                                                    ...organizationSupport,
                                                    supportFamilyDetails:
                                                      newSupportFamilyDetails,
                                                  });
                                                }}
                                              />
                                            </td>
                                            <td>
                                              <select
                                                class="form-control"
                                                style={{ width: "100%" }}
                                                name={`financialYear${index}`}
                                                value={
                                                  family.financialYear || ""
                                                }
                                                onChange={(e) => {
                                                  const newSupportFamilyDetails =
                                                    [
                                                      ...organizationSupport.supportFamilyDetails,
                                                    ];
                                                  newSupportFamilyDetails[
                                                    index
                                                  ] = {
                                                    ...newSupportFamilyDetails[
                                                      index
                                                    ],
                                                    financialYear:
                                                      e.target.value,
                                                  };
                                                  setOrganizationSupport({
                                                    ...organizationSupport,
                                                    supportFamilyDetails:
                                                      newSupportFamilyDetails,
                                                  });
                                                }}
                                              >
                                                <option value="NA">
                                                  --select--
                                                </option>
                                                <option value="2004-05">
                                                  2004-05
                                                </option>
                                                <option value="2005-06">
                                                  2005-06
                                                </option>
                                                <option value="2006-07">
                                                  2006-07
                                                </option>
                                                <option value="2007-08">
                                                  2007-08
                                                </option>
                                                <option value="2008-09">
                                                  2008-09
                                                </option>
                                                <option value="2009-10">
                                                  2009-10
                                                </option>
                                                <option value="2010-11">
                                                  2010-11
                                                </option>
                                                <option value="2011-12">
                                                  2011-12
                                                </option>
                                                <option value="2012-13">
                                                  2012-13
                                                </option>
                                                <option value="2013-14">
                                                  2013-14
                                                </option>
                                                <option value="2014-15">
                                                  2014-15
                                                </option>
                                                <option value="2015-16">
                                                  2015-16
                                                </option>
                                                <option value="2016-17">
                                                  2016-17
                                                </option>
                                                <option value="2017-18">
                                                  2017-18
                                                </option>
                                                <option value="2018-19">
                                                  2018-19
                                                </option>
                                                <option value="2019-20">
                                                  2019-20
                                                </option>
                                                <option value="2020-21">
                                                  2020-21
                                                </option>
                                                <option value="2021-22">
                                                  2021-22
                                                </option>
                                                <option value="2022-23">
                                                  2022-23
                                                </option>
                                                <option value="2023-24">
                                                  2023-24
                                                </option>
                                                <option value="2024-25">
                                                  2024-25
                                                </option>
                                              </select>
                                            </td>
                                            <td>
                                              <input
                                                type="number"
                                                class="form-control"
                                                placeholder=""
                                                name={`howManyYearsGet${index}`}
                                                value={
                                                  family.howManyYearsGet || ""
                                                }
                                                onChange={(e) => {
                                                  const newSupportFamilyDetails =
                                                    [
                                                      ...organizationSupport.supportFamilyDetails,
                                                    ];
                                                  newSupportFamilyDetails[
                                                    index
                                                  ] = {
                                                    ...newSupportFamilyDetails[
                                                      index
                                                    ],
                                                    howManyYearsGet:
                                                      e.target.value,
                                                  };
                                                  setOrganizationSupport({
                                                    ...organizationSupport,
                                                    supportFamilyDetails:
                                                      newSupportFamilyDetails,
                                                  });
                                                }}
                                              />
                                            </td>
                                          </tr>
                                        );
                                      }
                                    )}
                                  </tbody>
                                </table>
                              </div>

                              {/* add button */}
                              <div
                                class="col-sm-12 topMargin"
                                style={{
                                  display: "flex",
                                  justifyContent: "flex-end",
                                }}
                                id="newbtn2"
                              >
                                <button
                                  type="button"
                                  class="btn btn-primary"
                                  id="addorgoView2"
                                  onClick={(e) =>
                                    handleSubmit(e, "saveAsDraft")
                                  }
                                >
                                  Save
                                </button>
                              </div>
                            </div>

                            {/* table data show */}
                            <div
                              class="col-sm-12"
                              style={{ marginTop: "25px" }}
                            >
                              <div
                                class="table-responsive"
                                style={{ maxHeight: "350px" }}
                              >
                                <table
                                  id="fees_from_our_organization2"
                                  class="table no-margin table-condensed"
                                  // style={{}}
                                >
                                  <thead>
                                    <tr>
                                      <th>Sr.No.</th>
                                      <th>Name of Brother/Sister</th>
                                      <th>ID No.</th>
                                      <th>Course</th>
                                      <th>Amount Received </th>
                                      <th>Financial year</th>
                                      <th>
                                        Last how many years have they been
                                        receiving support
                                      </th>
                                      <th id="3rd">Delete </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {organizationSupport &&
                                      organizationSupport?.supportFamilyDetails?.map(
                                        (item, index) => {
                                          return (
                                            <tr id="13442">
                                              <td>{index + 1}</td>
                                              <td>{item?.memberName}</td>
                                              <td>{item?.memberId}</td>
                                              <td>{item?.course}</td>
                                              <td>{item?.amountReceived}</td>
                                              <td>{item?.financialYear}</td>
                                              <td>{item?.howManyYearsGet}</td>
                                              <td>
                                                <i className="fa-solid fa-trash table_delete_icon"></i>
                                              </td>
                                            </tr>
                                          );
                                        }
                                      )}
                                  </tbody>
                                </table>
                              </div>
                              <hr style={{ borderColor: "red" }} />
                            </div>
                          </>
                        )}

                        <div class="row">
                          <div class="col-sm-6 topMargin">
                            <label>
                              You/your family members have received help from
                              Organisation under any other scheme other than
                              education support
                            </label>
                            <select
                              class="form-control select2"
                              id="other_schem_support"
                              style={{ width: "100%" }}
                              name="organizationSupport.memberReceiveSupport"
                              value={organizationSupport.memberReceiveSupport}
                              onChange={(e) => {
                                setOrganizationSupport((state) => {
                                  state.memberReceiveSupport = e.target.value;
                                  return JSON.parse(JSON.stringify(state));
                                });
                              }}
                            >
                              <option value="">--select--</option>
                              <option value="No">No</option>
                              <option value="Yes">Yes</option>
                            </select>
                          </div>
                        </div>
                        {organizationSupport.memberReceiveSupport === "Yes" && (
                          <>
                            <div class="row" id="txt9ReceivedEductionYes">
                              <div class="col-sm-12 topMargin">
                                <table class="table table-bordered">
                                  <thead>
                                    <tr>
                                      <th>Sr No</th>
                                      <th>Name of the family member</th>
                                      <th>ID No.</th>
                                      <th>scheme</th>
                                      <th>Amount Received</th>
                                      <th>Financial year</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {organizationSupport.otherSupport.map(
                                      (support, index) => {
                                        return (
                                          <tr>
                                            <td>{index + 1}</td>
                                            <td>
                                              <input
                                                type="text"
                                                class="form-control"
                                                placeholder=""
                                                name={`memberName${index}`}
                                                value={support.memberName || ""}
                                                onChange={(e) => {
                                                  const newOtherSupportDetails =
                                                    [
                                                      ...organizationSupport.otherSupport,
                                                    ];
                                                  newOtherSupportDetails[
                                                    index
                                                  ] = {
                                                    ...newOtherSupportDetails[
                                                      index
                                                    ],
                                                    memberName: e.target.value,
                                                  };
                                                  setOrganizationSupport({
                                                    ...organizationSupport,
                                                    otherSupport:
                                                      newOtherSupportDetails,
                                                  });
                                                }}
                                              />
                                            </td>
                                            <td>
                                              <input
                                                type="text"
                                                class="form-control"
                                                placeholder=""
                                                name={`memberId${index}`}
                                                value={support.memberId || ""}
                                                onChange={(e) => {
                                                  const newOtherSupportDetails =
                                                    [
                                                      ...organizationSupport.otherSupport,
                                                    ];
                                                  newOtherSupportDetails[
                                                    index
                                                  ] = {
                                                    ...newOtherSupportDetails[
                                                      index
                                                    ],
                                                    memberId: e.target.value,
                                                  };
                                                  setOrganizationSupport({
                                                    ...organizationSupport,
                                                    otherSupport:
                                                      newOtherSupportDetails,
                                                  });
                                                }}
                                              />
                                            </td>
                                            <td>
                                              <div class="input-group">
                                                <div
                                                  class="input-group-addon"
                                                  id="loadSchemeName"
                                                >
                                                  <i class="icon ion-university"></i>
                                                </div>
                                                <select
                                                  class="form-control select2"
                                                  name={`scheme${index}`}
                                                  value={support.scheme || ""}
                                                  onChange={(e) => {
                                                    const newOtherSupportDetails =
                                                      [
                                                        ...organizationSupport.otherSupport,
                                                      ];
                                                    newOtherSupportDetails[
                                                      index
                                                    ] = {
                                                      ...newOtherSupportDetails[
                                                        index
                                                      ],
                                                      scheme: e.target.value,
                                                    };
                                                    setOrganizationSupport({
                                                      ...organizationSupport,
                                                      otherSupport:
                                                        newOtherSupportDetails,
                                                    });
                                                  }}
                                                >
                                                  <option
                                                    selected="selected"
                                                    value="0"
                                                  >
                                                    --select--
                                                  </option>
                                                  <option value="4">
                                                    Business Aid
                                                  </option>
                                                  <option value="5">
                                                    General Aid
                                                  </option>
                                                  <option value="2">
                                                    Housing
                                                  </option>
                                                  <option value="3">
                                                    Medical
                                                  </option>
                                                  <option value="1">
                                                    Women Empowerment
                                                  </option>
                                                </select>
                                              </div>
                                            </td>
                                            <td>
                                              <input
                                                type="number"
                                                class="form-control amount allownumericwithdecimal"
                                                placeholder=""
                                                name={`amountreceived${index}`}
                                                value={
                                                  support.amountreceived || ""
                                                }
                                                onChange={(e) => {
                                                  const newOtherSupportDetails =
                                                    [
                                                      ...organizationSupport.otherSupport,
                                                    ];
                                                  newOtherSupportDetails[
                                                    index
                                                  ] = {
                                                    ...newOtherSupportDetails[
                                                      index
                                                    ],
                                                    amountreceived:
                                                      e.target.value,
                                                  };
                                                  setOrganizationSupport({
                                                    ...organizationSupport,
                                                    otherSupport:
                                                      newOtherSupportDetails,
                                                  });
                                                }}
                                              />
                                            </td>
                                            <td>
                                              <select
                                                class="form-control"
                                                style={{ width: "100%" }}
                                                name={`financialYear${index}`}
                                                value={
                                                  support.financialYear || ""
                                                }
                                                onChange={(e) => {
                                                  const newOtherSupportDetails =
                                                    [
                                                      ...organizationSupport.otherSupport,
                                                    ];
                                                  newOtherSupportDetails[
                                                    index
                                                  ] = {
                                                    ...newOtherSupportDetails[
                                                      index
                                                    ],
                                                    financialYear:
                                                      e.target.value,
                                                  };
                                                  setOrganizationSupport({
                                                    ...organizationSupport,
                                                    otherSupport:
                                                      newOtherSupportDetails,
                                                  });
                                                }}
                                              >
                                                <option value="NA">
                                                  --select--
                                                </option>
                                                <option value="2004-05">
                                                  2004-05
                                                </option>
                                                <option value="2005-06">
                                                  2005-06
                                                </option>
                                                <option value="2006-07">
                                                  2006-07
                                                </option>
                                                <option value="2007-08">
                                                  2007-08
                                                </option>
                                                <option value="2008-09">
                                                  2008-09
                                                </option>
                                                <option value="2009-10">
                                                  2009-10
                                                </option>
                                                <option value="2010-11">
                                                  2010-11
                                                </option>
                                                <option value="2011-12">
                                                  2011-12
                                                </option>
                                                <option value="2012-13">
                                                  2012-13
                                                </option>
                                                <option value="2013-14">
                                                  2013-14
                                                </option>
                                                <option value="2014-15">
                                                  2014-15
                                                </option>
                                                <option value="2015-16">
                                                  2015-16
                                                </option>
                                                <option value="2016-17">
                                                  2016-17
                                                </option>
                                                <option value="2017-18">
                                                  2017-18
                                                </option>
                                                <option value="2018-19">
                                                  2018-19
                                                </option>
                                                <option value="2019-20">
                                                  2019-20
                                                </option>
                                                <option value="2020-21">
                                                  2020-21
                                                </option>
                                                <option value="2021-22">
                                                  2021-22
                                                </option>
                                                <option value="2022-23">
                                                  2022-23
                                                </option>
                                                <option value="2023-24">
                                                  2023-24
                                                </option>
                                                <option value="2024-25">
                                                  2024-25
                                                </option>
                                              </select>
                                            </td>
                                          </tr>
                                        );
                                      }
                                    )}
                                  </tbody>
                                </table>
                              </div>
                              <div
                                class="col-sm-12 topMargin"
                                style={{ marginTop: "31px", display: "none" }}
                                id="newbtn3"
                              >
                                <input
                                  type="button"
                                  class="btn btn-primary"
                                  id="addorgoView3"
                                  value="Add More"
                                />
                              </div>
                            </div>
                            {/* show add saved details here */}
                            <div
                              class="col-sm-12"
                              style={{ marginTop: "25px" }}
                            >
                              <div
                                class="table-responsive"
                                style={{ maxHeight: "350px" }}
                              >
                                <table
                                  id="fees_from_our_organization3"
                                  class="table no-margin table-condensed"
                                >
                                  <thead>
                                    <tr>
                                      <th>Sr.No. </th>
                                      <th>Name of the family member </th>
                                      <th>ID No. </th>
                                      <th>scheme </th>
                                      <th>Amount Received </th>
                                      <th>Financial year </th>
                                      <th id="4rth">Delete </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {organizationSupport &&
                                      organizationSupport?.otherSupport?.map(
                                        (item, index) => {
                                          console.log("sfsds", item);
                                          return (
                                            <tr>
                                              <td>{index + 1}</td>
                                              <td>{item?.memberName}</td>
                                              <td>{item?.memberId}</td>
                                              <td>{item?.scheme}</td>
                                              <td>{item?.amountreceived}</td>
                                              <td>{item?.financialYear}</td>
                                              <td>
                                                <i className="fa-solid fa-trash table_delete_icon"></i>
                                              </td>
                                            </tr>
                                          );
                                        }
                                      )}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </>
                        )}

                        <hr />
                      </div>
                    )}

                    {/*  ====================== parent declaration ======================== */}
                    {tab === "parent_declaration" && (
                      <div className="parent_declaration">
                        <div class="row">
                          <div class="col-sm-12 topMargin">
                            <p style={{ textAlign: "center" }}>
                              <b>Declaration of parents / guardian / student</b>
                            </p>
                            <p style={{ textAlign: "center" }}>
                              <b>
                                Form will not be considered in absence of
                                declaration of parents / guardian for minor
                                student
                              </b>
                            </p>
                            <p>Dear Sir / Madam</p>
                            <p>Assalamu-Alaikum,</p>
                            <p>
                              I / We hereby solemnly affirm that the details
                              mentioned in this form are true to the best of my
                              / our knowledge. I / We am / are responsible for
                              the authenticity of the details and the documents
                              provided along with this form. If any information
                              contained in my application form is found false or
                              improper, your organization has full right to take
                              disciplinary / legal action against me / us.
                            </p>
                            <p>
                              I / We hereby declare that I / We will ensure my
                              ward will complete the
                              <input
                                type="text"
                                readonly=""
                                class="form-control"
                                placeholder="Course Name"
                                disabled
                                // value={}
                                // onChange={(e) => handleChange(e)}
                              />
                              course for which we have applied for scholarship.
                            </p>
                            <p>
                              I / We realize that this assistance is provided to
                              me / for my child from zakat / non-zakat fund and
                              I / we have not taken any surplus loan or aid from
                              any other organization / trust / jamat for the
                              same purpose without informing organisation.
                            </p>
                            <p>
                              I also declare that I / we will not pay the fees
                              in emergency without written approval from
                              organisation.{" "}
                              <b>
                                And if paid, organization will not be
                                responsible.
                              </b>
                            </p>
                            <p>
                              I also declare that the given funds will be
                              exclusively only for education purpose or any
                              other purpose specified in the application only.
                            </p>
                            <p>
                              I also give permission to your institute to
                              collect zakat for fees of my son / daughter / ward
                              / myself on our / my behalf.
                            </p>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-sm-3 topMargin">
                            <label>
                              Name of applicant
                              <span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Name of applicant"
                              readonly=""
                              disabled
                              value={`${studentDetails.firstName} ${studentDetails.lastName}`}
                            />
                          </div>
                          {/* Name of Parent/Guardian */}
                          <div class="col-sm-3 topMargin">
                            <label>
                              Name of Parent/Guardian
                              <span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Name of Parent/Guardian"
                              readonly=""
                              name="familyData.relationPersonName"
                              value={familyData[0]?.relationPersonName}
                              disabled
                            />
                          </div>

                          <div class="col-sm-3 topMargin">
                            <label>
                              Place<span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Place"
                              readonly=""
                              name="studentInfo.state"
                              value={studentInformation.studentInfo.state}
                              disabled
                            />
                          </div>

                          <div class="col-sm-3 topMargin">
                            <label>
                              Date <span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Date"
                              name="familyDeclaration.date"
                              // value={declarationFamily.date}
                              value={new Date().toISOString().slice(0, 10)}
                              disabled
                              readonly=""
                            />
                          </div>
                        </div>

                        {/* <!-- image section start --> */}
                        <div class="row" style={{ marginTop: "25px" }}>
                          <div class="col-md-6 topMargin">
                            <div class="box box-widget widget-user">
                              <div class="widget-user-header bg-aqua-active">
                                <h3 class="widget-user-username">
                                  Upload Student Photo
                                </h3>
                              </div>
                              <div class="widget-user-image">
                                <img
                                  mandatory="Yes"
                                  class="img-circle"
                                  style={{ height: "120px", width: "120px" }}
                                  id="imgPhoto"
                                  src={`${baseUrl}${declarationFamily.studentPhoto}`}
                                  alt="Photo"
                                />
                              </div>
                              <div class="box-footer">
                                <div class="row">
                                  <div class="col-sm-4 border-right">
                                    <div
                                      class="description-block"
                                      style={{ marginTop: "30px" }}
                                    >
                                      <div class="form-group">
                                        <div class="pull-left">
                                          <input
                                            type="file"
                                            id="txt11dpStudentPhotoPath"
                                            name="studentPhoto"
                                            onChange={(e) =>
                                              imageHandler(e, "studentPhoto")
                                            }
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <br />
                          </div>

                          <div class="col-md-6 topMargin">
                            <div class="box box-widget widget-user">
                              <div class="widget-user-header bg-blue-active">
                                <h3 class="widget-user-username">
                                  Upload Student Sign
                                </h3>
                              </div>
                              <div class="widget-user-image">
                                <img
                                  mandatory="Yes"
                                  class="img-bordered-sm"
                                  style={{ height: "120px", width: "120px" }}
                                  id="imgSign"
                                  src={`${baseUrl}${declarationFamily.studentSign}`}
                                  alt="Sign"
                                />
                              </div>
                              <div class="box-footer">
                                <div class="row">
                                  <div class="col-sm-4 border-right">
                                    <div
                                      class="description-block"
                                      style={{ marginTop: "30px" }}
                                    >
                                      <div class="form-group">
                                        <div class="pull-left">
                                          <input
                                            type="file"
                                            id="txt11dpStudentSignPath"
                                            name="studentSign"
                                            onChange={(e) =>
                                              imageHandler(e, "studentSign")
                                            }
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <br />
                          </div>
                        </div>
                        <div class="row">
                          <input type="file" style={{ visibility: "hidden" }} />

                          <div class="col-md-6 topMargin">
                            <div class="box box-widget widget-user">
                              <div class="widget-user-header bg-blue-active">
                                <h3 class="widget-user-username">
                                  Upload Guardian Sign
                                </h3>
                              </div>
                              <div class="widget-user-image">
                                <img
                                  mandatory="Yes"
                                  class="img-bordered-sm"
                                  style={{ height: "120px", width: "120px" }}
                                  id="parentSign"
                                  src={`${baseUrl}${declarationFamily.parentSign}`}
                                  alt="Sign"
                                />
                              </div>
                              <div class="box-footer">
                                <div class="row">
                                  <div class="col-sm-4 border-right">
                                    <div
                                      class="description-block"
                                      style={{ marginTop: "30px" }}
                                    >
                                      <div class="form-group">
                                        <div class="pull-left">
                                          <input
                                            type="file"
                                            id="txt11dpGuardianSignPath"
                                            name="parentSign"
                                            onChange={(e) =>
                                              imageHandler(
                                                e,
                                                "studentGuardianSign"
                                              )
                                            }
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <br />
                          </div>
                        </div>
                      </div>
                    )}

                    {/*  ====================== all documents ======================== */}
                    {tab === "all_documents" && (
                      <div className="allDocument">
                        <div class="col-sm-12">
                          <div class="row">
                            <div class="col-sm-12 col-lg-12 col-md-12 topMargin">
                              <div
                                class="table-responsive"
                                style={{ overflowX: "inherit" }}
                              >
                                <div class="row">
                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    &nbsp;
                                  </div>
                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    Sr.No.{" "}
                                  </div>
                                  <div class="col-lg-10 col-md-10 col-sm-10">
                                    Scan List Of Documents
                                  </div>
                                </div>
                                <hr />
                                <div class="row">
                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <input
                                      type="checkbox"
                                      id="passport_size_stud"
                                      value="check"
                                      disabled="disabled"
                                    />
                                    <span style={{ paddingLeft: "10px" }}>
                                      1.
                                    </span>
                                  </div>

                                  <div class="col-lg-10 col-md-10 col-sm-10">
                                    Passport size photograph.
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-lg-2 col-md-2 col-sm-2">
                                    &nbsp;
                                  </div>

                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <a
                                      id="passportsize_oneView"
                                      style={{ marginleft: "0" }}
                                    >
                                      <img
                                        mandatory="No"
                                        class="img-rounded"
                                        style={{
                                          height: "36px",
                                          width: "40px",
                                        }}
                                        id="imgpassportsize_oneView"
                                        src="../admission/applicantImg/202026_photo.jpg"
                                        alt="Photo"
                                      />
                                    </a>
                                  </div>

                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <a
                                      id="passportsize_twoView"
                                      style={{ marginleft: "0" }}
                                    >
                                      <img
                                        mandatory="No"
                                        class="img-rounded"
                                        style={{
                                          height: "36px",
                                          width: "40px",
                                        }}
                                        id="imgpassportsize_twoView"
                                        src="../admission/applicantImg/202026_sign.jpg"
                                        alt="Photo"
                                      />
                                    </a>
                                  </div>

                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <a
                                      id="passportsize_threeView"
                                      style={{ marginleft: "0" }}
                                    >
                                      <img
                                        mandatory="No"
                                        class="img-rounded"
                                        style={{
                                          height: "36px",
                                          width: "40px",
                                        }}
                                        id="imgpassportsize_threeView"
                                        src="../admission/applicantImg/202026_Mother.jpg"
                                        alt="Photo"
                                      />
                                    </a>
                                  </div>
                                </div>
                                <hr />
                                <div class="row">
                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <input
                                      type="checkbox"
                                      id="attested_copies_stud"
                                      value="check"
                                      disabled="disabled"
                                    />
                                    <span style={{ paddingLeft: "10px" }}>
                                      2.
                                    </span>
                                  </div>

                                  <div class="col-lg-10 col-md-10 col-sm-10">
                                    Original copy of past three annual
                                    examination mark sheet / result copies for
                                    school level and for college level SSC and
                                    HSC ( compulsary for new student ).
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-lg-2 col-md-2 col-sm-2">
                                    &nbsp;
                                  </div>

                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <a
                                      id="marksheet_step_5_11View"
                                      style={{ marginleft: "0" }}
                                    >
                                      <img
                                        mandatory="No"
                                        class="img-rounded"
                                        style={{
                                          height: "36px",
                                          width: "40px",
                                        }}
                                        id="imgmarksheet_step_5_11View"
                                        src="../admission/AcademicInformation/Sem1File/202026_Sem1FileOne.jpg"
                                        alt="Photo"
                                      />
                                    </a>
                                  </div>

                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <a
                                      id="marksheet_step_5_12View"
                                      style={{ marginleft: "0" }}
                                    >
                                      <img
                                        mandatory="No"
                                        class="img-rounded"
                                        style={{
                                          height: "36px",
                                          width: "40px",
                                        }}
                                        id="imgmarksheet_step_5_12View"
                                        src="../dist/img/edu_profile_blank.png"
                                        alt="Photo"
                                      />
                                    </a>
                                  </div>

                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <a
                                      id="marksheet_step_5_13View"
                                      style={{ marginleft: "0" }}
                                    >
                                      <img
                                        mandatory="No"
                                        class="img-rounded"
                                        style={{
                                          height: "36px",
                                          width: "40px",
                                        }}
                                        id="imgmarksheet_step_5_13View"
                                        src="../dist/img/edu_profile_blank.png"
                                        alt="Photo"
                                      />
                                    </a>
                                  </div>

                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <a
                                      id="marksheet_step_5_21View"
                                      style={{ marginleft: "0" }}
                                    >
                                      <img
                                        mandatory="No"
                                        class="img-rounded"
                                        style={{
                                          height: "36px",
                                          width: "40px",
                                        }}
                                        id="imgmarksheet_step_5_21View"
                                        src="../admission/AcademicInformation/Sem1File/202026_Sem1FileTwo.jpg"
                                        alt="Photo"
                                      />
                                    </a>
                                  </div>

                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <a
                                      id="marksheet_step_5_22View"
                                      style={{ marginleft: "0" }}
                                    >
                                      <img
                                        mandatory="No"
                                        class="img-rounded"
                                        style={{
                                          height: "36px",
                                          width: "40px",
                                        }}
                                        id="imgmarksheet_step_5_22View"
                                        src="../dist/img/edu_profile_blank.png"
                                        alt="Photo"
                                      />
                                    </a>
                                  </div>

                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <a
                                      id="marksheet_step_5_23View"
                                      style={{ marginleft: "0" }}
                                    >
                                      <img
                                        mandatory="No"
                                        class="img-rounded"
                                        style={{
                                          height: "36px",
                                          width: "40px",
                                        }}
                                        id="imgmarksheet_step_5_23View"
                                        src="../dist/img/edu_profile_blank.png"
                                        alt="Photo"
                                      />
                                    </a>
                                  </div>

                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <a
                                      id="marksheet_step_5_31View"
                                      style={{ marginleft: "0" }}
                                    >
                                      <img
                                        mandatory="No"
                                        class="img-rounded"
                                        style={{
                                          height: "36px",
                                          width: "40px",
                                        }}
                                        id="imgmarksheet_step_5_31View"
                                        src="../admission/AcademicInformation/Sem1File/202026_Sem1FileThree.jpg"
                                        alt="Photo"
                                      />
                                    </a>
                                  </div>

                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <a
                                      id="marksheet_step_5_32View"
                                      style={{ marginleft: "0" }}
                                    >
                                      <img
                                        mandatory="No"
                                        class="img-rounded"
                                        style={{
                                          height: "36px",
                                          width: "40px",
                                        }}
                                        id="imgmarksheet_step_5_32View"
                                        src="../dist/img/edu_profile_blank.png"
                                        alt="Photo"
                                      />
                                    </a>
                                  </div>

                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <a
                                      id="marksheet_step_5_33View"
                                      style={{ marginleft: "0" }}
                                    >
                                      <img
                                        mandatory="No"
                                        class="img-rounded"
                                        style={{
                                          height: "36px",
                                          width: "40px",
                                        }}
                                        id="imgmarksheet_step_5_33View"
                                        src="../dist/img/edu_profile_blank.png"
                                        alt="Photo"
                                      />
                                    </a>
                                  </div>
                                </div>
                                <hr />
                                <div class="row">
                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <input
                                      type="checkbox"
                                      id="address_first_stud"
                                      value="check"
                                      disabled="disabled"
                                    />
                                    <span style={{ paddingLeft: "10px" }}>
                                      3.
                                    </span>
                                  </div>

                                  <div class="col-lg-10 col-md-10 col-sm-10">
                                    Proof of address first &amp; last page of
                                    ration card, or telephone bill, or voting
                                    identity card or leave &amp; license
                                    agreement or recent receipt / bill or rent
                                    receipt / bill or aadhaarcard.
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-lg-2 col-md-2 col-sm-2">
                                    &nbsp;
                                  </div>
                                  <div class="col-lg-3 col-md-3 col-sm-3">
                                    &nbsp;
                                  </div>

                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <a
                                      id="address_first_oneView"
                                      style={{ marginleft: "0" }}
                                    >
                                      <img
                                        mandatory="No"
                                        class="img-rounded"
                                        style={{
                                          height: "36px",
                                          width: "40px",
                                        }}
                                        id="imgaddress_first_oneView"
                                        src="../admission/AadharCardFile/202026_AadharCardFile.jpg"
                                        alt="Photo"
                                      />
                                    </a>
                                  </div>

                                  <div class="col-lg-3 col-md-3 col-sm-3">
                                    &nbsp;
                                  </div>

                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <a
                                      id="address_first_twoView"
                                      style={{ marginleft: "0" }}
                                    >
                                      <img
                                        mandatory="No"
                                        class="img-rounded"
                                        style={{
                                          height: "36px",
                                          width: "40px",
                                        }}
                                        id="imgaddress_first_twoView"
                                        src="../admission/AadharCardBackside/202026_AadharCardBackside.jpg"
                                        alt="Photo"
                                      />
                                    </a>
                                  </div>
                                </div>
                                <hr />
                                <div class="row">
                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <input
                                      type="checkbox"
                                      id="electricity_stud"
                                      value="check"
                                      disabled="disabled"
                                    />
                                    <span style={{ paddingLeft: "10px" }}>
                                      4.
                                    </span>
                                  </div>

                                  <div class="col-lg-10 col-md-10 col-sm-10">
                                    Latest electricity bill.
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-lg-2 col-md-2 col-sm-2">
                                    &nbsp;
                                  </div>
                                  <div class="col-lg-3 col-md-3 col-sm-3">
                                    &nbsp;
                                  </div>

                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <a
                                      id="electricity_billView"
                                      style={{ marginleft: "0" }}
                                    >
                                      <img
                                        mandatory="No"
                                        class="img-rounded"
                                        style={{
                                          height: "36px",
                                          width: "40px",
                                          marginLeft: "0",
                                        }}
                                        id="imgelectricity_billView"
                                        src="../admission/ElectricBillFile/202026_ElectricBillFile.jpg"
                                        alt="Photo"
                                      />
                                    </a>
                                  </div>
                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <a
                                      id="electricity_billViewBackside"
                                      style={{ marginleft: "0" }}
                                    >
                                      <img
                                        mandatory="No"
                                        class="img-rounded"
                                        style={{
                                          height: "36px",
                                          width: "40px",
                                          marginLeft: "0",
                                        }}
                                        id="imgelectricity_billViewBackside"
                                        src="../admission/ElectricBillFile/202026_ElectricBillFileBackside.jpeg"
                                        alt="Photo"
                                      />
                                    </a>
                                  </div>

                                  <div class="col-lg-3 col-md-3 col-sm-3">
                                    &nbsp;
                                  </div>

                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    &nbsp;
                                  </div>
                                </div>
                                <hr />
                                <div class="row">
                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <input
                                      type="checkbox"
                                      id="divorce_certificatcate_stud"
                                      value="check"
                                      disabled="disabled"
                                    />
                                    <span style={{ paddingLeft: "10px" }}>
                                      5.
                                    </span>
                                  </div>

                                  <div class="col-lg-10 col-md-10 col-sm-10">
                                    Divorce certificate / Divorce deed in case
                                    of divorced, death certificate of husband in
                                    case of widow is compulsory. Medical
                                    certificate if husband is medically ill e.g.
                                    dialysis, heart problem, paralysis, cancer
                                    or any other threatening diseases.
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-lg-2 col-md-2 col-sm-2">
                                    &nbsp;
                                  </div>
                                  <div class="col-lg-3 col-md-3 col-sm-3">
                                    <input
                                      type="file"
                                      id="divorce_certificatcate_one"
                                    />
                                  </div>

                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <a
                                      id="divorce_certificatcate_oneView"
                                      style={{ marginleft: "0" }}
                                    >
                                      <img
                                        mandatory="No"
                                        class="img-rounded"
                                        style={{
                                          height: "36px",
                                          width: "40px",
                                        }}
                                        id="imgdivorce_certificatcate_oneView"
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

                                  <div class="col-lg-3 col-md-3 col-sm-3">
                                    <input
                                      type="file"
                                      id="divorce_certificatcate_two"
                                      style={{ paddingleft: "20px" }}
                                    />
                                  </div>

                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <a
                                      id="divorce_certificatcate_twoView"
                                      style={{ marginleft: "0" }}
                                    >
                                      <img
                                        mandatory="No"
                                        class="img-rounded"
                                        style={{
                                          height: "36px",
                                          width: "40px",
                                        }}
                                        id="imgdivorce_certificatcate_twoView"
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
                                <hr />
                                <div class="row">
                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <input
                                      type="checkbox"
                                      id="income_salary_stud"
                                      value="check"
                                      disabled="disabled"
                                    />
                                    <span style={{ paddingLeft: "10px" }}>
                                      6.
                                    </span>
                                  </div>

                                  <div class="col-lg-10 col-md-10 col-sm-10">
                                    Proof of income - salary certificate,
                                    goverment approved income certificate or pay
                                    slip or certificate from family doctor or
                                    local medical social worker ( MSW ) or
                                    medical officers of primary health center (
                                    PHC ) or community health center ( CHC )
                                    regarding the family income ( compulsary
                                    applicable according to their nature of work
                                    ).
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-lg-2 col-md-2 col-sm-2">
                                    &nbsp;
                                  </div>

                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <a
                                      id="income_salary_oneView"
                                      style={{ marginleft: "0" }}
                                    >
                                      <img
                                        mandatory="No"
                                        class="img-rounded"
                                        style={{
                                          height: "36px",
                                          width: "40px",
                                          marginLeft: "0",
                                        }}
                                        id="imgincome_salary_oneView"
                                        src="../admission/IncomeFileAttech/202026_IncomeFileAttech.jpg"
                                        alt="Photo"
                                      />
                                    </a>
                                  </div>

                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <a
                                      id="income_salary_twoView"
                                      style={{ marginleft: "0" }}
                                    >
                                      <img
                                        mandatory="No"
                                        class="img-rounded"
                                        style={{
                                          height: "36px",
                                          width: "40px",
                                          marginLeft: "0",
                                        }}
                                        id="imgincome_salary_twoView"
                                        src="../admission/IncomeFileAttech/202026_IncomeFileAttechBackside.jpg"
                                        alt="Photo"
                                      />
                                    </a>
                                  </div>

                                  <div class="col-lg-3 col-md-3 col-sm-3">
                                    &nbsp;
                                  </div>

                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    &nbsp;
                                  </div>
                                </div>
                                <hr />
                                <div class="row">
                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <input
                                      type="checkbox"
                                      id="letter_School_stud"
                                      value="check"
                                      disabled="disabled"
                                    />
                                    <span style={{ paddingLeft: "10px" }}>
                                      7.
                                    </span>
                                  </div>

                                  <div class="col-lg-10 col-md-10 col-sm-10">
                                    Letter from school / college / institute
                                    with break-up of fees ( In original ).
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-lg-2 col-md-2 col-sm-2">
                                    &nbsp;
                                  </div>
                                  <div class="col-lg-3 col-md-3 col-sm-3">
                                    <input type="file" id="letter_School_one" />
                                  </div>

                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <a
                                      id="letter_School_oneView"
                                      style={{ marginleft: "0" }}
                                    >
                                      <img
                                        mandatory="No"
                                        class="img-rounded"
                                        style={{
                                          height: "36px",
                                          width: "40px",
                                        }}
                                        id="imgletter_School_oneView"
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

                                  <div class="col-lg-3 col-md-3 col-sm-3">
                                    <input
                                      type="file"
                                      id="letter_School_two"
                                      style={{ paddingleft: "20px" }}
                                    />
                                  </div>

                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <a
                                      id="letter_School_twoView"
                                      style={{ marginleft: "0" }}
                                    >
                                      <img
                                        mandatory="No"
                                        class="img-rounded"
                                        style={{
                                          height: "36px",
                                          width: "40px",
                                        }}
                                        id="imgletter_School_twoView"
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
                                <hr />
                                <div class="row">
                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <input
                                      type="checkbox"
                                      id="Letter_Coach_cls_stud"
                                      value="check"
                                      disabled="disabled"
                                    />
                                    <span style={{ paddingLeft: "10px" }}>
                                      8.
                                    </span>
                                  </div>

                                  <div class="col-lg-10 col-md-10 col-sm-10">
                                    Letter from coaching classes / tution with
                                    break - up of fees ( in original ). Tuition
                                    fees will only be paid for std X and XII
                                    coaching classes. Tuition fees from std VIII
                                    - IX will be paid only towards maths and
                                    science subject. Additional english subject
                                    tuition fees will be provided to vernacular
                                    medium students only. Original fees
                                    structure of tuition / coaching classes
                                    should be given on the original letterhead
                                    of the classes. In additional we require
                                    coaching class's head / in-charge name with
                                    landline number / contact number / mobile
                                    number, address of tution / coaching
                                    classes, stamp of tution classes / e-mail
                                    address. NCT HAS FULL RIGHT TO CANCEL THE
                                    COMPLETE SCHOLARSHIP GRANT IF THE
                                    INFORMATION PROVIDED BY THE APPLICATION /
                                    COACHING CLASSES IS FOUND TO BE
                                    FALSE/INCORRECT.
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-lg-2 col-md-2 col-sm-2">
                                    &nbsp;
                                  </div>
                                  <div class="col-lg-3 col-md-3 col-sm-3">
                                    <input
                                      type="file"
                                      id="Letter_Coach_cls_one"
                                    />
                                  </div>

                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <a
                                      id="Letter_Coach_cls_oneView"
                                      style={{ marginleft: "0" }}
                                    >
                                      <img
                                        mandatory="No"
                                        class="img-rounded"
                                        style={{
                                          height: "36px",
                                          width: "40px",
                                        }}
                                        id="imgLetter_Coach_cls_oneView"
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

                                  <div class="col-lg-3 col-md-3 col-sm-3">
                                    <input
                                      type="file"
                                      id="Letter_Coach_cls_two"
                                      style={{ paddingleft: "20px" }}
                                    />
                                  </div>

                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <a
                                      id="Letter_Coach_cls_twoView"
                                      style={{ marginleft: "0" }}
                                    >
                                      <img
                                        mandatory="No"
                                        class="img-rounded"
                                        style={{
                                          height: "36px",
                                          width: "40px",
                                        }}
                                        id="imgLetter_Coach_cls_twoView"
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
                                <hr />
                                <div class="row">
                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <input
                                      type="checkbox"
                                      id="bonafied_certificate_stud"
                                      value="check"
                                      disabled="disabled"
                                    />
                                    <span style={{ paddingLeft: "10px" }}>
                                      9.
                                    </span>
                                  </div>
                                  <div class="col-lg-10 col-md-10 col-sm-10">
                                    Proof of admission / selection in course for
                                    which scholarship is applied for / bonafied
                                    certificate.
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-lg-2 col-md-2 col-sm-2">
                                    &nbsp;
                                  </div>
                                  <div class="col-lg-3 col-md-3 col-sm-3">
                                    &nbsp;
                                  </div>

                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <a
                                      id="bonafied_certificate_oneView"
                                      style={{ marginleft: "0" }}
                                    >
                                      <img
                                        mandatory="No"
                                        class="img-rounded"
                                        style={{
                                          height: "36px",
                                          width: "40px",
                                          marginLeft: "0",
                                        }}
                                        id="imgbonafied_certificate_oneView"
                                        src="../admission/BonafideCertificate/202026_BonafideCertificate.jpg"
                                        alt="Photo"
                                      />
                                    </a>
                                  </div>
                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <a
                                      id="bonafied_certificate_oneViewBackside"
                                      style={{ marginleft: "0" }}
                                    >
                                      <img
                                        mandatory="No"
                                        class="img-rounded"
                                        style={{
                                          height: "36px",
                                          width: "40px",
                                          marginLeft: "0",
                                        }}
                                        id="imgbonafied_certificate_oneViewBackside"
                                        src="../admission/BonafideCertificate/202026_BonafideCertificateBackside.jpg"
                                        alt="Photo"
                                      />
                                    </a>
                                  </div>

                                  <div class="col-lg-3 col-md-3 col-sm-3">
                                    &nbsp;
                                  </div>

                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    &nbsp;
                                  </div>
                                </div>
                                <hr />
                                <div class="row">
                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <input
                                      type="checkbox"
                                      id="academic_certificate_stud"
                                      value="check"
                                      disabled="disabled"
                                    />
                                    <span style={{ paddingLeft: "10px" }}>
                                      10.
                                    </span>
                                  </div>

                                  <div class="col-lg-10 col-md-10 col-sm-10">
                                    Copies of certificate of academic,
                                    co-curricular &amp; extracurricular
                                    activities.
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-lg-2 col-md-2 col-sm-2">
                                    &nbsp;
                                  </div>
                                  <div class="col-lg-3 col-md-3 col-sm-3">
                                    <input
                                      type="file"
                                      id="academic_certificate_one"
                                    />
                                  </div>

                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <a
                                      id="academic_certificate_oneView"
                                      style={{ marginleft: "0" }}
                                    >
                                      <img
                                        mandatory="No"
                                        class="img-rounded"
                                        style={{
                                          height: "36px",
                                          width: "40px",
                                        }}
                                        id="imgacademic_certificate_oneView"
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

                                  <div class="col-lg-3 col-md-3 col-sm-3">
                                    <input
                                      type="file"
                                      id="academic_certificate_two"
                                      style={{ paddingleft: "20px" }}
                                    />
                                  </div>

                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <a
                                      id="academic_certificate_twoView"
                                      style={{ marginleft: "0" }}
                                    >
                                      <img
                                        mandatory="No"
                                        class="img-rounded"
                                        style={{
                                          height: "36px",
                                          width: "40px",
                                        }}
                                        id="imgacademic_certificate_twoView"
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
                                <hr />
                                <div class="row">
                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <input
                                      type="checkbox"
                                      id="pass_book_stud"
                                      value="check"
                                      disabled="disabled"
                                    />
                                    <span style={{ paddingLeft: "10px" }}>
                                      11.
                                    </span>
                                  </div>

                                  <div class="col-lg-10 col-md-10 col-sm-10">
                                    Copy of bank pass book - first page ( name,
                                    bank a/c no, &amp; address details ).
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-lg-2 col-md-2 col-sm-2">
                                    &nbsp;
                                  </div>
                                  <div class="col-lg-3 col-md-3 col-sm-3">
                                    &nbsp;
                                  </div>

                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <a
                                      id="pass_book_oneView"
                                      style={{ marginleft: "0" }}
                                    >
                                      <img
                                        mandatory="No"
                                        class="img-rounded"
                                        style={{
                                          height: "36px",
                                          width: "40px",
                                          marginLeft: "0",
                                        }}
                                        id="imgpass_book_oneView"
                                        src="../admission/PassbookFile/202026_PassbookFile.jpg"
                                        alt="Photo"
                                      />
                                    </a>
                                  </div>

                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <a
                                      id="pass_book_oneViewBackside"
                                      style={{ marginleft: "0" }}
                                    >
                                      <img
                                        mandatory="No"
                                        class="img-rounded"
                                        style={{
                                          height: "36px",
                                          width: "40px",
                                          marginLeft: "0",
                                        }}
                                        id="imgpass_book_oneViewBackside"
                                        src="../dist/img/edu_profile_blank.png"
                                        alt="Photo"
                                      />
                                    </a>
                                  </div>

                                  <div class="col-lg-3 col-md-3 col-sm-3">
                                    &nbsp;
                                  </div>

                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    &nbsp;
                                  </div>
                                </div>
                                <hr />
                                <div class="row">
                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <input
                                      type="checkbox"
                                      id="OtherDocumentCheck1"
                                      value="check"
                                      disabled="disabled"
                                    />
                                    <span style={{ paddingLeft: "10px" }}>
                                      12.
                                    </span>
                                  </div>

                                  <div class="col-lg-10 col-md-10 col-sm-10">
                                    Other Document 1.
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-lg-2 col-md-2 col-sm-2">
                                    &nbsp;
                                  </div>
                                  <div class="col-lg-3 col-md-3 col-sm-3">
                                    <input type="file" id="OtherDocument1" />
                                  </div>

                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <a
                                      id="OtherDocument1View"
                                      style={{ marginleft: "0" }}
                                    >
                                      <img
                                        mandatory="No"
                                        class="img-rounded"
                                        style={{
                                          height: "36px",
                                          width: "40px",
                                        }}
                                        id="imgOtherDocument1View"
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

                                  <div class="col-lg-3 col-md-3 col-sm-3">
                                    <input
                                      type="file"
                                      id="OtherDocument2"
                                      style={{ paddingleft: "20px" }}
                                    />
                                  </div>

                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <a
                                      id="OtherDocument2View"
                                      style={{ marginleft: "0" }}
                                    >
                                      <img
                                        mandatory="No"
                                        class="img-rounded"
                                        style={{
                                          height: "36px",
                                          width: "40px",
                                        }}
                                        id="imgOtherDocument2View"
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
                                <hr />
                                <div class="row">
                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <input
                                      type="checkbox"
                                      id="OtherDocumentCheck2"
                                      value="check"
                                      disabled="disabled"
                                    />
                                    <span style={{ paddingLeft: "10px" }}>
                                      13.
                                    </span>
                                  </div>

                                  <div class="col-lg-10 col-md-10 col-sm-10">
                                    Other Document 2.
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-lg-2 col-md-2 col-sm-2">
                                    &nbsp;
                                  </div>
                                  <div class="col-lg-3 col-md-3 col-sm-3">
                                    <input type="file" id="OtherDocument3" />
                                  </div>

                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <a
                                      id="OtherDocument3View"
                                      style={{ marginleft: "0" }}
                                    >
                                      <img
                                        mandatory="No"
                                        class="img-rounded"
                                        style={{
                                          height: "36px",
                                          width: "40px",
                                        }}
                                        id="imgOtherDocument3View"
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

                                  <div class="col-lg-3 col-md-3 col-sm-3">
                                    <input
                                      type="file"
                                      id="OtherDocument4"
                                      style={{ paddingleft: "20px" }}
                                    />
                                  </div>

                                  <div class="col-lg-1 col-md-1 col-sm-1">
                                    <a
                                      id="OtherDocument4View"
                                      style={{ marginleft: "0" }}
                                    >
                                      <img
                                        mandatory="No"
                                        class="img-rounded"
                                        style={{
                                          height: "36px",
                                          width: "40px",
                                        }}
                                        id="imgOtherDocument4View"
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
                        </div>
                      </div>
                    )}

                    {/*  ====================== confirmation tab ======================== */}
                    {tab === "confirmation" && (
                      <div className="confirmation">
                        <div class="col-sm-12">
                          <div class="row">
                            <div class="col-sm-12 topMargin">
                              <div
                                class="table-responsive"
                                style={{ overflowX: "inherit" }}
                              >
                                <p style={{ fontSize: "16px" }}>
                                  <input
                                    type="checkbox"
                                    id="lockform"
                                    name="isConfirm"
                                    value={studentInformation.isConfirm}
                                    onChange={(e) => handleChange(e)}
                                  />
                                  &nbsp;&nbsp; I, hereby confirm that I have
                                  read all the instructions carefully before
                                  applying and I do understand that I will not
                                  be able to change it later.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </form>
                  <div className="center">
                    {tab === "confirmation" ? (
                      <button
                        type="submit"
                        id="submit-btn"
                        className="btn btn-default"
                        onClick={(e) => handleSubmit(e, "saveAsDraft")}
                        style={{ display: buttonShow ? "none" : "block" }}
                      >
                        Submit
                      </button>
                    ) : (
                      <button
                        type="submit"
                        id="submit-btn"
                        className="btn btn-default"
                        onClick={(e) => handleSubmit(e, "saveAsDraft")}
                        style={{ display: buttonShow ? "none" : "block" }}
                      >
                        Save
                      </button>
                    )}

                    {tab === "family_details" && (
                      <button
                        type="submit"
                        id="submit-btn"
                        className="btn btn-default"
                        // onClick={(e) => handleAddFamilyMember(e)}
                        onClick={addFamilyMember}
                      >
                        {buttonShow ? "Update" : "Add"} member
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {tab === "family_details" && (
            <div className="row mt-10">
              <div className="col-lg-12">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    Family Member Information Table
                  </div>
                  <div className="panel-body">
                    <div className="dataTable_wrapper">
                      <table
                        className="table table-striped table-bordered table-hover dataTable no-footer"
                        id="dataTables-example"
                      >
                        <thead>
                          <tr>
                            <th>Sr.No.</th>
                            <th>Name</th>
                            <th>Relation</th>
                            <th>Gender</th>
                            <th>Marital Status</th>
                            <th>Age</th>
                            <th>Income/Fees</th>
                            <th>Occupation Details</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {allFamilyDetails &&
                            allFamilyDetails?.map((item, index) => {
                              console.log("familyDetailsAddress", item);
                              return (
                                <tr className="odd gradeX" key={index}>
                                  <td>{index + 1}</td>
                                  <td>{item?.relationPersonName}</td>
                                  <td>{item?.relationWithStudent}</td>
                                  <td>{item.relationPersonGender}</td>
                                  <td>{item.relationPersonMaritalStatus}</td>
                                  <td>{item.relationPersonAge}</td>
                                  <td>{item.relationPersonMonthlyIncome}</td>
                                  <td>{item.relationPersonOccupation}</td>
                                  <td style={{ textAlign: "center" }}>
                                    <i
                                      className="fas fa-edit table_edit_icon"
                                      onClick={(e) =>
                                        handleStore(
                                          e,
                                          item,
                                          setbuttonSchow(true)
                                        )
                                      }
                                    ></i>
                                    <i className="fa-solid fa-trash table_delete_icon"></i>
                                  </td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {tab === "previous_academic_information" && (
            <div class="row">
              <div class="col-lg-12">
                <div class="panel panel-default">
                  <div class="panel-heading">Prev Year Academic Details</div>
                  <div class="panel-body">
                    <div class="dataTable_wrapper">
                      <table
                        class="table table-striped table-bordered table-hover"
                        id="dataTables-example"
                      >
                        <thead>
                          <tr>
                            <th>Sr.No</th>
                            <th>Std</th>
                            <th>Course</th>
                            <th>Level of Course</th>
                            <th>Medium</th>
                            <th>Percentage</th>
                            <th>Month</th>
                            <th id="Edit">Edit</th>
                            <th id="first">Delete</th>
                            <th>Sem 1 or Annual Result</th>
                            <th>Sem 2 Result</th>
                            <th>Entrance Exam Result</th>
                          </tr>
                        </thead>
                        <tbody>
                          {academicInfo &&
                            academicInfo?.map((item, index) => {
                              console.log("academicacadc", item);
                              return (
                                <tr class="odd gradeX">
                                  <td>{index + 1}</td>
                                  <td>Internet Explorer 4.0</td>
                                  <td>Win 95+</td>
                                  <td>4</td>
                                  <td>{item?.instructionMedium}</td>
                                  <td>X</td>
                                  <td>X</td>
                                  <td>X</td>
                                  <td>X</td>
                                  <td>X</td>
                                  <td>X</td>
                                  <td>X</td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="prev_nxt_btn">
            <button
              //  className={`btn btn-primary ${tabs.indexOf(currentTab) === 0 ? 'd-none' : 'd-block'}`}
              className={"btn btn-primary"}
              onClick={handlePrev}
              disabled={tabs.indexOf(currentTab) === 0}
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
    </>
  );
};

export default StudentProfile;
