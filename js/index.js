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
    postOrder(order);

    event.preventDefault();
    event.currentTarget.reset();
});

/**
 * Gets the order data with JQuery
 */
function getOrderData() {
    let ingredients = [];
    let beverages = [];
    $.each($("input[name='ingredients']:checked"), function (el) {
        ingredients.push($(this).val());
    });
    $.each($("input[name='beverages']:checked"), function (el) {
        beverages.push($(this).val());
    });

    return {
        client_name: $("input[name='name']").val(),
        client_dni: $("input[name='dni']").val(),
        client_address: $("input[name='address']").val(),
        client_phone: $("input[name='phone']").val(),
        size_id: $("input[name='size']:checked").val(),
        ingredients,
        beverages,
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

function fetchIngredients() {
    fetch('http://127.0.0.1:5000/ingredient/')
        .then(response => response.json())
        .then(ingredients => {
            let rows = ingredients.map(element => createIngredientTemplate(element));
            let table = $("#ingredients tbody");
            table.append(rows);
        });
}

function fetchBeverages() {
    fetch('http://127.0.0.1:5000/beverage/')
        .then(response => response.json())
        .then(beverages => {
            let rows = beverages.map(element => createBeverageTemplate(element));
            let table = $("#beverages tbody");
            table.append(rows);
        });
}

function fetchOrderSizes() {
    fetch('http://127.0.0.1:5000/size/')
        .then(response => response.json())
        .then(sizes => {
            let rows = sizes.map(element => createSizeTemplate(element));
            let table = $("#sizes tbody");
            table.append(rows);
        });
}

function createIngredientTemplate(ingredient) {
    let template = $("#ingredients-template")[0].innerHTML;
    return Mustache.render(template, ingredient);
}
function createBeverageTemplate(beverage) {
    let template = $("#beverages-template")[0].innerHTML;
    return Mustache.render(template, beverage);
}

function createSizeTemplate(size) {
    let template = $("#sizes-template")[0].innerHTML;
    return Mustache.render(template, size);
}

function loadInformation() {
    fetchIngredients();
    fetchBeverages();
    fetchOrderSizes();
}


window.onload = loadInformation;