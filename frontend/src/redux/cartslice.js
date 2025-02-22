import { createSlice } from "@reduxjs/toolkit";

// Load cart from localStorage
const loadCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
};

const initialState = {
  cartItmes: loadCartFromLocalStorage(), // Stores added products
};
// Save cart to localStorage
const saveCartToLocalStorage = (cartItems) => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // state.cartItmes.push(action.payload);
      const existingItems = state.cartItmes.find(
        (item) => item.id === action.payload.id
      );
      if (existingItems) {
        existingItems.quantity += 1; // Increase quantity if item exists
      } else {
        state.cartItmes.push({ ...action.payload, quantity: 1 }); // Add new item
      }
      saveCartToLocalStorage(state.cartItmes);
      //   console.log(state.cartItmes);
    },
    incrementQuantity: (state, action) => {
      const items = state.cartItmes.find(
        (item) => item.id === action.payload.id
      );
      if (items) {
        items.quantity += 1;
        saveCartToLocalStorage(state.cartItmes);
      }
      console.log(state.cartItmes);
    },
    decrementQuantity: (state, action) => {
      const items = state.cartItmes.find(
        (item) => item.id === action.payload.id
      );
      if (items && items.quantity > 1) {
        items.quantity -= 1;
      } else {
        state.cartItmes = state.cartItmes.filter(
          (item) => item.id !== action.payload.id
        );
      }
      saveCartToLocalStorage(state.cartItmes);
    },
    removeFromCart: (state, action) => {
      // state.cartItmes = state.cartItmes.filter(item=>item.id !== action.payload.id);
      state.cartItmes = state.cartItmes.filter(
        (items) => items.id !== action.payload.id
      );
      // console.log("Removing item with ID:", action.payload);
      // console.log("Updated cart:", state.cartItmes);
      saveCartToLocalStorage(state.cartItmes);
    },
    clearCart: (state) => {
      state.cartItmes = [];
      saveCartToLocalStorage(state.cartItmes);
      localStorage.removeItem("cart");
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
