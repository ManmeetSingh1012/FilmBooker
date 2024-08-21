import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  token: null,
  email: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signin: (state, action) => {
      state.token = action.payload.token;
      state.status = true;
      state.email = action.payload.email;
    },

    signout: (state) => {
      state.token = null;
      state.status = false;
      state.email = null;
    },
  },
});

export const { signin, signout } = userSlice.actions;
export default userSlice.reducer;
