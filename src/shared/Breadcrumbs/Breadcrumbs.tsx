import React from 'react'
import s from './Breadcrumbs.module.scss'

type Props = {}

const Breadcrumbs = (props: Props) => {
  return (
    <div className={s.breadcrumbs}>
        <ul className={s.breadcrumbs__list}>
            <li className={s.breadcrumbs__item}>
                Новости
            </li>
        </ul>
        <div className={s.title}>
            {}
        </div>
    </div>
  )
}

export default Breadcrumbs