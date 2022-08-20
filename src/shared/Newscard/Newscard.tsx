import React from 'react'

import { Link } from "react-router-dom";

import s from './Newscard.module.scss'

type newscardProps = { 
    id: number;
    imageUrl: string; 
    title: string; 
    descr: string;  
    data: string;  
}


const Newscard: React.FC<newscardProps> = ({ id, imageUrl, title, descr, data }) => {

	return (
		<div className={s.newscard}>
            <img className={s.newscard__img} src={imageUrl} alt="newscard-img" />
            <h3 className={s.newscard__header}>{title}</h3>
            <p className={s.newscard__descr}>{`${descr.slice(0, 200)}...`}</p>
            <div className={s.wrapper}>
                <div className={s.wrapper__date}>{data}</div>
                <div className={s.wrapper__read}
                    >
                    <Link to='/readnews'>Читать</Link>
                </div>
            </div>
		</div>
	)
    
}


export default Newscard