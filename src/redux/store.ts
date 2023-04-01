import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit'
import discoverReducer from './slice/discoverSlice'
import topRateReducer from './slice/topRateSlice'
import searchReducer from './slice/searchSlice'
import detailReducer from './slice/detailSlice'


const rootReducer = combineReducers({
  discoverState: discoverReducer,
  topRateState: topRateReducer,
  searchState: searchReducer,
  detailState: detailReducer,
})

export const setupStore: any = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']