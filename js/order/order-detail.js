/**
 * Set the id to query the order
 */

let urlParams = new URLSearchParams(window.location.search);
let _id = urlParams.get('_id');

fetch(`http://127.0.0.1:5000/order/id/${_id}`)
    .then(response => response.json())
    .then(order => {
        let template = createRowTemplate(order);
        $("#order").append(template);
    });

/**
 * Find the template tag and populate it with the data
 * @param order
 */
function createRowTemplate(order) {
    let template = $("#order-template")[0].innerHTML;
    const ingredients = filterIngredients(order)
    const beverages = filterBeverages(order)
    const mutated_order = JSON.parse(JSON.stringify(order))
    mutated_order.ingredients = ingredients
    mutated_order.beverages = beverages
    return Mustache.render(template, mutated_order);
}


function filterBeverages(order) {
    const beverages = order.detail.filter((detail) => detail.beverage && detail)
    return beverages
}

function filterIngredients(order) {
    const ingredients = order.detail.filter((detail) => detail.ingredient && detail)
    return ingredients
}