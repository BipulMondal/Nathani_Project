import { createContext, useState } from "react";
import axios from "axios"
const baseUrl = "http://localhost:8088/api/v1/user/"

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [countryState, setCountryState] = useState(null);
  const [isLoading, setIsLoading] = useState(false)

  const updateModal = () => {
    setOpenModal(false);
  };

  console.log("sdddd", baseUrl+"get_country_state_city")

  const getCountryStateCity = async () => {
    setIsLoading(true)
    let res = await axios.get(`${baseUrl}get_country_state_city`)
    if(res && res.data.status){
      setCountryState(res?.data?.data)
      setIsLoading(false)
    }
    else{
      setIsLoading(false)
    }
  }





  return (
    <GlobalContext.Provider value={{openModal, setOpenModal, updateModal, getCountryStateCity,countryState, isLoading }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
