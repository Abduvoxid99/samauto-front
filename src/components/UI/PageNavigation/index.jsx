import { Container } from '@mui/material';
import RedButton from '../Buttons/RedButton';
import CBreadcrumbs from '../CBreadcrumbs';

import cls from './PageNavigation.module.scss'

const PageNavigation = ({title = '', items = [], separator = '•', children}) => {
    return (
        <div id="breadcrumbs">
            <Container>
                <div className={cls.page__breadcrumb}>
                    <CBreadcrumbs items={items} separator={separator} />
                </div>
                <div className={cls.page__textwrapper}>
                    <h2 className={cls.page__title}>{ title }</h2>
                    {children}
                </div>
            </Container>
        </div>
    );
}

export default PageNavigation;
