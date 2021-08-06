import React from "react";
// import "./styles.css";

import {Bar} from "react-chartjs-2";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      backgroundColor: "rgba(25,222,192,0.2)",
      backgroundColor: "rgba(35,142,192,0.2)",
      backgroundColor: "rgba(75,92,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },
    // {
    //   label: "",
    //   data: [53, 43, 25, 31, 54, 65],
    //   fill: true,
    //   backgroundColor: "rgba(15,192,192,0.2)",
    // //   backgroundColor: "rgba(25,222,192,0.2)",
    // //   backgroundColor: "rgba(35,142,192,0.2)",
    // //   backgroundColor: "rgba(75,92,192,0.2)",
    // //   borderColor: "rgba(75,192,192,1)"
    // },
    // {
    //   label: "Second dataset",
    //   data: [33, 25, 35, 51, 54, 76],
    //   fill: true,
    //   borderColor: "#742774"
    // }
  ]
};

export default function App() {
  return (
    <div className="App">
      <Bar data={data} />
    </div>
  );
}
