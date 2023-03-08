import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [showPassword, setShowPassword] = useState(false);

  function handleDeleteClick() {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmDelete) {
      // handle delete logic
    }
  }

  function handlePasswordClick() {
    setShowPassword(!showPassword);
    var input = document.getElementById("pwdinput");
    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
    input.focus();
  }

  function handleImageClick() {
    document.getElementById("pimgi").click();
  }

  return (
    <>
      {/*------------------------------- Topbar Navber ------------------------------*/}
      <section className="topber">
        <div className="topber__title">
          <span className="topber__title--text">DashBoard</span>
        </div>
        <div className="topber__profile">
          <img
            src="assets/img/avatar.png"
            height={25}
            width={25}
            className="rounded-circle"
            alt="profile"
          />
          <div className="dropdown">
            <button
              className="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              MD Arif Islam
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link className="dropdown-item" to="#">
                Dashboard
              </Link>
              <Link className="dropdown-item" to="#">
                Profile
              </Link>
              <Link className="dropdown-item" to="#">
                Log Out
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/*------------------------------- Secondary Navber ------------------------------*/}
      {/*------------------------------- Sideber ------------------------------*/}
      <section id="sideber" className="sideber">
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
      </section>
      {/*------------------------------- #Sideber ------------------------------*/}
      {/*------------------------------- Main section ------------------------------*/}
      <section className="main">
        <div className="container">
          {/* ---------------------- DashBoard ------------------------ */}
          <div className="dashboard p-5">
            <div className="total">
              <div className="row">
                <div className="col-3">
                  <div className="total__box text-center">
                    <h1>2453</h1>
                    <h2>Total Sell</h2>
                  </div>
                </div>
                <div className="col-3">
                  <div className="total__box text-center">
                    <h1>1234</h1>
                    <h2>Manager</h2>
                  </div>
                </div>
                <div className="col-3">
                  <div className="total__box text-center">
                    <h1>1234</h1>
                    <h2>Pharmacist</h2>
                  </div>
                </div>
                <div className="col-3">
                  <div className="total__box text-center">
                    <h1>1234</h1>
                    <h2>Salesman</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ---------------------- DashBoard ------------------------ */}
          {/* ---------------------- Manager ------------------------ */}
          <div className="manager">
            <div className="allManager">
              <div className="main__table">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Avater</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone</th>
                      {/* Only For Admin */}
                      <th scope="col">Edit</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <center>
                          <img
                            className="rounded-circle"
                            width={40}
                            height={40}
                            src="assets/img/avatar.png"
                            alt=""
                          />
                        </center>
                      </td>
                      <td>MD Arif Islam</td>
                      <td>arifislamarif344@gmail.com</td>
                      <td>01704307597</td>
                      {/* Only For Admin */}
                      <td>
                        <Link to="#">
                          <i className="fas fa-edit" />
                        </Link>
                      </td>
                      <td>
                        <Link
                          className="delete"
                          onClick={handleDeleteClick}
                          to="#"
                        >
                          <i className="fas fa-trash" />
                        </Link>
                        "
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="addManager">
              <div className="main__form">
                <div className="main__form--title text-center">
                  Add New Manager
                </div>
                <form action="#" method="POST">
                  <div className="form-row">
                    <div className="col col-12">
                      <label className="input">
                        <i id="left" className="fas fa-user-circle" />
                        <input
                          type="text"
                          name="fname"
                          placeholder="First name"
                          required=""
                        />
                      </label>
                    </div>
                    <div className="col col-12">
                      <label className="input">
                        <i id="left" className="fas fa-user-circle" />
                        <input
                          type="text"
                          name="lname"
                          placeholder="Last Name"
                          required=""
                        />
                      </label>
                    </div>
                    <div className="col col-12">
                      <label className="input">
                        <i id="left" className="fas fa-envelope" />
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          required=""
                        />
                      </label>
                    </div>
                    <div className="col col-12">
                      <label className="input">
                        <i id="left" className="fas fa-phone-alt" />
                        <input
                          type="number"
                          name="phone"
                          placeholder="Phone"
                          required=""
                        />
                      </label>
                    </div>
                    <div className="col col-12">
                      <label className="input">
                        <i id="left" className="fas fa-key" />
                        <input
                          id="pwdinput"
                          type="password"
                          name="password"
                          placeholder="Password"
                          required=""
                        />
                        <i
                          id="pwd"
                          onClick={handlePasswordClick}
                          className="fas fa-eye right"
                        />
                      </label>
                    </div>
                    <input
                      type="hidden"
                      name="action"
                      defaultValue="addManager"
                    />
                    <div className="col col-12">
                      <input type="submit" defaultValue="Submit" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="addManager">
              <div className="main__form">
                <div className="main__form--title text-center">
                  Update Manager
                </div>
                <form action="#" method="POST">
                  <div className="form-row">
                    <div className="col col-12">
                      <label className="input">
                        <i id="left" className="fas fa-user-circle" />
                        <input
                          type="text"
                          name="fname"
                          placeholder="First name"
                          defaultValue="MD Arif"
                          required=""
                        />
                      </label>
                    </div>
                    <div className="col col-12">
                      <label className="input">
                        <i id="left" className="fas fa-user-circle" />
                        <input
                          type="text"
                          name="lname"
                          placeholder="Last Name"
                          defaultValue="Islam"
                          required=""
                        />
                      </label>
                    </div>
                    <div className="col col-12">
                      <label className="input">
                        <i id="left" className="fas fa-envelope" />
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          defaultValue="arifislamarif344@gmail.com"
                          required=""
                        />
                      </label>
                    </div>
                    <div className="col col-12">
                      <label className="input">
                        <i id="left" className="fas fa-phone-alt" />
                        <input
                          type="number"
                          name="phone"
                          placeholder="Phone"
                          defaultValue={"01704307597"}
                          required=""
                        />
                      </label>
                    </div>
                    <input
                      type="hidden"
                      name="action"
                      defaultValue="updateManager"
                    />
                    <input type="hidden" name="id" defaultValue={1} />
                    <div className="col col-12">
                      <input type="submit" defaultValue="Update" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* ---------------------- Manager ------------------------ */}
          {/* ---------------------- Pharmacist ------------------------ */}
          <div className="pharmacist">
            <div className="allPharmacist">
              <div className="main__table">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Avater</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone</th>
                      {/* Only For Admin */}
                      <th scope="col">Edit</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <center>
                          <img
                            className="rounded-circle"
                            width={40}
                            height={40}
                            src="assets/img/avatar.png"
                            alt=""
                          />
                        </center>
                      </td>
                      <td>MD Arif Islam</td>
                      <td>arifislamarif344@gmail.com</td>
                      <td>01704307597</td>
                      {/* Only For Admin */}
                      <td>
                        <Link to="#">
                          <i className="fas fa-edit" />
                        </Link>
                      </td>
                      <td>
                        <Link
                          className="delete"
                          onClick={handleDeleteClick}
                          to="#"
                        >
                          <i className="fas fa-trash" />
                        </Link>
                        "
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="addPharmacist">
              <div className="main__form">
                <div className="main__form--title text-center">
                  Add New Pharmacist
                </div>
                <form action="#" method="POST">
                  <div className="form-row">
                    <div className="col col-12">
                      <label className="input">
                        <i id="left" className="fas fa-user-circle" />
                        <input
                          type="text"
                          name="fname"
                          placeholder="First name"
                          required=""
                        />
                      </label>
                    </div>
                    <div className="col col-12">
                      <label className="input">
                        <i id="left" className="fas fa-user-circle" />
                        <input
                          type="text"
                          name="lname"
                          placeholder="Last Name"
                          required=""
                        />
                      </label>
                    </div>
                    <div className="col col-12">
                      <label className="input">
                        <i id="left" className="fas fa-envelope" />
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          required=""
                        />
                      </label>
                    </div>
                    <div className="col col-12">
                      <label className="input">
                        <i id="left" className="fas fa-phone-alt" />
                        <input
                          type="number"
                          name="phone"
                          placeholder="Phone"
                          required=""
                        />
                      </label>
                    </div>
                    <div className="col col-12">
                      <label className="input">
                        <i id="left" className="fas fa-key" />
                        <input
                          id="pwdinput"
                          type="password"
                          name="password"
                          placeholder="Password"
                          required=""
                        />
                        <i
                          id="pwd"
                          onClick={handlePasswordClick}
                          className="fas fa-eye right"
                        />
                      </label>
                    </div>
                    <input
                      type="hidden"
                      name="action"
                      defaultValue="addPharmacist"
                    />
                    <div className="col col-12">
                      <input type="submit" defaultValue="Submit" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="addManager">
              <div className="main__form">
                <div className="main__form--title text-center">
                  Update Pharmacist
                </div>
                <form action="#" method="POST">
                  <div className="form-row">
                    <div className="col col-12">
                      <label className="input">
                        <i id="left" className="fas fa-user-circle" />
                        <input
                          type="text"
                          name="fname"
                          placeholder="First name"
                          defaultValue="Arif"
                          required=""
                        />
                      </label>
                    </div>
                    <div className="col col-12">
                      <label className="input">
                        <i id="left" className="fas fa-user-circle" />
                        <input
                          type="text"
                          name="lname"
                          placeholder="Last Name"
                          defaultValue="Islam"
                          required=""
                        />
                      </label>
                    </div>
                    <div className="col col-12">
                      <label className="input">
                        <i id="left" className="fas fa-envelope" />
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          defaultValue="arifislamarif344@gmail.com"
                          required=""
                        />
                      </label>
                    </div>
                    <div className="col col-12">
                      <label className="input">
                        <i id="left" className="fas fa-phone-alt" />
                        <input
                          type="number"
                          name="phone"
                          placeholder="Phone"
                          defaultValue={"01704307597"}
                          required=""
                        />
                      </label>
                    </div>
                    <input
                      type="hidden"
                      name="action"
                      defaultValue="updatePharmacist"
                    />
                    <input type="hidden" name="id" defaultValue={1} />
                    <div className="col col-12">
                      <input type="submit" defaultValue="Update" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* ---------------------- Pharmacist ------------------------ */}
          {/* ---------------------- Salesman ------------------------ */}
          <div className="salesman">
            <div className="allSalesman">
              <div className="main__table">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Avater</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone</th>
                      {/* Only For Admin */}
                      <th scope="col">Edit</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <center>
                          <img
                            className="rounded-circle"
                            width={40}
                            height={40}
                            src="assets/img/avatar.png"
                            alt=""
                          />
                        </center>
                      </td>
                      <td>MD Arif Islam</td>
                      <td>arifislamarif344@gmail.com</td>
                      <td>01704307597</td>
                      {/* Only For Admin */}
                      <td>
                        <Link to="#">
                          <i className="fas fa-edit" />
                        </Link>
                      </td>
                      <td>
                        <Link
                          className="delete"
                          onClick={handleDeleteClick}
                          to="#"
                        >
                          <i className="fas fa-trash" />
                        </Link>
                        "
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="addSalesman">
              <div className="main__form">
                <div className="main__form--title text-center">
                  Add New Salesman
                </div>
                <form action="#" method="POST">
                  <div className="form-row">
                    <div className="col col-12">
                      <label className="input">
                        <i id="left" className="fas fa-user-circle" />
                        <input
                          type="text"
                          name="fname"
                          placeholder="First name"
                          required=""
                        />
                      </label>
                    </div>
                    <div className="col col-12">
                      <label className="input">
                        <i id="left" className="fas fa-user-circle" />
                        <input
                          type="text"
                          name="lname"
                          placeholder="Last Name"
                          required=""
                        />
                      </label>
                    </div>
                    <div className="col col-12">
                      <label className="input">
                        <i id="left" className="fas fa-envelope" />
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          required=""
                        />
                      </label>
                    </div>
                    <div className="col col-12">
                      <label className="input">
                        <i id="left" className="fas fa-phone-alt" />
                        <input
                          type="number"
                          name="phone"
                          placeholder="Phone"
                          required=""
                        />
                      </label>
                    </div>
                    <div className="col col-12">
                      <label className="input">
                        <i id="left" className="fas fa-key" />
                        <input
                          id="pwdinput"
                          type="password"
                          name="password"
                          placeholder="Password"
                          required=""
                        />
                      </label>
                    </div>
                    <input
                      type="hidden"
                      name="action"
                      defaultValue="addSalesman"
                    />
                    <div className="col col-12">
                      <input type="submit" defaultValue="Submit" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="addManager">
              <div className="main__form">
                <div className="main__form--title text-center">
                  Update Salesman
                </div>
                <form action="#" method="POST">
                  <div className="form-row">
                    <div className="col col-12">
                      <label className="input">
                        <i id="left" className="fas fa-user-circle" />
                        <input
                          type="text"
                          name="fname"
                          placeholder="First name"
                          defaultValue="Arif"
                          required=""
                        />
                      </label>
                    </div>
                    <div className="col col-12">
                      <label className="input">
                        <i id="left" className="fas fa-user-circle" />
                        <input
                          type="text"
                          name="lname"
                          placeholder="Last Name"
                          defaultValue="Islam"
                          required=""
                        />
                      </label>
                    </div>
                    <div className="col col-12">
                      <label className="input">
                        <i id="left" className="fas fa-envelope" />
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          defaultValue="arifislamarif344@gmail.com"
                          required=""
                        />
                      </label>
                    </div>
                    <div className="col col-12">
                      <label className="input">
                        <i id="left" className="fas fa-phone-alt" />
                        <input
                          type="number"
                          name="phone"
                          placeholder="Phone"
                          defaultValue={"01704307597"}
                          required=""
                        />
                      </label>
                    </div>
                    <input
                      type="hidden"
                      name="action"
                      defaultValue="updateSalesman"
                    />
                    <input type="hidden" name="id" defaultValue={3} />
                    <div className="col col-12">
                      <input type="submit" defaultValue="Update" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* ---------------------- Salesman ------------------------ */}
          {/* ---------------------- User Profile ------------------------ */}
          <div className="userProfile">
            <div className="main__form myProfile">
              <form action="#">
                <div className="main__form--title myProfile__title text-center">
                  My Profile
                </div>
                <div className="form-row text-center">
                  <div className="col col-12 text-center pb-3">
                    <img
                      src="assets/img/avatar.png"
                      className="img-fluid rounded-circle"
                      alt=""
                    />
                  </div>
                  <div className="col col-12">
                    <h4>
                      <b>Full Name : </b>
                      MD Arif Islam
                    </h4>
                  </div>
                  <div className="col col-12">
                    <h4>
                      <b>Email : </b>
                      arifislamarif344@gmail.com
                    </h4>
                  </div>
                  <div className="col col-12">
                    <h4>
                      <b>Phone : </b>
                      01704307597
                    </h4>
                  </div>
                  <input
                    type="hidden"
                    name="id"
                    defaultValue="userProfileEdit"
                  />
                  <div className="col col-12">
                    <input
                      className="updateMyProfile"
                      type="submit"
                      defaultValue="Update Profile"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="userProfileEdit">
            <div className="main__form">
              <div className="main__form--title text-center">
                Update My Profile
              </div>
              <form encType="multipart/form-data" action="#" method="POST">
                <div className="form-row">
                  <div className="col col-12 text-center pb-3">
                    <img
                      id="pimg"
                      src="assets/img/avatar.png"
                      className="img-fluid rounded-circle"
                      onClick={handleImageClick}
                      alt=""
                    />
                    <i className="fas fa-pen pimgedit" />
                    <input
                      onchange="document.getElementById('pimg').src = window.URL.createObjectURL(this.files[0])"
                      id="pimgi"
                      style={{ display: "none" }}
                      type="file"
                      name="avatar"
                    />
                  </div>
                  <div className="col col-12">
                    <p style={{ color: "red" }} className="text-center">
                      Please make sure this file is jpg, png or jpeg
                    </p>
                  </div>
                  <div className="col col-12">
                    <label className="input">
                      <i id="left" className="fas fa-user-circle" />
                      <input
                        type="text"
                        name="fname"
                        placeholder="First name"
                        defaultValue="MD Arif"
                        required=""
                      />
                    </label>
                  </div>
                  <div className="col col-12">
                    <label className="input">
                      <i id="left" className="fas fa-user-circle" />
                      <input
                        type="text"
                        name="lname"
                        placeholder="Last Name"
                        defaultValue="Islam"
                        required=""
                      />
                    </label>
                  </div>
                  <div className="col col-12">
                    <label className="input">
                      <i id="left" className="fas fa-envelope" />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        defaultValue="arifislamarif344@gmail.com"
                        required=""
                      />
                    </label>
                  </div>
                  <div className="col col-12">
                    <label className="input">
                      <i id="left" className="fas fa-phone-alt" />
                      <input
                        type="number"
                        name="phone"
                        placeholder="Phone"
                        defaultValue={"01704307597"}
                        required=""
                      />
                    </label>
                  </div>
                  <div className="col col-12">
                    <label className="input">
                      <i id="left" className="fas fa-key" />
                      <input
                        id="pwdinput"
                        type="password"
                        name="oldPassword"
                        placeholder="Old Password"
                        required=""
                      />
                      <i
                        id="pwd"
                        onClick={handlePasswordClick}
                        className="fas fa-eye right"
                      />
                    </label>
                  </div>
                  <div className="col col-12">
                    <label className="input">
                      <i id="left" className="fas fa-key" />
                      <input
                        id="pwdinput"
                        type="password"
                        name="newPassword"
                        placeholder="New Password"
                        required=""
                      />
                      <p>Type Old Password if you don't want to change</p>
                      <i
                        id="pwd"
                        onClick={handlePasswordClick}
                        className="fas fa-eye right"
                      />
                    </label>
                  </div>
                  <input
                    type="hidden"
                    name="action"
                    defaultValue="updateProfile"
                  />
                  <div className="col col-12">
                    <input type="submit" defaultValue="Update" />
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* ---------------------- User Profile ------------------------ */}
        </div>
      </section>
    </>
  );
};

export default Dashboard;
