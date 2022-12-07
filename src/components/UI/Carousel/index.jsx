import React from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import { PrevCarouselIcon, NextCarouselIcon } from '../Icons';

const Carousel = ({ options, children, ...other }) => {

    return (
        <Splide
            options={options}
            {...other}
        >
            <SplideTrack>
                {
                    children.map((child, index) => <SplideSlide key={index}>{child}</SplideSlide>)
                }
            </SplideTrack>

            <div className="splide__arrows">
                <button className="splide__arrow splide__arrow--prev" style={{rotate: '180deg'}}><PrevCarouselIcon /></button>
                <button className="splide__arrow splide__arrow--next"><NextCarouselIcon /></button>
            </div>
        </Splide>
    );
}

export default Carousel;
