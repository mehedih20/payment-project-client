import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
  userToken: null,
  takingUserPhoto: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.userData = user;
      state.userToken = token;
      state.takingUserPhoto = false;
    },
    logout: (state) => {
      state.userData = null;
      state.userToken = null;
      state.takingUserPhoto = false;
    },
    takeUserPhotoToggle: (state) => {
      state.takingUserPhoto = !state.takingUserPhoto;
    },
  },
});

export const { setUser, logout, takeUserPhotoToggle } = userSlice.actions;

export default userSlice.reducer;
