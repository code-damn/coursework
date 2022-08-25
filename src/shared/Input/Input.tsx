import React from 'react'

import s from './Input.module.scss'

type Props = {}

const Input = (props: Props) => {
  return (
    <div className={s.input}>
        <label htmlFor="">Цена за сутки (BYN)</label>
        <input type="number" placeholder="От" />
        <span>-</span>
        <input type="number" placeholder="До" />
    </div>
  )
}

export default Input