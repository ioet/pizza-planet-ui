
async function fetchData(endpointName) {
  const response = await fetch(`http://127.0.0.1:5000/${endpointName}`);
  const data = await response.json();
  console.log(data)
  return data;
}

export async function insertDataToTable(endpointName, template, tableId) {
  const data = await fetchData(endpointName)
  let rows = data.map(element => createIngredientTemplate(element, template));
  let table = $(`${tableId} tbody`);
  table.append(rows);
}

function createIngredientTemplate(ingredient, _template) {
  let template = $(_template)[0].innerHTML;
  return Mustache.render(template, ingredient);
}