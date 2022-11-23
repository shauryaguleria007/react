import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Hero from "./hero";
import Submenu from "./submenu";
import { AppProvider } from "./context";

function App() {
  return (
    <AppProvider>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </AppProvider>
  );
}

export default App;
