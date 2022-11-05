/** @format */
import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";
const PersonalDetails = () => {
  const { details, handleChange, formSubmit } = useContext(AppContext);
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setDetails((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };
  return (
    <div className="card animated fadeInLeft">
      <div className="card-body">
        <h3 className="card-title">Personal Info</h3>
        <hr />
      </div>
      <form onSubmit={formSubmit}>
        <div className="row col-lg-10 mx-auto">
          <div className="col-lg-4 text-left">
            <label>Name*</label>
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={handleChange}
              value={details.name}
              required
            />
          </div>
          <div className="col-lg-4 text-left">
            <label>Email*</label>
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={handleChange}
              value={details.email}
              required
            />
          </div>
          <div className="col-lg-4 text-left">
            <label>Mobile*</label>
            <input
              type="text"
              name="phone"
              className="form-control"
              onChange={handleChange}
              value={details.phone}
              required
            />
          </div>
        </div>
        <br />
        <div className="row col-lg-10 mx-auto">
          <div className="col-lg-6 text-left">
            <label>Linkedin</label>
            <input
              type="text"
              name="linkedin"
              className="form-control"
              value={details.linkedin}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6 text-left">
            <label>Github</label>
            <input
              type="text"
              name="github"
              className="form-control"
              value={details.github}
              onChange={handleChange}
            />
          </div>
        </div>
        <br />
        <div className="row col-lg-10 mx-auto">
          <div className="col-lg-12 text-left">
            <label>
              Skills* (Separate each skill with a space and a comma)
            </label>
            <input
              type="text"
              name="skills"
              className="form-control"
              value={details.skills}
              onChange={handleChange}
            />
          </div>
        </div>
        <br />
        <div className="container text-center">
          <button type="submit" className="btn btn-info">
            Next<i className="fas fa-angle-right ml-1"></i>
          </button>
        </div>
        <br />
      </form>
    </div>
  );
};

export default PersonalDetails;
