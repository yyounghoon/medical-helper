import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HospitalList from "../components/HospitalList/HospitalList";
import position, { setPosition } from "../modules/position";

const HospitalContainer = () => {
  const data = useSelector(({ hospital }) => hospital.hospitalList);
  const dispatch = useDispatch();

  useEffect(() => {
    // 컴포넌트 렌더링 후 현재 위치 가져오는 로직
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          dispatch(
            setPosition(position.coords.latitude, position.coords.longitude)
          );
        },
        (e) => console.log("현재 위치를 가져오지 못했습니다.")
      );
    }
  }, [dispatch]);
  return <HospitalList data={data} />;
};

export default HospitalContainer;
