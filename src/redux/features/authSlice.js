import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isUserLoggedIn: false,  // Initially, we set the state to track if user is logged in to false
  userName: null,
  userMail: null,
  userId: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_USER_TO_ACTIVE: (state, action) => {
      // destructure all the infos from the payload
      const { userId, userName, userMail } = action.payload;
      state.isUserLoggedIn = true;
      state.userId = userId;
      state.userMail = userMail;
      state.userName = userName;
    },

    REMOVE_ACTIVE_USER: (state) => {
      state.isUserLoggedIn = false;
      state.userId = null;
      state.userMail = null;
      state.userName = null;
    }
  }
});

export const {SET_USER_TO_ACTIVE, REMOVE_ACTIVE_USER} = authSlice.actions

export const selectUserLoginState = (state) => state.auth.isUserLoggedIn;
export const selectUserName = (state) => state.auth.userName;
export const selectUserMail = (state) => state.auth.userMail;
export const selectUserId = (state) => state.auth.userId;

export default authSlice.reducer;