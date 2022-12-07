import { useMemo, useEffect, useCallback } from 'react';
import { Container } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import ConfiguratorCard from '../ConfiguratorCard';
import Stepper from '../Stepper';
import RedButton from '../Buttons/RedButton';
import { bodyTypes, loadCapacities, oilTypes, formulaWheels, stepsData } from './data';
import { nextStep, setSteps, toggleConfig } from 'store/configurator/configuratorSlice';

import cls from './Configurator.module.scss'
import cardsData from '../../Pages/Configurator/stepCards'

const Configurator = () => {
    const steps = useSelector(state => state.configurator)
    const dispatch = useDispatch()
    const router = useRouter()

    const { checkedItems, completedAll } = useMemo(() => {
        const completedAll = steps.findIndex(step => !step.completed) === -1 && steps.length > 0
        const [currentStep] = steps.filter(step => step.isCurrentStep)
        return {
            checkedItems: currentStep?.checkedValues?.map(value => value.id) || [],
            completedAll
        }
    }, [steps])

    const cards = useMemo(() => {
        const { id } = steps.find(step => step.isCurrentStep) || {}
        // step category id
        return cardsData.filter((product) => id === product.categoryId)
        // switch (id) {
        //     case '7f4353f6-0123-49be-9d14-dfc3fed91157': return bodyTypes;
        //     case '61a304dd-3733-4b6e-8e8b-3113a8541aec': return loadCapacities;
        //     case '101d2d62-ddb6-4939-afe2-94decae4aaa3': return oilTypes;
        //     case '415829e1-5e15-45c8-9dbb-1326ccdfdb4b': return formulaWheels;
        //     default: return [];
        // }
    }, [steps])

    useEffect(() => {
        if(completedAll){
            router.push('/products/configurator/1')
            dispatch(setSteps([]))
        }
    }, [completedAll, dispatch, router])

    useEffect(() => {
        dispatch(setSteps(stepsData))
    }, [dispatch])

    const handleClick = useCallback((config) => dispatch(toggleConfig(config)), [dispatch])

    return (
        <div className={cls.wrapper}>
            <Container>
                <Stepper steps={steps} />
                <div className={cls.list}>
                    {
                        cards?.length > 0 && cards.map(config => (
                            <ConfiguratorCard
                                key={config.id}
                                id={config.id}
                                name={config.label}
                                isChecked={checkedItems?.includes(config.id)}
                                image={config.image}
                                withImage={!!config.image}
                                onClick={handleClick}
                                config={config}
                            />
                        ))
                    }
                </div>
            </Container>
            <div className={cls.btn__wrapper}>
                <RedButton
                    className={cls.btn}
                    disabled={!checkedItems.length}
                    onClick={() => dispatch(nextStep())}
                >
                    Далее
                </RedButton>
            </div>
        </div>
    );
}

export default Configurator;
