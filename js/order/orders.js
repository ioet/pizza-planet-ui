import { insertDataToTable } from '../assets/index.js'

const endpointName = "order";
const ingredientTemplate = "#order-item-template";
const tableId = "#orders";


insertDataToTable(endpointName, ingredientTemplate, tableId);
