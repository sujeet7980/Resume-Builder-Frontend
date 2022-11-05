/** @format */

import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";
const Education = () => {
  const { details, handleChange, formSubmit, prevStep } =
    useContext(AppContext);
  return (
    <div className="card animated fadeInLeft">
      <div className="card-body">
        <h3 className="card-title">Education Info</h3>
        <hr />
      </div>
      <form onSubmit={formSubmit}>
        <div className="row col-lg-10 mx-auto">
          <div className="col-lg-12 text-left">
            <h3>
              <b>
                <i className="fas fa-check-circle mr-1"></i>1
              </b>
            </h3>
          </div>
          <div className="col-lg-4 text-left">
            <label>College/University*</label>
            <input
              type="text"
              name="edu1_school"
              className="form-control"
              value={details.edu1_school}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-lg-4 text-left">
            <label>Year*</label>
            <input
              type="text"
              name="edu1_year"
              className="form-control"
              value={details.edu1_year}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-lg-4 text-left">
            <label>Qualification*</label>
            <input
              type="text"
              name="edu1_qualification"
              className="form-control"
              value={details.edu1_qualification}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row col-lg-10 mx-auto">
          <div className="col-lg-12 text-left">
            <label>Description*</label>
            <input
              type="text"
              name="edu1_desc"
              className="form-control"
              value={details.edu1_desc}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <br />

        <div className="row col-lg-10 mx-auto">
          <div className="col-lg-12 text-left">
            <h3>
              <b>
                <i className="fas fa-check-circle mr-1"></i>2
              </b>
            </h3>
            <hr />
          </div>
          <div className="col-lg-4 text-left">
            <label>School</label>
            <input
              type="text"
              name="edu2_school"
              className="form-control"
              value={details.edu2_school}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-4 text-left">
            <label>Year</label>
            <input
              type="text"
              name="edu2_year"
              className="form-control"
              value={details.edu2_year}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-4 text-left">
            <label>Qualification</label>
            <input
              type="text"
              name="edu2_qualification"
              className="form-control"
              value={details.edu2_qualification}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row col-lg-10 mx-auto">
          <div className="col-lg-12 text-left">
            <label>Description</label>
            <input
              type="text"
              name="edu2_desc"
              className="form-control"
              value={details.edu2_desc}
              onChange={handleChange}
            />
          </div>
        </div>
        <br />
        <div className="container text-center">
          <button
            type="button"
            className="btn btn-info mx-2"
            onClick={prevStep}
          >
            <i className="fas fa-angle-left mr-1"></i>Back
          </button>
          <button type="submit" className="btn btn-info mx-2">
            Next<i className="fas fa-angle-right ml-1"></i>
          </button>
        </div>
        <br />
      </form>
    </div>
  );
};

export default Education;
