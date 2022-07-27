import React from 'react'
import s from './Header.module.scss';

import logo from '../../assets/images/logo.jpg'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className={s.header}>
        <nav className={s.stickymenu}>
            <ul className={s.stickymenu__list}>
                <li className={s.stickymenu__list_item}>Главная</li>
                <li className={s.stickymenu__list_item}>Новости</li>
                <li className={s.stickymenu__list_item}>Тарифы</li>
                <li className={s.stickymenu__list_item}>Объявления на карте</li>
                <li className={s.stickymenu__list_item}>Контакты</li>
            </ul>
            <div className={s.stickymenu__favorites}>Закладки</div>
            <div className={s.stickymenu__username}>
                <a className={s.stickymenu__username_link} href="#">Вход и регистрация</a>
            </div>
        </nav>
        
        <nav className={s.menu}>
            <div className={s.menu__logo}>
                <img src={logo} alt="logo" />
            </div>
            <ul className={s.menu__list}>
                <li className={s.menu__list_item}>Квартиры на сутки</li>
                <li className={s.menu__list_item}>Коттеджи и усадьбы</li>
                <li className={s.menu__list_item}>Бани и Сауны</li>
                <li className={s.menu__list_item}>Авто напрокат</li>
            </ul>
            <button className={s.menu__btn}>+ Разместить объявление</button>
        </nav>
    </header>
  )
}

export default Header