let categorySelect = document.getElementById("category");
let locationSelect = document.getElementById("location");
let search = document.getElementById("search");
let previousPage = document.getElementById("previousPage");
let nextPage = document.getElementById("nextPage");

let categories = [];
let locations = [];

let amount = 5;
let pageNumber = 1;

let totalItems = 0;
let firstIndex = 0;
let lastIndex = 0;

let displayItems = (response) => {
    let container = document.getElementById("items");
    let pageInfo = document.getElementById("pageInfo");
    let headerContainer = document.createElement("div");
    let idHeader = document.createElement("div");
    let nameHeader = document.createElement("div");
    let makeHeader = document.createElement("div");
    let modelHeader = document.createElement("div");
    let categoryHeader = document.createElement("div");
    let locationHeader = document.createElement("div");
    let purchasedFromHeader = document.createElement("div");
    let purchaseDateHeader = document.createElement("div");
    let quantityHeader = document.createElement("div");
    let priceHeader = document.createElement("div");

    container.innerHTML = "";
    headerContainer.className = "item";

    fetch("./php/get_total_items.php?name=" + search.value.replace(/'/g, "\\'") + "&category=" + categorySelect.value + "&location=" + locationSelect.value)
    .then(data => data.json())
    .then((data) => {
        totalItems = data[0].count;
        lastIndex = amount * pageNumber;

        firstIndex = (totalItems > 0) ? lastIndex - amount + 1 : 0;
        lastIndex = (lastIndex > totalItems) ? totalItems : lastIndex;
        
        pageInfo.textContent = firstIndex + "-" + lastIndex + " of " + totalItems;

        if (lastIndex == totalItems) {
            nextPage.disabled = "true";
        } else {
            nextPage.disabled = "";
        }
        if (firstIndex <= 1) {
            previousPage.disabled = "true";
        }
    });

    idHeader.textContent = "ID";
    nameHeader.textContent = "Item Name";
    makeHeader.textContent = "Make";
    modelHeader.textContent = "Model";
    categoryHeader.textContent = "Category";
    locationHeader.textContent = "Location";
    purchasedFromHeader.textContent = "Purchased From";
    purchaseDateHeader.textContent = "Purchase Date";
    quantityHeader.textContent = "Quantity";
    priceHeader.textContent = "Price";

    headerContainer.appendChild(idHeader);
    headerContainer.appendChild(nameHeader);
    headerContainer.appendChild(makeHeader);
    headerContainer.appendChild(modelHeader);
    headerContainer.appendChild(categoryHeader);
    headerContainer.appendChild(locationHeader);
    headerContainer.appendChild(purchasedFromHeader);
    headerContainer.appendChild(purchaseDateHeader);
    headerContainer.appendChild(quantityHeader);
    headerContainer.appendChild(priceHeader);
    container.appendChild(headerContainer);

    response.forEach(element => {
        let itemContainer = document.createElement("div");
        let id = document.createElement("div");
        let name = document.createElement("div");
        let make = document.createElement("div");
        let model = document.createElement("div");
        let category = document.createElement("div");
        let location = document.createElement("div");
        let purchasedFrom = document.createElement("div");
        let purchaseDate = document.createElement("div");
        let quantity = document.createElement("div");
        let price = document.createElement("div");
        
        itemContainer.id = element.id;
        itemContainer.className = "item";
        itemContainer.onclick = function() {
            displayItemInfo(element);
        };

        fetch("./php/get_category.php?id=" + element.category)
        .then(cat => cat.json())
        .then((cat) => {
            category.textContent = cat[0].name;
        })

        fetch("./php/get_location.php?id=" + element.location)
        .then(loc => loc.json())
        .then((loc) => {
            location.textContent = loc[0].name;
        })

        id.textContent = element.id;
        name.innerHTML = "<strong>" + element.name + "</strong>";
        make.textContent = element.make;
        model.textContent = element.model;
        purchasedFrom.textContent = element.purchased_from;
        purchaseDate.textContent = element.purchase_date;
        quantity.textContent = element.quantity;
        price.textContent = formatCurrency(parseInt(element.price));

        itemContainer.appendChild(id);
        itemContainer.appendChild(name);
        itemContainer.appendChild(make);
        itemContainer.appendChild(model);
        itemContainer.appendChild(category);
        itemContainer.appendChild(location);
        itemContainer.appendChild(purchasedFrom);
        itemContainer.appendChild(purchaseDate);
        itemContainer.appendChild(quantity);
        itemContainer.appendChild(price);
        container.appendChild(itemContainer);
    });
}

let viewContainer = document.getElementById("selectedItem");

let displayItemInfo = (item) => {
    let itemContent = document.getElementById("itemContent");
    let header = document.createElement("p");
    let name = document.createElement("input");
    let make = document.createElement("input");
    let model = document.createElement("input");
    let category = document.createElement("select");
    let location = document.createElement("select");
    let purchasedFrom = document.createElement("input");
    let purchaseDate = document.createElement("input");
    let quantity = document.createElement("input");
    let price = document.createElement("input");
    let edit = document.createElement("input");
    let save = document.createElement("input");
    let remove = document.createElement("input");

    let nameTxt = document.createElement("p");
    let makeTxt = document.createElement("p");
    let modelTxt = document.createElement("p");
    let categoryTxt = document.createElement("p");
    let locationTxt = document.createElement("p");
    let purchasedFromTxt = document.createElement("p");
    let purchaseDateTxt = document.createElement("p");
    let quantityTxt = document.createElement("p");
    let priceTxt = document.createElement("p");

    nameTxt.textContent = "Item Name";
    makeTxt.textContent = "Make";
    modelTxt.textContent = "Model";
    categoryTxt.textContent = "Category";
    locationTxt.textContent = "Location";
    purchasedFromTxt.textContent = "Purchased From";
    purchaseDateTxt.textContent = "Purchase Date (dd/mm/yyyy)";
    quantityTxt.textContent = "Quantity";
    priceTxt.textContent = "Price (NZD)";

    viewContainer.style.display = "block";
    itemContent.innerHTML = "";

    header.className = "modalText";
    header.textContent = "Item Details";

    name.type = "text";
    name.value = item.name;
    name.readOnly = "true";
    make.type = "text";
    make.value = item.make;
    make.readOnly = "true";
    model.type = "text";
    model.value = item.model;
    model.readOnly = "true";
    purchasedFrom.type = "text";
    purchasedFrom.value = item.purchased_from;
    purchasedFrom.readOnly = "true";
    purchaseDate.type = "date";
    purchaseDate.value = item.purchase_date;
    purchaseDate.readOnly = "true";
    quantity.type = "text";
    quantity.value = item.quantity;
    quantity.readOnly = "true";
    price.type = "text";
    price.value = item.price;
    price.readOnly = "true";

    category.disabled = "true";
    location.disabled = "true";

    categories.forEach(cat => {
        let option = document.createElement("option");
        option.value = cat.id;
        option.textContent = cat.name;
        category.appendChild(option);
    });

    locations.forEach(loc => {
        let option = document.createElement("option");
        option.value = loc.id;
        option.textContent = loc.name;
        location.appendChild(option);
    });

    fetch("./php/get_category.php?id=" + item.category)
    .then(cat => cat.json())
    .then((cat) => {
        category.childNodes.forEach(node => {
            if (node.textContent === cat[0].name) {
                node.selected = "selected";
            }
        });
    })

    fetch("./php/get_location.php?id=" + item.location)
    .then(loc => loc.json())
    .then((loc) => {
        location.childNodes.forEach(node => {
            if (node.textContent === loc[0].name) {
                node.selected = "selected";
            }
        });
    })

    edit.type = "button";
    edit.value = "Edit";
    edit.onclick = function() {
        name.readOnly = "";
        make.readOnly = "";
        model.readOnly = "";
        category.disabled = "";
        location.disabled = "";
        purchasedFrom.readOnly = "";
        purchaseDate.readOnly = "";
        quantity.readOnly = "";
        price.readOnly = "";
        save.style.display = "block";
        edit.style.display = "none";
    }

    save.type = edit.type;
    save.value = "Save";
    save.style.display = "none";
    save.onclick = function() {
        // TODO: Input checking, ensure to cleanse before putting in query.
        name.readOnly = "true";
        make.readOnly = "true";
        model.readOnly = "true";
        category.disabled = "true";
        location.disabled = "true";
        purchasedFrom.readOnly = "true";
        purchaseDate.readOnly = "true";
        quantity.readOnly = "true";
        price.readOnly = "true";
        save.style.display = "none";
        edit.style.display = "block";

        fetch("./php/save_item_data.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: item.id,
                name: name.value.replace(/'/g, "\\'"),
                make: make.value.replace(/'/g, "\\'"),
                model: model.value.replace(/'/g, "\\'"),
                category: category.value,
                location: location.value,
                purchased_from: purchasedFrom.value.replace(/'/g, "\\'"),
                purchase_date: purchaseDate.value,
                quantity: quantity.value,
                price: price.value
            })
        })
        .then(() => { 
            getItems();
        });
    }

    remove.type = edit.type;
    remove.value = "Delete";
    remove.onclick = function() {
        fetch("./php/delete_item.php?id=" + item.id)
        .then(() => { 
            getItems();
            viewContainer.style.display = "none";
        });
    }

    itemContent.appendChild(header);
    itemContent.appendChild(nameTxt);
    itemContent.appendChild(name);
    itemContent.appendChild(makeTxt);
    itemContent.appendChild(make);
    itemContent.appendChild(modelTxt);
    itemContent.appendChild(model);
    itemContent.appendChild(categoryTxt);
    itemContent.appendChild(category);
    itemContent.appendChild(locationTxt);
    itemContent.appendChild(location);
    itemContent.appendChild(purchasedFromTxt);
    itemContent.appendChild(purchasedFrom);
    itemContent.appendChild(purchaseDateTxt);
    itemContent.appendChild(purchaseDate);
    itemContent.appendChild(quantityTxt);
    itemContent.appendChild(quantity);
    itemContent.appendChild(priceTxt);
    itemContent.appendChild(price);
    itemContent.appendChild(edit);
    itemContent.appendChild(save);
    itemContent.appendChild(remove);
}

function createItem() {
    let itemContent = document.getElementById("itemContent");
    let header = document.createElement("p");
    let name = document.createElement("input");
    let make = document.createElement("input");
    let model = document.createElement("input");
    let category = document.createElement("select");
    let location = document.createElement("select");
    let purchasedFrom = document.createElement("input");
    let purchaseDate = document.createElement("input");
    let quantity = document.createElement("input");
    let price = document.createElement("input");
    let create = document.createElement("input");

    let nameTxt = document.createElement("p");
    let makeTxt = document.createElement("p");
    let modelTxt = document.createElement("p");
    let categoryTxt = document.createElement("p");
    let locationTxt = document.createElement("p");
    let purchasedFromTxt = document.createElement("p");
    let purchaseDateTxt = document.createElement("p");
    let quantityTxt = document.createElement("p");
    let priceTxt = document.createElement("p");

    nameTxt.textContent = "Item Name";
    makeTxt.textContent = "Make";
    modelTxt.textContent = "Model";
    categoryTxt.textContent = "Category";
    locationTxt.textContent = "Location";
    purchasedFromTxt.textContent = "Purchased From";
    purchaseDateTxt.textContent = "Purchase Date (dd/mm/yyyy)";
    quantityTxt.textContent = "Quantity";
    priceTxt.textContent = "Price (NZD)";

    viewContainer.style.display = "block";
    itemContent.innerHTML = "";

    header.className = "modalText";
    header.textContent = "New Item";

    name.type = "text";
    make.type = "text";
    model.type = "text";
    purchasedFrom.type = "text";
    purchaseDate.type = "date";
    quantity.type = "text";
    price.type = "text";

    categories.forEach(cat => {
        let option = document.createElement("option");
        option.value = cat.id;
        option.textContent = cat.name;
        category.appendChild(option);
    });

    locations.forEach(loc => {
        let option = document.createElement("option");
        option.value = loc.id;
        option.textContent = loc.name;
        location.appendChild(option);
    });

    create.type = "button";
    create.value = "Add";
    create.onclick = function() {
        // TODO: Input checking, ensure to cleanse before putting in query.
        fetch("./php/create_item.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name.value.replace(/'/g, "\\'"),
                make: make.value.replace(/'/g, "\\'"),
                model: model.value.replace(/'/g, "\\'"),
                category: category.value,
                location: location.value,
                purchased_from: purchasedFrom.value.replace(/'/g, "\\'"),
                purchase_date: purchaseDate.value,
                quantity: quantity.value,
                price: price.value
            })
        })
        .then(() => { 
            getItems();
            viewContainer.style.display = "none";
        });
    }

    itemContent.appendChild(header);
    itemContent.appendChild(nameTxt);
    itemContent.appendChild(name);
    itemContent.appendChild(makeTxt);
    itemContent.appendChild(make);
    itemContent.appendChild(modelTxt);
    itemContent.appendChild(model);
    itemContent.appendChild(categoryTxt);
    itemContent.appendChild(category);
    itemContent.appendChild(locationTxt);
    itemContent.appendChild(location);
    itemContent.appendChild(purchasedFromTxt);
    itemContent.appendChild(purchasedFrom);
    itemContent.appendChild(purchaseDateTxt);
    itemContent.appendChild(purchaseDate);
    itemContent.appendChild(quantityTxt);
    itemContent.appendChild(quantity);
    itemContent.appendChild(priceTxt);
    itemContent.appendChild(price);
    itemContent.appendChild(create);
}

function goToNextPage(goingNextPage) {
    if (goingNextPage) {
        previousPage.disabled = "";
        pageNumber++;
        if (lastIndex + amount >= totalItems) {
            nextPage.disabled = "true";
        }
    } else {
        nextPage.disabled = "";
        pageNumber--;
        if (pageNumber == 1) {
            previousPage.disabled = "true";
        }
    }
    getItems();
}

function formatCurrency(amount) {
    return amount.toLocaleString('en-NZ', {
        style: "currency",
        currency: "NZD"
    });
}

function getItems() {
    fetch("./php/get_items.php?name=" + search.value.replace(/'/g, "\\'") + "&amount=" + amount + "&page=" + pageNumber + "&category=" + categorySelect.value + "&location=" + locationSelect.value)
    .then(data => data.json())
    .then(displayItems);
}

function addGlobalOption(selectID) {
    let option = document.createElement("option");
    option.value = "0";
    option.textContent = "Any";
    selectID.appendChild(option);
}

window.addEventListener("load", function() {
    getItems();

    fetch("./php/get_categories.php")
    .then(data => data.json())
    .then((data) => {
        let category = document.getElementById("category");
        categories = data;
        addGlobalOption(category);

        categories.forEach(cat => {
            let option = document.createElement("option");
            option.value = cat.id;
            option.textContent = cat.name;
            category.appendChild(option);
        });
    });

    fetch("./php/get_locations.php")
    .then(data => data.json())
    .then((data) => {
        let location = document.getElementById("location");
        locations = data;
        addGlobalOption(location);

        locations.forEach(loc => {
            let option = document.createElement("option");
            option.value = loc.id;
            option.textContent = loc.name;
            location.appendChild(option);
        });
    });
});

window.onclick = function(event) {
    if (event.target == viewContainer) {
        viewContainer.style.display = "none";
    }
};