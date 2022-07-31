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
                    <li className={s.stickymenu__item}><a className={s.stickymenu__item_link} href="/">Главная</a></li>
                    <li className={s.stickymenu__item}><a className={s.stickymenu__item_link} href="/">Новости</a></li>
                    <li className={s.stickymenu__item}><a className={s.stickymenu__item_link} href="/">Размещение и тарифы</a></li>
                    <li className={s.stickymenu__item}><a className={s.stickymenu__item_link} href="/">Объявления на карте</a></li>
                    <li className={s.stickymenu__item}><a className={s.stickymenu__item_link} href="/">Контакты</a></li>
                </ul>
                <div className={s.stickymenu__favorites}>Закладки</div>
                <div className={s.stickymenu__username}>
                    <a className={s.stickymenu__link} href="/">Вход и регистрация</a>
                </div>
            </nav>
        </div>
        
        <div className={s.wrapperMenu}>
            <nav className={s.menu}>
                <div className={s.menu__logo}>
                    <img src={logo} alt="logo" />
                </div>
                <ul className={s.menu__list}>
                    <li className={s.menu__item}><a href="/">Квартиры на сутки</a></li>
                    <li className={s.menu__item}><a href="/">Коттеджи и усадьбы</a></li>
                    <li className={s.menu__item}><a href="/">Бани и Сауны</a></li>
                    <li className={s.menu__item}><a href="/">Авто напрокат</a></li>
                </ul>
                <button className={s.menu__btn}><span>+</span> Разместить объявление</button>
            </nav>
        </div>
    </header>
  )
}



export default Header