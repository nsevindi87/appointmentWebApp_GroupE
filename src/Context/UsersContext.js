import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

export const UsersContext = createContext();

export const UsersContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  //CREATE NEW USER
  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    try {
      // Control email adress if it is exist
      const emailResponse = await fetch(
        "http://localhost:3302/users/check-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: userData.email }),
        }
      );
      const emailData = await emailResponse.json();
      if (!emailResponse.ok) {
        throw new Error(emailData.error);
      }

      // If email is usable, then save it!
      const response = await fetch("http://localhost:3302/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (!response.ok) {
        throw new Error("Failed to add user");
      }

      alert("User is created");
      navigate("/");
      setUserData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
    } catch (error) {
      setUserData({
        email: "",
      });
      alert("This email adress is already used! Try another", error.message);
      navigate("/login");
    }
  };

  //LOGIN
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3302/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const userData = await response.json();
        await setUser(userData);
        setLoggedIn(true);
        console.log(user);
        navigate("/");
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login");
    }
  };

  return (
    <UsersContext.Provider
      value={{
        userData,
        setUserData,
        handleChange,
        handleSignupSubmit,
        email,
        setEmail,
        password,
        setPassword,
        handleLoginSubmit,
        loggedIn,
        setLoggedIn,
        user,
        setUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
