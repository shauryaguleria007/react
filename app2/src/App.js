import { useState } from "react";
import Loading from "./loading";
const url = "https://course-api.netlify.app/api/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  if (loading) return <Loading />;
}

export default App;
