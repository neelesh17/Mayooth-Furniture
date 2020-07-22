import { createSelector } from 'reselect';

const seletCart = state => state.cart;

export const selectCartHidden = createSelector(
    [seletCart],
    (cart) => cart.hidden
);