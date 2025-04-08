import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  themeStatus: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.themeStatus = !state.themeStatus;
      console.log(state.themeStatus);
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
