import React from "react";
import PharmacyContainer from "../../containers/PharmacyContainer";
import PharmacyMap from "../Map/PharmacyMap";
import "./Contents.scss";

const PharmacyContents = () => {
  return (
    <div className="contents">
      <div>
        <h1>FIND THE PHARMACY !</h1>
        <PharmacyMap />
      </div>
      <PharmacyContainer />
    </div>
  );
};

export default PharmacyContents;
