import React from 'react';
import styled from "styled-components";
import './Home.css'
import About from "../../Components/aboutcard/about";
import Carousel1 from '../../Components/carousel/carousel1';
import OverflowCard from '../../Components/cards/card2';



export const Home = () => {

  return (
    <div>
      <HeroSection className="light hero">
        <div className="heroInner">
          <span>
            <h1>welcome to the</h1>
            <h1> Department of Education</h1>
            <hr />
            <h3>School Infrustructure And Facilities</h3>
            <a href="#" className="btn btn-light">
              Explore Now
            </a>
          </span>
        </div>
      </HeroSection>
      <About />
      <Carousel1 />
      <OverflowCard />
    </div>

  )
}

const HeroSection = styled.section`
  position: relative; /* Add relative positioning to the HeroSection */
  background: linear-gradient(to bottom, #0a0c2c80 3rem, transparent 10rem),
    url(https://images.pexels.com/photos/133325/pexels-photo-133325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=600&dpr=1);
  background-position: center, bottom left;
  background-size: cover, cover;
  height: fit-content;
  color: #fafafc;
  margin-top: 0px;
  padding: 35rem 3rem 6rem;
  .heroInner {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
  }
  span {
    position: absolute; /* Set the position to fixed */
    left: 8%; /* Position it to the left side of the screen */
    top: 50%; /* Adjust top position if needed */
    transform: translateY(-50%);
    max-width: 100%;
    align-items: start;
  }
  h1 {
    font-weight: 900;
    font-size: clamp(2rem, 5.5vw, 3.25rem);
    line-height: 1.2;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 576px) {
    background: linear-gradient(to bottom, #0a0c2c80 3rem, transparent),
      url(https://images.pexels.com/photos/133325/pexels-photo-133325.jpeg?auto=compress&cs=tinysrgb&w=800&h=750&dpr=1);
    background-position: center, bottom left;
    background-size: cover, cover;
    align-items: flex-start;
    padding-top: 7.5rem;
    height: 75vh;
    max-height: 720px;
  }
`;
