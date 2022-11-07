import { useEffect, useState } from "react";
import Loading from "./loading";
import Tours from "./tours";
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const fetchTours = async () => {
    try {
      setLoading(true);
      const response = await (await fetch(url)).json();
      setTours(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      return (
        <div className="loading">
          <h1>Error</h1>
        </div>
      );
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);
  if (loading) return <Loading />;
  return (
    <>
      <main>
        <Tours tours={tours} />
      </main>
    </>
  );
}

export default App;
