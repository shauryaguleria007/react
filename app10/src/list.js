import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ items, setList, showAlert, edit }) => {
 
    const removeItem = (id, msg = "item") => {
    showAlert(true, `${msg} removed`, "success");
    setList(items.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    edit.setEditing(true);
    edit.setEditId(id);
  };
  return (
    <div className="grocery-list">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <ListItem
            key={id}
            title={title}
            id={id}
            removeItem={removeItem}
            editItem={editItem}
          />
        );
      })}
    </div>
  );
};

const ListItem = ({ title, id, removeItem, editItem }) => {
  return (
    <article className="grocery-item ">
      <p className="title">{title}</p>
      <div className="btn-container">
        <button type="button" className="edit-btn" onClick={() => editItem(id)}>
          <FaEdit />
        </button>
        <button
          type="button"
          className="delete-btn"
          onClick={() => removeItem(id, title)}
        >
          <FaTrash />
        </button>
      </div>
    </article>
  );
};
export default List;
