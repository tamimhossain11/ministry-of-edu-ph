import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';

// Importing images from the local resources folder
import image1 from '../../resources//images/c1.jpg';
import image2 from '../../resources/images/c2.jpg';
import image3 from '../../resources/images/c3.jpg';

export default function Carousel1() {
  return (
    <div style={{ backgroundColor: '#E8EAF6', width: '100%', margin: '0 auto', marginTop: '50px', padding: '20px 0', paddingBottom: '70px' }}>
      {/* Wrapper with background color, width, and margin-top */}
      <MDBCarousel showIndicators showControls fade className="mx-auto" style={{ marginTop: '-90px' }}>
        {/* Centered container with the carousel */}
        <MDBCarouselItem itemId={1}>
          <img src={image1} className='d-block w-80 mx-auto' alt='...' />
          <MDBCarouselCaption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={2}>
          <img src={image2} className='d-block w-80 mx-auto' alt='...' />
          <MDBCarouselCaption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={3}>
          <img src={image3} className='d-block w-80 mx-auto' alt='...' />
          <MDBCarouselCaption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarousel>
    </div>
  );
}
