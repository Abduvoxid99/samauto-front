import { Container } from "@mui/material";
import List from "components/UI/List";
import PageNavigation from "components/UI/PageNavigation";
import StockCard from "components/UI/StockCard";
import stocks from './data'
import cls from './Stock.module.scss'

const Stock = ({ list = stocks }) => {
    const items = [
        {
            label: 'Главная'
        },
        {
            label: 'Продукция'
        }
    ]
    return (
        <>
            <PageNavigation items={items} title='Все акции' />
            <section className={cls.section}>
                <Container>
                    <List gap="24" media={{930: 2, 560: 1}}>
                        {
                            list?.length > 0 && list.map(stock => (
                                <StockCard 
                                    key={stock.id}
                                    id={stock.id}
                                    image={stock.image}
                                    title={stock.title}
                                    desc={stock.desc}
                                />
                            ))
                        }
                    </List>
                </Container>
            </section>
        </>
    );
}

export default Stock;
