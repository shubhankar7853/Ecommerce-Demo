function searchProducts() {

    let input =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    let cards =
        document.querySelectorAll(".product-card");

    cards.forEach(card => {

        let name =
            card.querySelector("h3")
            .innerText
            .toLowerCase();

        if(name.includes(input)){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }
    });
}

function filterProducts(){

    let category =
        document.getElementById("categoryFilter")
        .value;

    let cards =
        document.querySelectorAll(".product-card");

    cards.forEach(card => {

        if(category === "all"){
            card.style.display = "block";
        }

        else if(
            card.dataset.category === category
        ){
            card.style.display = "block";
        }

        else{
            card.style.display = "none";
        }
    });
}
function addToCart(name, price){

    let cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];

    cart.push({
        name:name,
        price:price
    });

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert(name + " added to cart!");
}