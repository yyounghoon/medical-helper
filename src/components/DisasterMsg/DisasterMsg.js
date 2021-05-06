import React from "react";
import { useSelector } from "react-redux";
import "./Disaster.scss";

const DisasterMsgItem = ({ data }) => {
  return (
    <div className="disaster-container">
      <p className="msg">{data.msg}</p>
    </div>
  );
};

const DisasterMsg = () => {
  const disasterMsgData = useSelector(({ covid }) => covid.disasterMsg);
  const disasterLoading = useSelector(
    ({ loading }) => loading["covid/GET_DISASTER_MSG"]
  );

  return (
    <div>
      <h3>재난문자 발령현황</h3>
      {!disasterLoading &&
        disasterMsgData &&
        disasterMsgData.map((data) => (
          <DisasterMsgItem key={data.md101_sn} data={data} />
        ))}
    </div>
  );
};

export default DisasterMsg;
