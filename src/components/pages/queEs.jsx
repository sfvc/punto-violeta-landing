import Section from "../common/section";

const QueEs = () => {
    return (
        <Section>
            <div className="que-es">
                <div className="que-es__content">
                    <h2 className="que-es__title">Nodo Tecnologico</h2>
                    <em className="que-es__description">
                        El Nodo Tecnológico de Catamarca conecta innovación y tecnología, impulsando a los jóvenes hacia las habilidades del futuro a través de cursos especializados.
                    </em>
                    <small className="que-es__small">Emilio Ramasi - Director del nodo</small>
                </div>
                <div className="que-es__image-container">
                    <img 
                        src="/logo-giro.svg" 
                        alt="Logo Giro" 
                        className="que-es__image" 
                    />
                </div>
            </div>
        </Section>
    );
}

export default QueEs;