import React from "react";
import PharmacyContents from "../components/Contents/PharmacyContents";
import Nav from "../components/Nav/Nav";

const PharmacyPage = () => {
  return (
    <div style={{ display: "flex" }}>
      <Nav />
      <PharmacyContents />
    </div>
  );
};

export default PharmacyPage;
