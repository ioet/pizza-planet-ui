import { insertDataToTable } from './assets/index.js'


/**
 * POST the order on /pizza
 * @param order 
 */

function postOrder(order) {

    fetch('http://127.0.0.1:5000/order/', {
        method: 'POST',
        body: JSON.stringify(order),
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
    })
        .then(res => res.json())
        .then(res => showNotification());


}

/**
 * Get the form and submit it with fetch API
 */
let orderForm = $("#order-form");
orderForm.submit(event => {

    let order = getOrderData();
    console.log(order)
    // postOrder(order);

    event.preventDefault();
    event.currentTarget.reset();
});

function getData(name) {
    let data = [];
    $.each($(`input[name=${name}]:checked`), function (el) {
        data.push($(this).val());
    });
    return data
}

/**
 * Gets the order data with JQuery
 */
function getOrderData() {
    const ingredients = getData("ingredients");
    const beverages = getData("beverages");

    return {
        client_name: $("input[name='name']").val(),
        client_dni: $("input[name='dni']").val(),
        client_address: $("input[name='address']").val(),
        client_phone: $("input[name='phone']").val(),
        size_id: $("input[name='size']:checked").val(),
        ingredients,
        beverages
    };
}

/**
 * Shows a notification when the order is accepted
 */
function showNotification() {
    let orderAlert = $("#order-alert");
    orderAlert.toggle();
    setTimeout(() => orderAlert.toggle(), 5000);
}


// Gather information in a dynamic way


function loadInformation() {
    insertDataToTable("ingredient", "#ingredients-template", "#ingredients");
    insertDataToTable("size", "#sizes-template", "#sizes");
    insertDataToTable("beverage", "#beverages-template", "#beverages")
}


window.onload = loadInformation;