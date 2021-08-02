import React from "react";
import { Line } from "react-chartjs-2";

const LinearGraph = ({ data, title, description }) => {
  let label = [];
  let dataPoints = [];
  var result = Object.keys(data).map((key) => [key, data[key]]);
  const filterData = () => {
    return result.map((res) => {
      label.push(res[0]);
      dataPoints.push(res[1]);
    });
  };
  filterData();

  const graphData = {
    labels: label,
    datasets: [
      {
        label: "# number of Orders",
        data: dataPoints,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    plugins: {
      title: {
        display: true,
        text: description,
      },
    },
  };

  return (
    <>
      <div className="header">
        <h1 className="title">{title}</h1>
      </div>
      <Line data={graphData} options={options} />
    </>
  );
};

export default LinearGraph;
