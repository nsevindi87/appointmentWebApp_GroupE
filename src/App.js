import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { UsersContextProvider } from "./Context/UsersContext";

function App() {
  return (
    <>
      <UsersContextProvider>
        <Navbar />
        <Outlet />
      </UsersContextProvider>
    </>
  );
}

export default App;
