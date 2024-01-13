import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import LogoutNoticeModal from "./LogoutNoticeModal"; // Adjust the path accordingly
import { login, userState, logout } from "../../source/storage/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isToken } = useSelector((state) => state.auth);

  const handleLogout = () => {
    // Implement your logout logic here
    // For example, clearing authentication tokens or redirecting to the login page
    console.log("Logging out...");
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <div className="text-success" onClick={() => handleLogout()}>
        <strong> Logout</strong>
      </div>
    </>
  );
};

export default Logout;
