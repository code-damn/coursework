import React from 'react'
import CatalogSlider from '../../shared/CatalogSlider/CatalogSlider'
import Services from '../../shared/Services/Services'
import Sidebar from '../../shared/Sidebar/Sidebar'
import Slider from '../../shared/Slider/Slider'

import Tabs from '../../shared/Tabs/Tabs'

import s from './Home.module.scss'

const Home = () => {

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
                <CatalogSlider/>
            </section>
            <section className={s.searchOnMap}>
                <div className={s.searchOnMap__content}>
                    <h3>Поиск квартир на карте</h3>
                    <p>Ищите квартиры на сутки в центре города, возле парка или в живописном районе</p>
                    <div className={s.searchOnMap__btn}>Открыть карту</div>
                </div>
            </section>
            <section className={s.goldStatusInfo}>
                <div className={s.goldStatusWrapper}>
                    <div className={s.goldStatusItem}>
                        <div className={s.goldStatusItem__wrapper}>
                            <div className={s.goldStatusItem__icon}>
                            </div>
                            <div className={s.goldStatusItem__title}>
                                Начните привлекать клиентов бесплатно!
                            </div>
                        </div>
                        <p>Пройдя простую регистрацию на сайте у Вас появится личный кабинет, в котором возможно <span>бесплатно создавать и публиковать</span> объявления на сайте.</p>
                        <div className={s.goldStatusBtn}>
                            <span>+</span> Разместить объявление
                        </div>
                    </div>
                    <div className={s.goldStatusItem}>
                        <div className={s.goldStatusItem__wrapper}>
                            <div className={s.goldStatusItem__icon}>
                            </div>
                            <div className={s.goldStatusItem__title}>
                                Начните привлекать клиентов бесплатно!
                            </div>
                        </div>
                        <p>Пройдя простую регистрацию на сайте у Вас появится личный кабинет, в котором возможно <span>бесплатно создавать и публиковать</span> объявления на сайте.</p>
                        <div className={s.goldStatusBtn}>
                            <span>+</span> Разместить объявление
                        </div>
                    </div>
                    <div className={s.goldStatusItem}>
                        <div className={s.goldStatusItem__wrapper}>
                            <div className={s.goldStatusItem__icon}>
                            </div>
                            <div className={s.goldStatusItem__title}>
                                Начните привлекать клиентов бесплатно!
                            </div>
                        </div>
                        <p>Пройдя простую регистрацию на сайте у Вас появится личный кабинет, в котором возможно <span>бесплатно создавать и публиковать</span> объявления на сайте.</p>
                        <div className={s.goldStatusBtn}>
                            <span>+</span> Разместить объявление
                        </div>
                    </div>
                </div>
            </section>
            <section className={s.about}>
                <div className={s.aboutUs}>
                    <h3>ЧТО ТАКОЕ SDAEM.BY</h3>
                    <h2>Квартира на сутки в Минске</h2>
                    <div className={s.aboutUs__descr}>
                        <div className={s.aboutUs__img}></div>
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
                <aside>
                    <h4></h4>
                    <ul className={s.newsList}>
                        <li></li>
                    </ul>
                </aside>
            </section>
        </article>
    )
}

export default Home