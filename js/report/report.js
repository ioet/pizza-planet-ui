fetch('http://127.0.0.1:5000/report')
    .then(response => response.json())
    .then(data => {
        // Access the 'order' and 'most_revenue' properties
        const order = data.order;
        const mostRevenue = data.most_revenue;
        const ingredient = data.ingredient;

        // Now you can use 'order' and 'mostRevenue' as needed
        console.log(order);
        console.log(mostRevenue);
        console.log(ingredient);

        // Loop through each order and create HTML elements
        for (const orderId in order) {
            if (order.hasOwnProperty(orderId)) {
                const orderData = order[orderId];
                const clientName = orderData.client_name;
                const clientPhone = orderData.client_phone;
                const clientAddress = orderData.client_address;
                const clientDNI = orderData.client_dni;

                // Create HTML elements or populate a template here
                // For example, you can create a <tr> element for each order
                const tableRow = document.createElement('tr');
                tableRow.innerHTML = `
                    <td>${clientName}</td>
                    <td>${clientPhone}</td>
                    <td>${clientAddress}</td>
                    <td>${clientDNI}</td>
                `;

                // Append the tableRow to your HTML table
                document.getElementById('top-3-buyers').appendChild(tableRow);
            }
        }
        document.getElementById('ingredient-info').innerHTML = `
            Ingredient ID: ${ingredient._id}<br>
            Ingredient Name: ${ingredient.name}<br>
            Ingredient Price: $${ingredient.price}
        `;

        // Display the 'most_revenue' data in the 'most-revenue-info' element
        document.getElementById('most-revenue-info').textContent = `Most Revenue Month: ${mostRevenue}`;
    });
