import React from "react";
import { Navigate, useLocation } from "react-router";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import useAuth from "../hooks/useAuth";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  //   console.log(location);
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (user) {
    // console.log(user)
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoutes;