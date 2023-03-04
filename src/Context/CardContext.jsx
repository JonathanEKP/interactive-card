import React, { createContext, useState } from "react";

export const CardContext = createContext();

export function CardContextProvider(props) {
  const [cards, setCards] = useState({});

  function setearDatos(datos) {
    setCards({
      cardholder: datos.cardholder,
      cardnumber: datos.cardnumber,
      month: datos.month,
      year: datos.year,
      cvc: datos.cvc,
    });
  }

  return (
    <CardContext.Provider value={{ setearDatos, cards }}>
      {props.children}
    </CardContext.Provider>
  );
}
