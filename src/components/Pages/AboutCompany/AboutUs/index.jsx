import About from "components/UI/AboutUs";
import PageNavigation from "components/UI/PageNavigation";

const items = [
    {
        label: 'Главная'
    },
    {
        label: 'О компании'
    },
    {
        label: 'О нас'
    }
]

const AboutUsComponent = () => {
    return (
        <>
            <PageNavigation title="О нас" items={items} />
            <About />
        </>
    );
}

export default AboutUsComponent;
