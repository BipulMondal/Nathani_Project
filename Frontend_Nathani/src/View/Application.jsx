import React from 'react'
import Loader from '../Loader/Loader';
import { useLocation, useNavigate } from 'react-router-dom';

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
      setorganizationSupport
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
    const [buttonShow, setbuttonSchow] = useState(false)

    const tabs = [
        "current_academic_details",
        "fees_details",
        "bank_details",
       
      ];
      const tabNames = {
        current_academic_details: "Current Academic Details",
        fees_details: "Fees Details",
        bank_details: "Bank Details",
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
                      {tabNames[tab]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Application
