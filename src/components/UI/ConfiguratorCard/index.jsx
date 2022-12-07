import Image from 'next/image';
import React from 'react';
import { StepCompletedIcon } from '../Icons';

import cls from './ConfiguratorCard.module.scss'

const ConfiguratorCard = ({
    withImage = false,
    onClick = () => { },
    isChecked = false,
    config,
    name = '',
    image = ''
}) => {

    return withImage ? (
        <div
            className={`${cls.card} ${isChecked ? cls.checked : ''}`}
            onClick={() => onClick(config)}
        >
            <div className={cls.card__img}>
                <Image
                    src={image}
                    layout='fill'
                    objectFit='cover'
                    alt={name}
                />
            </div>
            <div className={cls.card__content}>
                {isChecked && <div className={cls.card__content__checkmark}><StepCompletedIcon /></div>}
                <h4 className={cls.card__content__text}>{name}</h4>
            </div>
        </div>
    ) : (
        <div
            className={`${cls.card_Withoutimage} ${isChecked ? cls.checked : ''}`}
            onClick={() => onClick(config)}
        >
            {
                isChecked &&
                <div className={`${cls.card_Withoutimage__checkmark} ${cls.card__content__checkmark}`}>
                    <StepCompletedIcon />
                </div>
            }
            <h4 className={cls.card__content__text}>{name}</h4>
        </div>
    )
}

export default React.memo(ConfiguratorCard);
