import React, { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";

export const RingContext = createContext("Matir Ring");
export const MoneyContext = createContext(555);
const Grandpa = () => {
  const [house, setHouse] = useState(1);
  const [money, setMoney] = useState(555);
  const ring = "Diamond Ring";
  return (
    <RingContext.Provider value={[house, setHouse]}>
      <MoneyContext.Provider value={[money, setMoney]}>
        <div className="grandpa">
          <h2>Grandpa</h2>
          <section className="flex">
            <Father house={house} ring={ring} />
            <Uncle house={house} />
            <Aunty house={house} />
          </section>
        </div>
      </MoneyContext.Provider>
    </RingContext.Provider>
  );
};

export default Grandpa;
