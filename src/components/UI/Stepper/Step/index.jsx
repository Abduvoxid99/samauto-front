import cls from './Step.module.scss'
import { StepCompletedIcon } from 'components/UI/Icons';
import React from 'react';

const Step = ({
    completed = true,
    title = '',
    index = '',
    checkedValues = [],
    CompletedIcon = StepCompletedIcon,
    currentStep = true,
    className
}) => {
    return (
        <div className={`
            ${cls.step} 
            ${!completed && !currentStep ? cls.disabled : completed ? cls.completed : ''}
            ${className}
        `}>
            <div className={cls.step__title}>{title}</div>
            <div className={cls.step__body}>
                <div className={cls.step__body__line}></div>
                <div className={cls.step__body__content}>{completed ? <CompletedIcon /> : index}</div>
                <div className={cls.step__body__line}></div>
            </div>
            {completed && <div className={cls.step__label}>{
                checkedValues?.length > 0 && checkedValues.map((word, index) => <React.Fragment key={index + word}>{word} <br /></React.Fragment>)
            }</div>}
        </div>
    );
}

export default Step;
