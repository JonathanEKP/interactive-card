import React, { useContext } from "react";
import { CardContext } from "../../Context/CardContext";
import background from "../../img/bg.png";
import logo from "../../img/card-logo.svg";
import "./Back.css";

function BackAndCards() {
  const { cards } = useContext(CardContext);
  return (
    <>
      <div className="col-1 ">
        <img src={background} alt="" className="bg-img" />
      </div>

      <div className="col-md-12 col-lg-5 col-12 p-3 " id="bg-cards">
        <div className="mt-lg-3 py-lg-3 d-md-flex justify-content-md-center d-lg-block gap-md-3 gap-lg-0">
          <div className="card mt-lg-3" id="front">
            <div className="card-header border border-0">
              <img src={logo} alt="" className="card-logo" />
            </div>
            <div className="card-body mt-lg-4">
              <h5 className="card-title text-white text-start fw-normal">
                {cards.cardnumber === ""
                  ? "0000 0000 0000 0000"
                  : cards.cardnumber}
              </h5>
            </div>
            <div className="card-footer border border-0 p-3">
              <div className="row g-0">
                <div className="col-6">
                  <p className="card-text text-white d-flex justify-content-start fst-italic">
                    {cards.cardholder === ""
                      ? "Felicia Lirie"
                      : cards.cardholder}
                  </p>
                </div>
                <div className="col-6">
                  <p className="card-text text-white d-flex justify-content-end fst-italic">
                    {cards.month === "" ? "00" : cards.month}/
                    {cards.year === "" ? "00" : cards.year}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-end justify-content-md-center mt-3">
            <div className="card mb-3 border border-0" id="back">
              <div className="card-header bg-white border border-0">
                {/* <!-- Only for color --> */}
              </div>
              <div className="card-header bg-dark header2 border border-0">
                {/* <!--only for color --> */}
              </div>
              <div className="card-body card-back">
                <input
                  type="text"
                  className="form-control input-back text-end"
                  value={cards.cvc === "" ? "000" : cards.cvc}
                  disabled
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BackAndCards;
