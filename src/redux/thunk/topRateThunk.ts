import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {topRateService} from '../../services'

export const fetchList = createAsyncThunk(
    'topRateThunk/fetch',
    async () => {
      const response = await topRateService.getAll()
      return response
    }
  )

  export default {
    fetchList,
  }