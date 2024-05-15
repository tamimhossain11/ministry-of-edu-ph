import React, { useEffect } from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';
import './about.css'
import 'bootstrap/dist/css/bootstrap.css';
import CountUp from 'react-countup';


const About = () => {
  return (
    <div>
      <div className="container-xxl py-6" id="about">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="d-flex align-items-center mb-5">
                <div className="years flex-shrink-0 text-center me-4">
                  <h1 className="display-1 mb-0">
                  <CountUp 
                  start={0} end={15} delay={5} duration={2}
                  /> 
                  </h1>
                  <h5 className="mb-0">Years</h5>
                </div>
                <h3 className="lh-base mb-0">
                  Goal to provide better Education facility.
                </h3>
              </div>
              <p className="mb-4">
                Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No
                stet est diam rebum amet diam ipsum. Clita clita labore, dolor
                duo nonumy clita sit at, sed sit sanctus dolor eos.
              </p>
              <p className="mb-3 d-flex align-items-center">
                <FaRegCheckCircle className="text-primary me-3" />
                Infrustructure
              </p>
              <p className="mb-3 d-flex align-items-center">
                <FaRegCheckCircle className="text-primary me-3" />
                On going projects
              </p>
              <p className="mb-3 d-flex align-items-center">
                <FaRegCheckCircle className="text-primary me-3" />
                Modern School Rooms
              </p>
              <a className="btn btn-primary py-3 px-5 mt-3" href="">
                Read More
              </a>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="row g-3 mb-4">
                <div className="col-sm-6">
                  <img
                    className="img-fluid rounded"
                    src="https://i.imgur.com/fHJAknx.jpg"
                    alt=""
                  />
                </div>
                <div className="col-sm-6">
                  <img
                    className="img-fluid rounded"
                    src="https://i.imgur.com/66QcXpX.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <h5 className="border-end pe-3 me-3 mb-0">Schools Under Construction</h5>
                <h2
                  className="text-primary fw-bold h2 mb-0"
                  data-toggle="counter-up"
                >
                 <CountUp 
                  start={50} end={78} delay={5} duration={2}
                  /> 
                </h2>
              </div>
              <p className="mb-4">
                Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No
                stet est diam amet diam ipsum clita labore dolor duo clita.
              </p>
              <div className="d-flex align-items-center mb-3">
                <h5 className="border-end pe-3 me-3 mb-0">
                  Running projects
                </h5>
                <h2
                  className="text-primary h2 fw-bold mb-0"
                  data-toggle="counter-up"
                >
                 <CountUp 
                  start={90} end={120} delay={5} duration={2}
                  />  
                </h2>
              </div>
              <p className="mb-0">
                Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No
                stet est diam amet diam ipsum clita labore dolor duo clita.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;