const ingredientReport = {
    labels: [],
    data: [],
    topIngredient: {}
}

const revenueByMonthReport = {
    labels: [],
    data: [],
    topMonth: {}
}

const revenueByCustomerReport = {
    labels: [],
    data: [],
    topCustomers: []
}


const monthsOfYear = [
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December"
  ];

const getReportData = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    return data
}

const set_report_data = async () => {
    const report_data = await getReportData("http://localhost:5000/report/")
    console.log(report_data)

    // Ingredient Report
    report_data.ingredient_report.ingredients.map((ingredient) => ingredientReport.labels.push(ingredient.ingredient_name))
    report_data.ingredient_report.ingredients.map((ingredient) => ingredientReport.data.push(ingredient.requests))
    ingredientReport.topIngredient = report_data.ingredient_report.top_ingredient

    // Revenue By Month Report
    report_data.revenue_by_month.months.map((month) => revenueByMonthReport.labels.push(monthsOfYear[month.month - 1]))
    report_data.revenue_by_month.months.map((month) => revenueByMonthReport.data.push(month.revenue))
    revenueByMonthReport.topMonth = report_data.revenue_by_month.top_month

    // Revenue By Customer Report
    report_data.revenue_by_customer.customers.map((customer) => revenueByCustomerReport.labels.push(customer.client_name))
    report_data.revenue_by_customer.customers.map((customer) => revenueByCustomerReport.data.push(customer.revenue))
    revenueByCustomerReport.topCustomers = report_data.revenue_by_customer.top_customers
}

set_report_data()