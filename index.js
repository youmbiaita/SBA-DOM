console.log("restaurant")
// define Variables
const menu = document.getElementById("menu");
const form = document.getElementById("form");
const userName = document.getElementById("name")
const email = document.getElementById("email");
const address = document.getElementById("address");
const cart = document.getElementById("cart");
const food = document.getElementById("food")

//Menu sample
const menuSample = [
    {
        foodName: "Ndole Missole",
        price: 30,
        imageUrl:"images/menu.jpg"

    },
    {
        foodName: "Grilled Fish",
        price: 25
    },
    {
        foodName: "WaterFufu and Eru",
        price: 30
    },
    {
        foodName: "Puff puff and beans",
        price: 15
    },
    {
        foodName: "koki",
        price: 20
    },

];

menuSample.forEach(f => {
    
})

function openMenu () {
    menuSample.forEach(m => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu");
        menuItem.textContent = `
        <h3>${item.name}</h3>
        <p>$${item.price.toFixed(2)}</p>
        <button onclick="addToCart(${item.id})">Add to Cart</button>
      `;
      menu.innerHTML = "";
      menu.appendChild(menuItem);
    });
}

function addToCart () {
    const cartItem = document.createElement("div")
    cartItem.classList.add("cart-menu");
    cartItem.innerHTML = `
    <span>${item.name}</span>
    <span>$${item.price.toFixed(2)}</span>
    <button onclick="removeFromCart(${itemId})">Remove</button>
  `;
  cart.appendChild(cartItem);
}

form.addEventListener("submit", (evt) => {
    evt.defaultPrevented();
    openMenu();
    addToCart();
    if (userName.value = "" || email.value === "") {
        alert("Please fill in all fields.")
    }else {
        alert("Order placed succeffully!")
    }
})



