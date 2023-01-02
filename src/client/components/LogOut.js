import React from "react";

const LogOut = () => {
  const handleLogOut = () => {
    // Remove the token from local storage
    localStorage.removeItem("token");

    // Redirect the user to the login page
    window.location.replace("/signin");
  };

  return (
    <button onClick={handleLogOut}>
      Log Out
    </button>
  );
};

export default LogOut;
