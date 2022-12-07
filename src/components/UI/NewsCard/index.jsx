import { useRouter } from 'next/router';
import { converterDate } from 'utils/dateConverter';
import { NextCardIcon } from '../Icons';
import cls from './NewsCard.module.scss'

const NewsCard = ({ title = '', desc = '', date = '', link = '' }) => {
    const { fullDate } = converterDate(date)
    const router = useRouter()

    return (
        <div className={cls.card}>
            <div className={cls.card__info}>
                <time className={cls.card__date}>{fullDate || date}</time>
                <h3 className={cls.card__title}>{title}</h3>
                <span className={cls.line}></span>
                <button className={cls.card__btn} onClick={() => router.push(link)}>
                    <span>Читать подробно</span>
                    <NextCardIcon />
                </button>
            </div>
        </div>
    );
}

export default NewsCard;
