import Menu from "./menu";
import Categories from "./categories";
import data from "./data";
import { useState } from "react";
const categories = ["all", ...new Set(data.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(data);
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(data);
      return;
    }
    const newCategory = data.filter((item) => item.category === category);
    setMenuItems(newCategory);
  };
  return (
    <main>
      <secton className="menu section ">
        <div className="title">
          <h2>our menu </h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </secton>
    </main>
  );
}

export default App;
