import { useState } from "react";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = 5; // Example total slides

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };

    return (
        <div className="carousel">
            <BtnPrev onClick={prevSlide} />
            <DecorList currentIndex={currentIndex} totalSlides={totalSlides} />
            <BtnNext onClick={nextSlide} />
        </div>
    );
    };



    const BtnPrev = ({ onClick }) => {
        return (
            <button className="carousel__button carousel__button--prev" onClick={onClick}>
            <img src="/img/arrowLeft.svg" alt="Previous" />
            </button>
        );
    };
    

    const BtnNext = ({ onClick }) => {
        return (
            <button className="carousel__button carousel__button--next" onClick={onClick}>
            <img src="/img/arrowRight.svg" alt="Next" />
            </button>
        );
    };

    const DecorList = ({ currentIndex, totalSlides }) => {
    const dots = [];

    // Create dots based on the total slides
    for (let i = 0; i < totalSlides; i++) {
        dots.push(
        <span
            key={i}
            className={`carousel__dot ${i === currentIndex ? 'carousel__dot--active' : ''}`}
        />
        );
    }

    return <div className="carousel__dots">{dots}</div>;
};

export default Carousel