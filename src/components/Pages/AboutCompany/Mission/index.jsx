import Mission from "components/UI/Mission";
import PageNavigation from "components/UI/PageNavigation";

const MissionComponent = () => {
    const items = [
        {
            label: 'Главная'
        },
        {
            label: 'О компании'
        },
        {
            label: 'Миссия'
        }
    ]
    return (
        <>
            <PageNavigation items={items} title='Миссия' />
            <Mission />  
        </>
    );
}

export default MissionComponent;
