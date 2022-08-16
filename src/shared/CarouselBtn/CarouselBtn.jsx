import React from 'react'

import s from './CarouselBtn.module.scss'

const CarouselBtn = ({ direction, prevSlide, nextSlide, moveSlide }) => {
  return (
    <div
    onClick={moveSlide}
    className={direction === s.next ? s.nextSlide : s.prevSlide}>
        <img src={direction === s.next ? s.rightArrow : s.leftArrow} alt="" />
    </div>
  )
}

export default CarouselBtn