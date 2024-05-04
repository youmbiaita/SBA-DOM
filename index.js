// Using BOM method
window.onload = (evt) => {
    createMenu();
    resizeSubmitButton ();
}
//Menu sample
const menuSample = [
    {foodName: "Ndole Missole", price: 30, imageUrl:"images/ndole.jpeg"},
    {foodName: "Grilled Fish", price: 25, imageUrl: "images/fish2.jpeg"},
    {foodName: "WaterFufu and Eru", price: 30, imageUrl: "images/eru.jpeg"},
    {foodName: "Puff puff and beans", price: 15, imageUrl: "images/puff.jpg"},
    {foodName: "koki", price: 20, imageUrl: "images/koki.png"}
];

// define Variables using selectElementById.
const menu = document.getElementById("menu");
const form = document.getElementById("form");
const userName = document.getElementById("nameInput");
const email = document.getElementById("email");
const address = document.getElementById("address");
const cart = document.getElementById("cart");
const food = document.getElementById("food");
const homeNav = document.getElementById("homeNav");
const cartNav = document.getElementById("cartNav");
const btnPlaceOrder = document.getElementById("btnPlaceOrder");

const errorDisplay = document.getElementById('errorDisplay');
let message = [];

//function to validate the name
function validateName () {
    // Check if the name is not blank
    if (userName.value.trim() === "" || userName.value === null){
        message.push("Your name is required");
    }

     //  // Check if the username contains any special characters or whitespace
     if (!/^[a-zA-Z0-9]/.test(userName.value)) {
        message.push("Your name cannot contain any special characters.");
    }
}

//Function to validate the email
function validateEmail() {
    // Check if the email is not blank
    if (email.value.trim() === "") {
        message.push("Email can not be blank.");
    }

    // Check if the email is a valid email address
    if (!/^\S+@\S+\.\S+$/.test(email.value)) {
        message.push("Invalid email address.");
    }

    // Check if the email is from the domain "example.com"
    if (email.value.toLowerCase().endsWith('@example.com')) {
        message.push("Emails from example.com are not allowed.");
    }
}

// function to validate address
function validateAddress () {
    if(",#-/ !@$%^*(){}|[]\\".indexOf() >= 0) {
        message.push("Invalid address");
    }
}
// use addEventListener for to submit button using innerHTMl, 
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
        errorDisplay.innerHTML = "Your Order has been added to the cart!";
        addToCart();
     }
     message = [];
})

// Create a menu in your list using createElement, appendChild, 
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

//function to resize the submit button using lastElementChild
function resizeSubmitButton () {
    const submitBtn = form.lastElementChild;
    console.log(submitBtn);
    submitBtn.style.color = "white";
    submitBtn.style.background = "rgba(16, 159, 248, 0.798)";
    submitBtn.style.width = "200px";
    submitBtn.style.margin = "auto";
    
}

//function add menu in the cart using classlist, style, querySelectorAll, firstChild, cloneNode
function addToCart () {
    const currentOrder = document.getElementById("currentOrder");
    cartNav.classList.add("active");
    homeNav.classList.remove("active");
    cart.style.display = "block";
    form.style.display = "none";
    food.style.display = "none";
    const paragraph = document.createElement("p");
    paragraph.innerHTML = `<div>Name: ${userName.value} <br>
                            Email: ${email.value} <br>
                            Address: ${address.value}</div>`;
    currentOrder.appendChild(paragraph);
    let total = 0;
    const inputs = document.querySelectorAll("input");
    const inputNumbers = Array.from(inputs).filter(item => item.type == "number" && parseInt(item.value) > 0);
    inputNumbers.forEach(item => {
        currentOrder.appendChild(item.parentElement);
        const h5 = document.createElement("h5");
        let currentPrice = 0;
        for(let link of menuSample) {
            if (item.parentElement.firstChild.textContent === link.foodName) {
                currentPrice = parseInt(link.price);
                break;
            }
        }
        const subTotal = parseInt(item.value) * currentPrice;
        total += subTotal;
        h5.innerHTML = "Sub Total: $" + currentPrice + " X " + item.value + " = $" + subTotal;
        item.parentElement.removeChild(item.parentElement.lastElementChild);
        currentOrder.appendChild(h5);
   })
   const h4 = document.createElement("h4");
   h4.innerText = "Total: $" + total;
   currentOrder.appendChild(h4);
   const note = document.getElementById("note");
   const clone = note.cloneNode(true);
   cart.appendChild(clone);
   
}

btnPlaceOrder.addEventListener("click", (evt) => {
    evt.preventDefault();
    location.reload();
})






