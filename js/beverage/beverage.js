
fetch('http://127.0.0.1:5000/beverage/')
    .then(response => response.json())
    .then(beverage => {
        let rows = beverage.map(element => createBeverageTemplate(element));
        let table = $("#beverages tbody");
        table.append(rows);
    });


function createBeverageTemplate(beverage) {
    let template = $("#beverage-item-template")[0].innerHTML;
    return Mustache.render(template, beverage);
}
