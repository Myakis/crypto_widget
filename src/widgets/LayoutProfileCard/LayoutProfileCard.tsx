import { type FC } from 'react'
import { Link } from 'react-router-dom'
import css from './LayoutProfileCard.module.css'

type TWidget = {
  isWidget?: boolean
}

export const LayoutProfileCard: FC<TWidget> = ({ isWidget }) => {
  return (
    <div className={css.root}>
      <Link to={isWidget ? '/withoutWidget' : '/'}>
        <button>
          {!isWidget ? 'На страницу с виджетом' : 'На страницу без с виджета'}
        </button>
      </Link>
    </div>
  )
}
