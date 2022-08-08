import React from 'react'

import { Link } from "react-router-dom";

import s from './Newscard.module.scss'


const Newscard = ({ id, imageUrl, title, descr, data, newsValue }) => {

	return (
		<div className={s.newscard}>
            <img className={s.newscard__img} src={imageUrl} alt="newscard-img" />
            <h3 className={s.newscard__header}>{title}</h3>
            <p className={s.newscard__descr}>{`${descr.slice(0, 200)}...`}</p>
            <div className={s.wrapper}>
                <div className={s.wrapper__date}>{data}</div>
                <div className={s.wrapper__read}
                    >
                    <Link to='/readnews'>Читать {id}</Link>
                </div>
            </div>
		</div>
	)
    
}


export default Newscard