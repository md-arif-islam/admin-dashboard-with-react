import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div id="sideber" className="sideber">
      <ul className="sideber__ber">
        <h2 className="sideber__panel">Pharmacy Management System</h2>
        <li id="left" className="sideber__item active">
          <Link to="#dashboard">
            <i id="left" className="fas fa-tachometer-alt" />
            Dashboard
          </Link>
        </li>
        {/* Only For Admin */}
        <li id="left" className="sideber__item sideber__item--modify active">
          <Link to="#addManager">
            <i id="left" className="fas fa-user-plus" />
            Add Manager
          </Link>
        </li>
        <li id="left" className="sideber__item">
          <Link to="#allManager">
            <i id="left" className="fas fa-user" />
            All Manager
          </Link>
        </li>
        {/* For Admin, Manager */}
        <li id="left" className="sideber__item sideber__item--modify">
          <Link to="#addPharmacist">
            <i id="left" className="fas fa-user-plus" />
            Add Pharmacist
          </Link>
        </li>
        <li id="left" className="sideber__item">
          <Link to="#allPharmacist">
            <i id="left" className="fas fa-user" />
            All Pharmacist
          </Link>
        </li>
        {/* For Admin, Manager, Pharmacist*/}
        <li id="left" className="sideber__item sideber__item--modify">
          <Link to="#addSalesman">
            <i id="left" className="fas fa-user-plus" />
            Add Salesman
          </Link>
        </li>
        <li id="left" className="sideber__item">
          <Link to="#allSalesman">
            <i id="left" className="fas fa-user" />
            All Salesman
          </Link>
        </li>
      </ul>
      <footer className="text-center">
        <span>MD Arif Islam</span>
        <br />
        ©2020 PMS All right reserved.
      </footer>
    </div>
  );
};

export default Sidebar;
