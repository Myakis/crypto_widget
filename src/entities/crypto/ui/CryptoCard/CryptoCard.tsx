import cn from 'classnames'
import { format } from 'date-fns'
import { type FC } from 'react'
import { RatingCurrency, RunningString } from '@/shared/ui'
import { type Crypto } from '../../model/types'
import css from './CryptoCard.module.scss'

type Props = {
  data: Crypto
}

export const CryptoCard: FC<Props> = ({ data }) => {
  const valueCrypto = Object.entries(data.bpi)
  const date = new Date(data.time.updated)
  const timeCrypto = format(date, 'dd.MM.yyy')

  return (
    <div className={cn(css.root)}>
      <h4 className={css.title}>🪙 {data.chartName}</h4>
      <RatingCurrency data={valueCrypto} />
      <span className={css.span}>Обновлено: {timeCrypto}</span>

      <RunningString>{data.disclaimer}</RunningString>
    </div>
  )
}
