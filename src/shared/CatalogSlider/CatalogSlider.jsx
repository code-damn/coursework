import React from 'react'
import axios from 'axios'
import Slider from "react-slick";

import ApartamentCard from '../ApartamentCard/ApartamentCard'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import s from './CatalogSlider.module.scss'
import CarouselBtn from '../CarouselBtn/CarouselBtn';

const CatalogSlider = () => {
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        axios.get(`https://62e980cd01787ec7121910b3.mockapi.io/ApartamentsList?`)
		.then((response) => {setCards(response.data)});
    }, [setCards])

    /* return (
        <div>
            {cards.map((obj, i) => (
                <div 
                className={i === activeIndex ? s.activeSlide : inActive}
                >
                <ApartamentCard {...obj}
                key={i}
                />
                </div>
            ))}
            <CarouselBtn/>
            <CarouselBtn/>
        </div>
    ) */

    const settings = {
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        initialSlide: 2,
        slidesToShow: 3,
      };

    return (
        <div className={s.catalogSlider}>
            <Slider {...settings}>
                
                    {cards.map((obj, i) => (
                        <div className={s.slideWrapper}>
                        <ApartamentCard {...obj}
                        key={i}
                        />
                        </div>
                    ))}
                
            </Slider>
        </div>
    )
}

export default CatalogSlider