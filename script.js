fetch('sales.json')
  .then(response => response.json())
  .then(items => {
    items.sales.forEach(item => { 
      const section = document.getElementById(item.department);
      if (section) {
        const div = document.createElement('div');
        div.classList.add('item-card');
        div.innerHTML = `
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p><strong>Regular Price:</strong> $$
        {item.regularPrice.toFixed(2)}</p>
        <p><strong>Sale Price:</strong> $$
        {item.salePrice.toFixed(2)}</p>
        <img src="${item.image}" alt="${item.name}">width="120">` ;
       
       
        section.appendChild(div);

      }
    });
 })
.catch(error => console.error('Error fetching sales data:', error));   