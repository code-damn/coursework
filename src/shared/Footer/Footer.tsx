import React from 'react'

import { Link } from 'react-router-dom'
import { ReactComponent as Inst } from '../../assets/icons/instagram.svg'
import { ReactComponent as VK } from '../../assets/icons/vk.svg'
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg'

import s from './Footer.module.scss'

import logo from '../../assets/images/logo.jpg'
import Payment from '../Payment/Payment'

const Footer: React.FC = () => {
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
                        <li><Link to="/cottages">Коттеджи и усадьбы</Link></li>
                        <li><Link to="/saunas">Бани и сауны</Link></li>
                        <li><Link to="/carsharing">Авто на прокат</Link></li>
                    </ul>
                    <div className={s.footer__apartaments}>
                        <div className={s.footer__apartament}><Link to="/catalog">Квартиры</Link></div>
                        <ul className={s.footer__apartamentsList}>
                            <li><Link to="/catalog">Квартиры в Минске</Link></li>
                            <li><Link to="/catalog">Квартиры в Гомеле</Link></li>
                            <li><Link to="/catalog">Квартиры в Бресте</Link></li>
                            <li><Link to="/catalog">Квартиры в Витебске</Link></li>
                            <li><Link to="/catalog">Квартиры в Гродно</Link></li>
                            <li><Link to="/catalog">Квартиры в Могилеве</Link></li>
                        </ul>
                    </div>
                    <ul className={s.footer__info}>
                        <li><Link to="/news">Новости</Link></li>
                        <li><Link to="/tariff">Размещение и тарифы</Link></li>
                        <li><Link to="/map">Объявление на карте</Link></li>
                        <li><Link to="/contacts">Контакты</Link></li>
                    </ul>
                </div>
                <div className={s.footer__icons}>
                    <div className={s.footer__socials}>
                        <span className={s.footer__socials_text}>Мы в соцсетях</span>
                        <span className={s.instSvg}><Inst/></span>
                        <span className={s.vkSvg}><VK/></span>
                        <span className={s.facebookSvg}><Facebook/></span>
                    </div>
                    <div>
                        <Payment/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer