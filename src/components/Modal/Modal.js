import React from "react";
import "./Modal.scss";

// 약국 모달
const Modal = ({ data, handleModal }) => {
  return (
    <div className="modal-container">
      <div className="modal-wrapper">
        <h1 className="title">{data.dutyName}</h1>
        <p className="item">현위치에서의 거리 : {data.distance}km</p>
        <p className="item">주소 : {data.dutyAddr}</p>
        <p className="item">전화번호 : {data.dutyTel1}</p>
        <p className="item">
          영업시간 : {data.startTime}~{data.endTime}
        </p>
        <button className="close-modal" onClick={() => handleModal()}>
          닫기
        </button>
      </div>
    </div>
  );
};

export default Modal;
