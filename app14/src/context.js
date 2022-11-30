import React, { useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import reducer from "./reducer";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

const initialState = {
  loading: true,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: "render_total" });
  }, [state.cart]);

  useEffect(() => {
    fetchData();
  }, []);
  const clearCart = () => {
    dispatch({ type: "clear_cart" });
  };

  const removeItem = (id) => {
    dispatch({ type: "remove_item", id });
  };

  const increaseItem = (id) => {
    dispatch({ type: "increase_item", id });
  };

  const decreaseItem = (id) => {
    dispatch({ type: "decrease_item", id });
  };

  const fetchData = async () => {
    dispatch({ type: "loading" });
    let data = await fetch(url);
    data = await data.json();
    dispatch({ type: "display", data });
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseItem,
        decreaseItem,
        fetchData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
