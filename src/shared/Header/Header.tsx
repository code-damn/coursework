import React from 'react'
import s from './Header.module.scss';

import logo from '../../assets/images/logo.jpg'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className={s.header}>
        <div className={s.wrapperStickymenu}>
            <nav className={s.stickymenu}>
                <ul className={s.stickymenu__list}>
                    <li className={s.stickymenu__item}><a className={s.stickymenu__item_link} href="#">Главная</a></li>
                    <li className={s.stickymenu__item}>Новости</li>
                    <li className={s.stickymenu__item}>Размещение и тарифы</li>
                    <li className={s.stickymenu__item}>Объявления на карте</li>
                    <li className={s.stickymenu__item}>Контакты</li>
                </ul>
                <div className={s.stickymenu__favorites}>Закладки</div>
                <div className={s.stickymenu__username}>
                    <a className={s.stickymenu__link} href="#">Вход и регистрация</a>
                </div>
            </nav>
        </div>
        
        <div className={s.wrapperMenu}>
            <nav className={s.menu}>
                <div className={s.menu__logo}>
                    <img src={logo} alt="logo" />
                </div>
                <ul className={s.menu__list}>
                    <li className={s.menu__item}>Квартиры на сутки</li>
                    <li className={s.menu__item}>Коттеджи и усадьбы</li>
                    <li className={s.menu__item}>Бани и Сауны</li>
                    <li className={s.menu__item}>Авто напрокат</li>
                </ul>
                <button className={s.menu__btn}><span>+</span> Разместить объявление</button>
            </nav>
        </div>
    </header>
  )
}

export default Header