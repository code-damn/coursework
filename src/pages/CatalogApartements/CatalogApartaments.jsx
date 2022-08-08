import React from 'react'
import axios from 'axios'
import qs from 'qs'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { setRoomId, setDistrictId, setUrlFilter } from '../../redux/slices/filterSlice'

import Breadcrumbs from '../../shared/Breadcrumbs/Breadcrumbs'
import Filter from '../../shared/Filter/Filter'
import Sort from '../../shared/Sort/Sort'
import SortBts from '../../shared/SortBts/SortBts'
import ApartamentCard from '../../shared/ApartamentCard/ApartamentCard'

import '../../styles/index.scss'
import s from './CatalogApartaments.module.scss'

const CatalogApartaments = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isSearch = React.useRef(false);
    const isMounted = React.useRef(false);
    const roomId = useSelector((state) => state.filter.roomId);
    const districtId = useSelector((state) => state.filter.districtId);

    const [cards, setCards] = React.useState([]);

    const onClickRoom = (id) => {
        dispatch(setRoomId(id));
    };

    const onClickDistrict = (id) => {
        dispatch(setDistrictId(id))
    };

    const fetchRooms = () => {
        const urlRoom = `rooms=${roomId}`;
        const urlDistrict = `district=${districtId}`;

		axios.get(`https://62e980cd01787ec7121910b3.mockapi.io/ApartamentsList?${urlRoom}&${urlDistrict}`)
		.then((response) => {setCards(response.data)});
    }

    React.useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1));
            
            dispatch(
                setUrlFilter({
                    ...params
                }),
            );
            /* isSearch.current = true; */
        }
    }, []);

    React.useEffect(() => {
        if (!isSearch.current) {
            fetchRooms();
        }

        isSearch.current = false;
	}, [roomId, districtId]);

    React.useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                roomId,
            });
            navigate(`?${queryString}`)
        }
        isMounted.current = true;
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
                    roomsValue={roomId} onClickRooms={onClickRoom}
                    districtValue={districtId} onClickDistrict={onClickDistrict}/>
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