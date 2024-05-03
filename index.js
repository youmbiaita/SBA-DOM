window.onload = (evt) => {
    createMenu();
}
//Menu sample
const menuSample = [
    {foodName: "Ndole Missole", price: 30, imageUrl:"images/ndole.jpeg"},
    {foodName: "Grilled Fish", price: 25, imageUrl: "images/fish2.jpeg"},
    {foodName: "WaterFufu and Eru", price: 30, imageUrl: "images/eru.jpeg"},
    {foodName: "Puff puff and beans", price: 15, imageUrl: "images/puff.jpg"},
    {foodName: "koki", price: 20, imageUrl: "images/koki.png"}
];

// define Variables
const menu = document.getElementById("menu");
const form = document.getElementById("form");
const userName = document.getElementById("name")
const email = document.getElementById("email");
const address = document.getElementById("address");
const cart = document.getElementById("cart");
const food = document.getElementById("food");
const errorDisplay = document.getElementById('errorDisplay');
let message = [];


function validateName () {
    // Check if the name is not blank
    if (userName.value.trim() === "" || userName.value === null){
        message.push("Your name is required")
    }

     //  // Check if the username contains any special characters or whitespace
     if (!/^[a-zA-Z0-9]+$/.test(userName.value)) {
        message.push("Your name cannot contain any special characters or whitespace.");
    }
}

//Function to validate the email
// function validateEmail() {
//     // Check if the email is not blank
//     if (email.value.trim() === "") {
//         message.push("Email can not be blank.");
//     }

//     // Check if the email is a valid email address
//     if (!/^\S+@\S+\.\S+$/.test(email.value)) {
//         message.push("Invalid email address.");
//     }

//     // Check if the email is from the domain "example.com"
//     if (email.value.toLowerCase().endsWith('@example.com')) {
//         message.push("Emails from example.com are not allowed.");
//     }
// }

// function validateAddress () {
//     if(",#-/ !@$%^*(){}|[]\\".indexOf() >= 0) {
//         message.push("Invalid address");
//     }
// }

form.addEventListener("submit", (e) => {
    validateName(); 
    validateEmail(); 
    validateAddress();  
     if (message.length > 0) {
        e.preventDefault();
        errorDisplay.style.display = "block";
        errorDisplay.style.color = "red";
        errorDisplay.style.background = "#fcc";
        errorDisplay.innerHTML = message.join("<br>");
     } else {
        e.preventDefault();
        errorDisplay.style.display = "block";
        errorDisplay.style.color = "green";
        errorDisplay.style.background = "#98fb98";
        errorDisplay.innerHTML = "Your Order has been placed!";
     }
     message = [];
})

function createMenu () {
    menuSample.forEach(link => {
        const main = document.createElement("div");
        const title = document.createElement("h4")
        title.textContent = link.foodName;
        main.appendChild(title);
        const img = document.createElement("img");
        img.src = link.imageUrl;
        img.style.width = "200px";
        img.style.height = "200px";
        main.appendChild(img);
        const price = document.createElement("h5");
        price.innerHTML = "$" + link.price;
        main.appendChild(price);
        const input = document.createElement("input");
        input.type = "number";
        input.value = "0";
        main.appendChild(input);    
        food.appendChild(main);
    })
    
    
}

// function addToCart () {
//     const cartItem = document.createElement("div")
//     cartItem.classList.add("cart-menu");
//     cartItem.innerHTML = `
//     <span>${item.name}</span>
//     <span>$${item.price.toFixed(2)}</span>
//     <button onclick="removeFromCart(${itemId})">Remove</button>
//   `;
//   cart.appendChild(cartItem);
// }

// form.addEventListener("submit", (evt) => {
//     evt.defaultPrevented();
//     openMenu();
//     addToCart();
//     if (userName.value = "" || email.value === "") {
//         alert("Please fill in all fields.")
//     }else {
//         alert("Order placed succeffully!")
//     }
// })



