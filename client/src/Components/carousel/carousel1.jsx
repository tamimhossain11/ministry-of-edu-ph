import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';

export default function Carousel1() {
  return (
    <div  style={{ backgroundColor: '#E8EAF6', width: '100%', margin: '0 auto', marginTop: '50px', padding: '20px 0',paddingBottom:'70px' }}>
      {/* Wrapper with background color, width, and margin-top */}
      <MDBCarousel showIndicators showControls fade className="mx-auto" style={{marginTop:'-90px'}}>
        {/* Centered container with the carousel */}
        <MDBCarouselItem itemId={1}>
          <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg' className='d-block w-80 mx-auto' alt='...' />
          <MDBCarouselCaption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={2}>
          <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg' className='d-block w-80 mx-auto' alt='...' />
          <MDBCarouselCaption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={3}>
          <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg' className='d-block w-80 mx-auto' alt='...' />
          <MDBCarouselCaption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarousel>
    </div>
  );
}
