import React from 'react'
import Breadcrumbs from '../../shared/Breadcrumbs/Breadcrumbs'

import s from './NewsList.module.scss'

type Props = {}

const NewsList = (props: Props) => {
  return (
    <div className={s.newslist}>
      <Breadcrumbs/>
    </div>
  )
}

export default NewsList