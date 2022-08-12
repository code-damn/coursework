import React from 'react'
import ApartamentBtn from '../Buttons/ApartamentBtn';

import s from './Services.module.scss'
import saunaSlide1 from '../../assets/images/сottage_bg1.png'
import saunaSlide2 from '../../assets/images/сottage_bg2.png'
import SlideBtn from '../SlideBtn/SlideBtn';

const Services = () => {

	const cityes = ['Минск', 'Витебск', 'Гродно', 'Гомель', 'Могилев','Брест'];
    const titles = [{"id": 1, "subtitle": "СНЯТЬ КОТТЕДЖ НА ПРАЗДНИК", "title": "Коттеджи и усадьбы"},
                    {"id": 2, "subtitle": "СНЯТЬ КОТТЕДЖ НА ПРАЗДНИК", "title": "Коттеджи и усадьбы"},
                    {"id": 3, "subtitle": "СНЯТЬ КОТТЕДЖ НА ПРАЗДНИК", "title": "Коттеджи и усадьбы"}]
                    

	return (
		<div className={s.servicesBlocks}>
			<div className={s.servicesBlocks__apartament}>
				<h3>СНЯТЬ КВАРТИРУ</h3>
				<h2>Квартиры на сутки</h2>
				<div className={s.servicesBlocks__cityesList}>
					{cityes.map((value, i) => (
						<ApartamentBtn
						value={value}
						/>
					))}
				</div>
			</div>
			<div className={s.servicesBlocks__slider}>
                
            </div>
			<div></div>
			<div></div>
		</div>
	)
}

export default Services