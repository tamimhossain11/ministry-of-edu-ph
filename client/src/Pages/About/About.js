import React from 'react';
import './About.css';
import missionImage from '../../resources/images/our_mission.jpg';
import visionImage from '../../resources/images/our vision.jpg';
import whatWeDoImage from '../../resources/images/what_we_do.jpg';
import contactUsImage from '../../resources/images/contact_us.jpg';

export const About = () => {
    return (
        <div className="about-us-page">
            <header className="about-us-header">
                <h1>About Us</h1>
            </header>
            <section className="about-us-content">
                <div className="about-us-section">
                    <img src={missionImage} alt="Mission" className="about-us-image" />
                    <div className="about-us-text">
                        <h2>Our Mission</h2>
                        <p>
                            Our mission is to ensure that all students in the Philippines have access to safe, modern, and
                            conducive learning environments. We strive to improve the infrastructure of schools and manage
                            facilities efficiently to support the educational needs of our nation.
                        </p>
                    </div>
                </div>
                <div className="about-us-section">
                    <div className="about-us-text">
                        <h2>Our Vision</h2>
                        <p>
                            We envision a future where every school in the Philippines meets the highest standards of
                            safety, accessibility, and sustainability, providing an environment where students and teachers
                            can thrive and excel.
                        </p>
                    </div>
                    <img src={visionImage} alt="Vision" className="about-us-image" />
                </div>
                <div className="about-us-section">
                    <img src={whatWeDoImage} alt="What We Do" className="about-us-image" />
                    <div className="about-us-text">
                        <h2>What We Do</h2>
                        <p>
                            The Ministry of Education’s School Infrastructure and Facility Management division is
                            responsible for:
                        </p>
                        <ul>
                            <li>Planning and constructing new school buildings and facilities</li>
                            <li>Renovating and maintaining existing school infrastructures</li>
                            <li>Ensuring compliance with safety and environmental standards</li>
                            <li>Managing budgets and resources efficiently</li>
                            <li>Collaborating with local and international partners to improve infrastructure quality</li>
                        </ul>
                    </div>
                </div>
                <div className="about-us-section">
                    <img src={contactUsImage} alt="Contact" className="about-us-image" />
                    <div className="about-us-text">
                        <h2>Contact Us</h2>
                        <p>
                            For more information or to get in touch with us, please contact:
                        </p>
                        <address>
                            Ministry of Education - School Infrastructure and Facility Management<br />
                            Manila, Philippines<br />
                            Email: info@education.gov.ph<br />
                            Phone: +63 2 1234 5678
                        </address>
                    </div>
                </div>
            </section>
        </div>
    );
};
