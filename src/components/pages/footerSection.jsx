import React from 'react';
import Section from "../common/section";
import Testimonial from './testimonial';

const FooterSection = () => {
    return (
        <Section>
            <div className="footerSection__container">
                <h1 className="footerSection__h1">Segui en Contacto</h1>
                <Testimonial/>
                <div className="footerSection__logo-container">
                    <h2 className="footerSection__company-name">Nodo Tecnologico</h2>
                </div>
                <div className="footerSection__copyright">
                    <small className="footerSection__copyright-small">Secretaria de Gabinete y Modernización</small>
                </div>
            </div>
        </Section>
    );
}

export default FooterSection;
