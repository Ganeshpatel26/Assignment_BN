// /src/redux/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  phone: '',
  otpSent: false,
  otpVerified: false,
  loggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserPhone: (state, action) => {
      state.phone = action.payload;
    },
    sendOtp: (state) => {
      state.otpSent = true;
    },
    verifyOtp: (state) => {
      state.otpVerified = true;
    },
    loginUser: (state) => {
      state.loggedIn = true;
    },
  },
});

export const { setUserPhone, sendOtp, verifyOtp, loginUser } = userSlice.actions;
export default userSlice.reducer;
