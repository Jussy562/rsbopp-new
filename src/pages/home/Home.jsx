import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Navbar from '../../components/navbar/Navbar';
import Table from '../../components/table/table';
import Footer from '../../components/footer/Footer';

function Home() {
  return (
    <div>
      <header className='shadow-lg'>
        <Navbar />
      </header>
      <section className='py-8 px-5 md:py-12 md:px-10  hero'>
        <Container>
          <Row className='justify-content-center'>
            <Col>
              <h1 className=' text-center hero-text'>BID OPPORTUNITIES</h1>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='p-5 md:p-10'>
      <Container className='m-0'>
  <Row className=''>
    <Col sm='12' md='8' className='text-center'>
      <div className=' h-48 px-10 py-11 rsbopp-desc'>
        <p className=''>Presented here are forthcoming prequalifications or bid opportunities from esteemed corporate members of Rivers State PPA, accompanied by concise description that have been thoughtfully provided. Kindly click on the respective business opportunities to access comprehensive details.</p>
      </div>
    </Col>
    <Col sm='12' md='4' className='rounded shadow-lg p-0'>
      <div className='d-flex flex-column h-48'>
        <Button color='primary' className=' hover:bg-primary px-3 py-1 shadow-md rounded-top hover:text-white text-sm mb-1.5 w-full rsbopp-desc-btn'>
          Login
        </Button>
        <div className='d-flex flex-column justify-content-between align-items-center p-6 pt-11  rounded-bottom corporate-reg'>
          <p className='font-weight-bold text-sm text-center'>Contractor Registration</p>
          <Button color='primary' className='btn-primary hover:bg-primary px-3 py-1 shadow-md rounded-xl hover:text-white text-sm mb-1.5 w-full'>
            Login
          </Button>
        </div>
      </div>
    </Col>
  </Row>
</Container>
</section>
      <section className='p-5 md:p-10'>
        <Container className='p-0'>
          <Table />
        </Container>
      </section>
      <footer className='p-5 md:p-10'>
        <Footer />
      </footer>
      </div>
  );
}

export default Home;