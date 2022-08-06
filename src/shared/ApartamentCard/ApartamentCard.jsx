import React from 'react'

import s from './ApartamentCard.module.scss'

/* type Props = {} */

const ApartamentCard = ({ id, imageUrl, prices, places, rooms, adress, metro, district, description, goldStatus }) => {
    return (
        <div className={s.apartamentCard}>
            {goldStatus === 1 ? (
                <div className={s.apartamentCard__status}>
                    Gold
                </div>
            ) : ''}
            <img className={s.apartamentCard__img} src={imageUrl} alt="newscard-img" />
            <div className={s.apartamentCard__header}>
                <div className={s.apartamentCard__day}>
                    <div className={s.apartamentCard__price}>
                    {prices} BYN
                    </div>
                    за сутки
                </div>
                <div className={s.apartamentCard__places}>
                    <div className={s.apartamentCard__mans}>
                        {/* {places.slice}
                        {console.log(places.slice)} */}
                    </div>
                    <div className={s.apartamentCard__rooms}>
                        {rooms} комн.
                    </div>
                </div>
            </div>
            <div className={s.apartamentCard__location}>
                <div className={s.apartamentCard__adress}>
                    {adress}
                </div>
                <div className={s.apartamentCard__metro}>
                    {metro}
                </div>
                <div className={s.apartamentCard__district}>
                    {district}
                </div>
            </div>
            <p className={s.apartamentCard__descr}>
                {description}
            </p>
            <div className={s.apartamentCard__bts}>
                <div className={s.apartamentCard__favorites}></div>
                <div className={s.apartamentCard__contacts}><a href="/">Контакты</a></div>
                <div className={s.apartamentCard__info}><a href="/">Подробнее</a></div>
            </div>
        </div>
    )
}

export default ApartamentCard