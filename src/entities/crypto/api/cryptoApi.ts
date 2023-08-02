import { baseApi } from '@/shared/api'
import { type Crypto } from '../model/types'

export const cryptoApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    infoCrypto: build.query<Crypto, void>({
      query: () => ({
        url: `bpi/currentprice.json`,
      }),
    }),
  }),
})

export const { useInfoCryptoQuery } = cryptoApi
