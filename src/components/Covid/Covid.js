import React from "react";
import "./Covid.scss";

const Covid = ({ data, isLoading }) => {
  return (
    <div className="wrapper">
      {isLoading && <div>로딩 중...</div>}
      {!isLoading && data && (
        <>
          <div className="dashboard-title">
            <h3>COVID-19</h3>
            <h4>{data[0].createDt.slice(0, 16)} 기준</h4>
          </div>
          <div className="dashboard">
            <ul className="list">
              <li>
                <p className="title">확진자</p>
                <p className="count def">
                  {Number(data[0].decideCnt).toLocaleString()}
                </p>
              </li>
              <li>
                <p className="title">사망자</p>
                <p className="count">
                  {Number(data[0].deathCnt).toLocaleString()}
                </p>
              </li>
              <li>
                <p className="title">격리해제</p>
                <p className="count clear">
                  {Number(data[0].clearCnt).toLocaleString()}
                </p>
              </li>
              <li>
                <p className="title">전일대비</p>
                <p className="count">
                  {Number(
                    data[0].decideCnt - data[1].decideCnt
                  ).toLocaleString()}
                </p>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Covid;
