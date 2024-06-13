import { createSlice } from "@reduxjs/toolkit";
import profImg from "../../assets/projectImg/profImg.jpg";
const initiaUserState = {
  firstName: "Harish",
  lastName: "Singh",
  profImg: profImg,
  id: 1,
};
const User = createSlice({
  name: "user",
  initialState: initiaUserState,
  reducers: {
    updateFirstName: (state, action) => {
      state.firstName = action.payload.firstName;
      return state;
    },
    resetToInitialeState: () => {
      return initiaUserState;
    },
  },
});

export const { updateFirstName, resetToInitialeState } = User.actions;
export default User.reducer;
