import { createContext, useEffect, useState } from "react";
import axios from "axios";
const baseUrl = "http://localhost:4025";
// const baseUrl = "http://37.60.243.233:4025"
const ApiEndPoint = "/api/v1/user";

const url = baseUrl + ApiEndPoint;

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
    currentAcademicDetails: {},
    feesInformation: {},
    bankDetails: {},
    studentCode: "",
    isConfirm: false,
  };

  const [studentInformation, setStudentInformation] = useState(initialState);
  const [modifiedData, setModifiedData] = useState({});
  const [originalData, setOriginalData] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [allFamilyDetails, setAllFamilyDetails] = useState(null);
  const [academicInfo, setAcademicInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState(null);
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
  });
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
  const [familyTableData, setFamilyTableData] = useState([
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
  });
  const [academicDetails, setAcademicdetails] = useState([
    {
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
  ]);
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
  });
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
  });
  const [declarationFamily, setDeclarationFamily] = useState({
    courseName: "",
    applicantName: "",
    parentName: "",
    place: "",
    date: "",
    studentPhoto: "",
    studentSign: "",
    parentSign: "",
  });
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
  });
  const [feesDetails, setFeesDetails] = useState({
    termFees: "",
    tutionFees: "",
    otherFees: "",
    totalFees: "",
    coachingFees: "",
    hostelFees: "",
    meesFees: "",
    conveance: "",
    bookStationary: "",
    projectInstrument: "",
    anyOther: "",
    totalExpences: "",
    totalABC: "",
    ownContribute: "",
    totalABCD: "",
  });

  const [bankDetails, setBankDetails] = useState({
    nameAsPassBook: "",
    AcountNO: "",
    BankName: "",
    otherBank: "",
    Branch: "",
    ifsc: "",
    passBookFrontImg: "",
    passBookBackImg: "",
  });
  const [allStudents, setAllStudents] = useState([]);
  const aadharNo = localStorage.getItem("aadharNO");
  const userType = localStorage.getItem("userType");
  const token = localStorage.getItem("Authorization");

  console.log("bankDetails", bankDetails);

  const updateModal = () => {
    setOpenModal(false);
  };

  const getStudentData = async () => {
    const data = {
      aadharNo: aadharNo,
    };
    try {
      setIsLoading(true);
      console.log("sdsdsd", `${url}/get_Student_data`);
      const res = await axios.post(`${url}/get_Student_data`, data);
      console.log("res_data_existStudent", res?.data?.existStudent);
      if (res && res.data.status && userType === "Student") {
        localStorage.setItem("id", res?.data?.existStudent?._id);
        setStudentDetails(res?.data?.existStudent.studentInfo);
        // setFamilyData(res?.data?.existStudent?.familyDetails);
        setFamilyTableData(res?.data?.existStudent?.familyDetails);
        setJamatDetails(res?.data?.existStudent.jamatInfo);
        setAcademicdetails(res?.data?.existStudent?.prevAcademicInfo);
        setTrustDetails(res?.data?.existStudent?.othertrustSupport);
        setOrganizationSupport(
          res?.data?.existStudent?.organizationSupportFamily
        );
        setDeclarationFamily(res?.data?.existStudent?.familyDeclaration);
        setCurrentStudy(res?.data?.existStudent?.currentAcademicDetails);
        setFeesDetails(res?.data?.existStudent?.feesInformation);
        setBankDetails(res?.data?.existStudent?.bankDetails);

        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching student data:", error);
      setIsLoading(false);
    }
  };

  const getAllStudentdata = async () => {
    try {
      setIsLoading(true);
      const data = {
        addedBy: localStorage.getItem("addedBy"),
      };
      let res = await axios.post(`${url}/get_student_addedBy`, data);
      console.log("allStudentData", res?.data?.allData);
      if (res && res.status) {
        setAllStudents(res.data?.allData);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const addFamilyMember = async () => {
    alert("asd")
    // Make the API call within the setState callback to ensure it uses the latest state
    // const updateTable = familyData.concat(familyTableData);
    const updateTable = [...familyData, ...familyTableData]
    console.log("updtaed", studentDetails.aadharNo);

    (async () => {
      try {
        const data = {
          familyDetails: updateTable,
        };
        console.log("data", data);
        let res = await axios.post(`${url}/add_family/${studentDetails.aadharNo}`, data);
        if (res && res.status) {
          console.log("ressssss", res);
        }
      } catch (error) {
        console.error("Error adding family member:", error);
      }
    })();

    return updateTable;
  };

  const updateFamilyMember = async (id) => {
    try {
      const aadhar = studentDetails.aadharNo;
      const data = {
        familyDetails: familyData,
        aadharNo: aadhar
      }
      let res = await axios.put(`${url}/update_family/${id}`, data);
      console.log("res", res);

    } catch (error) {
      
    }
  }

  const imageHandler = async (e, state, index = null) => {
    console.log("eee", e, state);
    if (e.target.files.length === 0) return;

    const DATA = new FormData();
    DATA.append("image", e.target.files[0]);

    const stateToKeyMap = {
      isPhysical: { section: "studentInfo", key: "physicalChallangeImg" },
      parentDeath: { section: "studentInfo", key: "parentDeathCertificateImg" },
      aadharFront: { section: "studentInfo", key: "addaharFrontImg" },
      aadharBack: { section: "studentInfo", key: "aadharBackImg" },
      rationFront: { section: "studentInfo", key: "rationFrontImg" },
      rationBack: { section: "studentInfo", key: "rationBackImg" },
      electricityBill: { section: "studentInfo", key: "electricityBillImg" },
      parentStatusOne: { section: "familyDetails", key: "parentStatusOneImg" },
      parentStatusTwo: { section: "familyDetails", key: "parentStatusTwoImg" },
      incomeFront: { section: "familyDetails", key: "incomeFileFrontImg" },
      incomeBack: { section: "familyDetails", key: "incomeFileBackImg" },
      handicapedFront: { section: "familyDetails", key: "handiCapFileOneImg" },
      handicapedBack: { section: "familyDetails", key: "handiCapFileTwoImg" },
      jamatLetterOne: { section: "jamatInfo", key: "memonJamatLetterOne" },
      jamatLetterTwo: { section: "jamatInfo", key: "memonJamatLetterTwo" },
      lastYearResultImg: {
        section: "prevAcademicInfo",
        key: "lastYearResultImg",
      },
      lastTwoYearResultImg: {
        section: "prevAcademicInfo",
        key: "lastTwoYearResultImg",
      },
      TwoYearBackResultImg: {
        section: "prevAcademicInfo",
        key: "TwoYearBackResultImg",
      },
      bonafideCertificateFrontImg: {
        section: "prevAcademicInfo",
        key: "bonafideCertificateFrontImg",
      },
      bonafideCertificateBackImg: {
        section: "prevAcademicInfo",
        key: "bonafideCertificateBackImg",
      },
      studentPhoto: { section: "familyDeclaration", key: "studentPhoto" },
      studentSign: { section: "familyDeclaration", key: "studentSign" },
      studentGuardianSign: { section: "familyDeclaration", key: "parentSign" },
      studingBonafiedFront: {
        section: "currentStudy",
        key: "currentlyInstitutionBonafidfrontImg",
      },
      studingBonafiedBack: {
        section: "currentStudy",
        key: "currentlyInstitutionBonafidBackImg",
      },
      passbookFront: { section: "bankDetails", key: "passBookFrontImg" },
      passbookBack: { section: "bankDetails", key: "passBookBackImg" },
    };

    try {
      setIsLoading(true);
      const response = await axios.post(`${url}/upload`, DATA, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("response", response);

      if (response && response.data.status && stateToKeyMap[state]) {
        setIsLoading(false);
        const uploadedFilePath = response.data.file;
        const { section, key } = stateToKeyMap[state];

        if (section === "studentInfo") {
          setStudentDetails((prevState) => ({
            ...prevState,
            [key]: uploadedFilePath,
          }));
        } else if (section === "familyDetails" && index !== null) {
          setFamilyData((prevState) => {
            const newState = [...prevState];
            newState[index][key] = uploadedFilePath;
            return newState;
          });
        } else if (section === "jamatInfo") {
          setJamatDetails((prevState) => ({
            ...prevState,
            [key]: uploadedFilePath,
          }));
        } else if (section === "prevAcademicInfo" && index !== null) {
          setAcademicdetails((prevState) => {
            const newState = [...prevState];
            newState[index][key] = uploadedFilePath;
            return newState;
          });
        } else if (section === "familyDeclaration") {
          setDeclarationFamily((prevState) => ({
            ...prevState,
            [key]: uploadedFilePath,
          }));
        } else if (section === "currentStudy") {
          setCurrentStudy((prevState) => ({
            ...prevState,
            [key]: uploadedFilePath,
          }));
        } else if (section === "bankDetails") {
          setBankDetails((prevState) => ({
            ...prevState,
            [key]: uploadedFilePath,
          }));
        }
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (token && userType === "Student") {
      getStudentData();
    } else {
      getAllStudentdata();
    }
  }, [token]);

  const getSingleStudentData = async (id) => {
    try {
      setIsLoading(true);
      const res = await axios.post(`${url}/get_Single_Student/${id}`);
      console.log("singleStudents", res?.data?.existStudent);
      if (res && res.data.status) {
        setStudentDetails(res?.data?.existStudent.studentInfo);
        setFamilyTableData(res?.data?.existStudent?.familyDetails);
        // setFamilyData(res?.data?.existStudent?.familyDetails);
        setJamatDetails(res?.data?.existStudent.jamatInfo);
        setAcademicdetails(res?.data?.existStudent?.prevAcademicInfo);
        setTrustDetails(res?.data?.existStudent?.othertrustSupport);
        setOrganizationSupport(
          res?.data?.existStudent?.organizationSupportFamily
        );
        setDeclarationFamily(res?.data?.existStudent?.familyDeclaration);
        setCurrentStudy(res?.data?.existStudent?.currentAcademicDetails);
        setFeesDetails(res?.data?.existStudent?.feesInformation);
        setBankDetails(res?.data?.existStudent?.bankDetails);
        setId(res?.data?.existStudent?._id);

        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching student data:", error);
      setIsLoading(false);
    }
  };

  console.log("sdwesd", familyData, familyTableData);

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
        // handleChange,
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
        url,
        baseUrl,
        allStudents,
        getAllStudentdata,
        feesDetails,
        setFeesDetails,
        bankDetails,
        setBankDetails,
        imageHandler,
        getSingleStudentData,
        id,
        familyTableData,
        setFamilyTableData,
        updateFamilyMember
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
