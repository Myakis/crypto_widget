import { combineReducers } from '@reduxjs/toolkit'
import { cryptoSlice } from '@/entities/crypto'
import { baseApi } from '@/shared/api'

export const rootReducer = combineReducers({
  [cryptoSlice.name]: cryptoSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
})
