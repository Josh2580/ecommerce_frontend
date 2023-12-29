import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { useLoginUserMutation } from "../features/Post/PostApi";
// import { setCredentials } from "../features/auth/authSlice";

import {
  Login,
  Input,
  TheButtons,
  Button,
  DetailForm,
  LinkStyle,
} from "../sellers/AuthenticationStyle";

const SellersLoginPage = () => {
  //   const userInfo = useSelector((state) =>
  //     state.auth.userInfo ? state.auth.userInfo : ""
  //   );
  //   const { data: userData } = userInfo;

  //   const [loginUser] = useLoginUserMutation();

  //   const dispatch = useDispatch();

  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const InputHandler = (event) => {
    setLoginFormData({
      ...loginFormData,
      [event.target.name]: event.target.value,
    });
  };

  const formData = new FormData();

  const SubmitHandler = (e) => {
    e.preventDefault();
    formData.append("email", loginFormData.email);
    formData.append("password", loginFormData.password);
    for (var key of formData.entries()) {
      console.log(key[0] + " , " + key[1]);
    }
  };

  //   useEffect(() => {
  //     userData && navigate("/dashboard");
  //   }, [userData, navigate]);

  return (
    <Login>
      <DetailForm onSubmit={SubmitHandler}>
        <h1>Sellers Login Page</h1>
        <div>
          <Input>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              maxLength={50}
              required
              name="email"
              placeholder="Enter Email"
              value={loginFormData.email}
              onChange={InputHandler}
              // onChange={handlerUsernameInput}
            />
          </Input>
          <Input>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              maxLength={20}
              required
              name="password"
              placeholder="Enter Password"
              value={loginFormData.password}
              onChange={InputHandler}
            />
          </Input>
          <p>
            <span>
              <i>Don't have account yet? </i>
            </span>
            <LinkStyle to="/register"> Register</LinkStyle>
          </p>

          <TheButtons>
            <Button>Login</Button>
          </TheButtons>
        </div>
      </DetailForm>
    </Login>
  );
};

export default SellersLoginPage;
