import React from 'react';
import Section from "../common/section";

const Home = () => {
    const flexHome = Array.from({ length: 3 }, (_, index) => {
        return {
        titulo: `3200${index + 1}`,
        subtitulo: `Generados dinamicamente por ia ${index + 1}`,
        p: `alguna descripcion corta qdwqdqwddwdqwdqwdwqdwqwdqdwqdwqqdw ${index + 1}`,
        small: `ver mas ${index + 1}`,
        };
    });

    return (
        <Section showVideo={true}>
            <div className="home">
                <h2 className="home__subtitle">Transformá sueños en realidades extraordinarias aprendiendo nuevas tecnologias</h2>
                <div className="home-cards">
                    {flexHome.map((cards, index) => {
                        return (
                        <div className="home-cards__content" key={index}>
                            <img src="/test/robot.svg" alt="" />
                            <div className="home-cards__content-text">
                                <h3 className="home-cards__title">+{cards.titulo}</h3>
                                <h2 className="home-cards__subtitle">{cards.subtitulo}</h2>
                                {/* <small className="home-cards__small">{cards.small}</small> */}
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>
        </Section>
    )
}

export default Home;