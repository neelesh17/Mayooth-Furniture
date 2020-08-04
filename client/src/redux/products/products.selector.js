import  { createSelector } from 'reselect';

const selectproducts = (state) => state.products;

export const selectRelatedProducts = (category, cureentlyDisplayedId) => createSelector(
    [selectproducts],
    products => {
        if(!products.items){
            return [];
        }else {
            return products.items.filter(item => item.tag === category && String(item.id) !== cureentlyDisplayedId)
        }
    }
        
);

export const selectProductByType = (type) => createSelector(
    [selectproducts],
    products => {
        if(!products.items){
            return [];
        }else {
            return products.items.filter(item => item.type === type)
        }
    }
);

export const selectCategoryProducts = collectionUrlParam => createSelector(
    [selectproducts],
    products => {
        if(!products.items){
            return [];
        }else {
            return products.items.filter(item => item.tag === collectionUrlParam)
        }
    }
);

export const selectProduct = ProductUrlParam => createSelector(
    [selectproducts],
    products => {
        if(!products.items){
            return [];
        }else {
            return products.items.filter(item => String(item.id) === String(ProductUrlParam) )
        }
    }
);

export const selectAllProducts = createSelector (
    [selectproducts],
    products => {
        if(!products.items){
            return [];
        }else {
            return products.items
        }
    }
);