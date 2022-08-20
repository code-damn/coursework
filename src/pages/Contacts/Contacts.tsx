import React from 'react'

import warning from '../../assets/icons/warning.svg'
import ContactsForm from '../../shared/ContactsForm/ContactsForm'
import ModalFeed from '../../shared/ModalFeed/ModalFeed'
import ContactsIcon from '../../shared/ContactsIcon/ContactsIcon'
import { ReactComponent as Location } from '../../assets/icons/location.svg'
import { ReactComponent as Phone } from '../../assets/icons/phone.svg'
import { ReactComponent as Mail } from '../../assets/icons/mail.svg'
import { ReactComponent as Clock } from '../../assets/icons/clock.svg'

import s from './Contacts.module.scss'



const Contacts: React.FC = () => {
    const [visibleModal, setVisibleModal] = React.useState<boolean>(true);

    return (
        <div>
            <ModalFeed visible={visibleModal} inVisible={setVisibleModal} />
            <section className={s.contacts}>
                <div className={s.contactsWrapper}>
                    <div className={s.contactsInfo}>
                        <h3>Контакты</h3>
                        <p>Если у Вас есть пожелания, предложения или претензии по организации работы сайта мы всегда рады услышать Ваше мнение.</p>
                        <ul>
                            <li><span><Location/></span> 220068, РБ, г. Минск, ул. Осипенко, 21, кв.23</li>
                            <li><span><Phone/></span>
                                +375 29 621-48-33
                                <span><ContactsIcon/></span>
                            </li>
                            <li><span><Mail/></span> sdaem@sdaem.by</li>
                            <li><span><Clock/></span>Режим работы: 08:00-22:00</li>
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
                        <ContactsForm inVisible={setVisibleModal}/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contacts