import { type ReactNode } from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import css from './Layout.module.scss'

type Props = {
  headerSlot: ReactNode
  widget?: ReactNode
}

export function Layout(props: Props) {
  return (
    <div className={css.root}>
      {props.headerSlot}
      <div className={css.container}>
        <div className={css.content}>
          <Outlet />
        </div>
      </div>
      <footer className={css.footer}>
        <div className="text_sm">
          {new Date().getFullYear()} Тестово задание (Виджет биткоин){' '}
        </div>
      </footer>
      {props.widget}
      <ScrollRestoration />
    </div>
  )
}
