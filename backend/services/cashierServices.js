import * as cashierModel from '../models/cashierModel.js';

export const fetchAllMenu = async() => {
    const menuItems = await cashierModel.cashierMenu();
    return menuItems;
}

export const fetchMenuItemById = async(id) => {
    const menuItem = await cashierModel.cashierProductById(id);
    return menuItem;
}

export const addProductToCart = async(cashier) => {
    const result = await cashierModel.addToCart(cashier);
    return result;
}

export const updateCartItem = async(cashier) => {
    const result = await cashierModel.updateCartItem(cashier);
    return result;
}

export const fetchCart = async() => {
    const cart = await cashierModel.cartItems();
    return cart;
}

export const clearCart = async() => {
    const result = await cashierModel.clearCart();
    return result;
}