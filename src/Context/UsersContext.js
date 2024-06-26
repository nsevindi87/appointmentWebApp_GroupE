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
  const [allUsers, setAllUsers] = useState([]);
  const [user, setUser] = useState([]);
  const [doctorList, setDoctorList] = useState([]);

  /* 
    USER FUNCTIONS ==========================================
*/

  const getAllUsers = async () => {
    try {
      const response = await fetch("http://localhost:3302/users");
      if (response.ok) {
        const data = await response.json();
        setAllUsers(data);
      } else {
        console.error("Failed to fetch appointments");
      }
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  const getDoctorList = async () => {
    try {
      const response = await fetch("http://localhost:3302/users");
      if (response.ok) {
        const data = await response.json();
        const doctorUsers = data.filter((user) => user.role === "Doctor");
        setDoctorList(doctorUsers);
      } else {
        console.error("Failed to fetch appointments");
      }
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  //Get Data From Sign Up Form to state
  const handleSignupChange = (e) => {
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
        password: "",
      });
      alert("This email adress is already used! Try another", error.message);
      //navigate("/login");
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
        setUser(userData);
        setLoggedIn(true);
        setEmail("");
        setPassword("");
        navigate("/");
      } else {
        alert("Invalid email or password");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login");
    }
  };

  /* 
    APPOINTMENT FUNCTIONS ==========================================
*/
  const [appointments, setAppointments] = useState([]);
  const [userAppointments, setUserAppointments] = useState([]);
  const [appoFormData, setAppoFormData] = useState({
    id: null,
    userId: "",
    illness: "",
    doctorName: "",
    description: "",
    date: "",
    time: "",
  });

  const fetchAppointments = async () => {
    try {
      const response = await fetch("http://localhost:3302/appointments");
      if (response.ok) {
        const data = await response.json();
        setAppointments(data);
      } else {
        console.error("Failed to fetch appointments");
      }
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  const getFilteredAppointments = async () => {
    try {
      const response = await fetch("http://localhost:3302/appointments");
      if (response.ok) {
        const data = await response.json();
        const filteredAppointments = data.filter(
          (appo) => appo.userId === user.id
        );
        setUserAppointments(filteredAppointments);
      } else {
        console.error("Failed to fetch appointments");
      }
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  // Formun gönderilmesi
  const handleAppointmentSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3302/appointments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appoFormData),
      });

      setTimeout(() => {
        navigate("/profile");
      }, 2000);

      setAppoFormData({
        id: null,
        userId: "",
        illness: "",
        doctorName: "",
        description: "",
        date: "",
        time: "",
      });
      if (!response.ok) {
        throw new Error("Failed to create post");
      }
    } catch (error) {
      console.error("Kayit yapilamadi");
    }
  };

  const deleteUserAppointment = async (pId) => {
    try {
      await fetch(`http://localhost:3302/appointments/${pId}`, {
        method: "DELETE",
      });
      console.log("Silindi");
    } catch (error) {
      console.log(error);
    }
    getFilteredAppointments(user.id);
  };

  return (
    <UsersContext.Provider
      value={{
        getAllUsers,
        allUsers,
        setAllUsers,
        userData,
        setUserData,
        handleSignupChange,
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
        fetchAppointments,
        appointments,
        setAppointments,
        getFilteredAppointments,
        userAppointments,
        setUserAppointments,
        appoFormData,
        setAppoFormData,
        handleAppointmentSubmit,
        doctorList,
        getDoctorList,
        deleteUserAppointment,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
