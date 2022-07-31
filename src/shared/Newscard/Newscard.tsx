import React from 'react'

import s from './Newscard.module.scss'
import newscardImg from '../../assets/images/newscard-img.jpg'

type Props = {}

const Newscard = (props: Props) => {
  return (
    <div className={s.newscard}>
        <img className={s.newscard__img} src={newscardImg} alt="newscard-img" />
        <h3 className={s.newscard__header}>Линия Сталина: суровый отдых в усадьбах на сутки</h3>
        <p className={s.newscard__descr}>Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...</p>
        <div className={s.wrapper}>
            <div className={s.wrapper__date}>14 Января 2008</div>
            <div className={s.wrapper__read}><a href="/">Читать</a></div>
        </div>
    </div>
  )
}

export default Newscard