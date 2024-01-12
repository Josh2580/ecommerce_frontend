import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { useRegisterUserMutation } from "../features/Post/PostApi";
// import { login } from "../features/auth/authSlice";
import { useRegisterUserMutation } from "../../source/api/authenticationApi";

import {
  RegisterStyle,
  Input,
  TheButtons,
  Button,
  DetailForm,
  LinkStyle,
} from "../Customers/AuthenticationStyle";
// import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { login } from "../../source/storage/AuthSlice";
// import Toast from "react-bootstrap/Toast";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterPage = () => {
  //   const userInfo = useSelector((state) => state.auth.userInfo);
  //   if (userInfo === undefined) {
  //     console.log("its Undefined");
  //   } else {
  //     const { data: userData } = userInfo;
  //   }

  //   const { data: userData } = userInfo;

  const [registerUser, { data, isError, error, isSuccess }] =
    useRegisterUserMutation();

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const [email, setEmail] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [register, setRegister] = useState(false);

  const navigate = useNavigate();

  // console.log(gender);

  const SubmitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast("Password does not match");
    } else {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("first_name", first_name);
      formData.append("last_name", last_name);
      formData.append("password", password);
      const userData = await registerUser({ formData });
      // console.log(userData?.error?.data);
      if (userData?.error?.data?.password) {
        let RegError = userData.error.data.password;

        RegError.map((val) => toast(val));
      } else if (userData?.error?.data?.email) {
        let RegError = userData.error.data.email;
        console.log(RegError);
        RegError.map((val) => toast(val));
      } else {
        navigate("/customer/login");
      }

      // dispatch(login({ ...userData }));
      // navigate(-1);
    }
  };

  useEffect(() => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setFirst_name("");
    setLast_Name("");
  }, []);

  let symbols = "!@#$%^&*()-=_+[]{ };':|,./<>?|`~";

  return (
    <RegisterStyle>
      <DetailForm as="form" onSubmit={SubmitHandler}>
        <h3 className=" text-center">Register </h3>
        <div className="d-flex flex-column gap-3">
          <Input>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              maxLength={50}
              required
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // onChange={handlerUsernameInput}
            />
          </Input>

          <Input>
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              id="first_name"
              maxLength={50}
              required
              placeholder="Enter First Name"
              value={first_name}
              onChange={(e) => setFirst_name(e.target.value)}
              // onChange={handlerPasswordInput}
            />
          </Input>

          <Input>
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              id="last_name"
              maxLength={50}
              required
              placeholder="Enter Last Name"
              value={last_name}
              onChange={(e) => setLast_Name(e.target.value)}
              // onChange={handlerPasswordInput}
            />
          </Input>

          <Input>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              maxLength={50}
              required
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // onChange={handlerPasswordInput}
            />
          </Input>

          <div className="d-flex flex-column bg-white p-2 rounded">
            <span style={{ fontSize: "11px" }}>
              {" "}
              <span className="text-danger fw-bolder ">*</span> Password should
              not be similar to the email
            </span>
            <span style={{ fontSize: "11px" }}>
              {" "}
              <span className="text-danger fw-bolder">*</span> Password should
              contain atleast 8 characters
            </span>
            <span style={{ fontSize: "11px" }}>
              {" "}
              <span className="text-danger fw-bolder">*</span> Password should
              contain uppercase, lowercase, numbers and symbols E.g: {symbols}
            </span>
            <span style={{ fontSize: "11px" }}>
              {" "}
              <span className="text-danger fw-bolder">*</span> Password should
              not be too common
            </span>
          </div>

          <Input>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="confirmPassword"
              id="confirmPassword"
              maxLength={50}
              required
              placeholder="Pls Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              // onChange={handlerUsernameInput}
            />
          </Input>

          <p>
            <span>
              <i>Already Registered? </i>
            </span>
            <LinkStyle className="fw-bolder text-success" to="/customer/login">
              {" "}
              Login
            </LinkStyle>
          </p>

          <Button className="w-100 fw-bolder bg-success border-0 m-0">
            Register
          </Button>
          <ToastContainer />
        </div>
      </DetailForm>
    </RegisterStyle>
  );
};

export default RegisterPage;
