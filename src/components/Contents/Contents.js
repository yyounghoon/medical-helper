import React from "react";
import HospitalContainer from "../../containers/HospitalContainer";
import HospitalMap from "../Map/HospitalMap";
import SearchForm from "../SearchForm/SearchForm";

const Contents = () => {
  return (
    <div className="contents">
      <div>
        <h1>FIND THE HOSPITAL !</h1>
        <HospitalMap />
      </div>
      <div className="hospital-list">
        <SearchForm />
        <HospitalContainer />
      </div>
    </div>
  );
};

export default Contents;
