import React from 'react'
import { useState } from 'react'

import '../../styles/index.scss'
import s from './Sort.module.scss'

const Sort: React.FC = () => {
	const [isVisibleRoomsList, setIsVisibleRoomsList] = useState(false);
	const [roomsSelect, setRoomsSelect] = useState(100);
	const [isOpenCatalogSort, setIsOpenCatalogSort] = useState(false);

	const onClickRoomItem = (id: number) => {
		setRoomsSelect(id);
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
					'Газовая плита', 'Духовка', 'Кофеварка', 'Микроволновая печь', 'Посуда', 'Посудомоечная машина',
					'Газовая плита', 'Духовка', 'Кофеварка', 'Микроволновая печь', 'Посуда', 'Посудомоечная машина'];

	return (
		<div className={s.wrapper}>
			<div className={s.sort}>
				<div className={s.sort__wrapper}>
					<div className={s.sort__item}>
						<div className={s.sort__rooms}>Комнаты</div>
						<div className={s.sort__roomsSelect}
							onClick={() => onClickSelect()}>
							{roomsArr[roomsSelect]}
						</div>
						{isVisibleRoomsList && (
							<ul className={s.sort__roomsList}>
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
					<div className={s.sort__item}>
						<div className={s.sort__price}>Цена за сутки (BYN)</div>
						<input type="" defaultValue="От" />
						<span>-</span>
						<input type="" defaultValue="До" />
					</div>
					<div className={s.sort__item}>
						<div 
							className={s.sort__moreOptions}
							onClick={() => onClickOption()}>
							Больше опций</div>
						<div className={s.sort__svg}></div>
					</div>
					<div className={s.sort__item+ ' ' +s.sort__lastitem}>
						<div className={s.sort__clearBtn}>Очистить</div>
						<div className={s.sort__showBtn}>Показать объекты</div>
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
				)}
			</div>
		</div>
	)
}

export default Sort