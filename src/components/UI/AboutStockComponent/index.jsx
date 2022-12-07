import { Container } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import List from '../List'

import cls from './AboutStockComponent.module.scss'

const AboutStockComponent = ({}) => {
    return (
        <section className={cls.section}>
            <Container>
                <div className={cls.section__img}>
                    <Image 
                        src='/images/AboutStock.png'
                        layout='fill'
                        objectFit='cover'
                        alt='image'
                    />
                </div>
                <List
                    direction='column'
                    gap='24'
                    alignItems='flex-start'
                    className={cls.section__list}
                >
                    <h2 className={cls.title}>Компания SamAuto совместно с компанией O’zavtosanoat-Leasing объявляют о начале выгодной АКЦИИ!</h2>
                    <p className={cls.text}>Успейте приобрести надежные и современные автомобили в лизинг.</p>
                    <ul className={cls.list}>
                        <h3 className={cls.subtitle}>Пополняйте свой автопарк качественными моделями на очень хороших условиях:</h3>
                        <li className={cls.text}>-  Предоплата - 25%  </li>
                        <li className={cls.text}>-  Процентная ставка - 18% годовых </li>
                        <li className={cls.text}>-  Комиссия за рассмотрение лизингового проекта  -  0%</li>
                    </ul>
                    <List direction='column' gap='8'>
                        <Link href='/'>
                            <a className={cls.link + ' ' + cls.text}>График погашения - Автобус SAZ HC45</a>
                        </Link>
                        <Link href='/'>
                            <a className={cls.link + ' ' + cls.text}>График погашения - Автобус SAZ HC45</a>
                        </Link>
                        <Link href='/'>
                            <a className={cls.link + ' ' + cls.text}>График погашения - Поливомоечная машина ISUZU NQR 71PL</a>
                        </Link>
                        <Link href='/'>
                            <a className={cls.link + ' ' + cls.text}>График погашения - Бензовоз ISUZU FVR 34K</a>
                        </Link>
                        <Link href='/'>
                            <a className={cls.link + ' ' + cls.text}>График погашения - Поливомоечная машина ISUZU NQR 71PL</a>
                        </Link>
                        <Link href='/'>
                            <a className={cls.link + ' ' + cls.text}>График погашения - Автобус SAZ HC45</a>
                        </Link>
                        <Link href='/'>
                            <a className={cls.link + ' ' + cls.text}>График погашения - Автобус SAZ HC45</a>
                        </Link>
                        <Link href='/'>
                            <a className={cls.link + ' ' + cls.text}>График погашения - Автобус SAZ HC45</a>
                        </Link>
                    </List>
                    <div className={cls.list}>
                        <h3 className={cls.subtitle}>Телефон:</h3>
                        <Link href=''><a>(+998 97) 701 83 16</a></Link>
                        <Link href=''><a>(+998 97) 701 83 16</a></Link>
                        <Link href=''><a>(+998 97) 701 83 16</a></Link>
                    </div>
                    <Link href='/'><a className={cls.text}>SamAuto - Telegram-bot</a></Link>
                </List>
            </Container>
        </section>
    );
}

export default AboutStockComponent;
