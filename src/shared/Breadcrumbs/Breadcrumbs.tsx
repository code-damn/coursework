import React from 'react'

import { Link } from "react-router-dom";
import { ReactComponent as House } from '../../assets/icons/house.svg'

import s from './Breadcrumbs.module.scss'

const Breadcrumbs: React.FC = () => {

	return (
        <div className={s.breadcrumbs}>
			<ul className={s.breadcrumbs__list}>
				<li className={s.breadcrumbs__item}>
					<Link to="/">
                        <span className={s.houseSvg}>
                            <House/>
                        </span>
                    </Link>
				</li>
				<li className={s.breadcrumbs__item}>
					<span>Новости</span>
				</li>
			</ul>
			<div className={s.title}>
				Новости
			</div>
		</div>
	)
}

export default Breadcrumbs

