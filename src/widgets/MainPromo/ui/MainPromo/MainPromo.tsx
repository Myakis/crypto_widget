import css from './MainPromo.module.css'

export function MainPromo() {
  return (
    <div className={css.root}>
      <h2>Промо на главной</h2>
      <div className={css.content}>
        {[0, 1, 3].map((id) => (
          <div key={id} className={css.block}>
            <img src="http://fractalnost.com.ua/wp-content/uploads/grunge-promo-label-png-1024x682.png" />
          </div>
        ))}
      </div>
    </div>
  )
}
