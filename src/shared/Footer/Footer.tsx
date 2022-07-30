import React from 'react'

import s from './Footer.module.scss'

import logo from '../../assets/images/logo.jpg'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className={s.footer}>
        <div className={s.footer__requisites}>
            <img className={s.footer__logo} src={logo} alt="logo" />
            <h2 className={s.footer__title}>СДАЁМ БАЙ</h2>
            <h6 className={s.footer__address}>
                <p>ИП Шушкевич Андрей Викторович</p>    
                <p>УНП 192602485 Минским горисполкомом 10.02.2016
                220068, РБ, г. Минск, ул. Осипенко, 21, кв.23</p>
                <p>+375 29 621 48 33, sdaem@sdaem.by</p>
                <p>Режим работы: 08:00-22:00</p>
            </h6>
        </div>
    </div>
  )
}

export default Footer