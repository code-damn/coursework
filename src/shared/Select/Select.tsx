import React from 'react'

import s from './Select.module.scss'

type Props = {
    ArrId: number;
}

const Select: React.FC<Props> = ({ ArrId }) => {
    
    const [visiblePopup, setVisiblePopup] = React.useState(false);
    const [itemSelected, setItemSelected] = React.useState(100);
    const [popupBtnActive, setpopupBtnActive] = React.useState(0)

    const cityes = [['Минск', 'Гомель', 'Брест', 'Витебск', 'Гродно', 'Могилев'],
                    ['1 комн.', '2 комн.', '3 комн.', '4 комн.', '5 комн.']];

    const onclickPopup = (index: number) => {
		setpopupBtnActive(index);
        setVisiblePopup(!visiblePopup);
	}

    const onClickItem = (i: number) => {
        setItemSelected(i);
        setVisiblePopup(false);
    }

    return (
        <>
            <div className={popupBtnActive ? s.select+ ' ' +s.popupActive : s.select}
            onClick={() => onclickPopup(1)}
            >
                {itemSelected === 100 ? 'Выберите' : cityes[ArrId][itemSelected]}
            </div>
            {visiblePopup &&
                (<div className={s.popupTabs}>
                    <ul>
                        {cityes[ArrId].map((item, i) => (
                            <li 
                                key={i}
                                onClick={() => onClickItem(i)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>)
            }
        </>
  )
}

export default Select