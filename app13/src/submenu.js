import { useGlobalContext } from "./context";
import { useEffect, useRef, useState } from "react";

const SubMenu = () => {
  const {
    submenuState,
    location,
    page: { page, links },
  } = useGlobalContext();
  const container = useRef(null);
  const [colums, setColums] = useState("col-2");
  useEffect(() => {
    setColums("col-3");
    if (links.length === 3) {
      setColums("col-3");
    }
    if (links.length > 3) {
      setColums("col-4");
    }
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.top = `${bottom}px`;
    submenu.style.left = `${center}px`;
  }, [location,links]);
  return (
    <aside className={`submenu ${submenuState ? "show" : ""}`} ref={container}>
      <h4> {page}</h4>
      <div className={`submenu-center ${colums}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a href={url} key={index}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default SubMenu;
