import React from 'react'
import SlideBtn from '../SlideBtn/SlideBtn'

import s from './Slider.module.scss'

const Slider = () => {
	const sliderItems = [
		{"id": 1, "url": "https://4lapy.ru/upload/medialibrary/270/2703fd71a17c0843c0b91bbe28c4fe0f.jpg", "subtitle": "СНЯТЬ КОТТЕДЖ НА ПРАЗДНИК", "title": "Коттеджи и усадьбы"},
		{"id": 2, "url": "https://4lapy.ru/upload/medialibrary/ffc/ffc1b3c540e138d41e20e5a7bbf0501d.jpg","subtitle": "СНЯТЬ КОТТЕДЖ НА ПРАЗДНИК", "title": "Коттеджи и усадьбы"}
	]
	
	return (
		<div className={s.sliderContainer}>
			{sliderItems.map((obj, i) => (
				<div className={s.slide}>
					<img 
					src={obj.url}
					key={i + 1}
					/>
				</div>
			))}
			<SlideBtn/>
		</div>
	)
}

export default Slider