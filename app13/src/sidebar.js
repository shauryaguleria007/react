import { FaTimes } from "react-icons/fa";
import sublinks from "./data";
import { useGlobalContext } from "./context";

const SideBar = () => {
  const { sideBarState, closeSidebar } = useGlobalContext();
  return (
    <aside className={`  ${sideBarState ? "show" :""} sidebar-wrapper`}>
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-sublinks">
          {sublinks.map((items, index) => {
            const { links, page } = items;
            return (
              <article key={index}>
                <h4>{page}</h4>
                {links.map((link, index) => {
                  const { icon, label, url } = link;
                  return (
                    <a href={url} key={index}>
                      {icon}
                      {label}
                    </a>
                  );
                })}
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
