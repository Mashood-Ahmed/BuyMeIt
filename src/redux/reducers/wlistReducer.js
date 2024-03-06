import {createSlice, current } from '@reduxjs/toolkit';

const wishListSlice = createSlice({
    name: "wishList",
    initialState:{
        products: [],
        quantity: 0,
    },
    reducers:{
        addwListItem: (state, action) => {
            const inList = current(state.products).findIndex((obj) => obj.item.id == action.payload.item.id);
            if(inList < 0){
                state.products.push(action.payload);
                state.quantity += 1;
            }
        },
        removeFromwList: (state, action) => {
            const newListItems = current(state.products).filter(
                (listItem) => listItem.item.id !== action.payload.item.id
            );

            state.products = newListItems;
            state.quantity -= 1;

        }
    },
});

export const {addwListItem, removeFromwList} = wishListSlice.actions;
export default wishListSlice.reducer;