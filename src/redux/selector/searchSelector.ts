import type { RootState } from '../store'

export const getData = (state: RootState) => state.searchState.data
export const getLoading = (state: RootState) => state.searchState.loading
