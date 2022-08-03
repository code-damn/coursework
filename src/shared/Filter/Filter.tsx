import React from 'react'
import { useState } from 'react'

import s from './Filter.module.scss'

type Props = {}

const Filter = (props: Props) => {
    const [activeItem, setActiveItem] = useState(100);
    const filterArr = ['Любая наверное', 'Любая наверное', 'Любая наверное', 'Любая наверное', 
                        'Любая', 'Любая наверное', 'Любая', 'Любая наверное', 'Любая','Любая', 
                        'Любая','Любая','Любая', 'Любая','Любая'];

    return (
    <div className={s.filter}>
        <div className={s.filter__title}>
            Рекомендуем посмотреть
        </div>
        <ul className={s.filter__list}>
            {filterArr.map((value, i) => (
                <li 
                    key={i}
                    onClick={() => setActiveItem(i)}
                    className={activeItem === i ? s.active : ''}>
                    {value}
                </li>
            ))}
        </ul>
    </div>
    )
}

export default Filter