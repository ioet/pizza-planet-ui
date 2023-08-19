const ingredientNameText = document.getElementById("ingredient-name")
const ingredientRequestsText = document.getElementById("ingredient-requests")
const revenueByMonthText = document.getElementById("revenue-by-month")
const topCustomer1NameText = document.getElementById("top-customer-1")
const topCustomer1RevenueText = document.getElementById("top-customer-1-revenue")
const topCustomer2NameText = document.getElementById("top-customer-2")
const topCustomer2RevenueText = document.getElementById("top-customer-2-revenue")
const topCustomer3NameText = document.getElementById("top-customer-3")
const topCustomer3RevenueText = document.getElementById("top-customer-3-revenue")

setTimeout(() => {
    ingredientNameText.innerText = ingredientReport.labels[0]
    ingredientRequestsText.innerText = "Requests: " + ingredientReport.data[0]
    topCustomer1NameText.innerText = revenueByCustomerReport.labels[0]
    topCustomer2NameText.innerText = revenueByCustomerReport.labels[1]
    topCustomer3NameText.innerText = revenueByCustomerReport.labels[2]
    topCustomer1RevenueText.innerText = "USD $" + revenueByCustomerReport.data[0]
    topCustomer2RevenueText.innerText = "USD $" + revenueByCustomerReport.data[1]
    topCustomer3RevenueText.innerText = "USD $" + revenueByCustomerReport.data[2]
}, 1000)