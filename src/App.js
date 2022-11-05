/** @format */

import "./App.css";
import axios from "axios";
import UserForm from "./components/UserForm";
import { useState, createContext } from "react";
import { saveAs } from "file-saver";
import ProgressBar from "./components/ProgressBar";
export const AppContext = createContext();

function App() {
  const [details, setDetails] = useState({
    step: 1,
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    skills: "",

    exp1_org: "",
    exp1_pos: "",
    exp1_desc: "",
    exp1_dur: "",

    exp2_org: "",
    exp2_pos: "",
    exp2_desc: "",
    exp2_dur: "",

    proj1_title: "",
    proj1_link: "",
    proj1_desc: "",

    proj2_title: "",
    proj2_link: "",
    proj2_desc: "",

    edu1_school: "",
    edu1_year: "",
    edu1_qualification: "",
    edu1_desc: "",

    edu2_school: "",
    edu2_year: "",
    edu2_qualification: "",
    edu2_desc: "",

    extra_1: "",
    extra_2: "",
    extra_3: "",
    extra_4: "",
    extra_5: "",

    status: 0,
  });
  const progress = document.getElementById("progress");
  const circles = document.querySelectorAll(".circle");
  const update = (currentActive) => {
    console.log(currentActive);
    circles.forEach((circle, index) => {
      if (index < currentActive) circle.classList.add("active");
      else circle.classList.remove("active");
    });
    const actives = document.querySelectorAll(".active");
    progress.style.width =
      ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  };
  const prevStep = () => {
    setDetails({ ...details, step: details.step - 1 });
    update(details.step - 1);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    setDetails({ ...details, step: details.step + 1 });
    if (details.step === 5) handleSubmit();
    update(details.step + 1);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    setDetails((prevState) => ({
      ...prevState,
      step: prevState.step + 1,
    }));
    console.log(details);
    axios
      .post("/create-pdf", details)
      .then(() => axios.get("fetch-pdf", { responseType: "blob" }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });

        saveAs(pdfBlob, "Resume.pdf");
      });
  };
  return (
    <div>
      <div>
        <div className="col-lg-8 mx-auto text-center mt-5">
          <h1>
            <b>Let generate your Resume!</b>
          </h1>
          <p className="lead">
            Please provide accurate and clear description wherever necessary.
          </p>
          <hr />
        </div>
        <ProgressBar />
        <AppContext.Provider
          value={{
            details,
            setDetails,
            handleChange,
            formSubmit,
            handleSubmit,
            prevStep,
          }}
        >
          <UserForm />
        </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;
