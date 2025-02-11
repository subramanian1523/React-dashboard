export const generatePieData = (period) => {
    const categories = ["Clothings", "Lingerie and Nightwear", "Body Fit", "Sportswear", "Accessories"];
    const data = categories.map(() => Math.floor(Math.random() * 500) + 50);
    const totalValue = data.reduce((a, b) => a + b, 0);

    const percentageData = totalValue > 0 ? data.map((value) => ((value / totalValue) * 100).toFixed(2)) : [];

    return {
      labels: categories,
      datasets: [
        {
          data,
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF914D", "#50C878"],
          hoverOffset: 4,
        },
      ],
      totalValue,
      percentages: percentageData,
    };
  };