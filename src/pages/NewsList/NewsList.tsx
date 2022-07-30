import React from 'react'
import Breadcrumbs from '../../shared/Breadcrumbs/Breadcrumbs'
import NewscardList from '../../shared/NewscardList/NewscardList'
import Footer from '../../shared/Footer/Footer'

import s from './NewsList.module.scss'

type Props = {}

const NewsList = (props: Props) => {
  return (
    <div className={s.newslist}>
      <Breadcrumbs/>
      <NewscardList/>
      <Footer/>
    </div>
  )
}

export default NewsList