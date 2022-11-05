/** @format */

import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";
const Projects = () => {
  const { details, prevStep, handleChange, formSubmit } =
    useContext(AppContext);
  return (
    <div className="card animated fadeInLeft">
      <div className="card-body">
        <h3 className="card-title">Projects' Info</h3>
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
          <div className="col-lg-6 text-left">
            <label>Title*</label>
            <input
              type="text"
              name="proj1_title"
              className="form-control"
              value={details.proj1_title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-lg-6 text-left">
            <label>Link</label>
            <input
              type="text"
              name="proj1_link"
              className="form-control"
              value={details.proj1_link}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row col-lg-10 mx-auto">
          <div className="col-lg-12 text-left">
            <label>Description*</label>
            <input
              type="text"
              name="proj1_desc"
              className="form-control"
              value={details.proj1_desc}
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
          <div className="col-lg-6 text-left">
            <label>Title*</label>
            <input
              type="text"
              name="proj2_title"
              className="form-control"
              value={details.proj2_title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-lg-6 text-left">
            <label>Link</label>
            <input
              type="text"
              name="proj2_link"
              className="form-control"
              value={details.proj2_link}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row col-lg-10 mx-auto">
          <div className="col-lg-12 text-left">
            <label>Description*</label>
            <input
              type="text"
              name="proj2_desc"
              className="form-control"
              value={details.proj2_desc}
              onChange={handleChange}
              required
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

export default Projects;
