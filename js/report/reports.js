fetch('http://127.0.0.1:5000/report/')
    .then(response => response.json())
    .then(report => {
      let MostWantedIngredientRows = createMostWantedIngredientTemplate(
        report.top_ingredient
      );

      let wealthiestMonthRows = createWealthiestMonthTemplate(report.top_month);

      let topCustomersRows = createTopCustomersTemplate(report.top_one,
                                                        report.top_two,
                                                        report.top_three);

      let popularIngredientTable = $("#wanted-ingredient tbody");
      let wealthiestMonthTable = $("#wealthiest-month tbody");
      let topCustomersTable = $("#top-customers tbody");

      popularIngredientTable.append(MostWantedIngredientRows);
      wealthiestMonthTable.append(wealthiestMonthRows);
      topCustomersTable.append(topCustomersRows);
    });

/**
 * Find the template tag and populate it with the data
 * @param order 
 */
function createMostWantedIngredientTemplate(wantedIngredient) {
    let wantedIngredientDict = {
      ingredient: wantedIngredient[0],
      number_of_times: wantedIngredient[1],
    };

    let template = $("#wanted-ingredient-item-template")[0].innerHTML;

    return Mustache.render(template, wantedIngredientDict);
}

function createWealthiestMonthTemplate(wealthiestMonth) {
  let wealthiestMonthDict = {
    month: wealthiestMonth[0],
    profit: wealthiestMonth[1],
  };

  let template = $("#wealthiest-month-item-template")[0].innerHTML;

  return Mustache.render(template, wealthiestMonthDict);
}

function createTopCustomersTemplate(top_one, top_two, top_three) {
  let topCustomersDict = {
    top_1: top_one[0],
    value_1: top_one[1],
    top_2: top_two[0],
    value_2: top_two[1],
    top_3: top_three[0],
    value_3: top_three[1],
  };
  let template = $("#top-customers-item-template")[0].innerHTML;

  return Mustache.render(template, topCustomersDict);
}