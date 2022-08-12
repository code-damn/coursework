import React from 'react'
import Services from '../../shared/Services/Services'

import Tabs from '../../shared/Tabs/Tabs'

import s from './Home.module.scss'

const Home = () => {
  return (
	<div className={s.home}>
		<section className={s.homeTabs}>
			<div className={s.homeTabs__title}>
				<h1>Sdaem.by - у нас живут <span>ваши объявления</span></h1>
			</div>
			<div>
				<Tabs/>
			</div>
		</section>
		<section className={s.services}>
			<div className={s.services__options}>
				<Services/>
			</div>
			<div className={s.services__extendedList}>

			</div>
		</section>
	</div>
  )
}

export default Home