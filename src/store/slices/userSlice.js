import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
};

export const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn: (state, action) => (state = action.payload),
    signOut: (state, action) => (state = initialState),
  },
});

export const { signIn, signOut } = counterSlice.actions;

export default counterSlice.reducer;
