import React from 'react'

import { ReactComponent as Viber } from '../../assets/icons/viber.svg'
import { ReactComponent as TG } from '../../assets/icons/telegram.svg'
import { ReactComponent as WhatsUp } from '../../assets/icons/whatsup.svg'

import s from './ContactsIcon.module.scss';

type Props = {}

const ContactsIcon: React.FC = (props: Props) => {
  return (
    <div className={s.contactsIcon}>
        <div><Viber/></div>
        <div><TG/></div>
        <div><WhatsUp/></div>
    </div>
  )
}

export default ContactsIcon