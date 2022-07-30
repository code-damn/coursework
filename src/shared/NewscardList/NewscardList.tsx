import React from 'react'
import Newscard from '../Newscard/Newscard'

import s from './NewscardList.module.scss'

type Props = {}

const NewscardList = (props: Props) => {
  return (
    <div className={s.newscardList}>
        <Newscard/>
        <Newscard/>
        <Newscard/>
        <Newscard/>
        <Newscard/>
        <Newscard/>
        <Newscard/>
        <Newscard/>
        <Newscard/>
    </div>
  )
}

export default NewscardList