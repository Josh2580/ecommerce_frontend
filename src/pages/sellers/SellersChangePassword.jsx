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
} from "./AuthenticationStyle";
import { SellersMainHeader } from "./SellersHeader";
import { AccHeader, UserDiv } from "./SellersDashboard";

const SellersChangePassword = () => {
  //   const userInfo = useSelector((state) =>
  //     state.auth.userInfo ? state.auth.userInfo : ""
  //   );
  //   const { data: userData } = userInfo;

  //   const [loginUser] = useLoginUserMutation();

  //   const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const SubmitHandler = async (e) => {
    // e.preventDefault();
    // const userData = await loginUser({ email, password });
    // // console.log(userData);
    // dispatch(setCredentials({ ...userData }));
    // setEmail("");
    // setPassword("");
    // navigate("/dashboard");
  };

  //   useEffect(() => {
  //     userData && navigate("/dashboard");
  //   }, [userData, navigate]);

  return (
    <UserDiv>
      <AccHeader>
        <SellersMainHeader />
      </AccHeader>
      <Login>
        <DetailForm onSubmit={SubmitHandler}>
          <h1>Sellers Change Password</h1>
          <div>
            <Input>
              <label htmlFor="new_password">New Password</label>
              <input
                type="password"
                id="new_password"
                maxLength={50}
                required
                placeholder="Enter New Password"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // onChange={handlerUsernameInput}
              />
            </Input>
            <Input>
              <label htmlFor="confirm_password">Confirm Password</label>
              <input
                type="password"
                id="confirm_password"
                maxLength={50}
                required
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                // onChange={handlerPasswordInput}
              />
            </Input>

            <TheButtons>
              <Button>Submit</Button>
            </TheButtons>
          </div>
        </DetailForm>
      </Login>
    </UserDiv>
  );
};

export default SellersChangePassword;
