import React from "react";
// import "./styles.css";

import { Line} from "react-chartjs-2";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
  datasets: [
    {
      label: "",
      data: [33, 53, 85, 41, 44, 65,33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },
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
      <Line data={data} />
    </div>
  );
}
