import type { RootState } from '../store'

export const getData = (state: RootState) => state.topRateState.data
export const getLoading = (state: RootState) => state.topRateState.loading
