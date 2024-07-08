import { createContext, useEffect, useState } from "react";
import axios from "axios";
const baseUrl = "http://localhost:8088/api/v1/user/";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const initialState = {
    studentInfo: {},
    familyDetails: [],
    jamatInfo: {},
    prevAcademicInfo: [],
    othertrustSupport: {},
    organizationSupportFamily: {},
    familyDeclaration: {},
    currentAcademicDetails:{},
    feesInformation:{},
    bankDetails:{},
    studentCode: "",
    isConfirm: false,
  };

  const [studentInformation, setStudentInformation] = useState(initialState);
  const [modifiedData, setModifiedData] = useState({});
  const [originalData, setOriginalData] = useState({});
  // console.log("globalstudentInformation", studentInformation)
  const [openModal, setOpenModal] = useState(false);
  const [allFamilyDetails, setAllFamilyDetails] = useState(null);
  const [academicInfo, setAcademicInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [studentDetails, setStudentDetails] = useState({
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
  })
  const [familyData, setFamilyData] = useState([
    {
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
    },
  ]);
  const [jamatDetails, setJamatDetails] = useState({
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
  })
  const [academicDetails, setAcademicdetails] = useState([{
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
  }])
  const [trustDetails, setTrustDetails] = useState({
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
  })
  const [organizationSupport, setOrganizationSupport] = useState({
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
  })
  const [declarationFamily, setDeclarationFamily] = useState({
    courseName: "",
    applicantName: "",
    parentName: "",
    place: "",
    date: "",
    studentPhoto: "",
    studentSign: "",
    parentSign: "",
  })
  const [currentStudy, setCurrentStudy] = useState({
    currentlyStudingIn: "",
    currentSpecialCase: "",
    currentlyCourseName: "",
    currentlyLevelOfCourse: "",
    currentlyField: "",
    currentlyDuration: "",
    currentlyMediumOfInstruction: "",
    currentlyPatternOfTheCourse: "",
    currentlyInstituteName: "",
    currentlyBoardName: "",
    currentlyInstitutionType: "",
    currentlyIfPrivate: "",
    currentlyInstitutionAddress: "",
    currentlyInstitutionCity: "",
    currentlyInstitutionDistrict: "",
    currentlyInstitutionState: "",
    currentlyInstitutionCountry: "",
    currentlyInstitutionEmail: "",
    currentlyInstitutionWebsite: "",
    currentlyInstitutionPin: "",
    currentlyInstitutionBonafidfrontImg: "",
    currentlyInstitutionBonafidBackImg: "",
    currentlyInstitutionlandLine: "",
    currentlyInstitutionContact: "",
    currentlyInstitutionContact: "",
    currentlyInstitutionMobile: "",
  })
  const aadharNo = localStorage.getItem("aadharNO");
  const userType = localStorage.getItem("userType");
  const token = localStorage.getItem("Authorization");

  console.log("trustDetails", trustDetails)

  const updateModal = () => {
    setOpenModal(false);
  };

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
        localStorage.setItem("id", res?.data?.existStudent?._id);
         setStudentDetails(res?.data?.existStudent.studentInfo)
        setFamilyData(res?.data?.existStudent?.familyDetails)
        setJamatDetails(res?.data?.existStudent.jamatInfo)
        setAcademicdetails(res?.data?.existStudent?.prevAcademicInfo)
        setTrustDetails(res?.data?.existStudent?.othertrustSupport)
        setOrganizationSupport(res?.data?.existStudent?.organizationSupportFamily)
        setDeclarationFamily(res?.data?.existStudent?.familyDeclaration)
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
          i++; // Skip the next key since it's the index
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

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   const keys = name.split(".");

  //   const updateNestedObject = (object, keys, value) => {
  //     const newObject = { ...object };
  //     let nestedObject = newObject;
  //     for (let i = 0; i < keys.length - 1; i++) {
  //       const key = keys[i];
  //       if (Array.isArray(nestedObject[key])) {
  //         const index = parseInt(keys[i + 1], 10);
  //         nestedObject[key] = [...nestedObject[key]];
  //         nestedObject = nestedObject[key][index];
  //         i++;
  //       } else {
  //         nestedObject[key] = { ...nestedObject[key] };
  //         nestedObject = nestedObject[key];
  //       }
  //     }
  //     nestedObject[keys[keys.length - 1]] = value;
  //     return newObject;
  //   };

  //   if (keys.length === 1) {
  //     setStudentInformation((prevState) => ({
  //       ...prevState,
  //       [name]: value,
  //     }));
  //     setModifiedData((prevState) => ({
  //       ...prevState,
  //       [name]: value,
  //     }));
  //   } else {
  //     setStudentInformation((prevState) =>
  //       updateNestedObject(prevState, keys, value)
  //     );
  //     setModifiedData((prevState) =>
  //       updateNestedObject(prevState, keys, value)
  //     );
  //   }
  // };

  // const addFamilyMember = async () => {
  //   setStudentInformation((prevState) => ({
  //     ...prevState,
  //     familyDetails: [...prevState.familyDetails, { ...initialState.familyDetails[0] }],
  //   }));

  //   try {
  //     const data = {
  //       ...studentInformation.familyDetails,
  //       _id: localStorage.getItem("id"),
  //     };
  //     console.log("data", data);
  //     let res = await axios.post(
  //       `http://localhost:8088/api/v1/user/add_family/${aadharNo}`,
  //       data
  //     );
  //     if (res & res.status) {
  //       console.log("ressssss", res);
  //     }
  //   } catch (error) {}
  // };

  const addFamilyMember = async () => {
    // Update the state with the new family member
    setStudentInformation((prevState) => {
      const updatedFamilyDetails = [
        ...prevState.familyDetails,
        { ...initialState.familyDetails[0] },
      ];

      // Make the API call within the setState callback to ensure it uses the latest state
      const updatedStudentInformation = {
        ...prevState,
        familyDetails: updatedFamilyDetails,
      };

      (async () => {
        try {
          const data = {
            familyDetails: updatedFamilyDetails,
            _id: localStorage.getItem("id"),
          };
          console.log("data", data);
          let res = await axios.post(
            `http://localhost:8088/api/v1/user/add_family/${aadharNo}`,
            data
          );
          if (res && res.status) {
            console.log("ressssss", res);
          }
        } catch (error) {
          console.error("Error adding family member:", error);
        }
      })();

      return updatedStudentInformation;
    });
  };

  useEffect(() => {
    if (token && userType === "Student") {
      getStudentData();
      const aadharNo = localStorage.getItem("aadharNO");
      setStudentDetails((prev) => ({
        ...prev,
        aadharNo: aadharNo
      }))
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
        setOrganizationSupport,
        originalData,
        setOriginalData,
        handleChange,
        addFamilyMember,
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
           currentStudy, 
           setCurrentStudy,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
