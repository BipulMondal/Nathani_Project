import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

const StudentProfile = () => {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const tab = query.tab || "student_info";
  const navigate = useNavigate();

  const initialState = {
    studentInfo: {
      aadharNo: "",
      lastName: "",
      firstName: "",
      fatherName: "",
      motherName: "",
      guardianName: "",
      dob: "",
      birthPlace: "",
      gender: "",
      maritalStatus: "",
      spouseName: "",
      StudentMobileNo: 0,
      StudentEmail: "",
      parmanentAddress: "",
      currentAddress: "",
      landMark: "",
      city: "",
      pin: "",
      district: "",
      state: "",
      country: "",
      physicalChallange: "",
      physicalChallangeImg: "",
      orphan: "",
      parentDeathCertificateImg: "",
      addaharFrontImg: "",
      aadharBackImg: "",
      rationFrontImg: "",
      rationBackImg: "",
      electricityBillImg: "",
      category: "",
      zakatFund: 0,
      refferedBy: "",
      refMobileNo: "",
    },
    familyDetails: {
      parentStatus: "",
      parentStatusOneImg: "",
      parentStatusTwoImg: "",
      relationWithStudent: "",
      relationPersonName: "",
      relationPersonMaritalStatus: "",
      relationPersonDOB: "",
      relationPersongender: "",
      relationPersonAadhar: "",
      relationPersonEducation: "",
      relationPersonOccupation: "",
      relationPersonOccupationDetails: "",
      relationPersonMonthlyIncome: 0,
      incomeFileFrontImg: "",
      incomeFileBackImg: "",
      handiCapped: "",
      handiCapFileOneImg: "",
      handiCapFileTwoImg: "",
      personCity: "",
      personStudying: "",
    },
    jamatInfo: {
      ifMemon: "",
      ifMotherMomen: "",
      memonJamatLetterOne: "",
      memonJamatLetterTwo: "",
      jamatDetails: "",
      belongingJamat: "",
      jamatSecretaryName: "",
      secretaryMobile: 0,
      secretaryEmail: "",
      memonAddress: "",
      memonCity: "",
      memonPin: "",
      memonState: "",
      helpFromJamat: "",
      jamatReceiveAmount: 0,
      amountReceivePurpose: "",
      amountType: "",
      deeniyatCourse: "",
      courseName: "",
      madrashaName: "",
      anyOtherCourse: "",
    },
    prevAcademicInfo: {
      prevYearResult: "",
      lastYearResultImg: "",
      lastTwoYearResult: "",
      TwoYearBackResult: "",
      currentStudy: "",
      specialCase: "",
      courseName: "",
      levelOfCourse: "",
      otherCourseOne: "",
      otherLevelOfCourse: "",
      otherField: "",
      field: "",
      duration: "",
      instructionMedium: "",
      coursePattern: "",
      otherDurationCourse: "",
      otherCourseTwo: "",
      otherMedium: "",
      instituteName: "",
      boardName: "",
      instituteType: "",
      ifPrivate: "",
      instituteAddress: "",
      instituteCity: "",
      institutePin: "",
      instituteDistrict: "",
      instituteState: "",
      instituteCountry: "",
      instituteEmail: "",
      instituteWebsite: "",
      instituteLandLineNo: 0,
      instituteContactNo: 0,
      instituteMobileNo: 0,
      bonafideCertificateFrontImg: 0,
      bonafideCertificateBackImg: 0,
    },
    othertrustSupport: {
      otherTrustSupport: "",
      trustDetails: [
        {
          trustName: "",
          currentYearAmount: 0,
          lastYearAmount: 0,
          trustState: "",
          trustCity: "",
        },
      ],
      otherContribution: [
        {
          contributionSource: "",
          contributionCurrentyearAmunt: 0,
          contributionLastyearAmunt: 0,
          contributionState: "",
          contributionCity: "",
        },
      ],
      govtScholarshipApply: "",
      scholarAmount: 0,
      scholarYear: "",
      scholarName: "",
      applicationId: "",
      applicationPass: "",
    },
    organizationSupportFamily: {
      receivedSupport: false,
      supportFamilyDetails: [
        {
          memberName: "",
          memberId: "",
          course: "",
          amountReceived: 0,
          financialYear: "",
          howManyYearsGet: 0,
        },
      ],
      otherSupport: [
        {
          memberName: "",
          memberId: "",
          scheme: "",
          amountreceived: 0,
          financialYear: "",
        },
      ],
    },
    familyDeclaration: {
      courseName: "",
      applicantName: "",
      parentName: "",
      place: "",
      date: "",
      studentPhoto: "",
      studentSign: "",
      parentSign: "",
    },
    studentCode: "",
    isConfirm: false,
  };

  const [studentInformation, setStudentInformation] = useState(initialState);
  console.log("studentInformation", studentInformation.familyDetails);
  const [currentTab, setCurrentTab] = useState("student_info");

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
    const currentIndex = tabs.indexOf(currentTab);
    if (currentIndex < tabs.length - 1) {
      const nextTab = tabs[currentIndex + 1];
      setCurrentTab(nextTab);
      console.log("nextTab", nextTab);
      navigate(`/studentProfile?tab=${nextTab}`);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("fuck", e.target.name, e.target.value);
    const keys = name.split(".");
    if (keys.length === 1) {
      setStudentInformation((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else {
      setStudentInformation((prevState) => {
        const nestedObject = { ...prevState[keys[0]], [keys[1]]: value };
        return { ...prevState, [keys[0]]: nestedObject };
      });
    }
  };

  const handleValidation = () => {};

  return (
    <>
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
            {/* <h1 className="page-header">Students Information</h1> */}
            {/* <ul className="nav nav-pills navinfo">
              <li
                className={`nav-item ${tab === "student_info" ? "active" : ""}`}
              >
                <Link
                  className="nav-link"
                  to="/studentProfile?tab=student_info"
                >
                  Students Information
                </Link>
              </li>
              <li
                className={`nav-item ${
                  tab === "family_details" ? "active" : ""
                }`}
              >
                <Link
                  className="nav-link"
                  to="/studentProfile?tab=family_details"
                >
                  Family Details
                </Link>
              </li>
              <li
                className={`nav-item ${
                  tab === "memon_information" ? "active" : ""
                }`}
              >
                <Link
                  className="nav-link"
                  to="/studentProfile?tab=memon_information"
                >
                  Memon Jamat Information
                </Link>
              </li>
              <li
                className={`nav-item ${
                  tab === "previous_academic_information" ? "active" : ""
                }`}
              >
                <Link
                  className="nav-link"
                  to="/studentProfile?tab=previous_academic_information"
                >
                  Previous Academic Information
                </Link>
              </li>
              <li
                className={`nav-item ${
                  tab === "other_trust_support_information" ? "active" : ""
                }`}
              >
                <Link
                  className="nav-link"
                  to="/studentProfile?tab=other_trust_support_information"
                >
                  Details Of Other Trust Support
                </Link>
              </li>
              <li
                className={`nav-item ${
                  tab === "organisation_support_information" ? "active" : ""
                }`}
              >
                <Link
                  className="nav-link"
                  to="/studentProfile?tab=organisation_support_information"
                >
                  Organisation Support To Family Member
                </Link>
              </li>
              <li
                className={`nav-item ${
                  tab === "parent_declaration" ? "active" : ""
                }`}
              >
                <Link
                  className="nav-link"
                  to="/studentProfile?tab=parent_declaration"
                >
                  Declaration Of Parents
                </Link>
              </li>
              <li
                className={`nav-item ${
                  tab === "all_documents" ? "active" : ""
                }`}
              >
                <Link
                  className="nav-link"
                  to="/studentProfile?tab=all_documents"
                >
                  Documentation
                </Link>
              </li>
              <li
                className={`nav-item ${tab === "confirmation" ? "active" : ""}`}
              >
                <Link
                  className="nav-link"
                  to="/studentProfile?tab=confirmation"
                >
                  Confirmation
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/studentProfile/print"
                  target="_blank"
                >
                  Print Form
                </a>
              </li>
            </ul> */}
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
                                name="studentInfo.aadharNo"
                                className="form-control"
                                placeholder="Enter Aadhar No"
                                value={studentInformation.studentInfo.aadharNo}
                                onChange={(e) => handleChange(e)}
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
                                name="studentInfo.lastName"
                                value={studentInformation.studentInfo.lastName}
                                placeholder="Enter Last Name"
                                onChange={(e) => handleChange(e)}
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
                                name="studentInfo.firstName"
                                value={studentInformation.studentInfo.firstName}
                                placeholder="Enter First Name"
                                onChange={(e) => handleChange(e)}
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
                                name="studentInfo.fatherName"
                                value={
                                  studentInformation.studentInfo.fatherName
                                }
                                placeholder="Enter Father's Name"
                                onChange={(e) => handleChange(e)}
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
                                name="studentInfo.motherName"
                                value={
                                  studentInformation.studentInfo.motherName
                                }
                                placeholder="Enter Mother's Name"
                                onChange={(e) => handleChange(e)}
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
                                name="studentInfo.guardianName"
                                value={
                                  studentInformation.studentInfo.guardianName
                                }
                                placeholder="Enter Guardian Name"
                                onChange={(e) => handleChange(e)}
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
                                name="studentInfo.dob"
                                value={studentInformation.studentInfo.dob}
                                placeholder="Enter Date Of Birth"
                                onChange={(e) => handleChange(e)}
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
                                name="studentInfo.birthPlace"
                                value={
                                  studentInformation.studentInfo.birthPlace
                                }
                                placeholder="Enter Birth Place"
                                onChange={(e) => handleChange(e)}
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
                                    name="studentInfo.gender"
                                    value="Male"
                                    onChange={(e) => handleChange(e)}
                                  />{" "}
                                  Male
                                </label>
                                <label className="radio-inline">
                                  <input
                                    type="radio"
                                    name="studentInfo.gender"
                                    value="Female"
                                    onChange={(e) => handleChange(e)}
                                  />{" "}
                                  Female
                                </label>
                                <label className="radio-inline">
                                  <input
                                    type="radio"
                                    name="studentInfo.gender"
                                    value="Transgender"
                                    onChange={(e) => handleChange(e)}
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
                                name="studentInfo.maritalStatus"
                                value={
                                  studentInformation.studentInfo.maritalStatus
                                }
                                onChange={(e) => handleChange(e)}
                              >
                                <option value="">
                                  --Select Marital Status--
                                </option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                              </select>
                            </div>
                            {/* spouse name */}
                            <div className="col-lg-3">
                              <label>
                                Enter Spouse Name <span>*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="studentInfo.spouseName"
                                value={
                                  studentInformation.studentInfo.spouseName
                                }
                                onChange={(e) => handleChange(e)}
                                placeholder="Enter Spouse Name"
                                required
                              />
                            </div>
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
                                type="text"
                                className="form-control"
                                name="studentInfo.StudentMobileNo"
                                value={
                                  studentInformation.studentInfo.StudentMobileNo
                                }
                                onChange={(e) => handleChange(e)}
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
                                name="studentInfo.StudentEmail"
                                value={
                                  studentInformation.studentInfo.StudentEmail
                                }
                                placeholder="Enter Student's Email"
                                onChange={(e) => handleChange(e)}
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            {/* prmant address */}
                            <div className="col-lg-5">
                              <label className="form-label">
                                Permanent Address
                              </label>
                              <textarea
                                className="form-control"
                                rows="3"
                                name="studentInfo.parmanentAddress"
                                value={
                                  studentInformation.studentInfo
                                    .parmanentAddress
                                }
                                onChange={(e) => handleChange(e)}
                                placeholder="Enter Permanent Address"
                              ></textarea>
                            </div>
                            {/* permanent checkbox */}
                            <div className="col-lg-1 d-flex align-items-center">
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  value=""
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
                                name="studentInfo.currentAddress"
                                value={
                                  studentInformation.studentInfo.currentAddress
                                }
                                onChange={(e) => handleChange(e)}
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
                                name="studentInfo.landMark"
                                placeholder="Enter Landmark"
                                value={studentInformation.studentInfo.landMark}
                                onChange={(e) => handleChange(e)}
                                required
                              />
                            </div>
                            {/* student city */}
                            <div className="col-lg-3">
                              <label className="form-label">
                                City <span>*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="studentInfo.city"
                                value={studentInformation.studentInfo.city}
                                onChange={(e) => handleChange(e)}
                                placeholder="Enter City"
                              />
                            </div>
                            {/* {pin code} */}
                            <div className="col-lg-3">
                              <label className="form-label">
                                Enter Pincode <span>*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="studentInfo.pin"
                                placeholder="Enter Pincode"
                                value={studentInformation.studentInfo.pin}
                                onChange={(e) => handleChange(e)}
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
                                name="studentInfo.district"
                                placeholder="Enter District"
                                value={studentInformation.studentInfo.district}
                                onChange={(e) => handleChange(e)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            {/* state */}
                            <div className="col-lg-3">
                              <label className="form-label">
                                State <span>*</span>
                              </label>
                              <select
                                className="form-select"
                                name="studentInfo.state"
                                value={studentInformation.studentInfo.state}
                                onChange={(e) => handleChange(e)}
                              >
                                <option value="">--Select State--</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                              </select>
                            </div>
                            {/* country */}
                            <div className="col-lg-3">
                              <label className="form-label">
                                Country <span>*</span>
                              </label>
                              <select
                                className="form-select"
                                name="studentInfo.country"
                                value={studentInformation.studentInfo.country}
                                onChange={(e) => handleChange(e)}
                              >
                                <option value="">--Select Country--</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                              </select>
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
                                name="studentInfo.physicalChallange"
                                value={
                                  studentInformation.studentInfo
                                    .physicalChallange
                                }
                                onChange={(e) => handleChange(e)}
                              >
                                <option value="">
                                  --Select Physically Challanged Status--
                                </option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                              </select>
                            </div>
                            {/* physically challanged img upload */}
                            <div className="col-lg-2">
                              <label>
                                Upload Certificate <span>*</span>
                              </label>
                              <input
                                type="file"
                                name="studentInfo.physicalChallangeImg"
                                value={
                                  studentInformation.studentInfo
                                    .physicalChallangeImg
                                }
                                className="form-control"
                                id="physically_challanged_chacertificate"
                              />
                            </div>
                            {/* physically challanged img show */}
                            <div className="col-lg-2">
                              <img
                                id="physically_challanged_chacertificate_prev"
                                src="#"
                                alt="Your Certificate Preview"
                                style={{ height: "100px", width: "100px" }}
                              />
                            </div>
                            {/* student orphan */}
                            <div className="col-lg-2">
                              <label>
                                Student Orphan <span>*</span>
                              </label>
                              <select
                                className="form-control"
                                name="studentInfo.orphan"
                                value={studentInformation.studentInfo.orphan}
                                onChange={(e) => handleChange(e)}
                              >
                                <option value="">
                                  --Select Student Orphan Status--
                                </option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                              </select>
                            </div>
                            {/* parent death certificate img */}
                            <div className="col-lg-2">
                              <label>
                                Parent Death Certificate <span>*</span>
                              </label>
                              <input
                                type="file"
                                className="form-control"
                                name="parent_death_chacertificate"
                                id="parent_death_chacertificate"
                              />
                            </div>
                            {/* death certificate img show */}
                            <div className="col-lg-2">
                              <img
                                id="parent_death_chacertificate_prev"
                                src="#"
                                alt="Parent Death Certificate"
                                style={{ height: "100px", width: "100px" }}
                              />
                            </div>
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
                                name="aadhar_card_front"
                                id="aadhar_card_front"
                              />
                            </div>
                            {/* show aadhar front */}
                            <div className="col-lg-3">
                              <img
                                id="aadhar_card_front_prev"
                                src="#"
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
                                name="aadhar_card_back"
                                id="aadhar_card_back"
                              />
                            </div>
                            {/* show aadhar back img */}
                            <div className="col-lg-3">
                              <img
                                id="aadhar_card_back_prev"
                                src="#"
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
                                name="ration_card_first"
                                id="ration_card_first"
                              />
                            </div>
                            {/* show ration front img */}
                            <div className="col-lg-3">
                              <img
                                id="ration_card_first_prev"
                                src="#"
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
                                name="ration_card_last"
                                id="ration_card_last"
                              />
                            </div>
                            {/* show ration back img */}
                            <div className="col-lg-3">
                              <img
                                id="ration_card_last_prev"
                                src="#"
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
                                name="electricity_bill"
                                id="electricity_bill"
                              />
                            </div>
                            {/* show bill */}
                            <div className="col-lg-3">
                              <img
                                id="electricity_bill_prev"
                                src="#"
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
                                name="studentInfo.category"
                                value={studentInformation.studentInfo.category}
                                onChange={(e) => handleChange(e)}
                              >
                                <option value="">--Select Category--</option>
                                <option value="Yes">Memon</option>
                                <option value="No">Muslim</option>
                                <option value="No">Non-Muslim</option>
                              </select>
                            </div>
                            {/* zakat fund */}
                            <div className="col-lg-3">
                              <label>
                                Application for Zakat Fund <span>*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="studentInfo.zakatFund"
                                value={studentInformation.studentInfo.zakatFund}
                                onChange={(e) => handleChange(e)}
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
                                name="studentInfo.refferedBy"
                                placeholder="Enter Referred By Name"
                                value={
                                  studentInformation.studentInfo.refferedBy
                                }
                                onChange={(e) => handleChange(e)}
                                required
                              />
                            </div>
                            {/* refered mobile */}
                            <div className="col-lg-3">
                              <label>
                                Referrer Mobile No <span>*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="studentInfo.refMobileNo"
                                placeholder="Enter Referrer Mobile No"
                                value={
                                  studentInformation.studentInfo.refMobileNo
                                }
                                onChange={(e) => handleChange(e)}
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* ========== family details sections ============== */}
                    {tab === "family_details" && (
                      <div className="family_details">
                        <div class="form-group">
                          <div class="row">
                            {/* parent status */}
                            <div class="col-lg-3">
                              <label>
                                Parent Status <span>*</span>
                              </label>
                              <select
                                class="form-control"
                                name="familyDetails.parentStatus"
                                value={
                                  studentInformation.familyDetails.parentStatus
                                }
                                onChange={(e) => handleChange(e)}
                              >
                                <option selected="selected" value="NA">
                                  --select--
                                </option>
                                <option value="Divorcee">Divorcee</option>
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
                        <div class="form-group">
                          <div class="row">
                            {/* parent status img 1 */}
                            <div class="col-lg-3">
                              <label>
                                Parent Status File One <span>*</span>
                              </label>
                              <input
                                type="file"
                                class="form-control"
                                name="familyDetails.parentStatusOneImg"
                                value={
                                  studentInformation.familyDetails
                                    .parentStatusOneImg
                                }
                                onChange={(e) => handleChange(e)}
                                id="parent_stauts_file_one"
                                required
                              />
                            </div>
                            {/* shoe status img one */}
                            <div class="col-lg-3">
                              <img
                                id="parent_stauts_file_one_prev"
                                src="#"
                                alt="Upload Parent Status File One"
                                style={{ height: "100px", width: "100px" }}
                              />
                            </div>
                            {/* Parent Status File Two img */}
                            <div class="col-lg-3">
                              <label>
                                Parent Status File Two <span>*</span>
                              </label>
                              <input
                                type="file"
                                class="form-control"
                                name="familyDetails.parentStatusTwoImg"
                                value={
                                  studentInformation.familyDetails
                                    .parentStatusTwoImg
                                }
                                onChange={(e) => handleChange(e)}
                                id="parent_stauts_file_two"
                                required
                              />
                            </div>
                            {/* shoe status img two */}
                            <div class="col-lg-3">
                              <img
                                id="parent_stauts_file_two_prev"
                                src="#"
                                alt="Upload Parent Status File Two"
                                style={{ height: "100px", width: "100px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="row">
                            {/* Relation With Student */}
                            <div class="col-lg-3">
                              <label>
                                Relation With Student <span>*</span>
                              </label>
                              <select
                                class="form-control"
                                name=".familyDetails.relationWithStudent"
                                value={
                                  studentInformation.familyDetails
                                    .relationWithStudent
                                }
                                onChange={(e) => handleChange(e)}
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
                                name="familyDetails.relationPersonName"
                                placeholder="Enter Person Name"
                                value={
                                  studentInformation.familyDetails
                                    .relationPersonName
                                }
                                onChange={(e) => handleChange(e)}
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
                                name="familyDetails.relationPersonMaritalStatus"
                                value={
                                  studentInformation.familyDetails
                                    .relationPersonMaritalStatus
                                }
                                onChange={(e) => handleChange(e)}
                              >
                                <option value="">--select--</option>
                                <option value="Divorce">Divorce</option>
                                <option value="Married">Married</option>
                                <option value="Separated">Separated</option>
                                <option value="Unmarried">Unmarried</option>
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
                                name="familyDetails.relationPersonDOB☻"
                                value={
                                  studentInformation.familyDetails
                                    .relationPersonDOB
                                }
                                onChange={(e) => handleChange(e)}
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
                                  name=".familyDetails.relationPersongender"
                                  onChange={(e) => handleChange(e)}
                                  id="gender_radio"
                                  value="Male"
                                />
                                Male
                              </label>
                              <label class="radio-inline">
                                <input
                                  type="radio"
                                  name="familyDetails.relationPersongender"
                                  onChange={(e) => handleChange(e)}
                                  id="gender_radio2"
                                  value="Female"
                                />
                                Female
                              </label>
                              <label class="radio-inline">
                                <input
                                  type="radio"
                                  name="familyDetails.relationPersongender"
                                  id="gender_radio3"
                                  value="Transgender"
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
                                type="text"
                                class="form-control"
                                name="familyDetails.relationPersonAadhar"
                                value={
                                  studentInformation.familyDetails
                                    .relationPersonAadhar
                                }
                                onChange={(e) => handleChange(e)}
                                placeholder="Enter Aadhar Card No"
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
                                name="familyDetails.relationPersonEducation"
                                value={
                                  studentInformation.familyDetails
                                    .relationPersonEducation
                                }
                                onChange={(e) => handleChange(e)}
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
                                name="familyDetails.relationPersonOccupation"
                                value={
                                  studentInformation.familyDetails
                                    .relationPersonOccupation
                                }
                                onChange={(e) => handleChange(e)}
                              >
                                <option value="NA" selected="selected">
                                  --select--
                                </option>
                                <option value="Business">Business</option>
                                <option value="Hawker">Hawker</option>
                                <option value="House Wife">House Wife</option>
                                <option value="Others">Others</option>
                                <option value="Self Employed">
                                  Self Employed
                                </option>
                                <option value="Service">Service</option>
                                <option value="Student">Student</option>
                                <option value="Unemployed">Unemployed</option>
                              </select>
                            </div>
                            {/* relation Person Occupation Details */}
                            <div className="col-lg-3">
                              <label>
                                Occupation Details <span>*</span>
                              </label>
                              <textarea
                                className="form-control"
                                name="familyDetails.relationPersonOccupationDetails"
                                value={
                                  studentInformation.familyDetails
                                    .relationPersonOccupationDetails
                                }
                                onChange={(e) => handleChange(e)}
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
                                type="text"
                                className="form-control"
                                name="familyDetails.relationPersonMonthlyIncome"
                                value={
                                  studentInformation.familyDetails
                                    .relationPersonMonthlyIncome
                                }
                                onChange={(e) => handleChange(e)}
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
                                name="income_file_front"
                                id="income_file_front"
                                required
                              />
                            </div>
                            <div className="col-lg-3">
                              <img
                                id="income_file_front_prev"
                                src="#"
                                alt="Upload Income File Front"
                                style={{ height: "100px", width: "100px" }}
                              />
                            </div>
                            <div className="col-lg-3">
                              <label>
                                Upload Income File Back<span>*</span>
                              </label>
                              <input
                                type="file"
                                className="form-control"
                                name="income_file_back"
                                id="income_file_back"
                                required
                              />
                            </div>
                            <div className="col-lg-3">
                              <img
                                id="income_file_back_prev"
                                src="#"
                                alt="Upload Income File Back"
                                style={{ height: "100px", width: "100px" }}
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
                                name="familyDetails.handiCapped"
                                value={
                                  studentInformation.familyDetails.handiCapped
                                }
                                onChange={(e) => handleChange(e)}
                              >
                                <option value="">--select--</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                              </select>
                            </div>
                            {/* handicaped img one */}
                            <div className="col-lg-3">
                              <label>
                                Handicapped File One <span>*</span>
                              </label>
                              <input
                                type="file"
                                className="form-control"
                                name="handicapped_file_one"
                                id="handicapped_file_one"
                                required
                              />
                            </div>
                            {/* handicapped img one show */}
                            <div className="col-lg-2">
                              <img
                                id="handicapped_file_one_prev"
                                src="#"
                                alt="Handicapped File 1"
                                style={{ height: "100px", width: "100px" }}
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
                                name="handicapped_file_two"
                                id="handicapped_file_two"
                                required
                              />
                            </div>
                            {/* handicaped img two show */}
                            <div className="col-lg-2">
                              <img
                                id="handicapped_file_two_prev"
                                src="#"
                                alt="Handicapped File 2"
                                style={{ height: "100px", width: "100px" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <div className="col-lg-3">
                              <label>
                                Name of the city (If any) <span>*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="familyDetails.personCity"
                                value={
                                  studentInformation.familyDetails.personCity
                                }
                                onChange={(e) => handleChange(e)}
                                placeholder="Enter Name of the city (If any)"
                                required
                              />
                            </div>
                            <div className="col-lg-3">
                              <label>
                                Studying <span>*</span>
                              </label>
                              <select
                                className="form-control"
                                name="familyDetails.personStudying"
                                value={
                                  studentInformation.familyDetails
                                    .personStudying
                                }
                                onChange={(e) => handleChange(e)}
                              >
                                <option value="">--select--</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* ========== memon details sections ============== */}
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
                                  name="jamatInfo.ifMemon"
                                  onChange={(e) => handleChange(e)}
                                  id="if_memon_yes"
                                  value="Yes"
                                />{" "}
                                Yes
                              </label>
                              <label class="radio-inline">
                                <input
                                  type="radio"
                                  name="jamatInfo.ifMemon"
                                  onChange={(e) => handleChange(e)}
                                  id="if_memon_no"
                                  value="no"
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
                                  name=".jamatInfo.ifMotherMomen"
                                  id="mother_memon_yes"
                                  value="Yes"
                                  onChange={() => handleChange()}
                                />{" "}
                                Yes
                              </label>
                              <label class="radio-inline">
                                <input
                                  type="radio"
                                  name=".jamatInfo.ifMotherMomen"
                                  id="mother_memon_no"
                                  value="no"
                                  onChange={() => handleChange()}
                                />{" "}
                                no
                              </label>
                            </div>
                          </div>
                        </div>
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
                                name="jamat_letter_one"
                                id="jamat_letter_one"
                                required
                              />
                            </div>
                            {/* momen img one show */}
                            <div class="col-lg-3">
                              <img
                                id="jamat_letter_one_prev"
                                src="#"
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
                                name="jamat_letter_two"
                                id="jamat_letter_two"
                                required
                              />
                            </div>
                            {/* momen img two show */}
                            <div class="col-lg-3">
                              <img
                                id="jamat_letter_two_prev"
                                src="#"
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
                                name="jamatInfo.belongingJamat"
                                value={
                                  studentInformation.jamatInfo.belongingJamat
                                }
                                onChange={(e) => handleChange(e)}
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
                                name="jamatInfo.jamatSecretaryName"
                                value={
                                  studentInformation.jamatInfo
                                    .jamatSecretaryName
                                }
                                onChange={(e) => handleChange(e)}
                                placeholder="Name of President/Secretary"
                                required
                              />
                            </div>
                            {/* jamat secretary mobile */}
                            <div class="col-lg-3">
                              <label>
                                Mobile No of President/Secretary<span>*</span>
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                name="secretaryMobile"
                                value={
                                  studentInformation.jamatInfo.secretaryMobile
                                }
                                onChange={(e) => handleChange(e)}
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
                                name="secretaryEmail"
                                value={
                                  studentInformation.jamatInfo.secretaryEmail
                                }
                                onChange={(e) => handleChange(e)}
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
                                name="memonAddress"
                                value={
                                  studentInformation.jamatInfo.memonAddress
                                }
                                onChange={(e) => handleChange(e)}
                                placeholder="Enter Memon Address"
                                required
                              ></textarea>
                            </div>
                            {/* memon City */}
                            <div class="col-lg-3">
                              <label>
                                City<span>*</span>
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                name="memonCity"
                                value={studentInformation.jamatInfo.memonCity}
                                onChange={(e) => handleChange(e)}
                                placeholder="Enter City Name"
                                required
                              />
                            </div>
                            {/* memon pin code */}
                            <div class="col-lg-3">
                              <label>
                                Pincode<span>*</span>
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                name="memonPin"
                                value={studentInformation.jamatInfo.memonPin}
                                onChange={(e) => handleChange(e)}
                                placeholder="Enter Pincode"
                                required
                              />
                            </div>
                            {/* memon state */}
                            <div class="col-lg-3">
                              <label>
                                State<span>*</span>
                              </label>
                              <select
                                class="form-control"
                                name="memonState"
                                required
                                value={studentInformation.jamatInfo.memonState}
                                onChange={(e) => handleChange(e)}
                              >
                                <option value="" selected="selected">
                                  --select--
                                </option>
                                {/* <!-- Add options for states here --> */}
                                <option value="state">State </option>
                              </select>
                            </div>
                          </div>
                        </div>
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
                                  name="helpFromJamat"
                                  onChange={(e) => handleChange(e)}
                                  id="jamat_help_yes"
                                  value="Yes"
                                  required
                                />
                                Yes
                              </label>
                              <label class="radio-inline">
                                <input
                                  type="radio"
                                  name="helpFromJamat"
                                  onChange={(e) => handleChange(e)}
                                  id="jamat_help_no"
                                  value="no"
                                />
                                no
                              </label>
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="row">
                            {/* jamat amount receive */}
                            <div class="col-lg-3">
                              <label>
                                Amount Received<span>*</span>
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                name="jamatReceiveAmount"
                                value={
                                  studentInformation.jamatInfo
                                    .jamatReceiveAmount
                                }
                                onChange={(e) => handleChange(e)}
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
                                name="amountReceivePurpose"
                                value={
                                  studentInformation.jamatInfo
                                    .amountReceivePurpose
                                }
                                onChange={(e) => handleChange(e)}
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
                                name="amountType"
                                required
                                value={studentInformation.jamatInfo.amountType}
                                onChange={(e) => handleChange(e)}
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
                                  name="deeniyatCourse"
                                  onChange={(e) => handleChange(e)}
                                  id="deeniyat_course_yes"
                                  value="Yes"
                                  required
                                />
                                Yes
                              </label>
                              <label class="radio-inline">
                                <input
                                  type="radio"
                                  name="deeniyatCourse"
                                  id="deeniyat_course_no"
                                  onChange={(e) => handleChange(e)}
                                  value="no"
                                />
                                no
                              </label>
                            </div>
                          </div>
                        </div>
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
                                name="courseName"
                                value={studentInformation.jamatInfo.courseName}
                                onChange={(e) => handleChange(e)}
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
                                name="madrashaName"
                                value={
                                  studentInformation.jamatInfo.madrashaName
                                }
                                onChange={(e) => handleChange(e)}
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
                                name="anyOtherCourse"
                                value={
                                  studentInformation.jamatInfo.anyOtherCourse
                                }
                                onChange={(e) => handleChange(e)}
                                placeholder="Enter Other Course Name"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* ========== previous academic details sections ============== */}
                    {tab === "previous_academic_information" && (
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
                                name="prevYearResult"
                                value={studentInformation.prevAcademicInfo.prevYearResult}
                                onChange={(e) => handleChange(e)}
                              >
                                <option selected="selected" value="select">
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
                        {/* <div class="panel-heading">
                          <h4 class="panel-title">
                            <button
                              type="button"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseOne"
                              id="grid_show_button"
                              class="btn btn-default"
                              style={{ display: "none" }}
                            >
                              Show Grid
                            </button>
                          </h4>
                        </div> */}

                        <div id="collapseOne" class="panel-collapse collapse show">
                          <div class="panel-body">
                            <div class="col-sm-12">
                              <div class="form-group">
                                <div class="row">
                                  {/* last year result img */}
                                  <div class="col-lg-4">
                                    <label>
                                      Last Year Result{" "}
                                      <span style={{ color: "red" }}>*</span>
                                    </label>
                                    <input
                                      type="file"
                                      class="form-control"
                                      name="lastYearResultImg"
                      
                                      required
                                    />
                                  </div>
                                  {/* last two year img  */}
                                  <div class="col-lg-4">
                                    <label>
                                      Last To Last Year Result{" "}
                                      <span style={{ color: "red" }}>*</span>
                                    </label>
                                    <input
                                      type="file"
                                      class="form-control"
                                      name="last_to_last_year_result"
                                      required
                                    />
                                  </div>
                                  {/* two year back result img */}
                                  <div class="col-lg-4">
                                    <label>
                                      2 Year Back Result{" "}
                                      <span style={{ color: "red" }}>*</span>
                                    </label>
                                    <input
                                      type="file"
                                      class="form-control"
                                      name="two_year_back_result"
                                      required
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="form-group">
                                <div class="row">
                                  {/* currently studing in  */}
                                  <div class="col-sm-3 topMargin">
                                    <label>
                                      Currently studying in Std{" "}
                                      <span style={{ color: "red" }}>*</span>
                                    </label>
                                    <select
                                      class="form-control step6Class"
                                      id="txt6scLevelOfCourse"
                                      name="currentStudy"
                                      value={studentInformation.prevAcademicInfo.currentStudy}
                                      onChange={(e) => handleChange(e)}
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
                                        Special Cases
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
                                      <option
                                        category="PostGraduation"
                                        value="14"
                                      >
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
                                  {/* special case */}
                                  <div
                                    class="col-sm-3 topMargin"
                                    id="Div_OtherStd_Step6"
                                  >
                                    <label>Special Case</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      name="specialCase"
                                      value={studentInformation.prevAcademicInfo.specialCase}
                                      onChange={(e) => handleChange(e)}
                                      id="txtSpecialCase_Step6"
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
                                      <span style={{ color: "red" }}></span>
                                    </label>
                                    <select
                                      id="txt6scDegree"
                                      class="form-control"
                                      name="courseName"
                                      value={studentInformation.prevAcademicInfo.courseName}
                                      onChange={(e) => handleChange(e)}
                                    >
                                      <option
                                        selected="selected"
                                        value="select"
                                      >
                                        --select--
                                      </option>
                                      <option value="0">Other</option>
                                    </select>
                                  </div>
                                  {/* Level of course */}
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
                                      name="levelOfCourse"
                                      value={studentInformation.prevAcademicInfo.levelOfCourse}
                                      onChange={(e) => handleChange(e)}
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
                                  {/* other course one */}
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
                                      name="otherCourseOne"
                                      value={studentInformation.prevAcademicInfo.otherCourseOne}
                                      onChange={(e) => handleChange(e)}
                                      id="txt6OtherCourse_Step6"
                                      placeholder="Other course"
                                    />
                                  </div>
                                  {/* other level of course */}
                                  <div
                                    class="col-sm-3 topMargin"
                                  >
                                    <label>
                                      Other Level Of Course
                                      <span style={{ color: "red" }}></span>
                                    </label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="otherLevelOfCourse"
                                      placeholder="Other Level of course"
                                      name="otherLevelOfCourse"
                                      value={studentInformation.prevAcademicInfo.otherLevelOfCourse}
                                      onChange={(e) => handleChange(e)}
                                    />
                                  </div>
                                  {/* other field */}
                                  <div
                                    class="col-sm-3 topMargin"
                                  >
                                    <label>
                                      Other Field{" "}
                                      <span style={{ color: "red" }}>*</span>
                                    </label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      placeholder="other Field"
                                      name="otherField"
                                      value={studentInformation.prevAcademicInfo.otherField}
                                      onChange={(e) => handleChange(e)}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="form-group">
                                <div class="row">
                                  {/* field  */}
                                  <div
                                    class="col-sm-3 topMargin"
                                  >
                                    <label>
                                      Field{" "}
                                      <span style={{ color: "red" }}>*</span>
                                    </label>
                                    <select
                                      class="form-control select2"
                                      style={{ width: "100%" }}
                                      name="field"
                                      value={studentInformation.prevAcademicInfo.field}
                                      onChange={(e) => handleChange(e)}
                                    >
                                      <option
                                        selected="selected"
                                        value="select"
                                      >
                                        --select--
                                      </option>
                                      <option value="164">Arts</option>
                                      <option value="165">Commerce</option>
                                      <option value="166">Science</option>
                                      <option value="0">Other</option>
                                    </select>
                                  </div>
                                  {/* duration */}
                                  <div class="col-sm-3 topMargin">
                                    <label>
                                      Duration{" "}
                                      <span style={{ color: "red" }}>*</span>
                                    </label>
                                    <select
                                      class="form-control select2"
                                      style={{ width: "100%" }}
                                      name="duration"
                                      value={studentInformation.prevAcademicInfo.duration}
                                      onChange={(e) => handleChange(e)}
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
                                  {/* medium of instruction */}
                                  <div class="col-sm-3 topMargin">
                                    <label>
                                      Medium Of Instruction
                                      <span style={{ color: "red" }}>*</span>
                                    </label>
                                    <select
                                      class="form-control select2"
                                      style={{ width: "100%" }}
                                      name="instructionMedium"
                                      value={studentInformation.prevAcademicInfo.instructionMedium}
                                      onChange={(e) => handleChange(e)}
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
                                  {/* pattern of the course */}
                                  <div
                                    class="col-sm-3 topMargin"
                                  >
                                    <label>
                                      Pattern Of The Course
                                      <span style={{ color: "red" }}></span>
                                    </label>
                                    <select
                                      class="form-control select2"
                                      style={{ width: "100%" }}
                                      name="coursePattern"
                                      value={studentInformation.prevAcademicInfo.coursePattern}
                                      onChange={(e) => handleChange(e)}
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
                                {/* Other Duration of Course */}
                                  <div class="col-sm-3 topMargin">
                                    <label>
                                      Other Duration of Course
                                      <span style={{ color: "red" }}></span>
                                    </label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      placeholder="Other Duration of Course"
                                      name="otherDurationCourse"
                                      value={studentInformation.prevAcademicInfo.otherDurationCourse}
                                      onChange={(e) => handleChange(e)}
                                    />
                                  </div>
                                  {/* other course two */}
                                  <div
                                    class="col-sm-3 topMargin"
                                  >
                                    <label>
                                      Other Course
                                      <span style={{ color: "red" }}></span>
                                    </label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      placeholder="Other Course"
                                      name="otherCourseTwo"
                                      value={studentInformation.prevAcademicInfo.otherCourseTwo}
                                      onChange={(e) => handleChange(e)}
                                    />
                                  </div>
                                  {/* other medium */}
                                  <div
                                    class="col-sm-3 topMargin"
                                  >
                                    <label>
                                      Other Medium
                                      <span style={{ color: "red" }}>*</span>
                                    </label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      placeholder="Other Medium"
                                      name="otherMedium"
                                      value={studentInformation.prevAcademicInfo.otherMedium}
                                      onChange={(e) => handleChange(e)}
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
                                      <span style={{ color: "red" }}>*</span>
                                    </label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      placeholder="Name Of the School/College/Institutions"
                                      name="instituteName"
                                      value={studentInformation.prevAcademicInfo.instituteName}
                                      onChange={(e) => handleChange(e)}
                                    />
                                  </div>
                                  {/* Name Of the Board/University */}
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
                                        placeholder="Name Of the Board/University"
                                        name="instituteName"
                                        value={studentInformation.prevAcademicInfo.boardName}
                                        onChange={(e) => handleChange(e)}
                                      />
                                    </div>
                                  </div>
                                  {/* Type of school / college / institution */}
                                  <div class="col-sm-3 topMargin">
                                    <label>
                                      Type of school / college / institution
                                      <span style={{ color: "red" }}>*</span>
                                    </label>
                                    <select
                                      class="form-control select2"
                                      style={{ width: "100%" }}
                                      name="instituteType"
                                      value={studentInformation.prevAcademicInfo.instituteType}
                                      onChange={(e) => handleChange(e)}
                                    >
                                      <option value="NA">--select--</option>
                                      <option value="Govt">Government</option>
                                      <option value="Private">Private</option>
                                      <option value="Semi Govt">
                                        Semi Government
                                      </option>
                                    </select>
                                  </div>
                                  {/* if private */}
                                  <div class="col-sm-3 topMargin">
                                    <label>
                                      If Private
                                      <span style={{ color: "red" }}>*</span>
                                    </label>
                                    <select
                                      class="form-control select2"
                                      style={{ width: "100%" }}
                                      name="ifPrivate"
                                      value={studentInformation.prevAcademicInfo.ifPrivate}
                                      onChange={(e) => handleChange(e)}
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
                                {/* School/ College / Institute Address */}
                                  <div class="col-sm-3 topMargin">
                                    <label>
                                      School/ College / Institute Address
                                      <span style={{ color: "red" }}>*</span>
                                    </label>
                                    <textarea
                                      class="form-control"
                                      placeholder="School/ College / Institute Address"
                                      name="instituteAddress"
                                      value={studentInformation.prevAcademicInfo.instituteAddress}
                                      onChange={(e) => handleChange(e)}
                                    />
                                  </div>
                                  {/* institute city */}
                                  <div class="col-sm-3 topMargin">
                                    <label>
                                      City
                                      <span style={{ color: "red" }}>*</span>
                                    </label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="txt6scCity"
                                      placeholder="City"
                                      name="instituteCity"
                                      value={studentInformation.prevAcademicInfo.instituteCity}
                                      onChange={(e) => handleChange(e)}
                                    />
                                  </div>
                                  {/* institute pic code */}
                                  <div class="col-sm-3 topMargin">
                                    <label>
                                      Pincode
                                      <span style={{ color: "red" }}></span>
                                    </label>
                                    <input
                                      type="text"
                                      class="form-control number"
                                      placeholder="Pincode"
                                      data-inputmask="'mask': ['999999']"
                                      data-mask=""
                                      name="institutePin"
                                      value={studentInformation.prevAcademicInfo.institutePin}
                                      onChange={(e) => handleChange(e)}
                                    />
                                  </div>
                                  {/* institute district */}
                                  <div class="col-sm-3 topMargin">
                                    <label>
                                      District
                                      <span style={{ color: "red" }}></span>
                                    </label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="txt6scDistrict"
                                      placeholder="District"
                                      name="instituteDistrict"
                                      value={studentInformation.prevAcademicInfo.instituteDistrict}
                                      onChange={(e) => handleChange(e)}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="form-group">
                                <div class="row">
                                  {/* institute state */}
                                  <div class="col-sm-3 topMargin">
                                    <label>
                                      State
                                      <span style={{ color: "red" }}>*</span>
                                    </label>
                                    <select
                                      class="form-control"
                                      name="prevAcademicInfo.instituteState"
                                      value={studentInformation.prevAcademicInfo.instituteState}
                                      onChange={(e) => handleChange(e)}
                                    >
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
                                      <option value="Jammu & Kashmir">
                                        Jammu & Kashmir
                                      </option>
                                      <option value="Jharkhand">
                                        Jharkhand
                                      </option>
                                      <option value="Karnataka">
                                        Karnataka
                                      </option>
                                      <option value="Kerala">Kerala</option>
                                      <option value="Madhya Pradesh">
                                        Madhya Pradesh
                                      </option>
                                      <option value="Maharashtra">
                                        Maharashtra
                                      </option>
                                      <option value="Manipur">Manipur</option>
                                      <option value="Meghalaya">
                                        Meghalaya
                                      </option>
                                      <option value="Mizoram">Mizoram</option>
                                      <option value="Nagaland">Nagaland</option>
                                      <option value="Odisha">Odisha</option>
                                      <option value="Punjab">Punjab</option>
                                      <option value="Rajasthan">
                                        Rajasthan
                                      </option>
                                      <option value="Sikkim">Sikkim</option>
                                      <option value="Tamil Nadu">
                                        Tamil Nadu
                                      </option>
                                      <option value="Telangana">
                                        Telangana
                                      </option>
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
                                  {/* institute country */}
                                  <div class="col-sm-3 topMargin">
                                    <label>
                                      Country
                                      <span style={{ color: "red" }}></span>
                                    </label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="txt6scCountry"
                                      placeholder="Country"                                     
                                      name="prevAcademicInfo.instituteCountry"
                                      value={studentInformation.prevAcademicInfo.instituteCountry}
                                      onChange={(e) => handleChange(e)}
                                    />
                                  </div>
                                  {/* institute email */}
                                  <div class="col-sm-3 topMargin">
                                    <label>
                                      Email
                                      <span style={{ color: "red" }}></span>
                                    </label>
                                    <input
                                      type="email"
                                      class="form-control"
                                      id="txt6scEmail"
                                      placeholder="Email"
                                      name="prevAcademicInfo.instituteEmail"
                                      value={studentInformation.prevAcademicInfo.instituteEmail}
                                      onChange={(e) => handleChange(e)}
                                    />
                                  </div>
                                  {/* institute website */}
                                  <div class="col-sm-3 topMargin">
                                    <label>
                                      Website
                                      <span style={{ color: "red" }}></span>
                                    </label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="txt6scWebsite"
                                      placeholder="Website"
                                      name="prevAcademicInfo.instituteWebsite"
                                      value={studentInformation.prevAcademicInfo.instituteWebsite}
                                      onChange={(e) => handleChange(e)}
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
                                      <span style={{ color: "red" }}></span>
                                    </label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="txt6LandlineNumber"
                                      placeholder="Landline Number"
                                      name="prevAcademicInfo.instituteLandLineNo"
                                      value={studentInformation.prevAcademicInfo.instituteLandLineNo}
                                      onChange={(e) => handleChange(e)}
                                    />
                                  </div>
                                  {/* institute contact no */}
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
                                      name="prevAcademicInfo.instituteContactNo"
                                      value={studentInformation.prevAcademicInfo.instituteContactNo}
                                      onChange={(e) => handleChange(e)}
                                    />
                                  </div>
                                  {/* institute mobile no */}
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
                                      name="prevAcademicInfo.instituteMobileNo"
                                      value={studentInformation.prevAcademicInfo.instituteMobileNo}
                                      onChange={(e) => handleChange(e)}
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
                                      style={{
                                        height: "100px",
                                        width: "100px",
                                      }}
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
                    )}

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
                                name="othertrustSupport.otherTrustSupport"
                                value={studentInformation.othertrustSupport.otherTrustSupport}
                                onChange={(e) => handleChange(e)}
                              >
                                <option value="NA">--select--</option>
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <div
                            class="row"
                            style={{ display: "block" }}
                            id="txt8TrustSupports"
                          >
                            <div class="col-sm-12 topMargin">
                              <table class="table table-bordered">
                                <thead>
                                  <tr>
                                    <th>Sr No</th>
                                    <th>Name Of The Trust </th>
                                    <th>
                                      Amount received current year{" "}
                                      <span style={{ color: "red" }}>*</span>
                                    </th>
                                    <th>
                                      Amount received last year{" "}
                                      <span style={{ color: "red" }}>*</span>
                                    </th>
                                    <th>
                                      State{" "}
                                      <span style={{ color: "red" }}>*</span>
                                    </th>
                                    <th>
                                      City{" "}
                                      <span style={{ color: "red" }}>*</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>1</td>
                                    <td>
                                      <input
                                        type="text"
                                        class="form-control"
                                        id="txt8name_add_trust_1"
                                        placeholder="Name Of The Trust"
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        class="form-control amount allownumericwithdecimal"
                                        id="txt8amt_cuur_yr_1"
                                        placeholder="Amount received current year"
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        class="form-control amount allownumericwithdecimal"
                                        id="txt8amt_received_yr_1"
                                        placeholder="Amount received last year"
                                      />
                                    </td>
                                    <td>
                                      <select
                                        id="txt8State_1"
                                        class="form-control"
                                      >
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
                                        <option value="Jharkhand">
                                          Jharkhand
                                        </option>
                                        <option value="Karnataka">
                                          Karnataka
                                        </option>
                                        <option value="Kerala">Kerala</option>
                                        <option value="Madhya Pradesh">
                                          Madhya Pradesh
                                        </option>
                                        <option value="Maharashtra">
                                          Maharashtra
                                        </option>
                                        <option value="Manipur">Manipur</option>
                                        <option value="Meghalaya">
                                          Meghalaya
                                        </option>
                                        <option value="Mizoram">Mizoram</option>
                                        <option value="Nagaland">
                                          Nagaland
                                        </option>
                                        <option value="Odisha">Odisha</option>
                                        <option value="Punjab">Punjab</option>
                                        <option value="Rajasthan">
                                          Rajasthan
                                        </option>
                                        <option value="Sikkim">Sikkim</option>
                                        <option value="Tamil Nadu">
                                          Tamil Nadu
                                        </option>
                                        <option value="Telangana">
                                          Telangana
                                        </option>
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
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        class="form-control"
                                        id="txt8City_1"
                                        placeholder="City"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>2</td>
                                    <td>
                                      <input
                                        type="text"
                                        class="form-control"
                                        id="txt8name_add_trust_2"
                                        placeholder="Name Of The Trust"
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        class="form-control amount allownumericwithdecimal"
                                        id="txt8amt_cuur_yr_2"
                                        placeholder="Amount received current year"
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        class="form-control amount allownumericwithdecimal"
                                        id="txt8amt_received_yr_2"
                                        placeholder="Amount received last year"
                                      />
                                    </td>
                                    <td>
                                      <select
                                        id="txt8State_2"
                                        class="form-control"
                                      >
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
                                        <option value="Jharkhand">
                                          Jharkhand
                                        </option>
                                        <option value="Karnataka">
                                          Karnataka
                                        </option>
                                        <option value="Kerala">Kerala</option>
                                        <option value="Madhya Pradesh">
                                          Madhya Pradesh
                                        </option>
                                        <option value="Maharashtra">
                                          Maharashtra
                                        </option>
                                        <option value="Manipur">Manipur</option>
                                        <option value="Meghalaya">
                                          Meghalaya
                                        </option>
                                        <option value="Mizoram">Mizoram</option>
                                        <option value="Nagaland">
                                          Nagaland
                                        </option>
                                        <option value="Odisha">Odisha</option>
                                        <option value="Punjab">Punjab</option>
                                        <option value="Rajasthan">
                                          Rajasthan
                                        </option>
                                        <option value="Sikkim">Sikkim</option>
                                        <option value="Tamil Nadu">
                                          Tamil Nadu
                                        </option>
                                        <option value="Telangana">
                                          Telangana
                                        </option>
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
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        class="form-control"
                                        id="txt8City_2"
                                        placeholder="City"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>3</td>
                                    <td>
                                      <input
                                        type="text"
                                        class="form-control"
                                        id="txt8name_add_trust_3"
                                        placeholder="Name Of The Trust"
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        class="form-control amount allownumericwithdecimal"
                                        id="txt8amt_cuur_yr_3"
                                        placeholder="Amount received current year"
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        class="form-control amount allownumericwithdecimal"
                                        id="txt8amt_received_yr_3"
                                        placeholder="Amount received last year"
                                      />
                                    </td>
                                    <td>
                                      <select
                                        id="txt8State_3"
                                        class="form-control"
                                      >
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
                                        <option value="Jharkhand">
                                          Jharkhand
                                        </option>
                                        <option value="Karnataka">
                                          Karnataka
                                        </option>
                                        <option value="Kerala">Kerala</option>
                                        <option value="Madhya Pradesh">
                                          Madhya Pradesh
                                        </option>
                                        <option value="Maharashtra">
                                          Maharashtra
                                        </option>
                                        <option value="Manipur">Manipur</option>
                                        <option value="Meghalaya">
                                          Meghalaya
                                        </option>
                                        <option value="Mizoram">Mizoram</option>
                                        <option value="Nagaland">
                                          Nagaland
                                        </option>
                                        <option value="Odisha">Odisha</option>
                                        <option value="Punjab">Punjab</option>
                                        <option value="Rajasthan">
                                          Rajasthan
                                        </option>
                                        <option value="Sikkim">Sikkim</option>
                                        <option value="Tamil Nadu">
                                          Tamil Nadu
                                        </option>
                                        <option value="Telangana">
                                          Telangana
                                        </option>
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
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        class="form-control"
                                        id="txt8City_3"
                                        placeholder="City"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>Sr No</th>
                                    <th>
                                      Contribution from other sources{" "}
                                      <span style={{ color: "red" }}>*</span>
                                    </th>
                                    <th>
                                      Amount received current year{" "}
                                      <span style={{ color: "red" }}>*</span>
                                    </th>
                                    <th>
                                      Amount received last year{" "}
                                      <span style={{ color: "red" }}>*</span>
                                    </th>
                                    <th>
                                      State{" "}
                                      <span style={{ color: "red" }}>*</span>
                                    </th>
                                    <th>
                                      City{" "}
                                      <span style={{ color: "red" }}>*</span>
                                    </th>
                                  </tr>
                                  <tr>
                                    <td>4</td>
                                    <td>
                                      <input
                                        type="text"
                                        class="form-control"
                                        id="txt8contribution"
                                        placeholder="Contribution from other sources"
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        class="form-control amount allownumericwithdecimal"
                                        id="txt8amt_contribution_rece"
                                        placeholder="Amount received current year"
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        class="form-control amount allownumericwithdecimal"
                                        id="txt8amt_rece_contribution"
                                        placeholder="Amount received last year"
                                      />
                                    </td>
                                    <td>
                                      <select
                                        id="txt8State_4"
                                        class="form-control"
                                      >
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
                                        <option value="Jharkhand">
                                          Jharkhand
                                        </option>
                                        <option value="Karnataka">
                                          Karnataka
                                        </option>
                                        <option value="Kerala">Kerala</option>
                                        <option value="Madhya Pradesh">
                                          Madhya Pradesh
                                        </option>
                                        <option value="Maharashtra">
                                          Maharashtra
                                        </option>
                                        <option value="Manipur">Manipur</option>
                                        <option value="Meghalaya">
                                          Meghalaya
                                        </option>
                                        <option value="Mizoram">Mizoram</option>
                                        <option value="Nagaland">
                                          Nagaland
                                        </option>
                                        <option value="Odisha">Odisha</option>
                                        <option value="Punjab">Punjab</option>
                                        <option value="Rajasthan">
                                          Rajasthan
                                        </option>
                                        <option value="Sikkim">Sikkim</option>
                                        <option value="Tamil Nadu">
                                          Tamil Nadu
                                        </option>
                                        <option value="Telangana">
                                          Telangana
                                        </option>
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
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        class="form-control"
                                        id="txt8City_4"
                                        placeholder="City"
                                      />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="row">
                            <hr />
                            <b>Govt. Scholarship</b>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="row">
                            <div class="col-sm-4 topMargin">
                              <label>
                                Did you apply for scholarship last year?
                                (Yes/No)
                              </label>
                              <input
                                type="radio"
                                id="txtLastYearYes"
                                name="txt8applyforscholarship"
                                value="Yes"
                              />
                              Yes &nbsp;&nbsp;
                              <input
                                type="radio"
                                id="txtLastYearNo"
                                name="txt8applyforscholarship"
                                value="No"
                              />
                              No
                            </div>
                          </div>
                        </div>

                        <div class="form-group">
                          <div class="row" id="govtScholarship">
                            <div class="col-sm-3 topMargin">
                              <label>
                                Amount received{" "}
                                <span style={{ color: "red" }}></span>
                              </label>
                              <input
                                type="text"
                                class="form-control amount allownumericwithdecimal"
                                id="txt8scholarship_amt"
                                placeholder=""
                              />
                            </div>
                            <div class="col-sm-3 topMargin">
                              <label>
                                Year <span style={{ color: "red" }}></span>
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="txt8scholarship_year"
                                placeholder=""
                              />
                            </div>
                            <div class="col-sm-3 topMargin">
                              <label>
                                Name of the govt. scholarship{" "}
                                <span style={{ color: "red" }}></span>
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="txt8scholarship_name"
                                placeholder=""
                              />
                            </div>
                            <div class="col-sm-3 topMargin">
                              <label>
                                Application Id{" "}
                                <span style={{ color: "red" }}></span>
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="txt8application_id"
                                placeholder=""
                              />
                            </div>
                            <div class="col-sm-3 topMargin">
                              <label>
                                Password <span style={{ color: "red" }}></span>
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="txt8applicationpass"
                                placeholder=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/*  ====================== organisation support information ======================== */}
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
                            >
                              <option value="NA">--select--</option>
                              <option value="No">No</option>
                              <option value="Yes">Yes</option>
                            </select>
                          </div>
                        </div>
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
                                    Last how many years they have been receiving
                                    support?
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="txtx_bro_sis_name"
                                      placeholder=""
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="txtx_id_no"
                                      placeholder=""
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="txtx_coursename"
                                      placeholder=""
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      class="form-control amount allownumericwithdecimal"
                                      id="txtx_amt_received"
                                      placeholder=""
                                    />
                                  </td>
                                  <td>
                                    <select
                                      class="form-control"
                                      id="ddlFinancialYear1"
                                      style={{ width: "100%" }}
                                    >
                                      <option value="NA">--select--</option>
                                      <option value="2004-05">2004-05</option>
                                      <option value="2005-06">2005-06</option>
                                      <option value="2006-07">2006-07</option>
                                      <option value="2007-08">2007-08</option>
                                      <option value="2008-09">2008-09</option>
                                      <option value="2009-10">2009-10</option>
                                      <option value="2010-11">2010-11</option>
                                      <option value="2011-12">2011-12</option>
                                      <option value="2012-13">2012-13</option>
                                      <option value="2013-14">2013-14</option>
                                      <option value="2014-15">2014-15</option>
                                      <option value="2015-16">2015-16</option>
                                      <option value="2016-17">2016-17</option>
                                      <option value="2017-18">2017-18</option>
                                      <option value="2018-19">2018-19</option>
                                      <option value="2019-20">2019-20</option>
                                      <option value="2020-21">2020-21</option>
                                      <option value="2021-22">2021-22</option>
                                      <option value="2022-23">2022-23</option>
                                      <option value="2023-24">2023-24</option>
                                      <option value="2024-25">2024-25</option>
                                    </select>
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="txtx_hw_mny_yr_receive"
                                      placeholder=""
                                    />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div
                            class="col-sm-12 topMargin"
                            style={{ marginTop: "31px" }}
                            id="newbtn2"
                          >
                            <input
                              type="button"
                              class="btn btn-primary"
                              id="addorgoView2"
                              value="Add More"
                            />
                          </div>
                        </div>

                        <div class="col-sm-12" style={{ marginTop: "25px" }}>
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
                                    Last how many years have they been receiving
                                    support
                                  </th>
                                  <th id="3rd">Delete </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr id="13442">
                                  <td>1</td>
                                  <td>Tareeq</td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td>2018-19</td>
                                  <td>2</td>
                                  <td id="3rd">
                                    <i
                                      class="fa fa-trash-o removeorgoRole2"
                                      id="btnEduorgoDeletes0"
                                    ></i>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <hr style={{ borderColor: "red" }} />
                        </div>
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
                            >
                              <option value="NA">--select--</option>
                              <option value="No">No</option>
                              <option value="Yes">Yes</option>
                            </select>
                          </div>
                        </div>

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
                                <tr>
                                  <td>1</td>
                                  <td>
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="txtxt_family_memb_name"
                                      placeholder=""
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="txtxt_id_no"
                                      placeholder=""
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
                                        id="ddlSchemeName"
                                        class="form-control select2"
                                      >
                                        <option selected="selected" value="0">
                                          --select--
                                        </option>
                                        <option value="4">Business Aid</option>
                                        <option value="5">General Aid</option>
                                        <option value="2">Housing</option>
                                        <option value="3">Medical</option>
                                        <option value="1">
                                          Women Empowerment
                                        </option>
                                      </select>
                                    </div>
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      class="form-control amount allownumericwithdecimal"
                                      id="txtxt_amt_receveid"
                                      placeholder=""
                                    />
                                  </td>
                                  <td>
                                    <select
                                      class="form-control"
                                      id="ddlFinancialYear2"
                                      style={{ width: "100%" }}
                                    >
                                      <option value="NA">--select--</option>
                                      <option value="2004-05">2004-05</option>
                                      <option value="2005-06">2005-06</option>
                                      <option value="2006-07">2006-07</option>
                                      <option value="2007-08">2007-08</option>
                                      <option value="2008-09">2008-09</option>
                                      <option value="2009-10">2009-10</option>
                                      <option value="2010-11">2010-11</option>
                                      <option value="2011-12">2011-12</option>
                                      <option value="2012-13">2012-13</option>
                                      <option value="2013-14">2013-14</option>
                                      <option value="2014-15">2014-15</option>
                                      <option value="2015-16">2015-16</option>
                                      <option value="2016-17">2016-17</option>
                                      <option value="2017-18">2017-18</option>
                                      <option value="2018-19">2018-19</option>
                                      <option value="2019-20">2019-20</option>
                                      <option value="2020-21">2020-21</option>
                                      <option value="2021-22">2021-22</option>
                                      <option value="2022-23">2022-23</option>
                                      <option value="2023-24">2023-24</option>
                                      <option value="2024-25">2024-25</option>
                                    </select>
                                  </td>
                                </tr>
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

                        <div class="col-sm-12" style={{ marginTop: "25px" }}>
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
                              <tbody></tbody>
                            </table>
                          </div>
                        </div>
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
                                id="txt11dpHereby"
                                placeholder="Course Name"
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
                              id="txt11dpNameOfApplicant"
                              placeholder="Name of applicant"
                              readonly=""
                            />
                          </div>
                          <div class="col-sm-3 topMargin">
                            <label>
                              Name of Parent/Guardian
                              <span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="txt11dpNameOfParent"
                              placeholder="Name of Parent/Guardian"
                              readonly=""
                            />
                          </div>

                          <div class="col-sm-3 topMargin">
                            <label>
                              Place<span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="txt11dpPlace"
                              placeholder="Place"
                              readonly=""
                            />
                          </div>

                          <div class="col-sm-3 topMargin">
                            <label>
                              Date <span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="txt11dpDate"
                              placeholder="Date"
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
                                  src="../admission/applicantImg/202026_photo.jpg"
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
                                  src="../admission/applicantImg/202026_sign.jpg"
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
                          <input
                            type="file"
                            id="txt11dpGuardianPhotoPath"
                            style={{ visibility: "hidden" }}
                          />

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
                                  src="../admission/applicantImg/202026_Mother.jpg"
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
                                  <input type="checkbox" id="lockform" />
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
                    <button
                      type="submit"
                      id="submit-btn"
                      className="btn btn-default"
                    >
                      Save
                    </button>
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
                            <th>Delete</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="odd gradeX">
                            <td>Trident</td>
                            <td>Internet Explorer 4.0</td>
                            <td>Win 95+</td>
                            <td>4</td>
                            <td>X</td>
                            <td>X</td>
                            <td>X</td>
                            <td>X</td>
                            <td>X</td>
                          </tr>
                          <tr className="odd gradeX">
                            <td>Trident</td>
                            <td>Internet Explorer 4.0</td>
                            <td>Win 95+</td>
                            <td>4</td>
                            <td>X</td>
                            <td>X</td>
                            <td>X</td>
                            <td>X</td>
                            <td>X</td>
                          </tr>
                          <tr className="odd gradeX">
                            <td>Trident</td>
                            <td>Internet Explorer 4.0</td>
                            <td>Win 95+</td>
                            <td>4</td>
                            <td>X</td>
                            <td>X</td>
                            <td>X</td>
                            <td>X</td>
                            <td>X</td>
                          </tr>
                          <tr className="odd gradeX">
                            <td>Trident</td>
                            <td>Internet Explorer 4.0</td>
                            <td>Win 95+</td>
                            <td>4</td>
                            <td>X</td>
                            <td>X</td>
                            <td>X</td>
                            <td>X</td>
                            <td>X</td>
                          </tr>
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
                  <div class="panel-heading">
                    Family Member Information Table
                  </div>
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
                          <tr class="odd gradeX">
                            <td>1</td>
                            <td>Internet Explorer 4.0</td>
                            <td>Win 95+</td>
                            <td>4</td>
                            <td>X</td>
                            <td>X</td>
                            <td>X</td>
                            <td>X</td>
                            <td>X</td>
                            <td>X</td>
                            <td>X</td>
                            <td>X</td>
                          </tr>
                          <tr class="odd gradeX">
                            <td>2</td>
                            <td>Internet Explorer 4.0</td>
                            <td>Win 95+</td>
                            <td>4</td>
                            <td>X</td>
                            <td>X</td>
                            <td>X</td>
                            <td>X</td>
                            <td>X</td>
                            <td>X</td>
                            <td>X</td>
                            <td>X</td>
                          </tr>
                          <tr class="odd gradeX">
                            <td>3</td>
                            <td>Internet Explorer 4.0</td>
                            <td>Win 95+</td>
                            <td>4</td>
                            <td>X</td>
                            <td>X</td>
                            <td>X</td>
                            <td>X</td>
                            <td>X</td>
                            <td>X</td>
                            <td>X</td>
                            <td>X</td>
                          </tr>
                          <tr class="odd gradeX">
                            <td>4</td>
                            <td>Internet Explorer 4.0</td>
                            <td>Win 95+</td>
                            <td>4</td>
                            <td>X</td>
                            <td>X</td>
                            <td>X</td>
                            <td>X</td>
                            <td>X</td>
                            <td>X</td>
                            <td>X</td>
                            <td>X</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* <Link
            to="/studentProfile?tab=family_details"
            className="save_prev_btn"
          >
            <button type="button" className="btn btn-primary" onClick={() => handlePrev()}>
              <i className="fa fa-caret-square-o-right margin-r-5"></i>
              Previous
            </button>
          </Link>
          <Link
            to="/studentProfile?tab=family_details"
            className="save_nxt_btn"
          >
            <button type="button" className="btn btn-primary" onClick={() => handleNext()}>
              <i className="fa fa-caret-square-o-right margin-r-5"></i> Save &
              Next
            </button>
          </Link> */}

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
              onClick={handleNext}
              disabled={tabs.indexOf(currentTab) === tabs.length - 1}
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
