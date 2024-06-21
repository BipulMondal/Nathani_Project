import { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);

  const updateModal = () => {
    setOpenModal(false);
  };

  return (
    <GlobalContext.Provider value={{openModal, setOpenModal, updateModal}}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
