import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: ${props => props.direction};
    align-items: ${props => props.alignItems};
    justify-content: ${props => props.justifyContent};
    gap: ${props => props.gap}px;
    flex-wrap: ${props => props.wrap};
    & > *{
        max-width: ${props => props.direction === 'row' ? `calc((100% - ${props.gap * (props.rowCount - 1)}px) / ${props.rowCount})` : props.cardWidth || '100%'};
    }
    ${props => props.mediaQuery}
`;

const List = ({
    children,
    direction = 'row',
    alignItems = 'stretch',
    justifyContent = 'flex-start',
    gap = "12",
    wrap = 'wrap',
    rowCount = 3,
    cardWidth = '100%',
    media = {},
    ...other
}) => {

    const mediaQuery = Object.entries(media).reduce((acc, [size, count]) => (
        `
        @media screen and (max-width:${size}px){
            & > * {
                max-width: calc((100% - ${gap * (count - 1)}px) / ${count});
            }
        }
        ${acc}
        `
    ), '')
    
    return (
        <Wrapper
            direction={direction}
            gap={gap}
            wrap={wrap}
            rowCount={rowCount}
            cardWidth={cardWidth}
            mediaQuery={mediaQuery}
            {...other}
        >
            {children}
        </Wrapper>
    );
}

export default List;
