import React from 'react'

import s from './Contacts.module.scss'

type Props = {}

const Contacts = (props: Props) => {
  return (
    <div className={s.contacts}>
		<h1>В разработке</h1>
		<h2>Название компонента - Контакты</h2>
	</div>
  )
}

export default Contacts