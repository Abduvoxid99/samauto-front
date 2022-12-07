import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { withStyles } from "@mui/styles";
import { AccordionIcon } from "../Icons";

import cls from './CAccordion.module.scss'

const CustomAccordion = withStyles(() => ({
    root: {
        margin: '0 !important',
        borderRadius: '12px !important',
        boxShadow: '0px 0px 24px rgba(0, 0, 0, 0.04)',
        '&:before': {
            display: 'none'
        }
    }
}))(Accordion)

const CAccordionSummary = withStyles(() => ({
    root: {
        padding: '24px'
    },
    content: {
        margin: '0 !important'
    }
}))(AccordionSummary)

const CAccordionDetails = withStyles(() => ({
    root: {
        padding: '2px 24px 24px 24px',
    }
}))(AccordionDetails)

const CAccordion = ({ summary = '', details = '' }) => {
    return (
        <CustomAccordion>
            <CAccordionSummary
                className={cls.accordion__summary}
                expandIcon={<AccordionIcon />}
            >
                {summary}
            </CAccordionSummary>
            <CAccordionDetails className={cls.accordion__details}>
                {details}
            </CAccordionDetails>
        </CustomAccordion>
    );
}

export default CAccordion;
