// =======================
// SEARCH PRODUCT
// =======================
function searchProducts() {

    let input = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    let products =
        document.querySelectorAll(".product-card");

    products.forEach(product => {

        let name =
            product.querySelector("h3")
            .innerText
            .toLowerCase();

        if (name.includes(input)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}


// =======================
// FILTER PRODUCT
// =======================
function filterProducts() {

    let category =
        document.getElementById("categoryFilter").value;

    let products =
        document.querySelectorAll(".product-card");

    products.forEach(product => {

        if (
            category === "all" ||
            product.dataset.category === category
        ) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}


// =======================
// ADD TO CART
// =======================
function addToCart(name, price) {

    let cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];

    cart.push({
        name: name,
        price: price
    });

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert(name + " added to cart!");
}
<<<<<<< Updated upstream
// Flash Sale Countdown

const countdown = document.getElementById("countdown");

if (countdown) {

    let hours = 2;
    let minutes = 15;
    let seconds = 30;

    setInterval(() => {

        seconds--;

        if (seconds < 0) {
            seconds = 59;
            minutes--;
        }

        if (minutes < 0) {
            minutes = 59;
            hours--;
        }

        if (hours < 0) {
            hours = 2;
            minutes = 15;
            seconds = 30;
        }

        countdown.innerHTML =
            `${String(hours).padStart(2,"0")} :
             ${String(minutes).padStart(2,"0")} :
             ${String(seconds).padStart(2,"0")}`;

    }, 1000);

=======


// =======================
// WISHLIST
// =======================
function addToWishlist(name) {

    let wishlist =
        JSON.parse(
            localStorage.getItem("wishlist")
        ) || [];

    wishlist.push(name);

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    alert(name + " added to wishlist!");
}


// =======================
// REMOVE CART ITEM
// =======================
function removeItem(index) {

    let cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];

    cart.splice(index, 1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    location.reload();
}


// =======================
// LOAD CART
// =======================
function loadCart() {

    let cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];

    let cartItems =
        document.getElementById("cart-items");

    let total = 0;

    if (!cartItems) return;

    let html = "";

    cart.forEach((item, index) => {

        total += item.price;

        html += `
        <div class="cart-item">
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>

            <button
            onclick="removeItem(${index})">
                Remove
            </button>
        </div>
        `;
    });

    cartItems.innerHTML = html;

    let delivery = 99;
let grandTotal = total + delivery;

if(document.getElementById("subtotal"))
    document.getElementById(
        "subtotal"
    ).innerHTML =
        "₹" + total;

if(document.getElementById("grand-total"))
    document.getElementById(
        "grand-total"
    ).innerHTML =
        "₹" + grandTotal;

if(document.getElementById("total"))
    document.getElementById(
        "total"
    ).innerHTML =
        "Total: ₹" + grandTotal;
}


// =======================
// PAGE LOAD
// =======================
window.onload = function () {
    loadCart();
};
function getLocation() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(
            showPosition,
            showError
        );

    } else {

        alert(
            "Geolocation is not supported."
        );
    }
}

function showPosition(position) {

    let latitude =
        position.coords.latitude;

    let longitude =
        position.coords.longitude;

    document.getElementById(
        "address"
    ).value =
        "Latitude: " +
        latitude +
        ", Longitude: " +
        longitude;
}

function showError() {

    alert(
        "Location access denied."
    );
}
function getLocation() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(
            function(position) {

                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                fetch(
                    `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`
                )
                .then(response => response.json())
                .then(data => {

                    document.getElementById("address").value =
                        data.display_name;

                    console.log("Current Address:", data.display_name);
                })
                .catch(error => {
                    alert("Address fetch failed");
                    console.log(error);
                });
            },
            function(error) {
                alert("Please allow location access");
            }
        );

    } else {
        alert("Geolocation not supported");
    }
>>>>>>> Stashed changes
}