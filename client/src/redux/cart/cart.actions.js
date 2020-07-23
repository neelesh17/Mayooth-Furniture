import CartActionTypes from './cart.actions-types';

export const toggleCartHidden = ()=> ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = (item, quan = 1) =>  ({
    type: CartActionTypes.ADD_ITEM,
    payload: {cartItemToAdd: item, quantityToAdd: quan}
});

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
});

export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});

export const clearCart = () =>({
    type: CartActionTypes.CLEAR_CART,
});
