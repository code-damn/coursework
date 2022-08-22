import React from 'react'
import { useState } from 'react'

import Chekbox from '../Chekbox/Chekbox'
import { ReactComponent as Options } from '../../assets/icons/moreOptions.svg'
import { ReactComponent as ArrowR } from '../../assets/icons/arrowRight.svg'

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

	const roomsArr = ['Выберите', '1 комн.', '2 комн.', '3 комн.', '4 комн.', '5 комн.'];
	

	return (
		<div className={s.wrapper}>
			<div className={s.sort}>
				<div className={s.sort__wrapper}>
					<div className={s.sort__item}>
						<div className={s.sort__rooms}>Комнаты</div>
						<div className={s.sort__roomsSelect}
							onClick={() => setIsVisibleRoomsList(!isVisibleRoomsList)}>
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
						<span className={s.sort__price_dash}>-</span>
						<input type="" defaultValue="До" />
					</div>
					<div className={s.sort__item}>
						<div 
							className={s.sort__moreOptions}
							onClick={() => setIsOpenCatalogSort(!isOpenCatalogSort)}
                            >
							Больше опций <span><Options/></span>
                        </div>
					</div>
					<div className={s.sort__item+ ' ' +s.sort__lastitem}>
						<div className={s.sort__clearBtn}>Очистить</div>
						<div className={s.sort__showBtn}>Показать объекты <span><ArrowR/></span></div>
					</div>
				</div>
				{isOpenCatalogSort && (
					<Chekbox/>
				)}
			</div>
		</div>
	)
}

export default Sort