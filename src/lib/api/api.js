import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

// 지역별 검진기관 API
export const getHospitalList = ({ sido, gungu }) => {
  return axios.get(
    `http://apis.data.go.kr/openapi/service/rest/HmcSearchService/getRegnHmcList?serviceKey=${API_KEY}&siDoCd=${sido}&siGunGuCd=${gungu}`
  );
};

// 약국 api
export const getPharmacyList = ({ lat, lon }) => {
  return axios.get(
    `http://apis.data.go.kr/B552657/ErmctInsttInfoInqireService/getParmacyLcinfoInqire?serviceKey=${API_KEY}&WGS84_LON=${lon}&WGS84_LAT=${lat}`
  );
};
