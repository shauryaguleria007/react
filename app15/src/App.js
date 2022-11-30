import { useState } from "react";
import ReactMarkdown from "react-markdown";

const App = () => {
  const [MarkDown, setMarkDown] = useState("##markdown preview");
  return (
    <main>
      <section className="markdown">
        <textarea
          className="input"
          value={MarkDown}
          onChange={(e) => setMarkDown(e.target.value)}
        ></textarea>
        <article className="result">
          <ReactMarkdown>{MarkDown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
};

export default App;
