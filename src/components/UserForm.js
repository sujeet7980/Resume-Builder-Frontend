/** @format */

import React from "react";
import { useContext } from "react";
import PersonalDetails from "./PersonalDetails";
import Experience from "./Experience";
import Projects from "./Projects";
import { AppContext } from "../App";
import Education from "./Education";
import Extras from "./Extras";
import Success from "./Success";
const UserForm = () => {
  const { details } = useContext(AppContext);
  switch (details.step) {
    case 1:
      return (
        <div className="App">
          <div className="container col-lg-8 mx-auto text-center">
            <PersonalDetails />
          </div>
          <br />
        </div>
      );

    case 2:
      return (
        <div className="App ">
          <div className="container col-lg-8 mx-auto text-center">
            <Experience />
          </div>
          <br />
        </div>
      );

    case 3:
      return (
        <div className="App ">
          <div className="container col-lg-8 mx-auto text-center">
            <Projects />
          </div>
          <br />
        </div>
      );
    case 4:
      return (
        <div className="App ">
          <div className="container col-lg-8 mx-auto text-center">
            <Education />
          </div>
          <br />
        </div>
      );
    case 5:
      return (
        <div className="App ">
          <div className="container col-lg-8 mx-auto text-center">
            <Extras />
          </div>
          <br />
        </div>
      );
    case 6:
      return (
        <div className="App ">
          <div className="container col-lg-8 mx-auto text-center">
            <Success />
          </div>
          <br />
        </div>
      );

    default:
    //return <div>done</div>;
  }
  return <div>{UserForm()}</div>;
};

export default UserForm;
