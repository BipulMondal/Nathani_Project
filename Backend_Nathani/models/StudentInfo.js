const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  studentInfo: {
    aadharNo: { type: String, default: "" },
    lastName: { type: String, default: "" },
    firstName: { type: String, default: "" },
    fatherName: { type: String, default: "" },
    motherName: { type: String, default: "" },
    guardianName: { type: String, default: "" },
    dob: { type: Date },
    birthPlace: { type: String, default: "" },
    gender: { type: String, default: "" },
    maritalStatus: { type: String, default: "" },
    spouseName: { type: String, default: "" },
    StudentMobileNo: { type: Number },
    StudentEmail: { type: String, default: "" },
    parmanentAddress: { type: String, default: "" },
    currentAddress: { type: String, default: "" },
    landMark: { type: String, default: "" },
    city: { type: String, default: "" },
    pin: { type: String, default: "" },
    district: { type: String, default: "" },
    state: { type: String, default: "" },
    country: { type: String, default: "" },
    physicalChallange: { type: String, default: "" },
    physicalChallangeImg: { type: String, default: "" },
    orphan: { type: String, default: "" },
    parentDeathCertificateImg: { type: String, default: "" },
    addaharFrontImg: { type: String, default: "" },
    aadharBackImg: { type: String, default: "" },
    rationFrontImg: { type: String, default: "" },
    rationBackImg: { type: String, default: "" },
    electricityBillImg: { type: String, default: "" },
    category: { type: String, default: "" },
    zakatFund: { type: Number },
    refferedBy: { type: String, default: "" },
    refMobileNo: { type: String, default: "" },
  },
  familyDetails: {
    parentStatus: { type: String, default: "" },
    parentStatusOneImg: { type: String, default: "" },
    parentStatusTwoImg: { type: String, default: "" },
    relationWithStudent: { type: String, default: "" },
    relationPersonName: { type: String, default: "" },
    relationPersonMaritalStatus: { type: String, default: "" },
    relationPersonDOB: { type: String, default: "" },
    relationPersongender: { type: String, default: "" },
    relationPersonAadhar: { type: String, default: "" },
    relationPersonEducation: { type: String, default: "" },
    relationPersonOccupation: { type: String, default: "" },
    relationPersonOccupationDetails: { type: String, default: "" },
    relationPersonMonthlyIncome: { type: Number },
    incomeFileFrontImg: { type: String, default: "" },
    incomeFileBackImg: { type: String, default: "" },
    handiCapped: { type: String, default: "" },
    handiCapFileOneImg: { type: String, default: "" },
    handiCapFileTwoImg: { type: String, default: "" },
    personCity: { type: String, default: "" },
    personStudying: { type: String, default: "" },
  },
  jamatInfo: {
    ifMemon: { type: String, default: "" },
    ifMotherMomen: { type: String, default: "" },
    memonJamatLetterOne: { type: String, default: "" },
    memonJamatLetterTwo: { type: String, default: "" },
    jamatDetails: { type: String, default: "" },
    belongingJamat: { type: String, default: "" },
    jamatSecretaryName: { type: String, default: "" },
    secretaryMobile: { type: Number },
    secretaryEmail: { type: String, default: "" },
    memonAddress: { type: String, default: "" },
    memonCity: { type: String, default: "" },
    memonPin: { type: String, default: "" },
    memonState: { type: String, default: "" },
    helpFromJamat: { type: String, default: "" },
    jamatReceiveAmount: { type: Number },
    amountReceivePurpose: { type: String, default: "" },
    amountType: { type: String, default: "" },
    deeniyatCourse: { type: String, default: "" },
    courseName: { type: String, default: "" },
    madrashaName: { type: String, default: "" },
    anyOtherCourse: { type: String, default: "" },
  },
  prevAcademicInfo: {
    prevYearResult: { type: String, default: "" },
    lastYearResultImg: { type: String, default: "" },
    lastTwoYearResultImg: { type: String, default: "" },
    TwoYearBackResultImg: { type: String, default: "" },
    currentStudy: { type: String, default: "" },
    specialCase: { type: String, default: "" },
    courseName: { type: String, default: "" },
    levelOfCourse: { type: String, default: "" },
    otherCourseOne: { type: String, default: "" },
    otherLevelOfCourse: { type: String, default: "" },
    otherField: { type: String, default: "" },
    field: { type: String, default: "" },
    duration: { type: String, default: "" },
    instructionMedium: { type: String, default: "" },
    coursePattern: { type: String, default: "" },
    otherDurationCourse: { type: String, default: "" },
    otherCourseTwo: { type: String, default: "" },
    otherMedium: { type: String, default: "" },
    instituteName: { type: String, default: "" },
    boardName: { type: String, default: "" },
    instituteType: { type: String, default: "" },
    ifPrivate: { type: String, default: "" },
    instituteAddress: { type: String, default: "" },
    instituteCity: { type: String, default: "" },
    institutePin: { type: String, default: "" },
    instituteDistrict: { type: String, default: "" },
    instituteState: { type: String, default: "" },
    instituteCountry: { type: String, default: "" },
    instituteEmail: { type: String, default: "" },
    instituteWebsite: { type: String, default: "" },
    instituteLandLineNo: { type: Number },
    instituteContactNo: { type: Number },
    instituteMobileNo: { type: Number },
    bonafideCertificateFrontImg: { type: Number },
    bonafideCertificateBackImg: { type: Number },
  },
  othertrustSupport: {
    otherTrustSupport: { type: String, default: "" },
    trustDetails: [
      {
        trustName: { type: String, default: "" },
        currentYearAmount: { type: Number, default: 0 },
        lastYearAmount: { type: Number, default: 0 },
        trustState: { type: String, default: "" },
        trustCity: { type: String, default: "" },
      },
    ],
    otherContribution: [
      {
        contributionSource: { type: String, default: "" },
        contributionCurrentyearAmunt: { type: Number, default: 0 },
        contributionLastyearAmunt: { type: Number, default: 0 },
        contributionState: { type: String, default: "" },
        contributionCity: { type: String, default: "" },
      },
    ],
    govtScholarshipApply: { type: String, default: "" },
    scholarAmount: { type: Number, default: 0 },
    scholarYear: { type: Date, default: Date.now },
    scholarName: { type: String, default: "" },
    applicationId: { type: String, default: "" },
    applicationPass: { type: String, default: "" },
  },
  organizationSupportFamily: {
    receivedSupport: { type: Boolean },
    supportFamilyDetails: [
      {
        memberName: { type: String, default: "" },
        memberId: { type: String, default: "" },
        course: { type: String, default: "" },
        amountReceived: { type: Number },
        financialYear: { type: Date },
        howManyYearsGet: { type: Number },
      },
    ],
    otherSupport: [
      {
        memberName: { type: String, default: "" },
        memberId: { type: String, default: "" },
        scheme: { type: String, default: "" },
        amountreceived: { type: Number },
        financialYear: { type: Date },
      },
    ],
  },
  familyDeclaration: {
    courseName: { type: String, default: "" },
    applicantName: { type: String, default: "" },
    parentName: { type: String, default: "" },
    place: { type: String, default: "" },
    date: { type: Date },
    studentPhoto: { type: String, default: "" },
    studentSign: { type: String, default: "" },
    parentSign: { type: String, default: "" },
  },
  currentAcademicDetails: {
    currentlyStudingIn: {type: String, default: ""},
    currentSpecialCase: {type: String, default: ""},
    currentlyCourseName: {type: String, default: ""},
    currentlyLevelOfCourse: {type: String, default: ""},
    currentlyField: {type: String, default: ""},
    currentlyDuration: {type: String, default: ""},
    currentlyMediumOfInstruction: {type: String, default: ""},
    currentlyPatternOfTheCourse: {type: String, default: ""},
    currentlyInstituteName: {type: String, default: ""},
    currentlyBoardName: {type: String, default: ""},
    currentlyInstitutionType: {type: String, default: ""},
    currentlyIfPrivate: {type: String, default: ""},
    currentlyInstitutionAddress: {type: String, default: ""},
    currentlyInstitutionCity: {type: String, default: ""},
    currentlyInstitutionDistrict: {type: String, default: ""},
    currentlyInstitutionState: {type: String, default: ""},
    currentlyInstitutionCountry: {type: String, default: ""},
    currentlyInstitutionEmail: {type: String, default: ""},
    currentlyInstitutionWebsite: {type: String, default: ""},
    currentlyInstitutionPin: {type: String, default: ""},
    currentlyInstitutionBonafidfrontImg: {type: String, default: ""},
    currentlyInstitutionBonafidBackImg: {type: String, default: ""},
    currentlyInstitutionlandLine: {type: String, default: ""},
    currentlyInstitutionContact: {type: String, default: ""},
    currentlyInstitutionContact: {type: String, default: ""},
    currentlyInstitutionMobile: {type: String, default: ""},
  },
  feesInformation : {
    termFees:{type: String, default: 0},
    tutionFees:{type: String, default: 0},
    otherFees:{type: String, default: 0},
    totalFees:{type: String, default: 0},
    coachingFees:{type: String, default: 0},
    hostelFees:{type: String, default: 0},
    meesFees:{type: String, default: 0},
    conveance:{type: String, default: 0},
    bookStationary:{type: String, default: 0},
    projectInstrument:{type: String, default: 0},
    anyOther:{type: String, default: 0},
    totalABC:{type: String, default: 0},
    ownContribute:{type: String, default: 0},
    totalABCD:{type: String, default: 0},
  },
  bankDetails:{
    nameAsPassBook: {type: String, default: ""},
    AcountNO: {type: String, default: ""},
    BankName: {type: String, default: ""},
    Branch: {type: String, default: ""},
    ifsc: {type: String, default: ""},
    passBookFrontImg: {type: String, default: ""},
    passBookBackImg: {type: String, default: ""},
  },
  addedBy: { type: String, default: ""},
  studentCode: { type: String, default: "" },
  isConfirm: { type: Boolean, default: false },
  saveAsDraft: { type: Boolean, default: false },
  isDeleted: { type: Boolean, default: false },
  formAcceptStatus: { type: Boolean, default: false },
  updatedStatus: { type: Boolean, default: false },
  createdOn: { type: Date, default: Date.now },
  updatedOn: { type: Date, default: Date.now },
});

module.exports = mongoose.model("studentData", studentSchema);
