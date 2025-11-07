fetch('Ham King.JSON')
  .then(response => response.json())
  .then(data => {
      const container = document.getElementById('content)');
      data.sales.forEach(item => {
      const div = document.createElement;('div');
      div.classList.add('item');
      div.innerHTML = `
      <h2>${item.name}</h2>
      <p>${item.description}</p>
      <p><strong>Regular Price:</strong> $${item.regular_Price.toFixed(2)}</p>
      <p><strong>Sale Price:</strong> $${item.salePrice.toFixed(2)}</p>
      <img src="${item.image}" alt="${item.name}" width="150">`;
      container.appendChild(div);
    });
  })
  .catch(error => console.error('Error fetching sales data:', error));

    
