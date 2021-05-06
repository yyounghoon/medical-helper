import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHospital } from "../../modules/hospital";
import HospitalList from "../HospitalList/HospitalList";
import "./SearchForm.scss";

const SiDo = [
  { label: "시,도를 선택해주세요", value: "0" },
  { label: "서울시", value: "11" },
  { label: "부산시", value: "26" },
  { label: "대구시", value: "27" },
  { label: "인천시", value: "28" },
  { label: "광주시", value: "29" },
  { label: "대전시", value: "30" },
  { label: "울산시", value: "31" },
  { label: "경기도", value: "41" },
  { label: "강원도", value: "42" },
  { label: "충북도", value: "43" },
  { label: "충남도", value: "44" },
  { label: "전북도", value: "45" },
  { label: "전남도", value: "46" },
  { label: "경북도", value: "47" },
  { label: "경남도", value: "48" },
  { label: "제주도", value: "50" },
];

const GunGu = [
  { label: "군,구를 선택해주세요", value: "0" },
  { label: "종로구", value: "110" },
  { label: "중구", value: "140" },
  { label: "용산구", value: "170" },
  { label: "성동구", value: "200" },
  { label: "광진구", value: "215" },
  { label: "동대문구", value: "230" },
  { label: "중랑구", value: "260" },
  { label: "성북구", value: "290 " },
  { label: "강북구", value: "305" },
  { label: "도봉구", value: "320" },
  { label: "노원구", value: "350" },
  { label: "은평구", value: "380" },
  { label: "서대문구", value: "410" },
  { label: "마포구", value: "440" },
  { label: "양천구", value: "470" },
  { label: "강서구", value: "500" },
  { label: "구로구", value: "530" },
  { label: "금천구", value: "545" },
  { label: "영등포구", value: "560" },
  { label: "동작구", value: "590" },
  { label: "관악구", value: "620" },
  { label: "서초구", value: "650" },
  { label: "강남구", value: "680" },
  { label: "송파구", value: "710" },
  { label: "강동구", value: "740" },
];

const SearchForm = () => {
  const [sido, setSido] = useState(0);
  const [gungu, setGungu] = useState(0);
  const dispatch = useDispatch();

  const onClick = (e) => {
    e.preventDefault();
    dispatch(getHospital(sido, gungu));
  };

  const onChangeSido = (e) => {
    setSido(e.target.value);
  };
  const onChangeGunGu = (e) => {
    setGungu(e.target.value);
  };

  return (
    <div>
      <form>
        <select
          name="sido"
          placeholder="시도를 선택해주세요"
          onChange={onChangeSido}
          value={sido}
        >
          {SiDo.map((item) => {
            return (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            );
          })}
        </select>
        <select
          name="gungu"
          placeholder="시,군,구를 선택해주세요"
          onChange={onChangeGunGu}
          value={gungu}
        >
          {GunGu.map((item) => {
            return (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            );
          })}
        </select>
        <button onClick={onClick}>조회하기</button>
      </form>
    </div>
  );
};

export default SearchForm;
