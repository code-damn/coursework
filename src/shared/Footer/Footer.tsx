import React from 'react'

import s from './Footer.module.scss'

import logo from '../../assets/images/logo.jpg'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className={s.wrapperFooter}>
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
        <div className={s.footer__navLinkWrapper}>
          <div className={s.footer__navLink}>
            <ul className={s.footer__services}>
              <li><a href="/">Коттеджи и усадьбы</a></li>
              <li><a href="/">Бани и сауны</a></li>
              <li><a href="/">Авто на прокат</a></li>
            </ul>
            <div className={s.footer__apartaments}>
              <div className={s.footer__apartament}><a href="/">Квартиры</a></div>
              <ul className={s.footer__apartamentsList}>
                <li><a href="/">Квартиры в Минске</a></li>
                <li><a href="/">Квартиры в Гомеле</a></li>
                <li><a href="/">Квартиры в Бресте</a></li>
                <li><a href="/">Квартиры в Витебске</a></li>
                <li><a href="/">Квартиры в Гродно</a></li>
                <li><a href="/">Квартиры в Могилеве</a></li>
              </ul>
            </div>
            <ul className={s.footer__info}>
              <li><a href="/">Новости</a></li>
              <li><a href="/">Размещение и тарифы</a></li>
              <li><a href="/">Объявление на карте</a></li>
              <li><a href="/">Контакты</a></li>
            </ul>
          </div>
          <div className={s.footer__socials}>Мы в соцсетях</div>
        </div>
      </div>
    </div>
  )
}

export default Footer