import React from 'react'
import axios from 'axios'

import Breadcrumbs from '../../shared/Breadcrumbs/Breadcrumbs'
import Filter from '../../shared/Filter/Filter'
import Sort from '../../shared/Sort/Sort'
import SortBts from '../../shared/SortBts/SortBts'
import ApartamentCard from '../../shared/ApartamentCard/ApartamentCard'

import '../../styles/index.scss'
import s from './CatalogApartaments.module.scss'

const CatalogApartaments = () => {
    const [cards, setCards] = React.useState([]);
    const [activeRooms, setActiveRooms] = React.useState('');
    const [activeDistrict, setActiveDistrict] = React.useState(0);

    React.useEffect(() => {
		axios.get("https://62e980cd01787ec7121910b3.mockapi.io/ApartamentsList?rooms=" + activeRooms)
		.then((response) => {setCards(response.data)});
	}, [activeRooms]);

    let ending1;
	let ending2;

	if (cards.length === 1) {
		ending1 = '';
		ending2 = '';
	} else if ((cards.length > 1) && (cards.length < 5)) {
		ending1 = 'о';
		ending2 = 'а';
	} else {
		ending1 = 'о';
		ending2 = 'ов'
	}

	return (
		<div className={s.catalogWrapper}>
            <div className={s.catalog}>
                <div className="container">
                    <Breadcrumbs/>
                    <Filter 
                    roomsValue={activeRooms} onClickRooms={(i) => setActiveRooms(i)}
                    districtValue={activeDistrict} onClickDistrict={(i) => setActiveDistrict(i)}/>
                </div>
            </div>
            <Sort/>
            <div className={s.catalogCards}>
                <SortBts/>
                <div className={s.catalogCards__sortResult}>
                    Найден{ending1} {cards.length} результат{ending2}
                </div>
                <div className={s.content}>
                    {cards.map((obj, i) => (
                        <ApartamentCard {...obj}
                        key={i}/>
                    ))}
                </div>
		    </div>
        </div>
	)
}

export default CatalogApartaments