import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import WelcomePage from "./Components/WelcomePage";
import AppointmentPage from "./Components/AppointmentPage";
import Profile from "./Components/Profile";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
