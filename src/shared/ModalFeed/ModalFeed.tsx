import React from 'react'

import s from './ModalFeed.module.scss'

type modalProps = {
    visible: boolean;
    inVisible: (value: boolean) => void;
}

const ModalFeed: React.FC<modalProps> = ({ visible, inVisible }) => {
    return (
        <div className={visible ? s.overlay : s.overlay+ ' ' +s.hidden}>
            <div className={s.modal}>
                <div className={s.modal__title}>
                    Ваше письмо отправлено!
                </div>
                <div className={s.modal__subtitle}>
                    Какое-то сообщение о том, что письмо отправлено, какое-то сообщение, что письмо отправлено.
                </div>
                <div onClick={() => inVisible(true)} className={s.modal__closeBtn}>
                    Закрыть окно
                </div>
            </div>
        </div>
    )
}

export default ModalFeed