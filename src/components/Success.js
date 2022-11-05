/** @format */

import React from "react";

const Success = () => {
  return (
    <div className="card animated bounceIn">
      <div className="card-body text-center pt-5 pb-5">
        <i className="fas fa-check-circle fa-7x text-success"></i>
        <h2>Hang Tight while your Resume Downloads!</h2>
        <div class="spinner-border mt-2" role="status">
          <span class="sr-only"></span>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Success;
