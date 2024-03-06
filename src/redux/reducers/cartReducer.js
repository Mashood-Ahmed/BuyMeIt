import {createSlice, current } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        products: [],
        quantity: 0,
        total: 0,
        shipping: 0,
        discount: 0,
    },
    reducers:{
        addCartItem: (state, action) => {
            const inCart = current(state.products).findIndex((obj) => obj.item.id == action.payload.item.id);
            if(inCart >= 0){
                if(state.products[inCart].quantity < state.products[inCart].item.rating.count){
                    state.products[inCart] = {
                        ...state.products[inCart],
                        quantity: state.products[inCart].quantity + 1,
                        price: action.payload.price, 
                    };
                    state.quantity += 1;
                    state.total += action.payload.price * action.payload.quantity;
                }
            }else{
                state.quantity += 1;
                state.products.push(action.payload);
                state.total += action.payload.price * action.payload.quantity;
            }
        },
        Inc: (state, action) => {
            const ItemIndex = current(state.products).findIndex((obj) => obj.item == action.payload.item);

            if(state.products[ItemIndex].quantity < state.products[ItemIndex].item.rating.count){
                state.products[ItemIndex] = {
                    ...state.products[ItemIndex],
                    quantity: state.products[ItemIndex].quantity + 1,
                };
                   state.quantity += 1;
                state.total += state.products[ItemIndex].price
            }
        },
        Dec: (state, action) => {
            const ItemIndex = current(state.products).findIndex((obj) => obj.item == action.payload.item);

            if(state.products[ItemIndex].quantity > 1){
                state.products[ItemIndex] = {
                    ...state.products[ItemIndex],
                    quantity: state.products[ItemIndex].quantity - 1,
                };
                state.quantity -= 1;
                state.total -= state.products[ItemIndex].price
            }
        },
        removeFromCart: (state, action) => {
            const newCartItems = current(state.products).filter(
                (cartItem) => cartItem.item.id !== action.payload.item.id
            );

            state.total -= action.payload.price * action.payload.quantity;
            state.quantity -= action.payload.quantity
            state.products = newCartItems;

        },
        submitCart: (state) => {
            state.products = [];
            state.total = 0;
            state.quantity = 0;
            state.shipping = 0;
            state.discount = 0;
        }
    },
});

export const {addCartItem, Inc, Dec, removeFromCart, submitCart} = cartSlice.actions;
export default cartSlice.reducer;