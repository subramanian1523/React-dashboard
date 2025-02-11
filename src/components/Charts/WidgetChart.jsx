import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);

export const generateChartData = (isUp) => ({
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      data: Array.from({ length: 10 }, () => Math.floor(Math.random() * 100)),
      borderColor: isUp ? "rgb(34, 197, 94)" : "rgb(239, 68, 68)",
      backgroundColor: "rgba(0, 0, 0, 0)",
      borderWidth: 2,
      tension: 0.4,
      pointRadius: 0,
    },
  ],
});

export const WidgetChart = ({ isUp }) => {
  return (
    <Line
      data={generateChartData(isUp)}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        scales: { x: { display: false }, y: { display: false } },
        plugins: { legend: { display: false } },
      }}
    />
  );
};
