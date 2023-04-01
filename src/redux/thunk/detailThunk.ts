import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {detailService} from '../../services'

export const fetchDetail = createAsyncThunk(
    'detailThunk/fetch',
    async (id: number | string | undefined) => {
      const response = await detailService.getDetail(id)
      return response
    }
  )
export const fetchSingleMovieCredits = createAsyncThunk(
    'singleMovieCredits/fetch',
    async (id: number | string |undefined) => {
      const response = await detailService.getSingleMovieCredits(id)
      return response
    }
  )

  export default {
    fetchDetail,
    fetchSingleMovieCredits
  }