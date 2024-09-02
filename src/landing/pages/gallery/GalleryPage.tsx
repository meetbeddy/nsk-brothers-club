import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import './gallery.css';

import data from '../../../data';
import PageWrapper from '../PageWrapper';



const Gallery: React.FC = () => {


  return (
    <PageWrapper withFooter={false}>
      <section id="gallery" className="portfolio">
        <div className="section-title">
          <h2>Gallery</h2>

        </div>
        <div className="gallery">
          {data.gallery.map((src, index) => (
            <div className="gallery-item" key={index}>
              <Zoom>
                <img src={src.url} alt={`Gallery ${index}`} />
              </Zoom>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>


  );
};

export default Gallery;
