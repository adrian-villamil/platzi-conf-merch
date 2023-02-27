import React, { useContext } from "react";
import Map from "../components/Map";
import AppContext from "../context/AppContext";
import useForwardGeocoding from "../hooks/useForwardGeocoding";
import '../styles/components/Success.css';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const [lat, lon] = useForwardGeocoding(buyer[0]);

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{buyer[0].name}, Gracias por tu compra</h2>
        <span>Tu pedido llegará en 3 días a tu dirección</span>
        <div className="Success-map">
          {lat && lon && <Map lat={lat} lon={lon} />}
        </div>
      </div>
    </div>
  );
};

export default Success;