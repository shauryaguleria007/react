import { useEffect, useState } from "react";
import Loading from "./loading";
import Tours from "./tours";
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const removeTour = (id) => {
    setTours(
      tours.filter((tour) => {
        return tour.id !== id;
      })
    );
  };
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
  if (tours.length === 0)
    return (
      <>
        <div className="title">
          <h1>No tours left</h1>
          <button onClick={fetchTours} className="btn">
            Refresh
          </button>
        </div>
      </>
    );
  return (
    <>
      <main>
        <Tours tours={tours} removeTour={removeTour} />
      </main>
    </>
  );
}

export default App;
