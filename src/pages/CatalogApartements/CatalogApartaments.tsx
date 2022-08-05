import React from 'react'

import Breadcrumbs from '../../shared/Breadcrumbs/Breadcrumbs'
import Filter from '../../shared/Filter/Filter'
import Sort from '../../shared/Sort/Sort'
import Catalog from '../../shared/Catalog/Catalog'

import '../../styles/index.scss'
import s from './CatalogApartaments.module.scss'

type Props = {}

const CatalogApartaments = (props: Props) => {
	return (
		<div className={s.catalogWrapper}>
            <div className={s.catalog}>
                <div className="container">
                    <Breadcrumbs/>
                    <Filter/>
                </div>
            </div>
            <Sort/>
            <Catalog/>
        </div>
	)
}

export default CatalogApartaments