import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetUserProfileQuery } from "../../source/api/authenticationApi";
// import { useRegisterUserMutation } from "../features/Post/PostApi";
// import { setCredentials } from "../features/auth/authSlice";

import {
  RegisterStyle,
  Input,
  TheButtons,
  Button,
  DetailForm,
  LinkStyle,
} from "./AuthenticationStyle";
import { AccHeader, UserDiv } from "./UsersDashboard";
import { AccountMainHeader } from "./AccountHeader";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
// import { UserDiv } from "../customers/UsersDashboard";
import UserImg from "../../assets/user_image.webp";

const Profile = () => {
  const { data, isError, error, isSuccess } = useGetUserProfileQuery();
  // console.log(data);

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
      {/* <AccHeader>
        <AccountMainHeader />
      </AccHeader> */}
      {/* <RegisterStyle>
        <DetailForm onSubmit={SubmitHandler}>
          <h1>Profile Page</h1>
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
              <label htmlFor="date">Date of Birth</label>
              <input
                type="date"
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

            <p>
              <span>
                <i>Already Registered? </i>
              </span>
              <LinkStyle to="/login"> Login</LinkStyle>
            </p>

            <TheButtons>
              <Button>Register</Button>
            </TheButtons>
          </div>
        </DetailForm>
      </RegisterStyle> */}
      <Container className="my-2">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card>
              <Card.Body>
                <div className="text-center mb-4">
                  <Image
                    // src="https://placekitten.com/150/150" // Replace with the user's profile image URL
                    src={UserImg} // Replace with the user's profile image URL
                    roundedCircle
                    alt="User Profile"
                    width={150}
                    height={150}
                  />
                </div>
                <h3 className="text-center mb-3">John Doe</h3>
                <p className="text-muted text-center mb-3">Web Developer</p>

                <hr />

                <div className="mb-3">
                  <p>
                    <strong>Email:</strong> john.doe@example.com
                  </p>
                  <p>
                    <strong>Phone:</strong> (555) 123-4567
                  </p>
                  <p>
                    <strong>Location:</strong> City, Country
                  </p>
                </div>

                <hr />

                <div className="text-center">
                  <p>
                    Welcome to our eCommerce platform! If you have any questions
                    or need assistance, feel free to contact us.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </UserDiv>
  );
};

export default Profile;
