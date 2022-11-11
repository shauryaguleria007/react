import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((item) => {
        return <MenuItem key={item.id} {...item} />;
      })}
    </div>
  );
};

const MenuItem = ({ id, title, img, desc, price }) => {
  return (
    <article className="menu-item">
      <img src={img} alt={title} className="photo" />
      <div className="item-info">
        <header>
          <h4>{title}</h4>
          <div className="price">{price}</div>
        </header>
        <p>{desc}</p>
      </div>
    </article>
  );
};
export default Menu;
