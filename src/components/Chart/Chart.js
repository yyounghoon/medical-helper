import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import "./Chart.scss";

const MyResponsiveBar = ({ data /* see data tab */ }) => (
  <ResponsiveBar
    data={data}
    keys={["decideCnt"]}
    indexBy="stateDt"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.4}
    valueScale={{ type: "linear" }}
    indexScale={{ type: "band", round: true }}
    colors="#ffeaa7"
    borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 2,
      tickPadding: 3,
      tickRotation: 0,
      legend: "확진자 수 - decideCnt",
      legendPosition: "middle",
      legendOffset: 40,
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
    legends={[
      {
        dataFrom: "keys",
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: "left-to-right",
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: "hover",
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    animate={true}
    motionStiffness={90}
    motionDamping={15}
  />
);
const Chart = ({ isLoading, data }) => {
  return (
    <div className="container">
      {!isLoading && data && <MyResponsiveBar data={data.reverse()} />}
    </div>
  );
};

export default Chart;
