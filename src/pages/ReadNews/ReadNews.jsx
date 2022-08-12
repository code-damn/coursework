import React from 'react'

import Breadcrumbs from '../../shared/Breadcrumbs/Breadcrumbs'

import s from './ReadNews.module.scss'

const ReadNews = () => {

	return (
		<div className={s.wrapper}>
			<div className={s.readNews}>
				<Breadcrumbs/>
				<div className={s.readNews__date}>
					14 Января 2008
				</div>
				<img className={s.readNews__img} src='https://novostroyki.shop/wp-content/uploads/2021/01/2250619.jpg' alt="newscard-img" />
				<p>
				Итак, утром вы выезжаете в путь по Молодеченской трассе. Если автомобиля у вас нет - садитесь на маршрутку в сторону Молодечно от железнодорожного вокзала. Остановка называется «Линия Сталина» - да-да, именно здесь вы и проведёте ближайшие несколько часов, а вероятнее всего – останетесь до самого вечера.</p>
				<p>«Линия Сталина» - это уникальный музейный комплекс, располагающийся под открытым небом. Поэтому желательно приезжать сюда в хорошую погоду. Его территория поистине огромна: целых 26 га. Такое название дано музею неспроста: «Линией Сталина» в 20е-30е гг. XX века именовали цепь укреплений, созданную для защиты государственной границы СССР. Комплекс же построен лишь в 2005 году – к шестидесятой годовщине Победы в Великой Отечественной войне.</p>
			</div >
			<div className={s.readAlso}>
				<div className={s.readAlso__wrapper}>
					<div className={s.readAlso__subheader}>
						Читайте также
					</div>
				</div>
			</div>
		</div>
	)
}

export default ReadNews