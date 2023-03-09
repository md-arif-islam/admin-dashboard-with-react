import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ changeTitleText }) => {
  const handleTitleText = (text) => {
    changeTitleText(text);
  };

  return (
    <div id="sideber" className="sideber">
      <ul className="sideber__ber">
        <h2 className="sideber__panel">Pharmacy Management System</h2>
        <li id="left" className="sideber__item active">
          <NavLink to="/">
            <i id="left" className="fas fa-tachometer-alt" />
            Dashboard
          </NavLink>
        </li>
        {/* Only For Admin */}
        <li id="left" className="sideber__item sideber__item--modify active">
          <NavLink
            to="/managers/add"
            onClick={() => handleTitleText("Add Manager")}
          >
            <i id="left" className="fas fa-user-plus" />
            Add Manager
          </NavLink>
        </li>
        <li id="left" className="sideber__item">
          <NavLink
            to="/managers"
            onClick={() => handleTitleText("All Managers")}
          >
            <i id="left" className="fas fa-user" />
            All Manager
          </NavLink>
        </li>
        {/* For Admin, Manager */}
        <li id="left" className="sideber__item sideber__item--modify">
          <NavLink
            to="/pharmacists/add"
            onClick={() => handleTitleText("Add Pharmacist")}
          >
            <i id="left" className="fas fa-user-plus" />
            Add Pharmacist
          </NavLink>
        </li>
        <li id="left" className="sideber__item">
          <NavLink
            to="/pharmacists"
            onClick={() => handleTitleText("All Pharmacists")}
          >
            <i id="left" className="fas fa-user" />
            All Pharmacist
          </NavLink>
        </li>
        {/* For Admin, Manager, Pharmacist*/}
        <li id="left" className="sideber__item sideber__item--modify">
          <NavLink
            to="/salesmen/add"
            onClick={() => handleTitleText("Add Salesman")}
          >
            <i id="left" className="fas fa-user-plus" />
            Add Salesman
          </NavLink>
        </li>
        <li id="left" className="sideber__item">
          <NavLink
            to="/salesmen"
            onClick={() => handleTitleText("All Salesman")}
          >
            <i id="left" className="fas fa-user" />
            All Salesman
          </NavLink>
        </li>
      </ul>
      <footer className="text-center">
        <span>MD Arif Islam</span>
        <br />
        ©2023 PMS All right reserved.
      </footer>
    </div>
  );
};

export default Sidebar;
