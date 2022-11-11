import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((categori) => {
        return (
          <button className="filter-btn" onClick={() => filterItems(categori)}>
            {categori}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
