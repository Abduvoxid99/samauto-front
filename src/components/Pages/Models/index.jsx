import RedButton from "components/UI/Buttons/RedButton";
import PageNavigation from "components/UI/PageNavigation";
import ProductionList from "components/UI/ProductionList";

import data from './data'

const ModelsPage = () => {
    const items = [
        {
            label: 'Главная'
        },
        {
            label: 'Продукция'
        },
        {
            label: 'Грузовики'
        }
    ]
    return (
        <>
            <PageNavigation title='Грузовики' items={items}>
                <RedButton>Конфигуратор</RedButton>
            </PageNavigation>
            <ProductionList products={data} link="configurator" />
        </>
    );
}

export default ModelsPage;
