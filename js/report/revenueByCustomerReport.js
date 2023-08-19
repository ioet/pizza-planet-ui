const revenueByCustomerContext = document.getElementById(
    "revenue-by-customer-chart"
);

const revenueByCustomerData = {
    labels: revenueByCustomerReport.labels,
    datasets: [
        {
            label: "Customer revenue",
            data: revenueByCustomerReport.data,
            fill: true,
            backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
        },
    ],
};

const revenueByCustomerConfig = {
    type: "bar",
    data: revenueByCustomerData,
};

const revenueByCustomerChart = new Chart(
    revenueByCustomerContext,
    revenueByCustomerConfig
);
