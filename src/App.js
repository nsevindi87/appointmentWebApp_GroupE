import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import { UsersContextProvider } from "./Context/UsersContext";

function App() {
  return (
    <>
      <UsersContextProvider>
        <Header />
        <Outlet />
      </UsersContextProvider>
    </>
  );
}

export default App;
