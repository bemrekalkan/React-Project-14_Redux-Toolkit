import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
};

//? createSlice 👉 is a method used to define Redux state logic in a short way.
//? Slice 👉 The name defines the states as the initial values and the reducers as the key-value structure.
//? The reducer 👉 provides automatic definition of action types as well as functions that change the state.

const authSlice = createSlice({
  name: "auth",
  //! 👇 equal to 👉 initialState: initialState,
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = "";
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
