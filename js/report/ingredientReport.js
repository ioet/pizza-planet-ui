const ingredientContext = document.getElementById("ingredient-chart");

const ingredientData = {
    labels: ingredientReport.labels,
    datasets: [
        {
            label: "My First Dataset",
            data: ingredientReport.data,
            backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
        },
    ],
};

const ingredientsConfig = {
    type: "doughnut",
    data: ingredientData,
};

const ingredientChart = new Chart(ingredientContext, ingredientsConfig);
