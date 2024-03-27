import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
  userToken: null,
  takingUserPhoto: false,
  userVerified: false,
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
      state.userVerified = false;
    },
    logout: (state) => {
      state.userData = null;
      state.userToken = null;
      state.takingUserPhoto = false;
      state.userVerified = false;
    },
    takeUserPhotoToggle: (state) => {
      state.takingUserPhoto = !state.takingUserPhoto;
    },
    setUserVerified: (state, action) => {
      const { identical } = action.payload;
      state.userVerified = identical;
    },
  },
});

export const { setUser, logout, takeUserPhotoToggle, setUserVerified } =
  userSlice.actions;

export default userSlice.reducer;
