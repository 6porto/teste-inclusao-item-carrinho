var cartItems = [];
function addItemCart(product) {
    if (product.category === 1) {
        var itemIndex = cartItems.findIndex(function (item) { return item.id === product.id; });
        if (itemIndex !== -1) {
            cartItems[itemIndex].quantity += product.quantity;
            return;
        }
        cartItems.push(product);
    }
    else {
        product.quantity = 1;
        cartItems.push(product);
    }
}
//Testando...
var prod1 = {
    id: 35,
    unitPrice: 54.50,
    quantity: 3,
    category: 1
};
var prod2 = {
    id: 38,
    unitPrice: 109.90,
    quantity: 1,
    category: 2
};
var prod3 = {
    id: 35,
    unitPrice: 54.50,
    quantity: 5,
    category: 1
};
var prod4 = {
    id: 38,
    unitPrice: 109.90,
    quantity: 2,
    category: 2
};
var prod5 = {
    id: 41,
    unitPrice: 33.50,
    quantity: 2,
    category: 1
};
addItemCart(prod1);
addItemCart(prod2);
addItemCart(prod3);
addItemCart(prod4);
addItemCart(prod5);
setTimeout(function () {
    console.log('CARRINHO DE COMPRAS: ', cartItems);
}, 3000);
