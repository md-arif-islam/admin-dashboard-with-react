import React from "react";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="login__form">
          <div className="login__form--title text-center">Log In</div>
          <form action="login_core.php" method="GET">
            <div className="form-row">
              <div className="col col-12">
                <label className="input">
                  <i id="left" className="fas fa-envelope left"></i>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </label>
              </div>
              <div className="col col-12">
                <label className="input">
                  <i id="left" className="fas fa-key"></i>
                  <input
                    id="pwdinput"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                  />
                  <i id="pwd" className="fas fa-eye right"></i>
                </label>
              </div>
              <div className="col col-12">
                <label className="input">
                  <i id="left" className="fas fa-male left"></i>
                  <select name="role" id="Role">
                    <option value="admins">Admin</option>
                    <option value="managers">Manager</option>
                    <option value="pharmacists">Pharmacist</option>
                    <option value="salesmans">Salesman</option>
                  </select>
                </label>
              </div>
              <input type="hidden" name="action" value="login" />
              {/* <h5 className="text-center">
                Email, Password & Role Doesn't match Or Something is Wrong
              </h5> */}

              <div className="col col-12">
                <input type="submit" value="Submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
