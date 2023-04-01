import type { RootState } from '../store'

export const getData = (state: RootState) => state.detailState.data
export const getDataSingleMovieCredits = (state: RootState) => state.detailState.dataSingleMovieCredits
export const getLoading = (state: RootState) => state.detailState.loading
