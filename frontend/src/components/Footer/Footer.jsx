import React from 'react'
import './footer.css'
import { Container,Col,Row,ListGroup,ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'


const quick__Links =[
  {
      path:'/home',
      display:'Home'
  },
  {
      path:'/about',
      display:'About'
  },
  {
      path:'/tours',
      display:'Tours'
  }
]

const quick__Links2 =[
{
    path:'/gallery',
    display:'Gallery'
},
{
    path:'/login',
    display:'Login'
},
{
    path:'/register',
    display:'Register'
}
]


const Footer = () => {
 
  const year = new Date().getFullYear();  
  return (
    <footer className='footer'>
      <Container>
      <Row>
        <Col lg='3'>
          <div className="logo">
            <img src={logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
           <div className="social__links d-flex align-items-center gap-4">
            <span>
              <Link to='#'><i class='ri-youtube-line'></i></Link>
            </span>
            <span>
              <Link to='#'><i class='ri-github-line'></i></Link>
            </span>
            <span>
              <Link to='#'><i class='ri-facebook-circle-line'></i></Link>
            </span>
            <span>
              <Link to='#'><i class='ri-instagram-line'></i></Link>
            </span>
           </div>
          </div>  
        </Col>  
        <Col lg='3'>
        <h5 className='footer__link-title'>Discover</h5>  
        <ListGroup className='footer__quick-links'>
      {
        quick__Links.map((item,index)=>(
          <ListGroupItem key={index} tag='a' className='ps-0 border-0' href={item.path}>
           <Link to={item.path}>{item.display}</Link>
          </ListGroupItem>
        ))
      }
        </ListGroup>
        </Col> 
        <Col lg='3'>
        <h5 className='footer__link-title'>Quick Links</h5>  
        <ListGroup className='footer__quick-links'>
      {
        quick__Links2.map((item,index)=>(
          <ListGroupItem key={index} tag='a' className='ps-0 border-0' href={item.path}>
           <Link to={item.path}>{item.display}</Link>
          </ListGroupItem>
        ))
      }
        </ListGroup>
        </Col> 
        <Col lg='3'>
        <h5 className='footer__link-title'>Contact</h5>  
        <ListGroup className='footer__quick-links'>
      
          <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-3' >
            <h6>
              <span className='mb-0 d-flex align-items-center gap-2'><i class="ri-map-pin-line"></i>Address:</span>
            </h6>
            <p className='mb-0'>Tripoli, Lebanon</p>
          </ListGroupItem>
          <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-3' >
            <h6>
              <span className='mb-0 d-flex align-items-center gap-2'><i class="ri-mail-line"></i>Email:</span>
            </h6>
            <p className='mb-0'>ahmadhss366@gmail.com</p>
          </ListGroupItem><ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-3' >
            <h6>
              <span className='mb-0 d-flex align-items-center gap-2'><i class="ri-phone-fill"></i>Address:</span>
            </h6>
            <p className='mb-0'>+96176178123</p>
          </ListGroupItem>
        </ListGroup>
        </Col>   
        <Col lg='12' className='text-center pt-5'>
          <p className='copyright'>Copyright {year}, Developed by Ahmad Hassoun. All rights reserved</p>
        </Col>  
      </Row>
    </Container>
    </footer>
  )
}

export default Footer