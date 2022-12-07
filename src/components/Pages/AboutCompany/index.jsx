import { Container } from '@mui/material';
import PageNavigation from 'components/UI/PageNavigation';
import List from 'components/UI/List'
import CompanyCard from 'components/UI/CompanyCard';
import cls from './AboutCompany.module.scss'
import pages from './data'

const Company = ({list = pages}) => {
    const items = [
        {
            label: 'Главная'
        },
        {
            label: 'О компании'
        }
    ]

    return (
        <>
            <PageNavigation items={items} title='О компании' />
            <section className={cls.section}>
                <Container>
                    <List
                        gap="24"
                        rowCount={3}
                    >
                        {
                            list?.length && list.map(page => 
                                <CompanyCard 
                                    key={page.id} 
                                    title={page.title} 
                                    link={page.link} 
                                    
                                />
                            )
                        }
                    </List>
                </Container>
            </section>
        </>
    );
}

export default Company;