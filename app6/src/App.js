import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async (url) => {
    setLoading(true);
    const response = await (await fetch(url)).json();
    setJobs(response);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs(url);
  }, []);
  if (loading)
    return (
      <section className="loading">
        <h1>Loading...</h1>
      </section>
    );

  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <Job {...jobs[value]} />
      </div>
    </section>
  );
}

const Job = ({ company, dates, duties, title }) => {
  return (
    <article className="jobs-info">
      <h3>{title}</h3>
      <h4>{company}</h4>
      <p className="job-date">{dates}</p>
      {duties.map((duty, index) => {
        return (
          <div key={index} className="job-desc">
            <FaAngleDoubleRight className="job-icon" />
            <p>{duty}</p>
          </div>
        );
      })}
    </article>
  );
};
export default App;
