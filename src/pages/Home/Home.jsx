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
        </article>
    )
}

export default Home