export type CryptoValue = {
  code: string
  description: string
  rate: string
  symbol: string
  rate_float: number
}

export type Crypto = {
  bpi: {
    EUR: CryptoValue
    GBP: CryptoValue
    USD: CryptoValue
  }
  chartName: string
  disclaimer: string
  time: {
    updated: string
    updatedISO: string
    updateduk: string
  }
}
