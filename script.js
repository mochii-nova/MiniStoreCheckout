function calculateItemAmount(price, quantity) {
    return price * quantity;
}

function calculateDiscount(subtotal) {
    let discountRate = 0;

    if (subtotal >= 5000) {
        discountRate = 0.10;
    } else if (subtotal >= 3000) {
        discountRate = 0.07;
    } else if (subtotal >= 1000) {
        discountRate = 0.05;
    } else {
        discountRate = 0;
    }

    return subtotal * discountRate;
}

function getDeliveryFee(option) {
    let fee = 0;
    option = String(option);

    switch (option) {
        case "1":
        fee = 0;   
        break;
        case "2":
        fee = 80;  
        break;
        case "3":
        fee = 150; 
        break;
        default:
        fee = 0;
    }

    return fee;
}

function getDeliveryTypeName(option) {
    switch (option) {
        case "1": return "Store Pickup";
        case "2": return "Standard Delivery";
        case "3": return "Express Delivery";
        default: return "Unknown";
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        calculateItemAmount,
        calculateDiscount,
        getDeliveryFee
    };
}

function generateProductFields() {
    const productCount = Number(document.getElementById("productCount").value);
    const container = document.getElementById("productsContainer");
    const validationMessage = document.getElementById("validationMessage");

    container.innerHTML = "";
    validationMessage.textContent = "";

    if (!productCount || productCount <= 0 || !Number.isInteger(productCount)) {
        validationMessage.textContent = "Please enter a valid positive number of products.";
        return;
    }

    let fieldsHTML = "";

    for (let i = 0; i < productCount; i++) {
        fieldsHTML += `
        <div class="product-block">
            <h3>Product ${i + 1}</h3>
            <label for="productName-${i}">Product Name</label>
            <input type="text" id="productName-${i}" placeholder="Product Name" />

            <label for="productPrice-${i}">Price</label>
            <input type="number" id="productPrice-${i}" placeholder="Price" />

            <label for="productQuantity-${i}">Quantity</label>
            <input type="number" id="productQuantity-${i}" placeholder="Quantity" />
        </div>
        `;
    }

    container.innerHTML = fieldsHTML;
}