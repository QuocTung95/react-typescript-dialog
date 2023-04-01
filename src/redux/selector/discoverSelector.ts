import type { RootState } from '../store'

export const getData = (state: RootState) => state.discoverState.data
export const getLoading = (state: RootState) => state.discoverState.loading
