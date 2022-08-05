import React from 'react'

import s from './ApartamentCard.module.scss'

import newscardImg from '../../assets/images/newscard-img.jpg'

type Props = {}

const ApartamentCard = (props: Props) => {
  return (
    <div className={s.apartamentCard}>
        <div className={s.apartamentCard__status}>
            Gold
        </div>
        <img className={s.apartamentCard__img} src={newscardImg} alt="newscard-img" />
        <div className={s.apartamentCard__header}>
            <div className={s.apartamentCard__day}>
                <div className={s.apartamentCard__price}>
                65.00 BYN
                </div>
                за сутки
            </div>
            <div className={s.apartamentCard__places}>
                <div className={s.apartamentCard__mans}>
                    4 (2+2)
                </div>
                <div className={s.apartamentCard__rooms}>
                    4 комн.
                </div>
            </div>
        </div>
        <div className={s.apartamentCard__location}>
            <div className={s.apartamentCard__adress}>Минск, б-р Мулявина, д. 10</div>
            <div className={s.apartamentCard__metro}>Грушевка</div>
            <div className={s.apartamentCard__district}>Шабаны</div>
        </div>
        <p className={s.apartamentCard__descr}>Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...</p>
        <div className={s.apartamentCard__bts}>
            <div className={s.apartamentCard__favorites}></div>
            <div className={s.apartamentCard__contacts}><a href="/">Контакты</a></div>
            <div className={s.apartamentCard__info}><a href="/">Подробнее</a></div>
        </div>
    </div>
  )
}

export default ApartamentCard