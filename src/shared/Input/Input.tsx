import React from 'react'

import s from './Input.module.scss'

type Props = {}

const Input = (props: Props) => {
  return (
    <>
            <label htmlFor="">Цена за сутки (BYN)</label>
            <input type="number" placeholder="От" />
            <span className={s.sort__price_dash}>-</span>
            <input type="number" placeholder="До" />
    </>
  )
}

export default Input