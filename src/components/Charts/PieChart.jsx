import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = ({ pieChartData }) => {
  return (
    <div className="flex justify-around md:justify-between flex-wrap items-center" style={{ height: "100%" }}>
      <div className="pie-chart-container">
        <Pie
          data={pieChartData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                callbacks: {
                  label: (tooltipItem) => {
                    const percentage = pieChartData.percentages[tooltipItem.dataIndex] || 0;
                    return `${tooltipItem.label}: $${tooltipItem.raw} (${percentage}%)`;
                  },
                },
              },
            },
          }}
          width={250}
          height={250}
        />
      </div>
      <div className="mt-6 ml-4">
        {pieChartData.labels.map((label, index) => (
          <div key={index} className="flex items-center gap-2 my-4">
            <div
              className="w-3 h-3 rounded-full"
              style={{
                backgroundColor: pieChartData.datasets[0].backgroundColor[index],
              }}
            ></div>
            <div className="flex justify-between w-[280px]">
              <div className="font-[500]">{label} ({pieChartData.percentages[index]}%)</div>
              <div className="font-[500]">${pieChartData.datasets[0].data[index]}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
