import React from "react";
import CovidContents from "../components/Contents/CovidContents";
import Nav from "../components/Nav/Nav";
const CovidPage = () => {
  return (
    <div style={{ display: "flex" }}>
      <Nav />
      <CovidContents />
    </div>
  );
};

export default CovidPage;
