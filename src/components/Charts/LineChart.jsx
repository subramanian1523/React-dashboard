import React from "react";
import { Line } from "react-chartjs-2";

export const LineChart = ({ lineChartData }) => {
  return (
    <div className="relative" style={{ height: "100%" }}>
      <Line
        data={lineChartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "top",
            },
            tooltip: {
              callbacks: {
                label: (tooltipItem) => {
                  return `Sales: $${tooltipItem.raw}`;
                },
              },
            },
          },
        }}
        height={250}
      />
    </div>
  );
};
