import { useState, useEffect } from "react";
import Alert from "./alert";
import List from "./list";

const getLocalStorage = () => {
  const list = localStorage.getItem("list");
  if (list) return JSON.parse(list);
  return [];
};

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "please enter value", "danger");
    } else if (name && editing) {
      setList(
        list.map((item) => {
          if (item.id === editId) return { ...item, title: name };
          return item;
        })
      );
      showAlert(true, "edited successfully", "success");
      setEditing(false);
      setEditId(null);
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
    }
    setName("");
  };

  const handelClear = () => {
    showAlert(true, "list cleared", "success");

    setList([]);
    setName("");
    setEditId(null);
    setEditing(false);
  };

  return (
    <section className="section-center">
      <form action="submit" className="grocery-form" onSubmit={handelSubmit}>
        {alert.show && <Alert {...alert} showAlert={showAlert} />}
        <h3>grocery list</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="eg. eggs"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button className="submit-btn">{editing ? "edit" : "submit"}</button>
          &nbsp;
          {editing && (
            <button
              className="submit-btn"
              onClick={() => {
                setEditing(false);
                setEditId(null);
              }}
            >
              cancel
            </button>
          )}
        </div>
      </form>
      <div className="grocery-container">
        <List
          items={list}
          setList={setList}
          showAlert={showAlert}
          edit={{ setEditId, setEditing }}
        />
        {list.length !== 0 && (
          <button className="clear-btn" onClick={() => handelClear()}>
            clear
          </button>
        )}
      </div>
    </section>
  );
}

export default App;
