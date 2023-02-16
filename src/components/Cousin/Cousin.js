import React, { useContext } from "react";
import Friend from "../Friend/Friend";
import { RingContext } from "../Grandpa/Grandpa";

const Cousin = ({ house }) => {
  const ring = useContext(RingContext);
  return (
    <div>
      <h2>Cousin</h2>
      <p>
        <small>House : {house}</small>
      </p>
      <section>
        <Friend house={house} />
      </section>
    </div>
  );
};

export default Cousin;
