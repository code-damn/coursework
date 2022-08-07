import React from 'react'
import s from './Page404.module.scss'

type Props = {}

const Page404 = (props: Props) => {
	return (
		<div className={s.page404}>
			<div className={s.wrapper}>
				<h2 className={s.page404__error404}>Ошибка 404</h2>
				<p>Возможно, у вас опечатка в адресе</p>
				<p> страницы, или её просто не существует</p>
				<div className={s.page404__backMain}>Вернуться на главную</div>
			</div>
		</div>
	)
}

export default Page404