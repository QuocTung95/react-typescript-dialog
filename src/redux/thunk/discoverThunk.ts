import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {discoverService} from '../../services'

export const fetchList = createAsyncThunk(
    'discoverThunk/fetch',
    async () => {
      const response = await discoverService.getAll()
      return response
    }
  )

  export default {
    fetchList,
  }