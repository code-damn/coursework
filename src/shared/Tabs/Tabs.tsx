import React from "react";

import Chekbox from "../Chekbox/Chekbox";

import Select from "../Select/Select";
import Input from "../Input/Input";
import { ReactComponent as Location } from '../../assets/icons/location.svg'
import { ReactComponent as ArrowR } from '../../assets/icons/arrowRight.svg'
import { ReactComponent as Options } from '../../assets/icons/moreOptions.svg'

import s from './Tabs.module.scss'

const Tabs: React.FC = () => {
  	const [categoriesRent, setcategoriesRent] = React.useState(0);
    const [isOpenCatalogSort, setIsOpenCatalogSort] = React.useState(false);

	const toggleTab = (index: number) => {
		setcategoriesRent(index);
        setIsOpenCatalogSort(false);
	};

	const categoriesRentArr = ['Квартиры на сутки', 'Коттеджи и усадьбы', 'Бани и сауны', 'Авто напрокат'];
    const categoriesSelect = ['Города', 'Комнаты'];
	
	return (
		<>
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
                            {categoriesSelect.map((title, i) => (
                                <div className={s.contentTabs__categories}>
                                    <h6>{title}</h6>
                                    <Select ArrId={i}/>
                                </div>
                            ))}
                            <div className={s.contentTabs__categories}>
                                <Input/>
                            </div>
                            <div 
                                className={s.contentTabs__categories+ ' ' +s.options}
                                onClick={() => setIsOpenCatalogSort(!isOpenCatalogSort)}
                                >
                                Больше опций <span><Options/></span>
                            </div>
                            <div className={s.contentTabs__categories+ ' ' +s.items}>
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
            </div>
            {isOpenCatalogSort && (
                <div className={s.tabsCheckbox}>
                    <Chekbox/>
                </div>
            )}
        </>
	);
}

export default Tabs;