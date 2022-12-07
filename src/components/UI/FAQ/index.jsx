import { Container } from '@mui/material';
import { useState } from 'react';
import GreyButton from '../Buttons/GreyButton';
import CAccordion from '../CAccordion';
import FaqData, {buttons} from './data'

import cls from './FAQ.module.scss'

const FAQ = ({questions = FaqData}) => {
    const [activeBtn, setActiveBtn] = useState(buttons?.length && buttons[0].id)

    return (
        <section className={cls.section}>
            <Container className={cls.section__container} sx={{display: 'flex'}}>
                <h2 className={cls.section__title}>FAQ</h2>
                <div className={cls.section__buttonsList}>
                    {
                        buttons?.length > 0 && buttons.map(btn => 
                            <GreyButton 
                                key={btn.id}
                                className={`${cls.section__btn} ${activeBtn === btn.id ? cls.btn__active : ''}`}
                                onClick={() => setActiveBtn(btn.id)}
                            >
                                {btn.name}
                            </GreyButton>
                        )
                    }
                </div>
                <div className={cls.section__questionsList}>
                    {
                        questions?.length > 0 && questions.map(questionItem => 
                            <CAccordion 
                                key={questionItem.id}
                                summary={questionItem.question}
                                details={questionItem.answer}
                            />
                        )
                    }
                </div>
            </Container>
        </section>
    );
}

export default FAQ;
