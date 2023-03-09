import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";

const Layout = () => {
  const [pageTitle, setPageTitle] = useState("");

  const handleTitleText = (text) => {
    setPageTitle(text);
  };

  return (
    <>
      {/*------------------------------- Topbar Navber ------------------------------*/}
      <Topbar pageTitle={pageTitle} />
      {/*------------------------------- Secondary Navber ------------------------------*/}
      {/*------------------------------- Sideber ------------------------------*/}
      <Sidebar changeTitleText={handleTitleText} />
      {/*------------------------------- #Sideber ------------------------------*/}
      {/*------------------------------- Main section ------------------------------*/}
      <section className="main">
        <div className="container">
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default Layout;
