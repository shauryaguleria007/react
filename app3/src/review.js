import {
  FaChevronLeft,
  FaChevronRight,
  FaPrescriptionBottle,
  FaQuoteRight,
} from "react-icons/fa";
import { useState } from "react";
import people from "./data";
const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const nextPerson = () => {
    setIndex((index) => {
      return (index + 1) % people.length;
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      if (index === 0) return people.length - 1;
      return index - 1;
    });
  };
  const randomPerson = () => {
    setIndex(() => {
      let random = index;
      while (random === index)
        random = Math.floor(Math.random() * people.length);
      return random;
    });
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        Random Reviews
      </button>
    </article>
  );
};
export default Review;
