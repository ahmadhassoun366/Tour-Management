import React from 'react'
import './common-section.css';
import { Container,Col,Row} from 'reactstrap';

const CommonSection = ({title}) => {
  return (
    <section className='common__section'>
        <Container>
          <Row>
            <Col lg="12">
              <h1 className="section-title">{title}</h1>
            </Col>
          </Row>
        </Container>
    </section>
  )
}

export default CommonSection