import React from 'react'

import Breadcrumbs from '../../shared/Breadcrumbs/Breadcrumbs'
import Filter from '../../shared/Filter/Filter'

import '../../styles/index.scss'
import s from './CatalogApartaments.module.scss'

type Props = {}

const CatalogApartaments = (props: Props) => {
	return (
		<div className={s.catalog}>
            <div className="container">
                <Breadcrumbs/>
                <Filter/>
            </div>
        </div>
	)
}

export default CatalogApartaments