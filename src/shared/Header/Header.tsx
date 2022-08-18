import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";

import s from './Header.module.scss';

import logo from '../../assets/images/logo.jpg'

const Header: React.FC = () => {
    const popupRef = React.useRef<HTMLLIElement>(null);

	const [isVisiblePopap, setIsVisiblePopap] = useState(false);
	const [selected, setSelected] = useState('');
	const cityes = ['в Минске', 'в Гомеле', 'в Бресте', 'в Витебске', 'в Гродно', 'в Могилеве'];

	const onClickItem = (i) => {
		setSelected(i);
		setIsVisiblePopap(false);
	}

    React.useEffect(() => {
        const clickOutside = (event) => {
            if (!event.path.includes(popupRef.current)) {
                setIsVisiblePopap(false);
            }
        }; 

        document.body.addEventListener('click', clickOutside);

        return () => {
            document.body.removeEventListener('click', clickOutside);
        }
    }, []);

	return (
		<header className={s.header}>
			<div className={s.wrapperStickymenu}>
				<nav className={s.stickymenu}>
					<ul className={s.stickymenu__list}>
						<li className={s.stickymenu__item}><Link to="/" className={s.stickymenu__item_link}>Главная</Link></li>
						<li className={s.stickymenu__item}><Link to="/news" className={s.stickymenu__item_link}>Новости</Link></li>
						<li className={s.stickymenu__item}><Link to="/tariff" className={s.stickymenu__item_link}>Размещение и тарифы</Link></li>
						<li className={s.stickymenu__item}><Link to="/map" className={s.stickymenu__item_link}>Объявления на карте</Link></li>
						<li className={s.stickymenu__item}><Link to="/contacts"className={s.stickymenu__item_link}>Контакты</Link></li>
					</ul>
					<div className={s.stickymenu__favorites}><Link to="/bookmarks">Закладки</Link></div>
					<div className={s.stickymenu__username}>
						<Link to="/login" className={s.stickymenu__link}>Вход и регистрация</Link>
					</div>
				</nav>
			</div>
			
			<div className={s.wrapperMenu}>
				<nav className={s.menu}>
					<Link to='/' className={s.menu__logo} >
						<img 
                        src={logo} alt="logo" />
					</Link>
					<ul className={s.menu__list}>
						<li ref={popupRef}
							onClick={() => setIsVisiblePopap(!isVisiblePopap)}
							className={s.menu__item}>
							<div>Квартиры на сутки {cityes[selected]}</div>
						</li>
						<li className={s.menu__item}><Link to="/cottages">Коттеджи и усадьбы</Link></li>
						<li className={s.menu__item}><Link to="/saunas">Бани и Сауны</Link></li>
						<li className={s.menu__item}><Link to="/carsharing">Авто напрокат</Link></li>
					</ul>
					<Link to="/login">
						<div className={s.menu__btn}><span>+</span> Разместить объявление</div>
					</Link>
					{isVisiblePopap && (
						<div
							className={s.popup}
							onMouseEnter={() => setIsVisiblePopap(true)} 
							onMouseLeave={() => setIsVisiblePopap(false)} >
							
							<ul className={s.popup__list}>
								{cityes.map((city, i) => (
									<Link to="/catalog">
										<li
											key={i}
											onClick={() => onClickItem(i)}>
											Квартиры на сутки {city}
										</li>
									</Link>
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