import React from 'react'
import { useState } from 'react'

import '../../styles/index.scss'
import s from './Catalog.module.scss'

type Props = {}

const Catalog = (props: Props) => {
	const [isVisibleRoomsList, setIsVisibleRoomsList] = useState(false);
	const [roomsSelect, setRoomsSelect] = useState('');
	const [isOpenCatalogSort, setIsOpenCatalogSort] = useState(false);

	const onClickRoomItem = (i) => {
		setRoomsSelect(i);
		setIsVisibleRoomsList(false);
	}

	const onClickSelect = () => {
		setIsVisibleRoomsList(!isVisibleRoomsList);
	}

	const onClickOption = () => {
		setIsOpenCatalogSort(!isOpenCatalogSort);
	} 

	const roomsArr = ['1 комн.', '2 комн.', '3 комн.', '4 комн.', '5 комн.'];
	const typeSort = ['Газовая плита', 'Духовка', 'Кофеварка', 'Микроволновая печь', 'Посуда', 'Посудомоечная машина',
					'Газовая плита', 'Духовка', 'Кофеварка', 'Микроволновая печь', 'Посуда', 'Посудомоечная машина',
					'Газовая плита', 'Духовка', 'Кофеварка', 'Микроволновая печь', 'Посуда', 'Посудомоечная машина',
					'Газовая плита', 'Духовка', 'Кофеварка', 'Микроволновая печь', 'Посуда', 'Посудомоечная машина'];

	return (
		<div className={s.wrapper}>
			<div className={s.catalog}>
				<div className={s.catalog__item}>
					<div className={s.catalog__rooms}>Комнаты</div>
					<div className={s.catalog__roomsSelect}
						onClick={() => onClickSelect()}>
						{roomsArr[roomsSelect]}
					</div>
					{isVisibleRoomsList && (
						<ul className={s.catalog__roomsList}>
							{roomsArr.map((value, i) => (
								<li 
									onMouseEnter={() => setIsVisibleRoomsList(true)} 
									onMouseLeave={() => setIsVisibleRoomsList(false)}
									onClick={() => onClickRoomItem(i)}
									key={i}>
									{value}
								</li>
							))}
						</ul>
					)}
				</div>
				<div className={s.catalog__item}>
					<div className={s.catalog__price}>Цена за сутки (BYN)</div>
					<input type="" value="От" />
					<span>-</span>
					<input type="" value="До" />
				</div>
				<div className={s.catalog__item}>
					<div 
						className={s.catalog__moreOptions}
						onClick={() => onClickOption()}>
						Больше опций</div>
					<div className={s.catalog__svg}></div>
				</div>
				<div className={s.catalog__item+ ' ' +s.catalog__lastitem}>
					<div className={s.catalog__clearBtn}>Очистить</div>
					<div className={s.catalog__showBtn}>Показать объекты</div>
				</div>
			</div>
			{isOpenCatalogSort && (
				<div className={s.catalogSort}>
					<div className={s.catalogSort__wrapper}>
						<div className={s.catalogSort__wrapperselect}>
							<div className={s.catalogSort__subtitle}>Спальные места</div>
							<div className={s.catalogSort__select}>Выберите</div>
						</div>
						<div className={s.catalogSort__wrapperselect}>
							<div className={s.catalogSort__subtitle}>Район</div>
							<div className={s.catalogSort__select}>Выберите</div>
						</div>	
						<div className={s.catalogSort__wrapperselect}>
							<div className={s.catalogSort__subtitle}>Метро</div>
							<div className={s.catalogSort__select}>Выберите</div>
						</div>
					</div>
					<div className={s.catalogSort__checkbox}>
						<ul className={s.catalogSort__checkboxList}>
							{typeSort.map((value, i) => (
								<li>
									<label>
										<input type="checkbox"/>
										{value}
									</label>
								</li>
							))}
						</ul>
					</div>						
				</div>
			)}
		</div>
	)
}

export default Catalog