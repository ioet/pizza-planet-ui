const ingredientReport = {
    labels: [],
    data: []
}

const revenueByMonthReport = {
    labels: [],
    data: []
}

const revenueByCustomerReport = {
    labels: [],
    data: []
}

const getReportData = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    return data
}

const set_report_data = async () => {
    const report_data = await getReportData("http://localhost:5000/report/")
    console.log(report_data)

    // Ingredient Report
    report_data.ingredient_report.map((ingredient) => ingredientReport.labels.push(ingredient.ingredient_name))
    report_data.ingredient_report.map((ingredient) => ingredientReport.data.push(ingredient.requests))

    // Revenue By Month Report
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
    report_data.revenue_by_month.map((month) => revenueByMonthReport.labels.push(monthsOfYear[month.month - 1]))
    report_data.revenue_by_month.map((month) => revenueByMonthReport.data.push(month.revenue))

    // Revenue By Customer Report
    report_data.revenue_by_customer.map((customer) => revenueByCustomerReport.labels.push(customer.client_name))
    report_data.revenue_by_customer.map((customer) => revenueByCustomerReport.data.push(customer.revenue))
}

set_report_data()