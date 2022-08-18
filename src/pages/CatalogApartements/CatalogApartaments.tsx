import React from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'

import { setRoomId, setDistrictId } from '../../redux/slices/filterSlice'

import Breadcrumbs from '../../shared/Breadcrumbs/Breadcrumbs'
import Filter from '../../shared/Filter/Filter'
import Sort from '../../shared/Sort/Sort'
import SortBts from '../../shared/SortBts/SortBts'
import ApartamentCard from '../../shared/ApartamentCard/ApartamentCard'

import '../../styles/index.scss'
import s from './CatalogApartaments.module.scss'

type cardsItem = {
    id: number;
    imageUrl: string;
    prices: string;
    rooms:number;
    adress: string;
    metro: string;
    district:number;
    microdistrict: string;
    description: string;
    nameOwner: string;
    phone: string;
    email: string;
    goldStatus:number;
}

const CatalogApartaments: React.FC = () => {
    const dispatch = useDispatch();
    const roomId = useSelector((state) => state.filter.roomId);
    const districtId = useSelector((state) => state.filter.districtId);

    const [cards, setCards] = React.useState<cardsItem[]>([]);

    const onClickRoom = (id: number) => {
        dispatch(setRoomId(id));
    };

    const onClickDistrict = (id: number) => {
        dispatch(setDistrictId(id))
    };

    const fetchRooms = async () => {
        const urlRoom = `rooms=${roomId}`;
        const urlDistrict = `district=${districtId}`;

        try {
            const response = await axios.get(
                `https://62e980cd01787ec7121910b3.mockapi.io/ApartamentsList?${urlRoom}&${urlDistrict}`
            );
            setCards(response.data);
        } catch (error) {
            console.log(error);
        }

        window.scrollTo(0, 0);
    };

    React.useEffect(() => {
        fetchRooms();
	}, [roomId, districtId]);

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
                    roomsValue={roomId} 
                    districtValue={districtId}
                    onClickDistrict={onClickDistrict}
                    onClickRooms={onClickRoom}/>
                </div>
            </div>
            <Sort/>
            <div className={s.catalogCards}>
                <SortBts/>
                <div className={s.catalogCards__sortResult}>
                    Найден{ending1} {cards.length} результат{ending2}
                </div>
                <div className={s.content}>
                    {cards.map((obj, i: number) => (
                        <ApartamentCard {...obj}
                        key={i}/>
                    ))}
                </div>
		    </div>
        </div>
	)
}

export default CatalogApartaments