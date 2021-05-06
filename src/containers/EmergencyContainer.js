import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getEMD } from "../modules/emergency";
import position, { setPosition } from "../modules/position";

const EmergencyContainer = () => {
  const dispatch = useDispatch();

  // 컴포넌트 렌더링 후 현재 위치 가져오는 로직
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          dispatch(
            setPosition(position.coords.latitude, position.coords.longitude)
          );
          dispatch(getEMD(position.coords.latitude, position.coords.longitude));
        },
        (e) => console.log("현재 위치를 가져오지 못했습니다.")
      );
    }
  }, [dispatch]);
  return <div></div>;
};

export default EmergencyContainer;
