// Homescreen.js
import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import './Homescreen.css';
import Navbar from './Navbar';
import Pic1 from './assets/pic1.jpg';
import Logo1 from './assets/client-logo-1.png';
import Logo2 from './assets/client-logo-2.png';
import Logo3 from './assets/client-logo-4.png';
import Logo4 from './assets/client-logo-5.png';
import Cardpic from './assets/card-img.jpg';
import Image1 from './assets/image1.jpg';
import Image2 from './assets/image2.jpg';
import Image3 from './assets/image3.jpg';
import social1 from './assets/youtube.png';
import social2 from './assets/twiite.png';
import social3 from './assets/instagram.png';
import social4 from './assets/facebook.png';

const Homescreen = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });
  const [ref4, inView4] = useInView({ triggerOnce: true });
  const [ref5, inView5] = useInView({ triggerOnce: true });
  const [ref6, inView6] = useInView({ triggerOnce: true });
  const [ref7, inView7] = useInView({ triggerOnce: true });
  const [ref8, inView8] = useInView({ triggerOnce: true });

  const fadeIn = useSpring({ opacity: inView1 ? 1 : 0, transform: inView1 ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)' });

  return (
    <div className='landing-page'>
      <div className="parallax">
        <section className='section1'>
          <div className='overlay'></div>
          <Navbar />
          <div className='text1-con tracking-in-expand'  >
            <h1 className='text1'>Digital Agency That <br />Thrives on Your Success</h1>
            <p className='sub'>If you are looking for an agency to help you create <br /> a remarkable presence online, you’ve come to the <br /> right place. We can help you take your business to <br /> the next level.</p>
            <button className='find-out-btn'>Find Out How!</button>
          </div>
        </section>
      </div>

      <animated.section className={`section2 animated-section ${inView2 ? 'animated-section-visible slide-in-left' : ''}`} ref={ref2} style={fadeIn}>
      <div className='group1'>
          <div className='gt1'>
            <h1 className='text2'>Hire Us For</h1>
          </div>
          <div className='group2'>
            <div className='gt2'>
              <h2 className='sub2'>Design</h2>
              <p className='sub3'>Our web design team has ample years of experience in the core areas of design to build a website that you need.</p>
            </div>
            <div className='gt2'>
              <h2 className='sub2'>Development</h2>
              <p className='sub3'>Looking out for customized solutions for your websites? Our team will develop and deliver a website that’ll serve your purpose.</p>
            </div>
            <div className='gt2'>
              <h2 className='sub2'>Marketing</h2>
              <p className='sub3'>With researched digital marketing, we will ensure that new customers and clients are able to find your business.</p>
            </div>
          </div>
        </div>
      </animated.section>

      <animated.section className={`section3 animated-section ${inView3 ? 'animated-section-visible' : ''}`} ref={ref3} style={fadeIn}>
        <div className='sec-sub1'>
          <div className='about-us'>
            <h1 className='text3'>About Us</h1>
            <p className='sub4'>We are a team of 40 web experts with over 12 <br />years of experience in website building and <br /> marketing to help businesses grow online.</p>
          </div>
          <div className='mission'>
            <h2 className='text4'>Mission.</h2>
            <p className='sub5'>Our mission is to empower our clients to use the internet to its full potential by providing affordable, effective, custom design and marketing solutions.</p>
            <h2 className='text4'>Vision</h2>
            <p className='sub5'>Our vision is to become a global leader in providing the best and unique web design and marketing services to improve our client’s productivity and business strength.</p>
          </div>
        </div>
        <div className='sec-sub2'>
          <img className='picture1' src={Pic1} alt="About Us" />
        </div>
      </animated.section>

      <animated.section className={`section4 animated-section ${inView4 ? 'animated-section-visible' : ''}`} ref={ref4} style={fadeIn}>
        <div className='clients'>
          <h1 className='text5'>Clients We Worked With</h1>
          <div className='logos'>
            <img src={Logo1} alt="Client Logo 1" />
            <img src={Logo2} alt="Client Logo 2" />
            <img src={Logo3} alt="Client Logo 3" />
            <img src={Logo4} alt="Client Logo 4" />
          </div>
        </div>
        <div className='choose-text'>
          <h1 className='text6'>Why Choose Us?</h1>
          <p className='sub6'>We are the right term for your business. We have the expertise and knowledge to offer impartial advice and services at an honest price.</p>
          <p className='sub7'>With us you’ll feel heard. We listen to our client requirements and then select the right solution that fits. We care for your business as our own. We take a sincere interest in it and genuinely want to help your company reach its potential.</p>
        </div>
      </animated.section>

      <animated.section className={`section5 animated-section ${inView5 ? 'animated-section-visible' : ''}`} ref={ref5} style={fadeIn}>
        <div className='card-div'>
          <div className="card">
            <div className="card-content">
              <h2 className="card-heading">Have a Project on mind?</h2>
              <p className="card-paragraph">We can help you bring your ideas to life. Let’s talk about what we can build and raise together.</p>
              <button className="button-28" role="button">Connect with us!</button>
            </div>
            <div className="card-image">
              <img src={Cardpic} alt="Card" />
            </div>
          </div>
        </div>
        <div className='content2'>
          <h1 className='text7'>Let us together build a flourishing business</h1>
          <p className='sub8'>When connected with us, you aren’t growing your business alone. We have your back and put in our best to contribute to the growth of your entire team and organization. So, if you are looking for the right agency that’ll help you build a good online presence and bring in more conversions and revenue, we are right here!</p>
        </div>
      </animated.section>

      <animated.section className={`section6 animated-section ${inView6 ? 'animated-section-visible' : ''}`} ref={ref6} style={fadeIn}>
        <div className='grid2'>
          <p className='partner-text'>Your Trusted Partners</p>
          <div className='grid1'>
            <h1 className='text8'>Highly Motivated Team with Innovative Ideas</h1>
           
            <p className='sub9'>We love what we do and therefore come up with the best possible solutions to help you set and grow online quickly. We are your trusted partners you can count on.</p>
          </div>
        </div>
        <div className='images'>
          <img className='image-1' src={Image1} alt="Innovative Ideas" />
          <img className='image-1' src={Image2} alt="Innovative Solutions" />
          <img className='image-1' src={Image3} alt="Teamwork" />
        </div>
      </animated.section>

      <animated.section className={`section7 animated-section ${inView7 ? 'animated-section-visible' : ''}`} ref={ref7} style={fadeIn}>
        <div className='subscribe-section'>
          <h2 className="subscribe-title">Subscribe</h2>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your email" className="email-input" />
            <button className="subscribe-button">I'm interested</button>
          </div>
        </div>
      </animated.section>

      <animated.section className={`section8 animated-section ${inView8 ? 'animated-section-visible' : ''}`} ref={ref8} style={fadeIn}>
        <div className='grid3'>
          <div className='left-side'>
            <div className="navbar-logo">
              <h1 className='text10'>Logo</h1>
            </div>
            <p className='sub9'>1234 N Spring St, Los Angeles, CA 90012<br />mail@example.com</p>
          </div>
          <div className='right-side'>
            <div className='navig'>
              <ul className="navbar-links-2">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className='socials'>
              <img className='social-img' src={social1} alt="YouTube" />
              <img className='social-img' src={social2} alt="Twitter" />
              <img className='social-img' src={social3} alt="Instagram" />
              <img className='social-img' src={social4} alt="Facebook" />
            </div>
          </div>
        </div>
      </animated.section>
    </div>
  );
}

export default Homescreen;
