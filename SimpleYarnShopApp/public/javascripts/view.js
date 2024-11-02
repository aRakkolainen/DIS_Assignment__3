
let finlandBtn = document.getElementById("finlandBtn");
let ukBtn = document.getElementById("ukBtn");
let italyBtn = document.getElementById("italyBtn");
let finnishProducts = [];
let britishProducts = [];
let italianProducts = [];
let productsView = document.getElementById("productsView");
let yarnsTable = document.getElementById("yarnsTableBody");
let patternsTable = document.getElementById("patterns");
let hooksTable = document.getElementById("hooks");
let needlesTable = document.getElementById("needles");
let yarnsNotUpdated = true;
let patternsNotUpdated = true; 
let hooksNotUpdated = true; 
let needlesNotUpdated = true; 

let viewNotUpdated = true;
let viewCleared = false;

//MVP version (This prints the data from db once, but maybe it needs to be dynamic so it would be more useful..)
finlandBtn.addEventListener("click", async () => {
    console.log("Loading product catalog for Finland..");
    let url = "http://localhost:3001/finnishProducts";

    let result = await fetch(url);

    let productCatalog = await result.json(); 

    console.log(productCatalog);    
    let yarns = productCatalog.yarns; 
    let patterns = productCatalog.patterns; 
    let needles = productCatalog.needles; 
    let hooks = productCatalog.hooks; 
    
    clearProductCatalogView();
    console.log(viewNotUpdated);
    if (!viewNotUpdated && viewCleared) {
        fillProductCatalogView(yarns, patterns, needles, hooks); 
    }
    
    viewNotUpdated = false;
});


        
        ukBtn.addEventListener("click", async () => {
            //clearProductCatalogView();
            console.log("Loading product catalog for UK..");
            let url = "http://localhost:3001/britishProducts";
            let result = await fetch(url);
            let productCatalog = await result.json(); 
            console.log(productCatalog); 

            let yarns = productCatalog.yarns; 
            let patterns = productCatalog.patterns; 
            let needles = productCatalog.needles; 
            let hooks = productCatalog.hooks; 

            fillYarnsTable(yarns);


            if (patternsNotUpdated) {
                fillPatternsTable(patterns);
            }
            patternsNotUpdated = false;
            
            if (hooksNotUpdated) {
                fillHooksTable(hooks);
            }
            hooksNotUpdated = false;
        
            if (needlesNotUpdated) {
                fillNeedlesTable(needles);
            }
            needlesNotUpdated = false;
        });
        
        italyBtn.addEventListener("click", async () => {
            console.log("Loading product catalog for Italy..");
            let url = "http://localhost:3001/italianProducts";
            let result = await fetch(url);
            let productCatalog = await result.json(); 

            let yarns = productCatalog.yarns; 
            let patterns = productCatalog.patterns; 
            let needles = productCatalog.needles; 
            let hooks = productCatalog.hooks; 
            console.log(productCatalog); 
            fillYarnsTable(yarns);


            if (patternsNotUpdated) {
                fillPatternsTable(patterns);
            }
            patternsNotUpdated = false;
            
            if (hooksNotUpdated) {
                fillHooksTable(hooks);
            }
            hooksNotUpdated = false;
        
            if (needlesNotUpdated) {
                fillNeedlesTable(needles);
            }
            needlesNotUpdated = false;

        });
 
        
function fillProductCatalogView(yarns, patterns, needles, hooks) {
    fillYarnsTable(yarns);
    fillPatternsTable(patterns);
    fillHooksTable(hooks);
    fillNeedlesTable(needles);
}

function fillYarnsTable(yarns) {
    yarns.forEach((yarn) => {
        let row = document.createElement("tr");
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
        yarnsTable.appendChild(row);
        });

}
                               
                            
                            
                            
function fillPatternsTable(patterns) {
    if (patterns != null) {
        patterns.forEach(pattern => {
                let row = document.createElement("tr");
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
                patternsTable.appendChild(row);
                });     
    }
                              
}
                            
function fillHooksTable(crochetingHooks) {
    if (crochetingHooks != null) {
        crochetingHooks.forEach(hook => {
                let row = document.createElement("tr");
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
                hooksTable.appendChild(row);
                });     
    }                      
}
                            
function fillNeedlesTable (knittingNeedles) {
    if (knittingNeedles != null) {
        knittingNeedles.forEach(needle => {
                let row = document.createElement("tr");
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
                needlesTable.appendChild(row);
                });     
    }                   
}


function clearProductCatalogView() {
    for (let i=0; i < yarnsTable.rows.length-1; i++) {
        yarnsTable.deleteRow(i);
    }

    for (let i=0; i < patternsTable.rows.length; i++) {
        patternsTable.deleteRow(i);
    }
    for (let i=0; i < hooksTable.rows.length; i++) {
        hooksTable.deleteRow(i);
    }
    for (let i=0; i < needlesTable.rows.length; i++) {
        needlesTable.deleteRow(i);
    }
    viewCleared = true; 
}
                            
                            