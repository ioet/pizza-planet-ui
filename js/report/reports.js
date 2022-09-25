let urlParams = new URLSearchParams(window.location.search);

fetch(`http://127.0.0.1:5000/report/best_ingredients`)
    .then(response => response.json())
    .then(ingredients => {
        let rows = ingredients.map((element, index) => 
            createIngredientsRowTemplate({...element, position: index+1})
        );
        let table = $("#ingredients-table tbody");
        table.append(rows);
    });

fetch(`http://127.0.0.1:5000/report/best_customers`)
    .then(response => response.json())
    .then(customers => {
        let rows = customers.map((element, index) =>
            createCustomersRowTemplate({...element, position: index+1})
        );
        let table = $("#customers-table tbody");
        table.append(rows);
    });

fetch(`http://127.0.0.1:5000/report/best_months`)
    .then(response => response.json())
    .then(months => {
        let rows = months.map((element, index) =>
            createMonthsRowTemplate({...element, position: index+1})
        );
        let table = $("#months-table tbody");
        table.append(rows);
    });


/**
 * Find the template tag and populate it with the data
 * @param ingredients
 */
function createIngredientsRowTemplate(ingredients) {
    let template = $("#ingredients-template")[0].innerHTML;
    return Mustache.render(template, ingredients);
}

/**
 * Find the template tag and populate it with the data
 * @param customers
 */
function createCustomersRowTemplate(customers) {
   let template = $("#customers-template")[0].innerHTML;
   return Mustache.render(template, customers);
}

/**
 * Find the template tag and populate it with the data
 * @param months
 */
function createMonthsRowTemplate(months) {
   let template = $("#months-template")[0].innerHTML;
   return Mustache.render(template, months);
}
