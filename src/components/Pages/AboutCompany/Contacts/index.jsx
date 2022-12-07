import Contacts from "components/UI/Contacts";
import PageNavigation from "components/UI/PageNavigation";

const items = [
    {
        label: 'Главная'
    },
    {
        label: 'О компании'
    },
    {
        label: 'Контакты'
    }
]

const ContactsComponent = () => {
    return (
        <>
            <PageNavigation title="Контакты" items={items} />
            <Contacts />
        </>
    );
}

export default ContactsComponent;
