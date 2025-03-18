import { createSlice, configureStore } from "@reduxjs/toolkit";
//import { createStore } from "@reduxjs/toolkit";
const initialState = { show: false, description: "" };
const slice = createSlice({
  name: "reducer",
  initialState,
  reducers: {
    modalShower: (state) => {
      state.show = !state.show;
    },
    descriptionChanger: (state, action) => {
      state.description = action.payload;
    },
  },
});
const store = configureStore({
  reducer: { appear: slice.reducer },
});
export const appearer = slice.actions;
export default store;
