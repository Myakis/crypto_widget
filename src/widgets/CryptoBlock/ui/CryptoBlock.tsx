import cn from 'classnames'
import { useState } from 'react'
import { CryptoCard } from '@/entities/crypto'
import { useInfoCryptoQuery } from '@/entities/crypto/api/cryptoApi'
import css from './CryptoBlock.module.scss'

export function CryptoBlock() {
  const [isFull, setIsFull] = useState(false)
  const { data, isFetching } = useInfoCryptoQuery()

  if (isFetching) return <h1>Загрузка</h1>
  if (!data) return null

  return (
    <div className={cn(css.root)}>
      {isFull && <CryptoCard data={data} />}
      <button
        className={cn(css.button, isFull && css.buttonTransform)}
        onClick={() => setIsFull(!isFull)}
      >
        Крипто виджет {isFull ? '(скрыть)' : ''}
      </button>
    </div>
  )
}
