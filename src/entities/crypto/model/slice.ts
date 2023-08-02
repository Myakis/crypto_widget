import { createSlice } from '@reduxjs/toolkit'
import { cryptoApi } from '../api/cryptoApi'
import { type Crypto } from './types'

type CryptoSliceState = {
  data: Crypto | null
}
const initialState: CryptoSliceState = {
  data: null,
}

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      cryptoApi.endpoints.infoCrypto.matchFulfilled,
      (state: CryptoSliceState, { payload }) => {
        state.data = payload
      }
    )
  },
})
