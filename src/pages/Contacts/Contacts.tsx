import React from 'react'

import warning from '../../assets/icons/warning.svg'
import ContactsForm from '../../shared/ContactsForm/ContactsForm'

import s from './Contacts.module.scss'

type Props = {}

const Contacts = (props: Props) => {
    return (
        <section className={s.contacts}>
            <div className={s.contactsWrapper}>
                <div className={s.contactsInfo}>
                    <h3>Контакты</h3>
                    <p>Если у Вас есть пожелания, предложения или претензии по организации работы сайта мы всегда рады услышать Ваше мнение.</p>
                    <ul>
                        <li>220068, РБ, г. Минск, ул. Осипенко, 21, кв.23</li>
                        <li>+375 29 621-48-33 </li>
                        <li> sdaem@sdaem.by</li>
                        <li>Режим работы: 08:00-22:00</li>
                    </ul>
                    <div className={s.contactsInfo__legal}>
                        ИП Шушкевич Андрей Викторович <br />
                        УНП 192602485 Минским горисполкомом 10.02.2016
                    </div>
                    <div className={s.contactsInfo__warning}>
                        <img src={warning} alt="" />
                        <div>Администрация сайта не владеет информацией 
                        о наличии свободных квартир</div>
                    </div>
                </div>
                <div className={s.contactsForm}>
                    <ContactsForm/>
                </div>
            </div>
        </section>
    )
}

export default Contacts