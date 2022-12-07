import AboutStockComponent from "components/UI/AboutStockComponent";
import PageNavigation from "components/UI/PageNavigation";

const AboutStock = () => {
    const items = [
        {
            label: 'Главная'
        },
        {
            label: 'Все акции'
        },
        {
            label: 'Продукция'
        },
    ]

    return (
        <>
            <PageNavigation items={items} title='Акции' />   
            <AboutStockComponent />
        </>
    );
}

export default AboutStock;
