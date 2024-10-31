let finlandBtn = document.getElementById("finlandBtn");
let ukBtn = document.getElementById("ukBtn");
let italyBtn = document.getElementById("italyBtn");
let finnishProducts = [];
let britishProducts = [];
let italianProducts = [];
let productsView = document.getElementById("productsView");
let yarnsTable = document.getElementById("yarns");
let yarnsNotUpdated = true;


//MVP version (This prints the data from db once, but maybe it needs to be dynamic so it would be more useful..)
finlandBtn.addEventListener("click", async () => {
    console.log("Loading product catalog for Finland..");
    let url = "http://localhost:3001/finnishProducts";

    let result = await fetch(url);

    let productCatalog = await result.json(); 

    let yarns = productCatalog.yarns; 
    let patterns = productCatalog.patterns; 
    let needles = productCatalog.needles; 
    let hooks = productCatalog.hooks; 
    console.log(yarns)
    let title = document.createElement("th");
    yarnsTable.appendChild(title);    



    if (yarnsNotUpdated) {
        for (let i=0; i < yarns.length; i++) {
            let row = document.createElement("tr");
            let name = document.createElement("td");
            let color = document.createElement("td");
            let material = document.createElement("td");
            let weight = document.createElement("td");
            name.innerText = yarns[i].name;
            color.innerText = yarns[i].colour; 
            material.innerText = yarns[i].material; 
            weight.innerText = yarns[i].weight; 

            row.appendChild(name); 
            row.appendChild(color);
            row.appendChild(material);
            row.appendChild(weight);
            yarnsTable.appendChild(row);
        }
    }
    yarnsNotUpdated = false;
    /*yarns.array.forEach(element => {
        let row = document.createElement("tr");
        console.log(element)
        row.innerText = element;
        productTable.appendChild(row);
    });*/

    /*if (finnishProducts.length == 0) {
        let result = await fetch(url);
        let tempProducts = await result.json();
        finnishProducts = tempProducts.products;
        console.log(finnishProducts);
        //addProductToTheView(finnishProducts);
    }*/
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


/* function addProductToTheView(products) {
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
}*/