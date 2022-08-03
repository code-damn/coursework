import React from 'react'
import s from './Page404.module.scss'

type Props = {}

const Page404 = (props: Props) => {
  return (
    <div className={s.page404}>
		<h1>В разработке</h1>
		<h2>Название компонента - <span>404</span></h2>
	</div>
  )
}

export default Page404