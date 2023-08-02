import { type FC } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/shared/ui'
import css from './LayoutProfileCard.module.scss'

type TWidget = {
  isWidget?: boolean
}

export const LayoutProfileCard: FC<TWidget> = ({ isWidget }) => {
  return (
    <div className={css.root}>
      <Link to={isWidget ? '/test' : '/'}>
        <Button>{isWidget ? 'На тестовую страницу' : 'На главную'}</Button>
      </Link>
    </div>
  )
}
