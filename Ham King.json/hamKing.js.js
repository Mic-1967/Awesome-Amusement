fetch('hamKing.json')
  .then(response => response.json())
  .then(data => {
      const container = document.getElementById('container');
      data.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('item');
        div.innerHTML = `
      <h2>${item.name}</h2>
      <p>${item.description}</p>
      <p><strong>regular Price:</strong> $${Number(item.regular_Price).toFixed(2)}</p>
      <p><strong>sale Price:</strong> $${Number(item.sale_Price).toFixed(2)}</p>
      <img src="${item.image}" alt="${item.name} image" />
      `;
      
      container.appendChild(div);
      });
  })
  .catch(error => console.error('Error fetching sales data:', error));


