import React from 'react'

import '../../styles/index.scss'
import s from './Catalog.module.scss'

type Props = {}

const Catalog = (props: Props) => {
	return (
		<div className={s.wrapper}>
			<div className={s.catalog}>
				<div className={s.catalog__item}>
					<div className={s.catalog__rooms}>Комнаты</div>
					<select name="" id="">
						<option>Выберите</option>
						<option>1 комн.</option>
						<option>2 комн.</option>
						<option>3 комн.</option>
						<option>4 комн.</option>
						<option>5 комн.</option>
					</select>
				</div>
				<div className={s.catalog__item}>
					<div className={s.catalog__price}>Цена за сутки (BYN)</div>
					<input type="" />
					<span>-</span>
					<input type="" />
				</div>
				<div className={s.catalog__item}>
					<div className={s.catalog__moreOptions}>Больше опций</div>
					<div className={s.catalog__svg}></div>
				</div>
				<div className={s.catalog__item+ ' ' +s.catalog__lastitem}>
					<div className={s.catalog__clearBtn}>Очистить</div>
					<div className={s.catalog__showBtn}>Показать объекты</div>
				</div>
			</div>
		</div>
	)
}

export default Catalog