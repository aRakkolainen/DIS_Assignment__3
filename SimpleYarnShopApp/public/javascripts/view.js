
let finlandBtn = document.getElementById("finlandBtn");
let ukBtn = document.getElementById("ukBtn");
let italyBtn = document.getElementById("italyBtn");
let finnishProducts = [];
let britishProducts = [];
let italianProducts = [];

let productsView = document.getElementById("productsView");
let yarnsTableBody = document.getElementById("yarnsTableBody");
let patternsTableBody = document.getElementById("patternsTableBody");
let hooksTableBody = document.getElementById("hooksTableBody");
let needlesTableBody = document.getElementById("needlesTableBody");

let yarnHeaders = document.getElementById("yarnHeaders");
let patternHeaders = document.getElementById("patternHeaders");
let hookHeaders = document.getElementById("hookHeaders");
let needleHeaders = document.getElementById("needleHeaders");

let viewCleared = false;

//MVP version (This prints the data from db once, but maybe it needs to be dynamic so it would be more useful..)
finlandBtn.addEventListener("click", () => {
    console.log("Loading product catalog for Finland..");
    let url = "http://localhost:3001/finnishProducts";
    setProductCatalogVisible();
    
    clearProductCatalogView();
    if(viewCleared) {
        fetchDataAndFillProductCatalogView(url); 
    }    
});


        
ukBtn.addEventListener("click", async () => {
    console.log("Loading product catalog for UK..");
    let url = "http://localhost:3001/britishProducts";
    setProductCatalogVisible();
    clearProductCatalogView();

    if(viewCleared) {
        fetchDataAndFillProductCatalogView(url);
    }
    });
        
italyBtn.addEventListener("click", async () => {
    console.log("Loading product catalog for Italy..");
    let url = "http://localhost:3001/italianProducts";
    setProductCatalogVisible();
    clearProductCatalogView();

    if(viewCleared) {
        fetchDataAndFillProductCatalogView(url);
    }

    });
 


function setProductCatalogVisible() {
    productsView.setAttribute("class", "catalogShown");
}        
        
async function fetchDataAndFillProductCatalogView(url) {
    let result = await fetch(url);
    let productCatalog = await result.json(); 

    let yarns = productCatalog.yarns; 
    let patterns = productCatalog.patterns; 
    let needles = productCatalog.needles; 
    let hooks = productCatalog.hooks; 
    console.log("Product catalog: ", productCatalog); 
    fillYarnsTable(yarns);
    fillPatternsTable(patterns);
    fillHooksTable(hooks);
    fillNeedlesTable(needles);
}

function fillYarnsTable(yarns) {
    let yarnID = 0; 
    yarns.forEach((yarn) => {
        
        let row = document.createElement("tr");
        row.setAttribute("id", "yarn#" + yarnID.toString());
        let brand = document.createElement("td");
        let name = document.createElement("td");
        let color = document.createElement("td");
        let material = document.createElement("td");
        let origin = document.createElement("td");
        let type =  document.createElement("td");
        let weight = document.createElement("td");
        let length = document.createElement("td");
        let price =  document.createElement("td");
        brand.innerText = yarn.brand;
        name.innerText = yarn.name;
        color.innerText = yarn.colour; 
        type.innerText = yarn.type;
        material.innerText = yarn.material;
        origin.innerText = yarn.origin;
        weight.innerText = yarn.weight;
        length.innerText = yarn.length;
        price.innerText = yarn.price;
        row.appendChild(brand);
        row.appendChild(name); 
        row.appendChild(color);
        row.appendChild(type);
        row.appendChild(material);
        row.appendChild(origin);
        row.appendChild(weight);
        row.appendChild(length);
        row.appendChild(price);
        yarnsTableBody.appendChild(row);
        yarnID++;
        });

}
                               
                            
                            
                            
function fillPatternsTable(patterns) {
    if (patterns != null) {
        let patternID = 0
        patterns.forEach(pattern => {
                let row = document.createElement("tr");
                row.setAttribute("id", "pattern#" + patternID.toString());
                let title = document.createElement("td");
                let designer = document.createElement("td");
                let type =  document.createElement("td");
                let difficulty = document.createElement("td");
                let instructions = document.createElement("td");
                let recommendedYarn = document.createElement("td");
                let price =  document.createElement("td");
                title.innerText = pattern.title;
                designer.innerText = pattern.designer;
                type.innerText = pattern.type;
                difficulty.innerText = pattern.difficulty; 
                instructions.innerText = pattern.instructions;
                recommendedYarn.innerText = pattern.recommendedYarn;

                if (pattern.price == 0) {
                    price.innerText = "Free";
                } else {
                    price.innerText = pattern.price;
                }
                row.appendChild(title);
                row.appendChild(designer); 
                row.appendChild(type);
                row.appendChild(difficulty);
                row.appendChild(instructions);
                row.appendChild(recommendedYarn);
                row.appendChild(price);
                patternsTableBody.appendChild(row);
                patternID++;
                });     
    }
                              
}
                            
function fillHooksTable(crochetingHooks) {
    let hooksID = 0; 
    if (crochetingHooks != null) {
        crochetingHooks.forEach(hook => {
                let row = document.createElement("tr");
                row.setAttribute("id", "hook#" + hooksID.toString());
                let brand = document.createElement("td");
                let name = document.createElement("td");
                let size =  document.createElement("td");
                let material = document.createElement("td");
                let origin = document.createElement("td");
                let price =  document.createElement("td");
                brand.innerText = hook.brand;
                name.innerText = hook.name;
                size.innerText = hook.size;
                material.innerText = hook.material; 
                origin.innerText = hook.origin;
                price.innerText = hook.price;
                row.appendChild(brand);
                row.appendChild(name); 
                row.appendChild(size);
                row.appendChild(material);
                row.appendChild(origin);
                row.appendChild(price);
                hooksTableBody.appendChild(row);
                hooksID++;
                });     
    }                      
}
                            
function fillNeedlesTable (knittingNeedles) {
    let needlesID = 0; 
    if (knittingNeedles != null) {
        knittingNeedles.forEach(needle => {
                let row = document.createElement("tr");
                row.setAttribute("id", "needle#" + needlesID.toString());
                let brand = document.createElement("td");
                let name = document.createElement("td");
                let size =  document.createElement("td");
                let material = document.createElement("td");
                let origin = document.createElement("td");
                let price =  document.createElement("td");
                brand.innerText = needle.brand;
                name.innerText = needle.name;
                size.innerText = needle.size;
                material.innerText = needle.material; 
                origin.innerText = needle.origin;
                price.innerText = needle.price;
                row.appendChild(brand);
                row.appendChild(name); 
                row.appendChild(size);
                row.appendChild(material);
                row.appendChild(origin);
                row.appendChild(price);
                needlesTableBody.appendChild(row);
                needlesID++;
                });     
    }                   
}


function clearProductCatalogView() {

    let yarnID = "yarn#";
    clearTable(yarnsTableBody, yarnID);

    let patternID = "pattern#";
    clearTable(patternsTableBody, patternID);

    let hookID = "hook#";
    clearTable(hooksTableBody, hookID);
    
    let needleID = "needle#";
    clearTable(needlesTableBody, needleID);

    viewCleared = true; 
}


function clearTable(tableBody, baseID){
    let numberOfRows = tableBody.rows.length;
    for (let i=0; i < numberOfRows; i++) {
        let id = baseID + i; 
        let row = document.getElementById(id);
        tableBody.removeChild(row);
    }
}
                            
                            