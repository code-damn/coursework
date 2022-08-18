import React from 'react'
import { Link } from 'react-router-dom';

import s from './Sidebar.module.scss'

const Sidebar: React.FC = () => {
    const cityes = [
        {"city": "в Минске", "sum": 1560}, 
        {"city": "в Гомеле", "sum": 1421}, 
        {"city": "в Бресте", "sum": 846}, 
        {"city": "в Витебске", "sum": 516}, 
        {"city": "в Гродно", "sum": 110}, 
        {"city": "в Могилеве", "sum": 100}];
    const cottages = [
        {"houseType": "Аггроусадьбы", "sum": 115}, 
        {"houseType": "Коттеджи", "sum": 113}, 
        {"houseType": "Загородный комплекс", "sum":110}, 
        {"houseType": "Базы отдыха", "sum": 100}];
    const popular = ['Коттеджи и усадьбы на о. Брасласких', 'Коттеджи и усадьбы (жилье) на Нарочи', `Коттеджи и усадьбы (жилье) у воды, на берегу, на озере`];

    return (
        <div className={s.sideBar}>
            <div className={s.cityes}>
                <h3 className={s.titleList}>Квартиры</h3>
                <ul className={s.apartamentList}>
                    {cityes.map((obj, i) => (
                        <li 
                            key={i}>
                            <Link to="/catalog">Квартиры {obj.city} <span>{obj.sum}</span></Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={s.cottages}>
                <h3 className={s.titleList}>Коттеджи и усадьбы</h3>
                <ul className={s.cottagesList}>
                    {cottages.map((obj, i) => (
                        <li 
                            key={i}>
                            <Link to="*">{obj.houseType} <span>{obj.sum}</span></Link>
                        </li>
                    ))}
                </ul>
                <div className={s.showMore}>Еще</div>
            </div>
            <div className={s.popular}>
                <h3 className={s.titleList}>Популярные направления</h3>
                <ul className={s.popularList}>
                    {popular.map((item, i) => (
                        <li
                            key={i}>
                            <Link to="*">{item}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar