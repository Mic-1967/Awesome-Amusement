// Select all form inputs and style them using querySelectorAll and for loop 
const elements = document.querySelectorAll("input, select, button"); 
for (let el of elements) {
  el.style.borderRadius = "6px";
  el.style.padding = "6px";
  el.style.border = "1px solid #ccc";
}

// Handle form submission
document.getElementById("rentalForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Stop form from loading page

  const fullname = document.getElementById("name").value.trim();
  const dob = document.getElementById("dob").value;
  const ride = document.getElementById("ride").value;
  const message = document.getElementById("message");
});

// CONDITIONALS
if (fullname === "") {
  message.textContent = "Please enter your name.";
  message.style.color = "red";
  return;
}

// Calculate age
const today = new Date();
const birthDate = new Date(dob);
let age = today.getFullYear() - birthDate.getFullYear();
const monthDiff = today.getMonth() - birthDate.getMonth();
if (monthDiff <0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) { age--;

}

// Conditional logic for Ronald and age
if (fullname.toLowerCase() === "ronald") {

  message.style.color = "green";

}
else if (age < 18) {
  message.textContent = "You must be at least 18 years old to rent a ride.";
  message.style.color = "red";

} 
else if (ride === "") {
  message.textContent = "Please select a ride.";
  message.style.color = "orange";
  
}
else {
  message.textContent = "Thank you! A representative will contact you shortly.";
  message.style.color = "blue";
}
//---WHILE LOOP (Creative use) --- let dots = "";
let counts = 0; 
while (counts < age && counts < 3) {
  dots += ".";
  console.log("Processing" + dots);
  counts++;
}
