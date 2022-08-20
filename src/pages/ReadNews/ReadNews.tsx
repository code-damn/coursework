import React from 'react'
import axios from 'axios'

import Breadcrumbs from '../../shared/Breadcrumbs/Breadcrumbs'
import Newscard from '../../shared/Newscard/Newscard'
import { newsListState } from '../NewsList/NewsList'
import { ReactComponent as VK2 } from '../../assets/icons/vk2.svg'
import { ReactComponent as FB2 } from '../../assets/icons/facebook2.svg'
import { ReactComponent as Viber } from '../../assets/icons/viber.svg'
import { ReactComponent as TG } from '../../assets/icons/telegram.svg'
import { ReactComponent as WhatsUp } from '../../assets/icons/whatsup.svg'

import s from './ReadNews.module.scss'

const ReadNews: React.FC = () => {
    window.scrollTo(0, 0);

    const [news, setNews] = React.useState<newsListState[]>([]);

	React.useEffect(() => {
        axios.get(`https://62e980cd01787ec7121910b3.mockapi.io/newsList?`)
		.then((response) => {setNews(response.data)});
    }, []);

	return (
		<>
            <div className={s.newsHeaderWrap}>
                <div className={s.newsHeader}>
                    <Breadcrumbs/>
                </div>
            </div >
            <div className={s.readNews}>
                <div className={s.readNews__wrapItems}>
                    <div className={s.readNews__date}>
                        14 Января 2008
                    </div>
                    <div className={s.readNews__socials}>
                        <span className={s.readNews__socials_text}>Поделиться</span>
                        <div><span><VK2/></span></div>
                        <div><span><FB2/></span></div>
                        <div><span><Viber/></span></div>
                        <div><span><TG/></span></div>
                        <div><span><WhatsUp/></span></div>
                    </div>
                </div>
                <img className={s.readNews__img} src='https://novostroyki.shop/wp-content/uploads/2021/01/2250619.jpg' alt="newscard-img" />
                    <p>
                        Итак, утром вы выезжаете в путь по Молодеченской трассе. Если автомобиля у вас нет - садитесь на маршрутку в сторону Молодечно от железнодорожного вокзала.    Остановка называется «Линия Сталина» - да-да, именно здесь вы и проведёте ближайшие несколько часов, а вероятнее всего – останетесь до самого вечера.
                    </p>
                    <p>
                        «Линия Сталина» - это уникальный музейный комплекс, располагающийся под открытым небом. Поэтому желательно приезжать сюда в хорошую погоду. Его территория поистине огромна: целых 26 га. Такое название дано музею неспроста: «Линией Сталина» в 20е-30е гг. XX века именовали цепь укреплений, созданную для защиты государственной границы СССР. Комплекс же построен лишь в 2005 году – к шестидесятой годовщине Победы в Великой Отечественной войне.
                    </p>
            </div>
            <div className={s.readAlso}>
                <div className={s.readAlso__wrapper}>
                    <div className={s.readAlso__subheader}>
                        Читайте также
                    </div>
                    <div className={s.readAlso__cardsItem}>
                    {news.slice(0, 3).map((obj, id) => (
                        <Newscard {...obj}
                        key={obj.id}
                        />
				    ))}
                    </div>
                </div>
            </div>
        </>
	)
}

export default ReadNews