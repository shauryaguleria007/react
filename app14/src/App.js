import React from "react";
import { useGlobalContext } from "./context";

// components
import Navbar from "./navbar";
import CartContainer from "./cartContainer";
// items

function App() {
  // if (loading) {
  //   return (
  //     <div className='loading'>
  //       <h1>Loading...</h1>
  //     </div>
  //   )
  // }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
