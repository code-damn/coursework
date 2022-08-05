import React from 'react'
import ApartamentCard from '../ApartamentCard/ApartamentCard'

import SortBts from '../SortBts/SortBts'

import s from './Catalog.module.scss'

type Props = {}

const Catalog = (props: Props) => {
	return (
		<div className={s.catalog}>
			<SortBts/>
			<div className={s.catalog__sortResult}>
				Найдено 234 результата
			</div>
			<div className={s.content}>
				<ApartamentCard/>
				<ApartamentCard/>
				<ApartamentCard/>
				<ApartamentCard/>
				<ApartamentCard/>
				<ApartamentCard/>
				<ApartamentCard/>
				<ApartamentCard/>
				<ApartamentCard/>
			</div>
		</div>
	)
}

export default Catalog 