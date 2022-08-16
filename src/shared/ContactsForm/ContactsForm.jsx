import React from 'react'

import { ReactComponent as UserSvg } from '../../assets/icons/user.svg'
import { ReactComponent as Mail } from '../../assets/icons/mail.svg'

import s from './ContactsForm.module.scss'

const ContactsForm = () => {

    return (
        <form className={s.feedForm} action="#">
            <div className={s.feedFormWrapper} >
                <div className={s.block+ ' ' +s.name}>
                    <div className={s.user}><UserSvg/></div>
                    <label htmlFor="name">Ваше имя</label>
                    <input name="name" id="name" required type="text" placeholder="Алексей" />
                </div>
                <div className={s.block}>
                <div className={s.mail}><Mail/></div>
                    <label htmlFor="email">Ваша электронная почта</label>
                    <input name="email" id="email" required type="email" placeholder="Введите" />
                </div>
                <div className={s.block+ ' ' +s.text}>
                    <label htmlFor="message">Ваше сообщение</label>
                    <input name="message" id="message" required type="text" placeholder="Сообщение"/>
                </div>
            </div>
            <button className={s.submitBtn}>Отправить</button>
        </form>
    )
}

export default ContactsForm