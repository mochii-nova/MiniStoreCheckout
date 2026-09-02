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
        break
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