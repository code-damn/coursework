import React from 'react'

import { ReactComponent as SortIcon } from '../../assets/icons/sortIcon.svg'
import { ReactComponent as ArrowDowm } from '../../assets/icons/arrowDown.svg'
import { ReactComponent as ListIcon } from '../../assets/icons/listBtn.svg'
import { ReactComponent as TileIcon } from '../../assets/icons/tileBtn.svg'
import { ReactComponent as Location } from '../../assets/icons/location.svg'

import s from './SortBts.module.scss'

const SortBts: React.FC = () => {
  return (
    <div className={s.sortBtns}>
        <div className={s.sortBtns__sortPopup+ ' ' +s.btn}>
            <span className={s.sortBtns__sortPopup_sortSvg}><SortIcon/></span> 
            По умолчанию
            <span className={s.sortBtns__sortPopup_arrow}><ArrowDowm/></span> 
        </div>
        <div className={s.sortBtns__displayType}>
            <div className={s.sortBtns__listBtn+ ' ' +s.btn}>
                <span><ListIcon/></span> 
                Список
            </div>
            <div className={s.sortBtns__tileBtn+ ' ' +s.btn}>
                <span><TileIcon/></span> 
                Плитки
            </div>
        </div>
        <div className={s.sortBtns__location+ ' ' +s.btn}>
            <span><Location/></span> 
            Показать на карте
        </div>
    </div>
  )
}

export default SortBts