import { createSlice } from "@reduxjs/toolkit";
import { log } from "console";
// import type { RootState } from '../store'
import { fetchList } from "../thunk/searchThunk";

interface CounterState {
  data: Array<any>;
  loading: string;
}

const initialState: CounterState = {
  data: [],
  loading: "idle",
};

export const searchSlice = createSlice({
  name: "searchState",
  initialState,

  reducers: {
    resetData: (state) => {
      state.data = []
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchList.pending, (state) => {
      })
      .addCase(fetchList.fulfilled, (state, action: any) => {
        state.loading = "idle";
        state.data = action.payload.results
      });
  },
});

export const actions = searchSlice.actions


export default searchSlice.reducer;
