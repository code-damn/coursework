import React from 'react'

import s from './Filter.module.scss'

type myFilterProps = {
    roomsValue: number | string;
    districtValue: number | string;
    onClickRooms: (id: number) => void;
    onClickDistrict: (id: number) => void;
}

const Filter: React.FC<myFilterProps> = ({ roomsValue, districtValue, onClickRooms, onClickDistrict}) => {

	const filterRooms = ['Недорогие', '1-комнатные', '2-комнатные', '3-комнатные', 
						'4-комнатные', '5-комнатные'];
	const filterDistrict = ['Заводской р.', 'Ленинский р.', 'Московский р.','Октябрьский р. ', 
						'Партизанский р.','Первомайский р.','Советский р.', 'Фрунзенский р.','Центральный р.'];

	return (
		<div className={s.filter}>
			<div className={s.filter__title}>
				Рекомендуем посмотреть
			</div>
			<ul className={s.filter__list}>
				{filterRooms.map((roomsName, i) => (
					<li 
						key={i}
						onClick={() => onClickRooms(i)}
						className={roomsValue === i ? s.active : ''}>
						{roomsName}
						
					</li>
				))}
				
				{filterDistrict.map((districtName, i) => (
					<li 
						key={i}
						onClick={() => onClickDistrict(i)}
						className={districtValue === i ? s.active : ''}>
						{districtName}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Filter