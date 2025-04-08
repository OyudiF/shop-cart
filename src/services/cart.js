// adicionar itens no carrinho
async function addItem(userCart, item) {
    userCart.push(item);    
}

// Deletar itens do carrinho
async function delItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if(index !== -1) {
        userCart.splice(index, 1);
    }
}

// remover itens do carrinho
async function remItem(userCart, item) {
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    if(indexFound == -1) {
        console.log("Item not found");
        return;
    }

    if(userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    }

    if(userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1);
        return;
    }
}

// Calcula o total do carrinho
async function calTotal(userCart) {
    const result = userCart.reduce((total, item)=> total + item.total(), 0);

    console.log(`\nShopping cart total: R$${result}`);
}

async function displayCart(userCart) {
    console.log("\nShopping cart list: ");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | ${item.total()}`);
    });
}


export {
    addItem,
    calTotal,
    delItem,
    remItem,
    displayCart
}