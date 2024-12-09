import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (it) => it.id === action.payload.id
      );
      if (existingItem) existingItem.quantity += action.payload.quantity;
      else state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const existingItem = state.items.find(
        (it) => it.id === action.payload.id
      );
      console.log(action, state.items.indexOf(existingItem));
      if (existingItem?.quantity > 1) existingItem.quantity -= 1;
      else if (existingItem)
        state.items.splice(state.items.indexOf(existingItem), 1);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
