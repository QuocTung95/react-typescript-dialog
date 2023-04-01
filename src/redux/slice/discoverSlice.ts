import { createSlice } from "@reduxjs/toolkit";
import { fetchList } from "../thunk/discoverThunk";

interface CounterState {
  data: Array<any>;
  loading: string;
}

const initialState: CounterState = {
  data: [],
  loading: "idle",
};

export const discoverSlice = createSlice({
  name: "discoverState",
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

export const actions = discoverSlice.actions


export default discoverSlice.reducer;
