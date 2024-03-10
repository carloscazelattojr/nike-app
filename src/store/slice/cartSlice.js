import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    deliveryFee: 15,
    freeDeliveryFrom: 200,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addCartItem: (state, action) => {
            const newProdutct = action.payload.product;
            const cartItem = state.items.find((i) => i.product.id === newProdutct.id);
            if (cartItem) {
                cartItem.quantity += 1;
            } else {
                state.items.push({ product: newProdutct, quantity: 1 });
            }

        },

        changeQuantity: (state, action) => {
            const { productId, amount } = action.payload;
            const cartItem = state.items.find(item => item.product.id === productId);

            if (cartItem) {
                cartItem.quantity += amount;
            }
            if (cartItem.quantity <= 0) {
                state.items = state.items.filter((item) => item !== cartItem);
            }

        },
        clearCartItems: (state) => {
            state.items = [];
        }
    }
});


export const selectNumberOfItems = (state) => state.cart.items.length;

export const selectSubtotal = (state) => state.cart.items.reduce(
    (sum, cartItem) => sum + cartItem.product.price * cartItem.quantity, 0
);


const cartSelector = (state) => state.cart;

export const selectDeliveryPrice = createSelector(
    cartSelector,
    selectSubtotal,
    (cart, subTotal) => subTotal === 0 || (subTotal > cart.freeDeliveryFrom)
        ? 0
        : cart.deliveryFee
);

export const selectTotal = createSelector(
    selectSubtotal,
    selectDeliveryPrice,
    (subTotal, delivery) => subTotal + delivery
);
