import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router';
import Footer from '../../components/Footer/Footer';
import useAuth from '../../hooks/useAuth';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const RootLayout = () => {
  const { loading } = useAuth();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
