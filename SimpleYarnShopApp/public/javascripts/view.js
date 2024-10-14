let finlandBtn = document.getElementById("finlandBtn");
let ukBtn = document.getElementById("ukBtn");
let italyBtn = document.getElementById("italyBtn");
let finnishProducts = [];
let britishProducts = [];
let italianProducts = [];
let productsView = document.getElementById("productsView");
let productsElementList = document.getElementById("products");

//MVP version (This prints the data from db once, but maybe it needs to be dynamic so it would be more useful..)
finlandBtn.addEventListener("click", async () => {
    console.log("Loading product catalog for Finland..");
    let url = "http://localhost:3001/finnishProducts";
    if (finnishProducts.length == 0) {
        let result = await fetch(url);
        let tempProducts = await result.json();
        finnishProducts = tempProducts.products;
        console.log(finnishProducts);
        addProductToTheView(finnishProducts);
    }
    //Showing in the view 
    // if (finnishProducts.length == 0) {
    //     productsView.innerText = "No results";
    // }

    // console.log(finnishProducts);
});

ukBtn.addEventListener("click", async () => {
    console.log("Loading product catalog for UK..");
    let url = "http://localhost:3001/britishProducts";
    let result = await fetch(url);
    let tempBritishProducts = await result.json();
    britishProducts = tempBritishProducts.products;
    addProductToTheView(britishProducts);
});

italyBtn.addEventListener("click", async () => {
    console.log("Loading product catalog for Italy..");
    let url = "http://localhost:3001/italianProducts";
    let result = await fetch(url);
    let products = await result.json();
    console.log(products)
});


function addProductToTheView(products) {
    //Clearing the list before adding new ones
    clearProductsView();
    products.forEach(element => {
        if (element) {
            let productItem = document.createElement("li");
            productItem.setAttribute("class", "productItem");
            productItem.setAttribute("id", element.id);
            let productName = document.createElement("h3");
            productName.innerText = element.name;
            productName.setAttribute("id", "productName")
            let productPrice = document.createElement("p");
            productPrice = element.price
            // productPrice.setAttribute("id", "productPrice");
            productItem.appendChild(document.createTextNode(element.name));
            productItem.appendChild(document.createTextNode(element.price));
            productsElementsList.appendChild(productItem);
            productsView.appendChild(productsElementList);

        }


    });
}

function clearProductsView(){
    productsElementList.forEach(element => {
        productsView.removeChild(document.getElementById(element.id));
    })
}