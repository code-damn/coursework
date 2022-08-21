import React from 'react'

import { ReactComponent as Heart } from '../../assets/icons/heart.svg'
import { ReactComponent as Phone } from '../../assets/icons/phone.svg'

import s from './ApartamentCard.module.scss'

type ApartamentCardProps = {
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

const ApartamentCard: React.FC<ApartamentCardProps> = ({ id, imageUrl, prices, rooms, adress, metro, microdistrict, description, goldStatus }) => {
    return (
        <div className={s.apartamentCard} key={id}>
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
                    {microdistrict}
                </div>
            </div>
            <p className={s.apartamentCard__descr}>
                {description}
            </p>
            <div className={s.apartamentCard__bts}>
                <div className={s.apartamentCard__favorites}><span><Heart/></span></div>
                <div className={s.apartamentCard__contacts}><a href="/"><span><Phone/></span> Контакты</a></div>
                <div className={s.apartamentCard__info}><a href="/">Подробнее</a></div>
            </div>
        </div>
    )
}

export default ApartamentCard