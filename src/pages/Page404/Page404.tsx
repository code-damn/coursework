import React from 'react'
import { Link } from "react-router-dom";

import Page404Svg from './Page404Svg'

import s from './Page404.module.scss'

const Page404: React.FC = () => {
    window.scrollTo(0, 0);
	return (
		<div className={s.page404}>
			<div className={s.page404__content}>
				<div className={s.page404__wrapper}>
					<div className={s.page404__error404}>Ошибка 404</div>
					<div className={s.page404__descr}>
						<p className={s.page404__text}>Возможно, у вас опечатка в адресе</p>
						<p className={s.page404__text}> страницы, или её просто не существует</p>
					</div>
					<div className={s.page404__homeRun}>
						<Link to='/'>Вернуться на главную</Link>
					</div>
				</div>
				<Page404Svg/>
			</div>
		</div>
	)
}

export default Page404