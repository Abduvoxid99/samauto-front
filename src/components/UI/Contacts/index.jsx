import { Container } from '@mui/material';
import BannerComponent from '../BannerComponent';
import { contacts } from './data';

import cls from './Contacts.module.scss'
import Card from './Card';

const Contacts = () => {
    return (
        <section className={cls.section}>
            <Container className={cls.section__info}>
                <BannerComponent image="/images/contacts.png">
                    <div className={cls.section__banner__text}>
                        <h2>Контакты и обратная связь</h2>
                        <p>Свяжитесь с официальным дилерским центром удобным вам способом или задайте интересующий вопрос</p>
                    </div>
                </BannerComponent>
                <div>
                    {
                        contacts.length > 0 && contacts.map(contact => (
                            <Card 
                                key={contact.id}
                                title={contact.title}
                                items={contact.info}
                            />
                        ))
                    }
                </div>
            </Container>
        </section>
    );
}

export default Contacts;
