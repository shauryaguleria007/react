import Values from "values.js";
import { useState } from "react";
import SingleColor from "./singleColor";
function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  const handelSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setError(false);
      setList(colors);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form action="submit" onClick={handelSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
          />
          <button className="btn">submit</button>
        </form>
      </section>
      {error ? <h3>color not valid</h3> : <ColorSection list={list} />}
    </>
  );
}

const ColorSection = ({ list }) => {
  return (
    <section className="colors">
      {list.map((singleColor, index) => {
        return (
          <SingleColor
            key={index}
            {...singleColor}
            index={index}
            hexColor={`#${singleColor.hex}`}
          />
        );
      })}
    </section>
  );
};

export default App;
