import React from 'react'
import SlideBtn from '../SlideBtn/SlideBtn'

import s from './Slider.module.scss'

const Slider: React.FC = () => {
    const [slideIndex, setSlideIndex] = React.useState(1);

    const nextSlide = () => {
        if(slideIndex !== sliderItems.length) {
            setSlideIndex(slideIndex + 1)
        }else if (slideIndex === sliderItems.length) {
            setSlideIndex(1)
        }
    }

	const sliderItems = [
		{"id": 1, "img": "сottage_bg1.png", "url": "https://4lapy.ru/upload/medialibrary/270/2703fd71a17c0843c0b91bbe28c4fe0f.jpg", "subtitle": "СНЯТЬ КОТТЕДЖ НА ПРАЗДНИК", "title": "Коттеджи и усадьбы"},
		{"id": 2, "img": "сottage_bg2.png", "url": "https://4lapy.ru/upload/medialibrary/ffc/ffc1b3c540e138d41e20e5a7bbf0501d.jpg","subtitle": "СНЯТЬ КОТТЕДЖ НА ПРАЗДНИК", "title": "Коттеджи и усадьбы"}
	]
	
	return (
		<div className={s.sliderContainer}>
			{sliderItems.map((obj, i) => (
				<div className={slideIndex === i + 1 ? s.activeSlide : s.slide}
                key={obj.id}
                >
					<img alt=""
					src={'cottegePhotos/' + obj.img}
					key={i + 1}
					/>
                    
				</div>
			))}
			<SlideBtn changeSlide={nextSlide}/>
            <h3>СНЯТЬ КОТТЕДЖ НА ПРАЗДНИК</h3>
            <h2>Коттеджи и усадьбы</h2>
		</div>
	)
}

export default Slider