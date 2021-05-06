import React from "react";
import "./Modal.scss";
const HospitalModal = ({ data, handleModal }) => {
  return (
    <div className="modal-container">
      <div className="modal-wrapper">
        <h1 className="title">{data.hmcNm}</h1>
        <p className="item">주소 : {data.locAddr}</p>
        <p className="item">전화번호 : {data.exmdrTelNo}</p>
        <h3>검진 가능 종목</h3>
        <p className="item">
          간암 : {data.lvcaExmdChrgTypeCd === 1 ? "O" : "X"}
        </p>
        <p className="item">구강 : {data.mchkChrgTypeCd === 1 ? "O" : "X"}</p>
        <p className="item">
          위암 : {data.stmcaExmdChrgTypeCd === 1 ? "O" : "X"}
        </p>
        <p className="item">
          대장암 : {data.ccExmdChrgTypeCd === 1 ? "O" : "X"}
        </p>
        <p className="item">
          자궁경부암 : {data.cvxcaExmdChrgTypeCd === 1 ? "O" : "X"}
        </p>
        <p className="item">
          유방암 : {data.bcExmdChrgTypeCd === 1 ? "O" : "X"}
        </p>
        <button className="close-modal" onClick={() => handleModal()}>
          닫기
        </button>
      </div>
    </div>
  );
};

export default HospitalModal;
