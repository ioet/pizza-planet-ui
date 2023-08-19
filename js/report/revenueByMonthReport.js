const revenueByMonthContext = document.getElementById("revenue-by-month-chart");

const revenueByMonthData = {
    labels: revenueByMonthReport.labels,
    datasets: [
        {
            label: "Monthly revenue",
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
