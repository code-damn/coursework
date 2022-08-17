import React from 'react'

import { Form, Field, ErrorMessage, Formik } from 'formik'
import * as Yup from 'yup'

import { ReactComponent as UserSvg } from '../../assets/icons/user.svg'
import { ReactComponent as Mail } from '../../assets/icons/mail.svg'

import s from './ContactsForm.module.scss'

const ContactsForm = ({ inVisible }) => {

    return (
        <Formik
            initialValues = {{
                name: '',
                email: '',
                message: ''
            }}
            validationSchema = {Yup.object({
                name: Yup.string()
                        .min(2, 'Минимум 2 символа!')
                        .required('Обязательное поле!'),
                email: Yup.string()
                            .email('Неправильный email')
                            .required('Обязательное поле!'),
                message: Yup.string()
                            .min(10, 'Минимум 10 символов!')
                            .required('Обязательное поле!')
            })}
            onSubmit = {(values, {resetForm}) => {
                console.log(JSON.stringify(values, null, 2))
                resetForm();
                inVisible(false);
            }}>
            
           <Form className={s.feedForm} action="#">
                <div className={s.feedFormWrapper} >
                    <div className={s.block+ ' ' +s.name}>
                        <div className={s.user}><UserSvg/></div>
                        <label htmlFor="name">Ваше имя</label>
                        <Field
                            autoFocus
                            name="name" 
                            type="text"
                            placeholder="Алексей"
                        />
                        <ErrorMessage className={s.error} name="name" component="div" />
                    </div>
                    <div className={s.block+ ' ' +s.email}>
                        <div className={s.mail}><Mail/></div>
                        <label htmlFor="email">Ваша электронная почта</label>
                        <Field
                            name="email"
                            type="text" 
                            placeholder="Введите" 
                        />
                        <ErrorMessage className={s.error} name="email" component="div" />
                    </div>
                    <div className={s.block+ ' ' +s.text}>
                        <label htmlFor="message">Ваше сообщение</label>
                        <Field 
                            name="message"
                            type="text" 
                            placeholder="Сообщение"
                            as="textarea"
                        />
                        <ErrorMessage className={s.error} name="message" component="div" />
                    </div>
                </div>
                    <button 
                    type="submit"
                    className={s.submitBtn}
                    >
                    Отправить
                </button>
            </Form> 
        </Formik>
    )
}

export default ContactsForm