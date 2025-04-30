import React from 'react';
import { GridVideo } from './gridvideo';

const Section = ({ children, showVideo = false, showGaleria = false }) => {
  return (
    <>  
        <div className="section">
          {showVideo && (
            <div className="section-video-background">
              <video autoPlay muted loop id="section-video-background__background-video">
                <source src="/Nodo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
          {showGaleria && (
            <div className="section__galeria">
                  <GridVideo />
            </div>
          )}
          <div className='section-contenedor'>
              <main>
                {children}
              </main>
          </div>
        </div>
    </>
  );
};

export default Section;
