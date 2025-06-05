import NovedadesItem from "../common/novedadesItem";
import Section from "../common/section";

const Novedades = () => {
  return ( 
    <Section className="novedades">
      <h2 className="novedades__titulo">TITULO DE LAS CARDS</h2>

      <div className="novedades__container">
        <div className="novedades__grid">
          <NovedadesItem/>
          <NovedadesItem/>
          <NovedadesItem/>
          
        </div>
      </div>
    </Section>
  );
}

export default Novedades;
