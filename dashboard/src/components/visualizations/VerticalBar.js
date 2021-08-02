import React from "react";
import { Bar } from "react-chartjs-2";

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
};

const VerticalBar = ({ data }) => {
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
        label: "# number of Products",
        data: dataPoints,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className="header">
        <h1 className="title">Number of Products by Department</h1>
      </div>
      <Bar data={graphData} options={options} />
    </>
  );
};

export default VerticalBar;
