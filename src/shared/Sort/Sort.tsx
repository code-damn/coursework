import React from 'react'
import { useState } from 'react'

import Chekbox from '../Chekbox/Chekbox'
import Select from '../Select/Select'
import Input from '../Input/Input'
import { ReactComponent as Options } from '../../assets/icons/moreOptions.svg'
import { ReactComponent as ArrowR } from '../../assets/icons/arrowRight.svg'

import '../../styles/index.scss'
import s from './Sort.module.scss'

const Sort: React.FC = () => {
	const [isOpenCatalogSort, setIsOpenCatalogSort] = useState(false);

	return (
		<div className={s.wrapper}>
			<div className={s.sort}>
				<div className={s.sort__wrapper}>
					<div className={s.sort__item}>
						<div className={s.sort__rooms}>Комнаты</div>
						<div className={s.sort__roomsSelect}>
							<Select ArrId={1}/>
						</div>
					</div>
					<div className={s.sort__item}>
						<Input/>
					</div>
					<div className={s.sort__item}>
						<div 
							className={s.sort__moreOptions}
							onClick={() => setIsOpenCatalogSort(!isOpenCatalogSort)}
                            >
							Больше опций <span><Options/></span>
                        </div>
					</div>
					<div className={s.sort__item+ ' ' +s.sort__lastitem}>
						<div className={s.sort__clearBtn}>Очистить</div>
						<div className={s.sort__showBtn}>Показать объекты <span><ArrowR/></span></div>
					</div>
				</div>
				{isOpenCatalogSort && (
					<Chekbox/>
				)}
			</div>
		</div>
	)
}

export default Sort