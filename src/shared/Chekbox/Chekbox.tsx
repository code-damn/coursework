import React from 'react'

import s from './Chekbox.module.scss'

type Props = {}

const Chekbox: React.FC = (props: Props) => {
	
	const typeSort = ['Газовая плита', 'Духовка', 'Кофеварка', 'Микроволновая печь', 'Посуда', 'Посудомоечная машина',
					'Газовая плита', 'Духовка', 'Кофеварка', 'Микроволновая печь', 'Посуда', 'Посудомоечная машина',
					'Газовая плита', 'Духовка', 'Кофеварка', 'Микроволновая печь', 'Посуда', 'Посудомоечная машина',
					'Газовая плита', 'Духовка', 'Кофеварка', 'Микроволновая печь', 'Посуда', 'Посудомоечная машина',
					'Газовая плита', 'Духовка', 'Кофеварка', 'Микроволновая печь', 'Посуда', 'Посудомоечная машина'];

	return (
		<div>
			<div className={s.checkbox}>
				<div className={s.checkbox__wrapper}>
					<div className={s.checkbox__wrapperselect}>
						<div className={s.checkbox__subtitle}>Спальные места</div>
						<div className={s.checkbox__select}>Выберите</div>
					</div>
					<div className={s.checkbox__wrapperselect}>
						<div className={s.checkbox__subtitle}>Район</div>
						<div className={s.checkbox__select}>Выберите</div>
					</div>	
					<div className={s.checkbox__wrapperselect}>
						<div className={s.checkbox__subtitle}>Метро</div>
						<div className={s.checkbox__select}>Выберите</div>
					</div>
				</div>
				<div className={s.checkbox__checkbox}>
					<ul className={s.checkbox__checkboxList}>
						{typeSort.map((value, i) => (
							<li key={i}>
								<label>
									<input type="checkbox"/>
									{value}
								</label>
							</li>
						))}
					</ul>
				</div>						
			</div>
		</div>
	)
	}

export default Chekbox