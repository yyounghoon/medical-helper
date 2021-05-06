import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Covid from "../components/Covid/Covid";
import { getCovidData, getDisasterMsg } from "../modules/covid";
import Chart from "../components/Chart/Chart";
import DisasterMsg from "../components/DisasterMsg/DisasterMsg";

const CovidContainer = () => {
  const dispatch = useDispatch();
  const data = useSelector(({ covid }) => covid.covidData);
  // const disasterMsgData = useSelector(({ covid }) => covid.disasterMsg);
  const isLoading = useSelector(
    ({ loading }) => loading["covid/GET_COVID_DATA"]
  );
  // const disasterLoading = useSelector(
  //   ({ loading }) => loading["covid/GET_DISASTER_MSG"]
  // );

  useEffect(() => {
    dispatch(getCovidData());
    dispatch(getDisasterMsg());
  }, [dispatch]);

  return (
    <div>
      <Covid data={data} isLoading={isLoading} />
      <Chart data={data} isLoading={isLoading} />
      <DisasterMsg />
    </div>
  );
};

export default CovidContainer;
