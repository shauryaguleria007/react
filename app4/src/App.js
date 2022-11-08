import SingleQuestion from "./singleQuestion";
import { useState } from "react";
import data from "./data";
const App = () => {
  const [questions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Question and answer about login</h3>
        <section className="info">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
};
export default App;
