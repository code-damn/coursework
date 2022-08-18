import React from 'react'
import axios from 'axios'
import Slider from "react-slick";

import ApartamentCard from '../ApartamentCard/ApartamentCard'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import s from './CatalogSlider.module.scss'

type sliderItems = {
    id: number;
    imageUrl: string;
    prices: string;
    rooms:number;
    adress: string;
    metro: string;
    district:number;
    microdistrict: string;
    description: string;
    nameOwner: string;
    phone: string;
    email: string;
    goldStatus:number;
}

const CatalogSlider = () => {
    const [cards, setCards] = React.useState<sliderItems[]>([]);

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
                
                    {cards.map((obj, id) => (
                        <div className={s.slideWrapper} key={id}>
                        <ApartamentCard {...obj}
                        key={id}
                        />
                        </div>
                    ))}
                
            </Slider>
        </div>
    )
}

export default CatalogSlider