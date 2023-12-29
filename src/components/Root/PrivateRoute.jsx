import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useGetUserProfileQuery } from "../../source/api/authenticationApi";
import { userState } from "../../source/storage/AuthSlice";

const PrivateRoute = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isToken } = useSelector((state) => state.auth);
  const { data: userData } = useGetUserProfileQuery() || {};

  useEffect(() => {
    if (userData) {
      dispatch(userState(userData));
    }
    !isToken && navigate("/customer/login");
  }, [isToken, userData]);

  return isToken && <Outlet />;
};

export default PrivateRoute;
