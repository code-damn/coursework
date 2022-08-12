import React from 'react'

import { Link } from 'react-router-dom'

import s from './ApartamentBtn.module.scss'

const ApartamentBtn = ({ value }) => {



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