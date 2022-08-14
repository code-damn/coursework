import React from 'react'
import axios from 'axios'
import Slider from "react-slick";

import ApartamentCard from '../ApartamentCard/ApartamentCard'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import s from './CatalogSlider.module.scss'

const CatalogSlider = () => {
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        axios.get(`https://62e980cd01787ec7121910b3.mockapi.io/ApartamentsList?`)
		.then((response) => {setCards(response.data)});
    }, [setCards])

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
                    <ApartamentCard {...obj}
                    key={i}/>
                ))}
            </Slider>
        </div>
    )
}

export default CatalogSlider