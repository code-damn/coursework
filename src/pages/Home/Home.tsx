import React from 'react'

import s from './Home.module.scss'

type Props = {}

const Home = (props: Props) => {
  return (
	<div className={s.home}>
		<h1>В разработке</h1>
		<h2>Название компонента - Главная</h2>
	</div>
  )
}

export default Home