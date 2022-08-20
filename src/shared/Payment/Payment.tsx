import React from 'react'

import visa from '../../assets/images/visa.png'
import webPay from '../../assets/images/webpay.png'
import verifByVisa from '../../assets/images/verifiedByVisa.png'
import msCard from '../../assets/images/mastercard.png'
import msSecur from '../../assets/images/mastercardSecure.png'
import belCart from '../../assets/images/belkart.png'

import s from './Payment.module.scss'

const Payment: React.FC = () => {
  return (
    <div className={s.payments}>
        <img src={visa} alt="visa" />
        <img src={webPay} alt="webPay" />
        <img src={verifByVisa} alt="verifByVisa" />
        <img src={msCard} alt="msCard" />
        <img src={msSecur} alt="msSecur" />
        <img src={belCart} alt="belCart" />
    </div>
  )
}

export default Payment