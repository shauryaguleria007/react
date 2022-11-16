import { useState, useEffect } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState("0");
  const [text, setText] = useState([]);

  const handelSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setText(data.slice(0, amount));
  };  useEffect(() => {
    if (count < 0 || count ==="") setCount("0");
    if (count > data.length) setCount(data.length - 1);
  }, [count]);
  return (
    <section className="section-center ">
      <h3>tired of old Lorem ipsum ?</h3>
      <form action="" className="lorem-form" onClick={handelSubmit}>
        <label htmlFor="amount">Paragtaph</label>
        <input
          type="number"
          name="amount"
          id="amount"
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
        <button className="btn">generate</button>
      </form>
      <article className="lorem-text">
        {text.map((para, index) => {
          return <p key={index}>{para}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
