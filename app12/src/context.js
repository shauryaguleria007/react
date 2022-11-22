import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [sidebarState, setSidebarState] = useState(false);
  const [modalState, setModalState] = useState(false);
  const openSidebar = () => {
    setSidebarState(true);
  };
  const closeSidebar = () => {
    setSidebarState(false);
  };
  const openModal = () => {
    setModalState(true);
  };
  const closeModal = () => {
    setModalState(false);
  };

  return (
    <AppContext.Provider
      value={{
        sidebarState,
        modalState,
        openSidebar,
        closeSidebar,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider };
