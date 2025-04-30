import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Footer = () => {
    const listaItems = Array.from({ length: 6 }, (_, index) => {
        return { logo: "/img/mapa.svg" }; // Proper object syntax
    });
    
    const [showGrid, setShowGrid] = useState(false);
    const modalRef = useRef(null); // Reference to the modal for animations

    const openModal = () => {
        setShowGrid(prevState => {
            const newState = !prevState;
            if (newState) {
                animateModal(); // Show modal with animation
                document.body.classList.add('modal-open');
            } else {
                animateModalUp(); // Close modal with animation
                document.body.classList.remove('modal-open');
            }
            return newState; // Return new state
        });
    };

    const closeModal = () => {
        // Animate the modal closing first
        gsap.to(modalRef.current, {
            y: '100%',  // Move the modal down to hide it
            opacity: 0, // Fade out
            duration: 0.3,
            ease: 'power2.inOut',
            onComplete: () => {
                setShowGrid(false); // Close modal after animation completes
            },
        });
    };

    const animateModal = () => {
        gsap.set(modalRef.current, { y: '100%' }); // Initial position off-screen
        gsap.to(modalRef.current, {
            y: '0%', // Slide the modal up into view
            opacity: 1, // Fade in
            duration: 0.3,
            ease: 'power2.inOut',
        });
    };

    const animateModalUp = () => {
        gsap.set(modalRef.current, { y: '0%' }); // Keep the modal in position
        gsap.to(modalRef.current, {
            y: '100%',  // Slide the modal down off-screen
            opacity: 0, // Fade out
            duration: 0.3,
            ease: 'power2.inOut',
        });
    };

    // Handle animation only on state change
    useEffect(() => {
        // Animation will now be handled by the openModal function
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, [showGrid]); // Trigger this effect when showGrid changes

    return (
        <footer className="footer-coyuntura__footer">
            <nav className="footer-coyuntura__footer-nav">
                {/* Conditionally render the content with grid layout */}
                <div
                    ref={modalRef}  // Attach the ref to the content div
                    className="footer-coyuntura__footer-content"
                >
                    {listaItems.map((item, index) => {
                        return (
                            <figure key={index} className="footer-coyuntura__card">
                                <img src={item.logo} alt="A beautiful scenery" width={48} />
                                <figcaption>A breathtaking view</figcaption>
                                <small>ver mas</small>
                            </figure>
                        );
                    })}
                </div>

                <div className="footer-coyuntura__footer-links">
                    {/* Button to toggle the grid display */}
                    <button onClick={openModal}>
                        <img src="/img/mapa.svg" alt="Map logo" width={24} />
                    </button>

                    {listaItems.map((item, index) => {
                        return (
                            <a href="" key={index}>
                                <img src={item.logo} alt="Map logo" width={24} />
                            </a>
                        );
                    })}
                </div>
            </nav>
        </footer>
    );
};

export default Footer;
