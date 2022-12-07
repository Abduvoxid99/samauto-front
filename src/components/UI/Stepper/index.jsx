import cls from './Stepper.module.scss'
import Step from './Step'

const Stepper = ({
    steps = [],
    stepperClassname = '',
    stepClassname = '',
}) => {
    return (
        <div className={`${cls.stepper} ${stepperClassname}`}>
            {
                steps?.length > 0 && steps.map((step, index) => {
                    const checkedValues = step.checkedValues?.map(value => value.label)
                    return (
                        <Step
                            key={step.id}
                            title={step.title}
                            completed={step.completed}
                            checkedValues={checkedValues}
                            index={index + 1}
                            currentStep={step.isCurrentStep}
                            className={stepClassname}
                        />
                    )
                })
            }
        </div>
    );
}

export default Stepper;
