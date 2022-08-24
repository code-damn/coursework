import React from 'react'

import { useState } from 'react';
import { Link } from "react-router-dom";

import { ReactComponent as Location } from '../../assets/icons/location.svg'
import { ReactComponent as Heart } from '../../assets/icons/heart.svg'

import s from './Header.module.scss';

import logo from '../../assets/images/logo.jpg'

const Header: React.FC = () => {
    const popupRef = React.useRef<HTMLLIElement>(null);

	const [isVisiblePopap, setIsVisiblePopap] = useState(false);
	const [selected, setSelected] = useState(100);
	const cityes = ['в Минске', 'в Гомеле', 'в Бресте', 'в Витебске', 'в Гродно', 'в Могилеве'];

	const onClickItem = (i: number) => {
		setSelected(i);
		setIsVisiblePopap(false);
	}

    React.useEffect(() => {
        const clickOutside = (event: MouseEvent) => {
            if (popupRef.current &&!event.composedPath().includes(popupRef.current)) {
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
						<li className={s.stickymenu__item}>
                            <Link to="/map" className={s.stickymenu__item_link}>
                                <span className={s.locationSvg}><Location/></span>
                                Объявления на карте
                            </Link>
                        </li>
						<li className={s.stickymenu__item}><Link to="/contacts"className={s.stickymenu__item_link}>Контакты</Link></li>
					</ul>
					<div className={s.stickymenu__favorites}>
                        <Link to="/bookmarks">
                            Закладки
                            <span className={s.heartSvg}><Heart/></span>
                        </Link>
                    </div>
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
						<li 
                            ref={popupRef}
							onClick={() => setIsVisiblePopap(!isVisiblePopap)}
							className={s.menu__item}
                        >
                            {selected === 100 ? 'Квартиры на сутки' : `Квартиры ${cityes[selected]}`}
                            <span className={s.popupLocationSvg}><Location/></span>
						</li>
						<li className={s.menu__item}>
                            <Link to="/cottages">Коттеджи и усадьбы</Link>
                        </li>
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
							onMouseLeave={() => setIsVisiblePopap(false)} 
                            >
							<ul className={s.popup__list}>
								{cityes.map((city, i) => (
									<Link to="/catalog">
										<li
											key={i}
											onClick={() => onClickItem(i)}
                                            >
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