import React from 'react'
import { useState } from 'react';

import s from './Header.module.scss';

import logo from '../../assets/images/logo.jpg'

type Props = {}

const Header = (props: Props) => {
	const [isVisiblePopap, setIsVisiblePopap] = useState(false);
	const [selected, setSelected] = useState('');
	const apartaments = ['в Минске', 'в Гомеле', 'в Бресте', 'в Витебске', 'в Гродно', 'в Могилеве'];

	const onClickItem = (i) => {
		setSelected(i);
		setIsVisiblePopap(false);
	}

	/* const delayMouseLeave = () => {
		setIsVisiblePopap(false)
	} */
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
						<li
							onMouseEnter={() => setIsVisiblePopap(true)}  
							className={s.menu__item}
							>
							<a href="/">Квартиры на сутки {apartaments[selected]}</a>
						</li>
						<li className={s.menu__item}><a href="/">Коттеджи и усадьбы</a></li>
						<li className={s.menu__item}><a href="/">Бани и Сауны</a></li>
						<li className={s.menu__item}><a href="/">Авто напрокат</a></li>
					</ul>
					<button className={s.menu__btn}><span>+</span> Разместить объявление</button>
					{isVisiblePopap && (
						<div
							className={s.popup}
							onMouseEnter={() => setIsVisiblePopap(true)} 
							onMouseLeave={() => setIsVisiblePopap(false)} >
							<ul className={s.popup__list}>
								{apartaments.map((city, i) => (
									<li
										key={i}
										onClick={() => onClickItem(i)}>
										Квартиры на сутки {city}
									</li>
								))}
							</ul>
						</div>
					)}
				</nav>
			</div>

			
		</header>
	)
}



export default Header