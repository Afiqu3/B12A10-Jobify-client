import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const RootLayout = () => {
  const { loading } = useAuth();

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="overflow-hidden">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
