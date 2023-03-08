const UpdatePharmacist = () => {
  return (
    <div className="pharmacist">
      <div className="updatePharmacist">
        <div className="main__form">
          <div className="main__form--title text-center">Update Pharmacist</div>
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
  );
};

export default UpdatePharmacist;
