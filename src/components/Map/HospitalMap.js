import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./Map.scss";

const { kakao } = window;

const HospitalMap = () => {
  const { lat, lon } = useSelector((state) => state.position);
  const data = useSelector(({ hospital }) => hospital.hospitalList);

  // MapContainer
  const mapContainer = (lat, lon, data) => {
    // map 컨테이너 그리기
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(lat, lon),
      level: 9,
    };
    const map = new kakao.maps.Map(container, options);

    // 지도에 마커와 인포윈도우를 표시하는 함수입니다
    function displayMarker(locPosition, message) {
      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        map: map,
        position: locPosition,
      });

      var iwContent = message, // 인포윈도우에 표시할 내용
        iwRemoveable = true;

      // 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({
        content: iwContent,
        removable: iwRemoveable,
      });

      // 인포윈도우를 마커위에 표시합니다
      infowindow.open(map, marker);

      // 지도 중심좌표를 접속위치로 변경합니다
      map.setCenter(locPosition);
    }
    let locPosition = new kakao.maps.LatLng(lat, lon);
    displayMarker(locPosition, "현재위치입니다.");

    // 지도에 data를 이용한 마커 표시
    data &&
      data.forEach((data) => {
        let marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(data.cxVl, data.cyVl),
        });
        // 커스텀 오버레이에 표시할 내용입니다
        // HTML 문자열 또는 Dom Element 입니다
        var content = `<div class ="label"><span class="left"></span><span class="center">${data.hmcNm}</span><span class="right"></span></div>`;

        // 커스텀 오버레이가 표시될 위치입니다
        var position = new kakao.maps.LatLng(data.cxVl, data.cyVl);

        // 커스텀 오버레이를 생성합니다
        var customOverlay = new kakao.maps.CustomOverlay({
          position: position,
          content: content,
        });

        // 커스텀 오버레이를 지도에 표시합니다
        customOverlay.setMap(map);
      });
  };

  useEffect(() => {
    mapContainer(lat, lon, data);
  }, [lat, lon, data]);
  return <div id="map"></div>;
};
export default HospitalMap;
