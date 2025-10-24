// All departments
var departments = ["Produce", "Bread", "Deli", "Meat", "Seafood", "Dairy", "Drinks", "Frozen"];

// Department with sales this week
var onSale = ["Dairy", "Bread", "Meat", "Drinks", "Frozen"];

// Main container
var container = document.getElementById("departments");

// Loop through all departments
departments.forEach(function(dept) {
    // Create a new div for each department
    var section = document.createElement("section");
    section.id = dept.toLowerCase();

    // Heading (example: "Dairy Weekly Ad")
    var heading = document.createElement("h2");
    heading.textContent = dept + " Weekly Ad";
    section.appendChild(heading);

    // Check if the department is on sale
    if (!onSale.includes(dept)) {
      section.classList.add("hidden");
    }

    //  Add section to main container
    container.appendChild(section);

});
        
