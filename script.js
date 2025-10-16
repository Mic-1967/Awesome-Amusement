var rides = ["Tilt-a-Whirl", "Merry-Go-Round", "Bumper Cars", "Ferris Wheel", "Scrambler"];


const getBirthday = () => {
  let dob = document.querySelector("#dob").value;
  let birthDate = new Date(dob);
  console.log(birthDate.getFullYear);
}
const isRonald = () => {
  let username = document.querySelector("#name").value.trim();
  if (username.toLowerCase() ==="ronald") {
      alert("Thanks Ronald! Your purchase is 15% off!");
  } else {
      alert("Thank you for your order. A representative will be in contact."); 
  }
}

 
const styleForm = () => { 
  let formfields = document.querySelectorAll("input, select");
  for(let formfield of formfields){
      formfield.style.border = "3px solid yellow";

  }
}
const addOptions = () => {
  for(let ride of rides){
     const opt = document.createElement("option");
     opt.value = ride;
     opt.textContent = ride;
      document.querySelector("#ride").appendChild(opt);      
  }
 
}
document.querySelector("#submit").addEventListener("click", isRonald);
document.addEventListener("DOMContentLoaded", styleForm);
document.addEventListener("DOMContentLoaded", addOptions);
