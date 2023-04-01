import { createSlice } from "@reduxjs/toolkit";
import { fetchList } from "../thunk/topRateThunk";

interface CounterState {
  data: Array<any>;
  loading: string;
}

const initialState: CounterState = {
  data: [],
  loading: "idle",
};

export const topRateSlice = createSlice({
  name: "topRateState",
  initialState,

  reducers: {
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

export const actions = topRateSlice.actions


export default topRateSlice.reducer;
