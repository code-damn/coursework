import React from 'react'

import s from './Login.module.scss'

type Props = {}

const Login: React.FC = (props: Props) => {
  return (
    <div className={s.login}>
		<h1>В разработке</h1>
		<h2>Название компонента - Вход и регистрация</h2>
	</div>
  )
}

export default Login