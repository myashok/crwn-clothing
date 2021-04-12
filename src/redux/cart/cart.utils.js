export const mergeCartItemToCart = (cart, cartItem) => {
    const foundCartItem = cart.find(item => item.id === cartItem.id);
    if (foundCartItem) {
        return cart.map(item => {
            if (item.id === cartItem.id) {
                return { ...item, quantity: item.quantity + 1 }
            } else return item;
        });
    } else {
        return [...cart, { ...cartItem, quantity: 1 }];
    }
}
export const clearCartItemfromCart = (cart, cartItem) => {
    return cart.filter(item => item.id !== cartItem.id);
}
export const removeCartItemFromCart = (cart, cartItem) => {
    return cart.map(item => {
        if (item.id === cartItem.id) {
            return { ...item, quantity: item.quantity - 1 }
        } else return item;
    }).filter(item => item.quantity);
}