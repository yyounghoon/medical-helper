import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./PharmacyList.scss";

const PharmacyListItem = ({ data }) => {
  const [isModalOn, setIsModalOn] = useState(false);

  const handleModal = () => {
    setIsModalOn(!isModalOn);
  };

  return (
    <div className="item-wrap">
      <p>{data.dutyName}</p>
      <button onClick={handleModal}>상세 보기</button>
      {isModalOn && <Modal data={data} handleModal={handleModal} />}
    </div>
  );
};

const PharmacyList = ({ data }) => {
  return (
    <div className="PharmacyList">
      <h4>현재 위치와 가장 가까운 약국 리스트</h4>
      {data.map((data) => (
        <PharmacyListItem key={data.dutyTell} data={data} />
      ))}
    </div>
  );
};

export default PharmacyList;
