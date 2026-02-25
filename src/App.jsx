import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-[oklch(0.19_0.06_269.71)] min-h-screen">
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
}

export default App;
