import { Container } from "@mui/material";
import RedButton from "../Buttons/RedButton";
import List from "../List";
import NewsCard from "../NewsCard";
import newsData from './data'

import cls from './News.module.scss'

const News = ({news = newsData}) => {
    return (
        <section className={cls.section}>
            <Container className={cls.section__container} sx={{display: 'flex'}}>
                <h2 className={cls.section__title}>Новости</h2>
                <List 
                    rowCount={4}
                    gap="24"
                >
                    {
                        news?.length > 0 && news.map((newsItem) => 
                            <NewsCard 
                                key={newsItem.id}
                                title={newsItem.title}
                                desc={newsItem.description}
                                date={newsItem.date}
                            />
                        )
                    }
                </List>
                <RedButton className={cls.section__btn}>Все  новости</RedButton>
            </Container>
        </section>
    );
}

export default News;
