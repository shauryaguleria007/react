import React, { useState,useContext } from "react";
import sublink from "./data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [sideBarState, setSideBarState] = useState(false);
  const [submenuState, setSubmenuState] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });

  const openSidebar = () => {
    setSideBarState(true);
  };

  const closeSidebar = () => {
    setSideBarState(false);
  };

  const openSubmenu = (text, coordinates) => {
    const page = sublink.find((link) => link.page === text);
    if (page !== undefined) setPage(page);
    
    setSubmenuState(true);
    setLocation(coordinates);
  };

  const closeSubmenu = () => {
    setSubmenuState(false);
  };
  return (
    <AppContext.Provider
      value={{
        sideBarState,
        submenuState,
        location,
        page,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
