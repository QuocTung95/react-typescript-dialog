import { createSlice } from "@reduxjs/toolkit";
import { fetchDetail, fetchSingleMovieCredits } from "../thunk/detailThunk";

interface CounterState {
  data: Array<any>;
  loading: string;
  dataSingleMovieCredits: object
}

const initialState: CounterState = {
  data: [],
  loading: "idle",
  dataSingleMovieCredits: {}
};

export const detailSlice = createSlice({
  name: "detailState",
  initialState,

  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetail.pending, (state) => {
      })
      .addCase(fetchDetail.fulfilled, (state, action: any) => {
        state.loading = "idle";
        state.data = action.payload
      })
      .addCase(fetchSingleMovieCredits.pending, (state) => {
      })
      .addCase(fetchSingleMovieCredits.fulfilled, (state, action: any) => {
        state.loading = "idle";
        state.dataSingleMovieCredits = action.payload
      });
  },
});

export const actions = detailSlice.actions


export default detailSlice.reducer;
