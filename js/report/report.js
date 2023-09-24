fetch('http://127.0.0.1:5000/report')
    .then(response => response.json())
    .then(data => {
        const order = data.order;
        const mostRevenue = data.most_revenue;
        const ingredient = data.ingredient;

        for (const orderId in order) {
            if (order.hasOwnProperty(orderId)) {
                const orderData = order[orderId];
                const clientName = orderData.client_name;
                const clientPhone = orderData.client_phone;
                const clientAddress = orderData.client_address;
                const clientDNI = orderData.client_dni;

                const tableRow = document.createElement('tr');
                tableRow.innerHTML = `
                    <td>${clientName}</td>
                    <td>${clientPhone}</td>
                    <td>${clientAddress}</td>
                    <td>${clientDNI}</td>
                `;

                document.getElementById('top-3-buyers').appendChild(tableRow);
            }
        }
        document.getElementById('ingredient-info').innerHTML = `
            Ingredient ID: ${ingredient._id}<br>
            Ingredient Name: ${ingredient.name}<br>
            Ingredient Price: $${ingredient.price}
        `;

        document.getElementById('most-revenue-info').textContent = `Most Revenue Month: ${mostRevenue}`;
    });
