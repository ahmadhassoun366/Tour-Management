import React from 'react'
import "../styles/home.css"
import {Container,Row,Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import Subtitle from '../shared/Subtitle';
import worldImg from '../assets/images/world.png'
import experience from '../assets/images/experience.png'
import SearchBar from '../shared/SearchBar';
import ServicesList from '../services/ServicesList';
import FeaturedToursList from '../components/FeaturedTours/FeaturedToursList';
import MasonryImagesGallery from '../components/image-gallery/MasonryImagesGallery'
import Testimonial from '../components/Testimonial/Testimonial';
import Newsletter from '../shared/Newsletter';

const Home = () => {
  return <>

  {/* _____________Hero Section Start ______________ */}

  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={'Know Before You Go'}/>
                <img src={worldImg} alt=""/>
               </div>
               <h1>Traveling opens the door to creating <span className='highlight'>memories</span> </h1>
                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam ipsum atque placeat, distinctio neque laudantium vitae, quod at optio sint tempore nulla dignissimos asperiores assumenda libero iste aperiam possimus molestiae!</p>
          </div>
        </Col>
        <Col lg='2'>
          <div className='hero__img-box'>
            <img src={heroImg} alt=''/>
          </div>
        </Col>
        <Col lg='2'>
          <div className='hero__img-box mt-4'>
            <video src={heroVideo} alt='' controls/>
          </div>
        </Col><Col lg='2'>
          <div className='hero__img-box mt-5'>
            <img src={heroImg02} alt=''/>
          </div>
        </Col>
        <SearchBar/>  
      </Row>
    </Container>
  </section>
    {/* _____________Hero Section end ______________ */}
  <section>
    <Container>
      <Row>
        <Col lg='3'>
        <h2 className="services__subtitle">What we serve</h2>
        <h2 className='services__title'>We offer out best services</h2>
        </Col>
        <ServicesList/>
      </Row>
    </Container>
  </section>

  {/* ___________________featured Section Start ______________ */}
  
  <section>
    <Container>
      <Row>
        <Col lg='12'>
          <Subtitle subtitle={'Explore'}/>
          <h2 className="featured__tour-title">Our featured tours</h2>
        </Col>
        <FeaturedToursList/>
      </Row>
    </Container>
  </section>
  {/* ___________________featured Section end ______________ */}

  {/* ___________________Experience Section Start ______________ */}
  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="experience__content">
            <Subtitle subtitle={"Experience"}/>
            <h2>
              With our all experience <br/> we will serve you
            </h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br/>
              Impedit sapiente omnis tempora, amet consectetur  elit.</p>
          </div>
          <div className="counter__wrapper d-flex align-items-center gap-5">
            <div className="counter__box">
              <span className="counter__number">12k+</span>
              <h6>Successfull t rip</h6>
            </div>
            <div className="counter__box">
              <span className="counter__number">2k+</span>
              <h6>Regular clients</h6>
            </div>
            <div className="counter__box">
              <span className="counter__number">15</span>
              <h6>Years experience</h6>
            </div>
          </div>
        </Col>
        <Col lg='6'> 
        <div className="experience__img">
          <img src={experience} alt="" />
        </div>
        </Col>
      </Row>
    </Container>
  </section>
  {/* ___________________Experience Section end ______________ */}
  
  {/* ___________________Gallery Section start ______________ */}
  <section>
  <Container>
      <Row>
        <Col lg='12'>
          <Subtitle subtitle={'Gallery'}/>
          <h2 className="gallery__title">Visit our customers tour gallery</h2>
        </Col> 
        
        <Col lg='12 mt-4'>
        <MasonryImagesGallery/>
        </Col>
        
      </Row>
    </Container>
  </section>
  {/* ___________________Gallery Section end ______________ */}
  {/* ___________________Testominal Section start ______________ */}
  <section>
  <Container>
      <Row>
        <Col lg='12'>
          <Subtitle subtitle={'Fans Love'}/>
          <h2 className="testimonial__title">What our fans say about us</h2>
        </Col> 
        
        <Col lg='12 mt-4'>
        <Testimonial/>
        </Col>
        
      </Row>
    </Container>
  </section>
  {/* ___________________Testominal Section end ______________ */}
  <Newsletter/>
  </>
}

export default Home