import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import CatalogSlider from '../../shared/CatalogSlider/CatalogSlider'
import Services from '../../shared/Services/Services'
import Sidebar from '../../shared/Sidebar/Sidebar'
import Slider from '../../shared/Slider/Slider'
import Tabs from '../../shared/Tabs/Tabs'

import { ReactComponent as Location } from '../../assets/icons/location.svg'
import { ReactComponent as GoldItem1 } from '../../assets/icons/goldStatusItem1.svg'
import { ReactComponent as GoldItem2 } from '../../assets/icons/goldStatusItem2.svg'
import { ReactComponent as ArrowR } from '../../assets/icons/arrowRight.svg'
import { ReactComponent as Stars } from '../../assets/icons/stars.svg'


import s from './Home.module.scss'


type newsItem = {
    title: string;
    data: string; 
}

const Home: React.FC = () => {
    const [newsList, setNewsList] = React.useState<newsItem[]>([]);

	React.useEffect(() => {
        axios.get(`https://62e980cd01787ec7121910b3.mockapi.io/newsList?`)
		.then((response) => {setNewsList(response.data)});
    }, []);

    return (
        <article className={s.home}>
            <section className={s.homeTabs}>
                <div className={s.homeTabs__title}>
                    <h1>Sdaem.by - у нас живут <span>ваши объявления</span></h1>
                </div>
                <div>
                    <Tabs/>
                </div>
            </section>
            <section className={s.services}>
                <div className={s.services__options}>
                    <div className={s.services__apartaments}>
                        <Services/>
                    </div>
                    <div className={s.services__cottages}>
                        <Slider/>
                    </div>
                    <div className={s.services__saunas}>
                        <Slider/>
                    </div>
                    <div className={s.services__cars}>
                        <Slider/>
                    </div>
                </div>

                <aside className={s.services__extendedList}>
                    <Sidebar/>
                </aside>
            </section>
            <section className={s.slider}>
                <div className={s.slider__title}>
                    <h2>КВАРТИРЫ НА СУТКИ</h2>
                    <h3>Аренда квартир в Минске</h3>
                </div>
                <div className={s.slider__slider}>
                    <CatalogSlider/>
                </div>
                <div className={s.slider__variants}>
                    <div className={s.slider__variantsAmount}>
                        341 <span>+</span>
                        <div className={s.slider__variantsAmount_text}>Предложений по Минску</div>
                    </div>
                    <Link to="/catalog">
                        <div className={s.slider__variantsShow}>
                            Посмотреть все <span><ArrowR/></span>
                        </div>
                    </Link>
                </div>
            </section>
            <section className={s.searchOnMap}>
                <div className={s.searchOnMap__content}>
                    <h3>Поиск квартир на карте</h3>
                    <p>Ищите квартиры на сутки в центре города, возле парка или в живописном районе</p>
                    <div className={s.searchOnMap__btn}><span><Location/></span> Открыть карту</div>
                </div>
            </section>
            <section className={s.goldStatusInfo}>
                <div className={s.goldStatusWrapper}>
                    <div className={s.goldStatusItem}>
                        <div className={s.goldStatusItem__wrapper}>
                            <div className={s.goldStatusItem__icon}>
                                <span><GoldItem1/></span>
                            </div>
                            <div className={s.goldStatusItem__title}>
                                Начните привлекать клиентов бесплатно!
                            </div>
                        </div>
                        <p>Пройдя простую регистрацию на сайте у Вас появится личный кабинет, в котором возможно <span>бесплатно создавать и публиковать</span> объявления на сайте.</p>
                        <div className={s.goldStatusBtn+ ' ' +s.goldStatusBtn_1}>
                            <span>+</span> Разместить объявление
                        </div>
                    </div>
                    <div className={s.goldStatusItem}>
                        <div className={s.goldStatusItem__wrapper}>
                            <div className={s.goldStatusItem__icon}>
                                <span><GoldItem2/></span>
                            </div>
                            <div className={s.goldStatusItem__title+ ' ' +s.goldStatusItem__title_2}>
                            Поднимайте объявления
                            </div>
                        </div>
                        <p>Вы в любое время можете <span>поднимать</span> объявления <span>вверх первой страницы</span> каталога, они разместятся сразу после платных объявлений до тех пор, пока другой пользователь не повторит процедуру.</p>
                        <div className={s.goldStatusBtn+ ' ' +s.goldStatusBtn_2}>
                            Узнать стоимость услуги <span><ArrowR/></span>
                        </div>
                    </div>
                    <div className={s.goldStatusItem+ ' ' +s.goldStatusItem_3}>
                        <div className={s.goldStatusItem__wrapper+ ' ' +s.goldStatusItem__wrapper_3}>
                            <div className={s.goldStatusItem__title+ ' ' +s.goldStatusItem__title_3}>
                                Приоритет Gold 
                            </div>
                        </div>
                        <p>Приоритетное размещение <span>Gold</span> позволяет <span>закрепить ваше объявление</span> в верхней части каталога!</p>
                        <p>Gold объявления <span>перемещаются 
                        <br /> 
                        каждые 5 мин</span> на 1 позицию, что делает размещение одинаковым для всех.</p>
                        <div className={s.goldStatusBtn+ ' ' +s.goldStatusBtn_3}>
                            Еще о тарифе Gold <span><ArrowR/></span>
                        </div>
                        <div className={s.goldStatusItem__SvgStars}>
                            <Stars/>
                        </div>
                    </div>
                </div>
            </section>
            <section className={s.about}>
                <div className={s.aboutUs}>
                    <h3>ЧТО ТАКОЕ SDAEM.BY</h3>
                    <h2>Квартира на сутки в Минске</h2>
                    <div className={s.aboutUs__descr}>
                        <div className={s.aboutUs__img}>{/* <img src={apartament} alt="apartament"/> */}</div>
                        <div className={s.aboutUs__text}>
                            <p> <span>Нужна квартира на сутки в Минске?</span> <br />
                            На веб-сайте sdaem.by вас ждет масса выгодных предложений. Каталог насчитывает <span>более 500 квартир.</span> Благодаря удобной навигации вы быстро найдете подходящий вариант</p>
                            <p>
                            В каталоге представлены комфортабельные однокомнатные квартиры на сутки и квартиры с большим количеством комнат в разных районах города, с различной степенью удобства от дешевых до VIP
                            с джакузи.
                            </p>
                        </div>
                    </div>
                    <p className={s.aboutUs__textDown}>Чтобы снять квартиру на сутки в Минске, вам достаточно определиться с выбором и связаться с владельцем для уточнения условий аренды и заключить договор. Заметим, на сайте представлены исключительно квартиры на сутки без посредников, что избавляет посетителей от необходимости взаимодействовать с агентствами, тратя свое время и деньги. Также пользователи сайта могут совершенно бесплатно размещать объявления о готовности сдать квартиру на сутки.
                    </p>
                </div>
                <aside className={s.newsSideBar}>
                    <h4>Новости</h4>
                    <ul className={s.newsSideBar__newsList}>
                        {newsList.slice(0, 4).map((obj, i) => (
                            <li
                            key={i}
                            >
                                {obj.title}
                                <span>{obj.data}</span>
                            </li>
                        ))}
                    </ul>
                    <div className={s.newsSideBar__showMore}><Link to="/news">Посмотреть все</Link></div>
                </aside>
            </section>
        </article>
    )
}

export default Home