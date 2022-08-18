import React from "react";

import s from './Tabs.module.scss'

const Tabs: React.FC = () => {
  	const [categoriesRent, setcategoriesRent] = React.useState(0);
	const [popupBtnActive, setpopupBtnActive] = React.useState(0);

	const toggleTab = (index: number) => {
		setcategoriesRent(index);
	};

	const clickPopup = (index: number) => {
		setpopupBtnActive(index);
	}

	const categoriesRentArr = ['Квартиры на сутки', 'Коттеджи и усадьбы', 'Бани и сауны', 'Авто напрокат']
	
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
                            onClick={() => clickPopup(1)}
                            >
                                Выберите
                            </div>
                        </div>
                        <div className={s.contentTabs__cityes}>
                            <h6>Комнаты</h6>
                            <div className={popupBtnActive === 2 ? s.contentTabs__popup+ ' ' +s.popupActive : s.contentTabs__popup}
                            onClick={() => clickPopup(2)}
                            >
                                Выберите
                            </div>
                        </div>
                        <div className={s.contentTabs__cityes}>
                            <h6>Цена за сутки (BYN)</h6>
                            <div className={popupBtnActive === 3 ? s.contentTabs__popup+ ' ' +s.popupActive : s.contentTabs__popup}
                            onClick={() => clickPopup(3)}
                            >
                                Выберите
                            </div>
                        </div>
                        <div className={s.contentTabs__cityes+ ' ' +s.options}>
                            Больше опций
                        </div>
                        <div className={s.contentTabs__cityes+ ' ' +s.items}>
                            <div className={s.onMap+ ' ' +s.options}>
                                На карте
                            </div>
                            <div className={s.showBtn}>
                                Показать
                            </div>
                        </div>
                    </div>
                </div>
			</div>
		</div>
	);
}

export default Tabs;