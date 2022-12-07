import Configurator from "components/UI/Configurator";
import PageNavigation from "components/UI/PageNavigation";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSteps } from "store/configurator/configuratorSlice";
import busStep from './bus'
import pickapSteps from "./pickap";
import specialCarsSteps from "./specialCars";

const items = [
    {
        label: 'Главная'
    },
    {
        label: 'Конфигуратор'
    }
]
const ConfiguratorComponent = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const { id } = router.query
 
    useEffect(() => {
        const steps = ((id) => {
            switch (id) {
                case '5d8e58ed-1422-4f53-a0dc-56e47b104654': return busStep;
                case 'e0e81745-8678-4892-a05b-2b5547258b25': return pickapSteps;
                case '3bd08b2b-8477-4201-a1c2-264412eb7916': return specialCarsSteps;
                default: return [];
            }
        })(id)
        dispatch(setSteps(steps))
    }, [id, dispatch])

    return (
        <>
            <PageNavigation items={items} title="Конфигуратор" />
            <Configurator />
        </>
    );
}

export default ConfiguratorComponent;
