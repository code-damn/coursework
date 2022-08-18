import React from 'react'

import s from './SlideBtn.module.scss'

type slideBtnProps = {
    changeSlide: () => void;
}

const SlideBtn: React.FC<slideBtnProps> = ({ changeSlide }) => {
    return (
        <div 
        className={s.slideBtn}
        onClick={changeSlide}
        >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20.2856" cy="20.2866" r="19.2143" stroke="white"/>
            <path d="M17 26.8574L23.5714 20.286L17 13.7146" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    )
}

export default SlideBtn