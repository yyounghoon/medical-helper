import React, { useState } from 'react';
import HospitalModal from '../Modal/HospitalModal';
import './HospitalList.scss';

function HospitalListItem({ data }) {
  const [isModalOn, setIsModalOn] = useState(false);
  const [asdfaa, setTest] = useState('false');

  const handleModal = () => {
    setIsModalOn(!isModalOn);
  };

  return (
    <div className="item-wrap">
      <p>{data.hmcNm}</p>
      <button onClick={handleModal}>상세 보기</button>
      {isModalOn && <HospitalModal data={data} handleModal={handleModal} />}
    </div>
  );
}

function HospitalList({ data }) {
  return (
    <div className="HospitalList">
      <h4>검색결과 리스트</h4>
      {data == null && <p>데이터가 없습니다.</p>}
      {data && data.map((data, index) => <HospitalListItem key={index} data={data} />)}
    </div>
  );
}

export default HospitalList;
