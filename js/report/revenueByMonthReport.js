const revenueByMonthContext = document.getElementById("revenue-by-month-chart");

const revenueByMonthData = {
    labels: revenueByMonthReport.labels,
    datasets: [
        {
            label: "My First Dataset",
            data: revenueByMonthReport.data,
            fill: true,
            backgroundColor: ["rgb(255, 99, 132)"],
            hoverOffset: 4,
        },
    ],
};

const revenueByMonthConfig = {
    type: "line",
    data: revenueByMonthData,
};

const revenueByMonthChart = new Chart(
    revenueByMonthContext,
    revenueByMonthConfig
);
