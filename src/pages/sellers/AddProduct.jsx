import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  RegisterStyle,
  Input,
  TheButtons,
  Button,
  DetailForm,
  LinkStyle,
} from "../sellers/AuthenticationStyle";
import { AccHeader, UserDiv } from "./SellersDashboard";
import { SellersMainHeader } from "./SellersHeader";

const AddProduct = () => {
  //   const userInfo = useSelector((state) => state.auth.userInfo);
  //   if (userInfo === undefined) {
  //     console.log("its Undefined");
  //   } else {
  //     const { data: userData } = userInfo;
  //   }

  //   const { data: userData } = userInfo;

  //   const [registerUser, { data, isError, error, isSuccess }] =
  //     useRegisterUserMutation();

  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [date_of_birth, set_date_of_birth] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [register, setRegister] = useState(false);

  const navigate = useNavigate();

  // console.log(gender);

  const SubmitHandler = async (e) => {};
  //     e.preventDefault();
  //     if (password !== confirmPassword) {
  //       alert("Password does not match");
  //     } else {
  //       const userData = await registerUser({
  //         username,
  //         email,
  //         password,
  //         date_of_birth,
  //         gender,
  //       });
  //       console.log(userData);

  //       dispatch(setCredentials({ ...userData }));
  //       navigate("/dashboard");
  //     }
  //   };

  //   useEffect(() => {
  //     userData && navigate("/dashboard");
  //   }, [userInfo]);

  useEffect(() => {
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setGender("default");
    set_date_of_birth("");
  }, []);

  return (
    <UserDiv>
      <AccHeader>
        <SellersMainHeader />
      </AccHeader>
      <RegisterStyle>
        <DetailForm onSubmit={SubmitHandler}>
          <h1>Add Product</h1>
          <div>
            <Input>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                maxLength={50}
                required
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                // onChange={handlerUsernameInput}
              />
            </Input>

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
              <label htmlFor="date">Product Images</label>
              <input
                type="file"
                id="date"
                maxLength={50}
                required
                placeholder="Select Date of Birth"
                value={date_of_birth}
                onChange={(e) => set_date_of_birth(e.target.value)}
                // onChange={handlerPasswordInput}
              />
            </Input>

            <Input>
              <label htmlFor="gender">Gender</label>
              <select
                defaultValue="default"
                name="gender"
                id="gender"
                required
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="default" disabled>
                  Select your gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
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

            <Input>
              <label htmlFor="confirmPassword">Password</label>
              <input
                type="confirmPassword"
                id="confirmPassword"
                maxLength={50}
                required
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                // onChange={handlerUsernameInput}
              />
            </Input>

            <TheButtons>
              <Button>Add Product</Button>
            </TheButtons>
          </div>
        </DetailForm>
      </RegisterStyle>
    </UserDiv>
  );
};

export default AddProduct;
