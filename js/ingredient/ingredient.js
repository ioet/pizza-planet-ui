import { insertDataToTable } from '../assets/index.js'

const endpointName = "ingredient";
const ingredientTemplate = "#ingredient-item-template";
const tableId = "#ingredients";


insertDataToTable(endpointName, ingredientTemplate, tableId);
