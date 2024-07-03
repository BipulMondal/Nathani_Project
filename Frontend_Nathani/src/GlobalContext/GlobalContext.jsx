import { createContext, useEffect, useState } from "react";
import axios from "axios";
const baseUrl = "http://localhost:8088/api/v1/user/";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
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
      StudentMobileNo: "",
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
    familyDetails:  [{
        parentStatus: "",
        parentStatusOneImg: "",
        parentStatusTwoImg: "",
        relationWithStudent: "",
        relationPersonName: "",
        relationPersonMaritalStatus: "",
        relationPersonDOB: "",
        relationPersonGender: "",
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
      }],
    jamatInfo: {
      ifMemon: "",
      ifMotherMomen: "",
      memonJamatLetterOne: "",
      memonJamatLetterTwo: "",
      jamatDetails: "",
      belongingJamat: "",
      jamatSecretaryName: "",
      secretaryMobile: "",
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
      lastTwoYearResultImg: "",
      TwoYearBackResultImg: "",
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
      instituteLandLineNo: "",
      instituteContactNo: "",
      instituteMobileNo: "",
      bonafideCertificateFrontImg: "",
      bonafideCertificateBackImg: "",
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
      receivedSupport: "",
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
      memberReceiveSupport: "",
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
  console.log("globalstudentInformation", studentInformation)
  const [modifiedData, setModifiedData] = useState({});
  const [originalData, setOriginalData] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [allFamilyDetails, setAllFamilyDetails] = useState(null);
  const [academicInfo, setAcademicInfo] = useState(null);
  const [organizationSupport, setorganizationSupport] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const aadharNo = localStorage.getItem("aadharNO");
  const userType = localStorage.getItem("userType");
  const token = localStorage.getItem("Authorization")

  const updateModal = () => {
    setOpenModal(false);
  };

  console.log("sdddd", token);

  const getStudentData = async () => {
    const data = {
      aadharNo: aadharNo,
    };
    try {
      setIsLoading(true);
      const res = await axios.post(
        "http://localhost:8088/api/v1/user/get_Student_data",
        data
      );
      console.log("res_data_existStudent", res?.data?.existStudent);
      if (res && res.data.status && userType === "Student") {
        localStorage.setItem("id" , res?.data?.existStudent?._id)
        // setStudentInformation((prev) => ({
        //   ...prev,
        //   studentInfo: res?.data?.existStudent.studentInfo,
        //   jamatInfo: res?.data?.existStudent.jamatInfo,
        //   othertrustSupport: res?.data?.existStudent.othertrustSupport,
        //   familyDeclaration: res?.data?.existStudent?.familyDeclaration,
        // }));
        // setAllFamilyDetails(res?.data?.existStudent?.familyDetails);
        // setAcademicInfo(res?.data?.existStudent?.prevAcademicInfo);
        // setorganizationSupport(
        //   res?.data?.existStudent?.organizationSupportFamily
        // );

        setStudentInformation(res?.data?.existStudent)
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching student data:", error);
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split(".");

    const updateNestedObject = (object, keys, value) => {
      const newObject = { ...object };
      let nestedObject = newObject;
      for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        if (Array.isArray(nestedObject[key])) {
          const index = parseInt(keys[i + 1], 10);
          nestedObject[key] = [...nestedObject[key]];
          nestedObject = nestedObject[key][index];
          i++;
        } else {
          nestedObject[key] = { ...nestedObject[key] };
          nestedObject = nestedObject[key];
        }
      }
      nestedObject[keys[keys.length - 1]] = value;
      return newObject;
    };

    if (keys.length === 1) {
      setStudentInformation((prevState) => ({
        ...prevState,
        [name]: value,
      }));
      setModifiedData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else {
      setStudentInformation((prevState) =>
        updateNestedObject(prevState, keys, value)
      );
      setModifiedData((prevState) =>
        updateNestedObject(prevState, keys, value)
      );
    }
  };

  const addFamilyMember = () => {
    setStudentInformation((prevState) => ({
      ...prevState,
      familyDetails: [...prevState.familyDetails, { ...initialState.familyDetails[0] }],
    }));
  };


  useEffect(() => {
    if (token && userType === "Student") {
      getStudentData();
      const aadharNo = localStorage.getItem("aadharNO");
      setStudentInformation((prev) => ({
        ...prev,
        studentInfo: {
          ...prev.studentInfo,
          aadharNo: aadharNo,
        },
      }));
    }
  }, [token]);

  return (
    <GlobalContext.Provider
      value={{
        openModal,
        setOpenModal,
        updateModal,
        getStudentData,
        isLoading,
        studentInformation,
        setStudentInformation,
        modifiedData,
        setModifiedData,
        allFamilyDetails,
        setAllFamilyDetails,
        academicInfo,
        setAcademicInfo,
        organizationSupport,
        setorganizationSupport,
        originalData,
         setOriginalData,
         handleChange,
         addFamilyMember
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
