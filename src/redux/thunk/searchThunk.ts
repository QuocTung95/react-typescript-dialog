import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {searchService} from '../../services'

export const fetchList = createAsyncThunk(
  'searchThunk/fetch',
  async (payload: any, thunkAPI) => {
    const response = await searchService.getAll(payload);
    return response;
  }
);

export default {
  fetchList,
}