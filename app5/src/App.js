import Menu from "./menu";
import Categories from "./categories";
import data from "./data";
import { useState, useEffects } from "react";

function App() {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState([]);
  return (
    <main>
      <secton className="menu section ">
        <div className="title">
          <h2>our menu </h2>
          <div className="underline"></div>
        </div>
        <Categories />
        <Menu items={menuItems} />
      </secton>
    </main>
  );
}

export default App;
