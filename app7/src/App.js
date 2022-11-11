import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    const slider = setInterval(
      () =>
        setIndex((ind) => {
          return ind + 1;
        }),
      3000
    );
    return () => clearInterval(slider);
  }, [index]);
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>Rievews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, indexPerson) => {
          let position = "nextSlide";
          if (index === indexPerson) position = "activeSlide";
          if (
            indexPerson === index - 1 ||
            (index === 0 && indexPerson === people.length - 1)
          ) {
            position = 'lastSlide';
          }
          return (
            <Person
              key={person.id}
              position={position}
              className={position}
              {...person}
            />
          );
        })}
        <button
          className="prev"
          onClick={() =>
            setIndex((ind) => {
              return ind - 1;
            })
          }
        >
          <FiChevronLeft />
        </button>
        <button
          className="next"
          onClick={() =>
            setIndex((ind) => {
              return ind + 1;
            })
          }
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

const Person = ({ id, image, title, name, quote, position }) => {
  return (
    <article className={position}>
      <img src={image} alt={name} className="person-img" />
      <h4>{name}</h4>
      <p className="title">{title}</p>
      <p className="text">{quote}</p>
      <FaQuoteRight className="icon" />
    </article>
  );
};
export default App;
