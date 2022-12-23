interface Product {
  id: number
  unitPrice: number
  quantity: number
  category: 1 | 2
}

const cartItems: Product[] = []

function addItemCart(product: Product) {
  if (product.category === 1) {
     const itemIndex = cartItems.findIndex((item: Product) => item.id === product.id)
    if (itemIndex !== -1) {
      cartItems[itemIndex].quantity += product.quantity 
      return
    } 
    cartItems.push(product)    
  } else {
    product.quantity = 1
    cartItems.push(product)
  }
}

//Testando...
const prod1: Product = {
  id: 35,
  unitPrice: 54.50,
  quantity: 3,
  category: 1
}

const prod2: Product = {
  id: 38,
  unitPrice: 109.90,
  quantity: 1,
  category: 2
}

const prod3: Product = {
  id: 35,
  unitPrice: 54.50,
  quantity: 5,
  category: 1
}

const prod4: Product = {
  id: 38,
  unitPrice: 109.90,
  quantity: 2, //só é permitido adicionar 1 da categoria 2
  category: 2
}

const prod5: Product = {
  id: 41,
  unitPrice: 33.50,
  quantity: 2, 
  category: 1
}

addItemCart(prod1)
addItemCart(prod2)
addItemCart(prod3)
addItemCart(prod4)
addItemCart(prod5)

setTimeout(() => {
  console.log('CARRINHO DE COMPRAS: ', cartItems);  
}, 3000);
