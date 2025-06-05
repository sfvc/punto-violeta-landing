import Section from "../common/section";

const QueEs = () => {
    return (
        <Section>
            <div className="que-es">
                <div className="que-es__content">
                    <h2 className="que-es__title">Punto Violeta</h2>
                    <em className="que-es__description">
                        Punto Violeta es una iniciativa de la Secretaría de las Mujeres, Géneros y Diversidad de la Municipalidad de Catamarca Capital.
                    </em>
                    <small className="que-es__small">
                        Secretaría de las Mujeres, Géneros y Diversidad - Catamarca Capital<br />
                        Secretaria: Dra. Gabriela Molina
                    </small>
                </div>
                <div className="que-es__image-container">
                    <img 
                        src="/puntovioletawe.png" 
                        alt="Logo Punto Violeta" 
                        className="que-es__image" 
                    />
                </div>
            </div>
        </Section>
    );
}

export default QueEs;
