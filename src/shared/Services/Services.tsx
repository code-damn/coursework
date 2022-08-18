import React from 'react'
import ApartamentBtn from '../Buttons/ApartamentBtn';

import s from './Services.module.scss'

const Services: React.FC = () => {

	const cityes = ['Минск', 'Витебск', 'Гродно', 'Гомель', 'Могилев','Брест'];
    
                    

	return (
		<div className={s.servicesBlocks}>
			<div className={s.servicesBlocks__apartament}>
				<h3>СНЯТЬ КВАРТИРУ</h3>
				<h2>Квартиры на сутки</h2>
				<div className={s.servicesBlocks__cityesList}>
					{cityes.map((value, i) => (
						<ApartamentBtn
						    value={value}
                            key={i}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Services