import React from 'react';
import Carousel from '../common/carousel';

const Testimonial = () => {
    return (
            <div className="testimonial">
                <div className="testimonial__container">
                    <TestimonialCard />
                    <TestimonialCard />
                </div>
                {/* <Carousel/> */}
            </div>
    );
}

const TestimonialCard = () => {
    return (
        <div className="testimonial-card">
            <video className="testimonial-card__video" src="./podcast-test.mp4" autoplay controls/>
            <div className="testimonial-card__author">
                <span className="testimonial-card__name">Juan Pérez</span>
                <span className="testimonial-card__role">Cliente Satisfecho</span>
                <p className="testimonial-card__text">"Este es un testimonio increíble de alguien muy satisfecho con el producto."</p>
            </div>
        </div>
    );
}


export default Testimonial;
