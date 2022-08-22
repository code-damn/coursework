import React from "react";

import Chekbox from "../Chekbox/Chekbox";

import { ReactComponent as Location } from '../../assets/icons/location.svg'
import { ReactComponent as ArrowR } from '../../assets/icons/arrowRight.svg'
import { ReactComponent as Options } from '../../assets/icons/moreOptions.svg'


import s from './Tabs.module.scss'


const Tabs: React.FC = () => {
  	const [categoriesRent, setcategoriesRent] = React.useState(0);
	const [popupBtnActive, setpopupBtnActive] = React.useState(0);
    const [isOpenCatalogSort, setIsOpenCatalogSort] = React.useState(false);
    const [visiblePopup, setVisiblePopup] = React.useState(false);
    const [citySelected, setCitySelected] = React.useState(100);

	const toggleTab = (index: number) => {
		setcategoriesRent(index);
	};

	const onclickPopup = (index: number) => {
		setpopupBtnActive(index);
        setVisiblePopup(!visiblePopup);
	}

    const onClickCity = (i: number) => {
        setCitySelected(i);
        setVisiblePopup(false);
    }

	const categoriesRentArr = ['Квартиры на сутки', 'Коттеджи и усадьбы', 'Бани и сауны', 'Авто напрокат']
    const cityes = ['в Минске', 'в Гомеле', 'в Бресте', 'в Витебске', 'в Гродно', 'в Могилеве'];
	
	return (
		<div className={s.tabsContainer}>
			<div className={s.blocTabs}>
				{categoriesRentArr.map((value, i) => (
					<button
                        className={categoriesRent === i ? s.tabs+ ' ' +s.activeTabs : s.tabs}
                        onClick={() => toggleTab(i)}
                        key={i}
				    >
					    {value}
					</button>
				))}
			</div>

			<div className={s.contentTabs}>
                <div className={categoriesRent === 0 ? s.content+ ' ' +s.activeContent : s.content}>
                    <div className={s.contentTabs__wrapper}>
                        <div className={s.contentTabs__cityes}>
                            <h6>Город</h6>
                            <div className={popupBtnActive === 1 ? s.contentTabs__popup+ ' ' +s.popupActive : s.contentTabs__popup}
                            onClick={() => onclickPopup(1)}
                            >
                                {cityes[citySelected]}
                            </div>
                            {visiblePopup &&
                                <div className={s.popupTabs}>
                                    <ul>
                                        {cityes.map((city, i) => (
                                            <li 
                                                key={i}
                                                onClick={() => onClickCity(i)}
                                            >
                                                {city}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            }
                        </div>
                        <div className={s.contentTabs__cityes}>
                            <h6>Комнаты</h6>
                            <div className={popupBtnActive === 2 ? s.contentTabs__popup+ ' ' +s.popupActive : s.contentTabs__popup}
                            onClick={() => onclickPopup(2)}
                            >
                                Выберите
                            </div>
                        </div>
                        <div className={s.contentTabs__cityes}>
                            <h6>Цена за сутки (BYN)</h6>
                            <div className={popupBtnActive === 3 ? s.contentTabs__popup+ ' ' +s.popupActive : s.contentTabs__popup}
                            onClick={() => onclickPopup(3)}
                            >
                                Выберите
                            </div>
                        </div>
                        <div 
                            className={s.contentTabs__cityes+ ' ' +s.options}
                            onClick={() => setIsOpenCatalogSort(!isOpenCatalogSort)}
                            >
                            Больше опций <span><Options/></span>
                        </div>
                        <div className={s.contentTabs__cityes+ ' ' +s.items}>
                            <div className={s.onMap+ ' ' +s.options}>
                                На карте
                                <span><Location/></span>
                            </div>
                            <div className={s.showBtn}>
                                Показать
                                <span><ArrowR/></span>
                            </div>
                        </div>
                    </div>
                </div>
			</div>
            {isOpenCatalogSort && (
                <Chekbox/>
            )}
		</div>
	);
}

export default Tabs;