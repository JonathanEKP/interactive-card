import React from "react";
import { useNavigate } from "react-router-dom";
import icon from "../../img/icon-complete.svg";
import "./Thanks.css";

function Thanks() {
  const nagivate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    nagivate("/");
  };

  return (
    <>
      <div className="col-12 col-lg-6 mt-lg-5">
        <div className="row g-0 py-lg-3 mt-lg-5">
          <div className="col-12 d-flex justify-content-center mt-5">
            <img src={icon} alt="" className="" />
          </div>
          <div className="col-12 mt-4">
            <h4 className="text-uppercase text-center">thank you!</h4>
            <p className="text-muted text-center">
              We've added your card details
            </p>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <button className="btn btn-custom p-2 w-50" onClick={handleSubmit}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Thanks;
