import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type PageState = {
  activePage:string;
}

const initialState: PageState = {
  activePage: ""
}

export const pageSlice = createSlice({
  name:"page",
  initialState,
  reducers:{
    setActivePage:(state, action: PayloadAction<string>) => {
      state.activePage = action.payload;
    },
  }
})

export const {setActivePage} = pageSlice.actions;
export default pageSlice.reducer;