import { Outlet } from "react-router";
import Navbar from "./Components/Navbar";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import 'hover.css/css/hover-min.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // once:true -> animate only first time
  }, []);

  return (
    <div className="max-w-7xl mx-auto overflow-x-hidden">
      <Navbar />
      <Outlet />
      
    </div>
  );
}

export default App;
