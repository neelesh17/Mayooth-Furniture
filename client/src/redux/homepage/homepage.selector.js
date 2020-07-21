import  { createSelector } from 'reselect';

const selectHomepage = (state) => state.homepage;

export const selectHomepageitems = createSelector (
    [selectHomepage],
    homepage => homepage.items
);