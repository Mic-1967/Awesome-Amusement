var rides = ["Tilt-a-Whirl", "Merry-Go-Round", "Bumper Cars", "Ferris Wheel", "Scrambler"];

const getBirthday = () => {
  let dob = document.querySelector("#dob").value;
  let birthDate = new Date(dob);
}
const isRonald = () => {
  let username = document.querySelector("#name").value.trim();
  if (username.toLowerCase() =="ronald") {
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
           
};
document.addEventListener("DOMContentLoaded", () => {
  styleForm();
  document.querySelector("#submit").addEventListener("click", isRonald);
});


