/**
 * Set the id to query the order
 */

let urlParams = new URLSearchParams(window.location.search);
let _id = urlParams.get('_id');

// Ensure Handlebars is loaded before using it
document.addEventListener("DOMContentLoaded", function () {
  // Your previous code here
  fetch(`http://127.0.0.1:5000/order/id/${_id}`)
    .then(response => response.json())
    .then(order => {
      // Create a context object for Handlebars
      let context = {
        size: {
          name: order.size.name,
          price: order.size.price
        },
        client_name: order.client_name,
        client_dni: order.client_dni,
        client_address: order.client_address,
        client_phone: order.client_phone,
        total_price: order.total_price,
        detail: []
      };
      
      // Filter the details with information
    order.detail.forEach(item => {
    console.log('Item:', item);
    if (item.ingredient) {
        console.log('Adding Ingredient:', item.ingredient.name);
        context.detail.push({
        Ingredients: `${item.ingredient.name} - $${item.ingredient_price}`
        });
    }
    if (item.beverage) {
        console.log('Adding Beverage:', item.beverage.name);
        context.detail.push({
        Beverages: `${item.beverage.name} - $${item.beverage_price}`
        });
    }
    });
      
      // Get the Handlebars template from the script tag
      let source = document.getElementById("order-template").innerHTML;
      
      // Compile the template using Handlebars
      let template = Handlebars.compile(source);
      
      // Apply the context to the template and append it to the HTML element
      let html = template(context);
      $("#order").append(html);
    });
});
