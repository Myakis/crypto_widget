import { type FC } from 'react'
import css from './RatingCurrency.module.scss'

export type CryptoValue = {
  code: string
  description: string
  rate: string
  symbol: string
  rate_float: number
}

type TProps = {
  data: Array<[string, CryptoValue]>
}
export const RatingCurrency: FC<TProps> = ({ data }) => {
  return (
    <div className={css.wrapper}>
      <span>Рейтинг валют:</span>
      <table>
        <tbody>
          {data.map(([key, value]) => (
            <tr key={key}>
              <td>
                <b>{key}:</b>
              </td>
              <td>{value.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
