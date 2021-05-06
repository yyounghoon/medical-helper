import axios from "axios";

const API_KEY = `	
OW%2B7pApxaWyA%2FMtp4h809DV8bN%2FTeDY%2B6RVsTr5ZsS4Peuz2gAmUOTBpsqyZc0ITRd%2FIyE5qor%2B2cCxo42moPQ%3D%3D`;

// 날짜 객체 받아서 원하는 문자열 형식으로 변환
const getDateStr = (today) => {
  let year = today.getFullYear();
  let month = `0${today.getMonth() + 1}`;
  let date = today.getDate() - 1;
  return `${year}${month}${date}`;
};

// 오늘 날짜
const getDate = () => {
  const today = new Date();
  return getDateStr(today);
};

const lastWeek = () => {
  let today = new Date();
  let dayOfMonth = today.getDate();
  today.setDate(dayOfMonth - 7);
  return getDateStr(today);
};

const date = getDate();
const lastWeekDate = lastWeek();

const covid = axios.create();

// 코로나 확진자 수 데이터
export const getCoronaData = () =>
  covid.get(
    `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=${API_KEY}&pageNo=1&numOfRows=10&startCreateDt=${lastWeekDate}&endCreateDt=${date}`
  );

// 재난 문자 관련
export const getDisasterMsg = () =>
  axios.get(
    `http://apis.data.go.kr/1741000/DisasterMsg2/getDisasterMsgList?ServiceKey=${API_KEY}&type=json&pageNo=1&numOfRows=10&flag=Y`
  );
