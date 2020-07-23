import  { createSelector } from 'reselect';

const selectproducts = (state) => state.products;

export const selectLivingRoomProducts = createSelector(
    [selectproducts],
    products => products.items.filter(item => item.tag === 'livingroom')
)

export const selectProducts = createSelector (
    [selectproducts],
    products => products.items
);