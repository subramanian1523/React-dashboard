export const generateLineChartData = (period) => {
    const labels =
      period === "week"
        ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        : period === "month"
        ? ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
        : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
    const data = Array.from({ length: labels.length }, () => Math.floor(Math.random() * 1000));

    return {
      labels,
      datasets: [
        {
          label: "Sales Data",
          data,
          borderColor: "rgb(75, 192, 192)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          fill: true,
          tension: 0.4,
        },
      ],
    };
  };
