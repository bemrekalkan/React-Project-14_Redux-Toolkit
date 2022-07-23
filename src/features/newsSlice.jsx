import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
};

const newSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
});

// export const { setUser, clearUser } = authSlice.actions;

export default newSlice.reducer;
