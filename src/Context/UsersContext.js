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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  //CREATE NEW USER
  const handleSubmit = async (e) => {
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
      alert("This email adress is already used! Try another", error.message);
      navigate("/login");
    }
  };

  return (
    <UsersContext.Provider
      value={{ userData, setUserData, handleChange, handleSubmit }}
    >
      {children}
    </UsersContext.Provider>
  );
};
