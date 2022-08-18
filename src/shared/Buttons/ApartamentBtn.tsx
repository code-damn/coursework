import React from 'react'

import { Link } from 'react-router-dom'

import s from './ApartamentBtn.module.scss'

type btnProps = {
    value: string;
}

const ApartamentBtn: React.FC<btnProps> = ({ value }) => {



  	return (
    	<>
            <Link to="/catalog">        
                <div className={s.apartamentBtn}>
                    {value}
                </div>
            </Link>
    	</>
  	)
}

export default ApartamentBtn