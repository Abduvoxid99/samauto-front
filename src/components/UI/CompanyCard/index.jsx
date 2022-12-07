import { useRouter } from 'next/router';
import { AccordionIcon } from '../Icons';
import cls from './CompanyCard.module.scss'

const CompanyCard = ({title = '', link = '/'}) => {
    const router = useRouter()

    return (
        <div className={cls.card}>
            <div>
                <h3 className={cls.card__title}>{title}</h3>
                <button className={cls.card__btn} onClick={() => router.push(link)}>
                    <span>Читать дальше </span>
                    <AccordionIcon color='currentColor' />
                </button>
            </div>
        </div>
    );
}

export default CompanyCard;
