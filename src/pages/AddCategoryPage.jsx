import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { usePostCategoryMutation } from "../source/api/CategoryApi";
import { usePostCategoryMutation } from "../source/api/RootApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { setCredentials } from "../../source/storage/AuthSlice";

import {
  Login,
  Input,
  TheButtons,
  Button,
  DetailForm,
  LinkStyle,
} from "./Customers/AuthenticationStyle";

const AddCategoryPage = () => {
  const userInfo = useSelector((state) =>
    state.auth.userInfo ? state.auth.userInfo : ""
  );
  const { data: userData } = userInfo;

  //   console.log(userInfo.data.access);

  const [parentCategory, { data, error }] = usePostCategoryMutation();

  //   const dispatch = useDispatch();

  const [loginFormData, setLoginFormData] = useState({
    name: "",
    // password: "",
  });

  //   const navigate = useNavigate();

  const InputHandler = (event) => {
    setLoginFormData({
      ...loginFormData,
      [event.target.name]: event.target.value,
    });
  };
  const formData = new FormData();

  const SubmitHandler = async (e) => {
    // const SubmitHandler = (e) => {
    let result;
    e.preventDefault();

    formData.append("name", loginFormData.name);
    // formData.append("password", loginFormData.password);

    result = await parentCategory({ formData });
    // parentCategory({ formData });

    if (result.data) {
      toast(`Parent Category Added Successful `);
      // dispatch(setCredentials({ ...result }));
    } else if (result.error) {
      toast(`Login Failed: ${result.error.data.detail}`);
    }
    // console.log(result);

    setLoginFormData({
      ...loginFormData,
      name: "",
      // password: "",
    });
  };

  useEffect(() => {
    setLoginFormData({
      ...loginFormData,
      name: "",
      //   password: "",
    });
  }, []);

  return (
    <Login>
      <DetailForm onSubmit={SubmitHandler}>
        <h1>Add Category Page</h1>
        <div>
          <Input>
            <label htmlFor="name">name</label>
            <input
              type="text"
              id="name"
              maxLength={50}
              required
              placeholder="Enter name"
              name="name"
              value={loginFormData.name}
              onChange={InputHandler}
            />
          </Input>
          {/* <Input>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              maxLength={50}
              required
              name="password"
              placeholder="Enter Password"
              value={loginFormData.password}
              onChange={InputHandler}
            />
          </Input> */}
          <p>
            <span>
              <i>Don't have account yet? </i>
            </span>
            <LinkStyle to="/register"> Register</LinkStyle>
          </p>
          <ToastContainer />

          <TheButtons>
            <Button>Post</Button>
          </TheButtons>
          {/* <input
            type="button"
            id="button"
            disabled={!buttonEnable}
            value={"Submit"}
            onClick={SubmitHandler}
          /> */}
        </div>
      </DetailForm>
    </Login>
  );
};

export default AddCategoryPage;
