import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CardContext } from "../../Context/CardContext";
import './Form.css'

function Form() {
  const [cardholder, setCardholder] = useState("");
  const [cardnumber, setCardnumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");
  const nagivate = useNavigate();
  const { setearDatos } = useContext(CardContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const form = document.getElementById("form");
    if (form.checkValidity() === false) form.classList.add("was-validated");
    else {
      nagivate("/thanks");
    }
  };

  useEffect(() => {
    setearDatos({
      cardholder,
      cardnumber,
      month,
      year,
      cvc,
    });
  }, [cardholder, cardnumber, month, year, cvc]);

  return (
    <div className="col-12 col-lg-6">
      <form
        className="d-flex justify-content-center mt-lg-5 py-lg-5 needs-validation"
        onSubmit={handleSubmit}
        id="form"
        noValidate
      >
        <div className="row g-0 py-3 ">
          <div className="col-12 w-75 mx-auto">
            <label className="form-label text-uppercase" htmlFor="name">
              cardholder name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              maxLength={30}
              className="form-control mb-2 "
              value={cardholder}
              onChange={(e) => setCardholder(e.target.value)}
              required
              placeholder="e.g. Felicia Lirie"
            />
            <div className="invalid-feedback">Complete el campo</div>
          </div>

          <div className="col-12 w-75 mx-auto">
            <label
              htmlFor="number"
              className="form-label text-uppercase"
            >
              card number
            </label>
            <input
              type="text"
              name="number"
              id="number"
              minLength={16}
              maxLength={16}
              className="form-control mb-2"
              value={cardnumber}
              onChange={(e) => setCardnumber(e.target.value)}
              required
              pattern="^([0-9])*$"
              placeholder="e.g. 1234 5678 9123 0000"
            />
            <div className="invalid-feedback">Formato incorrecto</div>
          </div>

          <div className="col-12 w-75 mx-auto mb-2">
            <div className="row g-0 gap-3">
              <div className="col-6 ">
                <label htmlFor="date" className="form-label text-uppercase">
                  exp. date (mm/yy)
                </label>
                <div className="input-group gap-3">
                  <input
                    type="text"
                    name="month"
                    id="month"
                    minLength={2}
                    maxLength={2}
                    className="form-control w-25"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    pattern="^([0-9])*$"
                    required
                    placeholder="MM"
                  />
                  <input
                    type="text"
                    name="year"
                    id="year"
                    minLength={2}
                    maxLength={2}
                    className="form-control w-25"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    pattern="^([0-9])*$"
                    required
                    placeholder="YY"
                  />
                  <div className="invalid-feedback">Formato incorrecto</div>
                </div>
              </div>

              <div className="col-5">
                <label htmlFor="cvc" className="form-label text-uppercase ">
                  cvc
                </label>
                <input
                  type="text"
                  name="cvc"
                  id="cvc"
                  minLength={3}
                  maxLength={3}
                  className="form-control"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                  pattern="^([0-9])*$"
                  required
                  placeholder="e.g. 123"
                />
                <div className="invalid-feedback">Formato incorrecto</div>
              </div>
            </div>
          </div>

          <div className="col-12 w-75 mx-auto">
            <button type="submit" className="btn btn-custom w-100">
              Confirm
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
