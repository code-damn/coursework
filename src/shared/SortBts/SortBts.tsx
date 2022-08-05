import React from 'react'

import s from './SortBts.module.scss'

type Props = {}

const SortBts = (props: Props) => {
  return (
    <div className={s.sortBtns}>
        <div className={s.sortBtns__sortPopup+ ' ' +s.btn}>
            По умолчанию
        </div>
        <div className={s.sortBtns__displayType}>
            <div className={s.sortBtns__listBtn+ ' ' +s.btn}>Список</div>
            <div className={s.sortBtns__tileBtn+ ' ' +s.btn}>Плитки</div>
        </div>
        <div className={s.sortBtns__location+ ' ' +s.btn}>
            Показать на карте
        </div>
    </div>
  )
}

export default SortBts