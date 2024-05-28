import React, { useContext } from "react";
import { UsersContext } from "../Context/UsersContext";

const Profile = () => {
  const { user } = useContext(UsersContext);
  console.log(user);
  return (
    <>
      <h1>{user.email}</h1>
      {/* Codes will be written here */}
    </>
  );
};

export default Profile;
