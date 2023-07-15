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
      <section className='py-4 px-3 py-md-5 px-md-5 d-flex align-items-center   hero'>
        <Container className='p-0'>
          <Row className='justify-content-center align-items-center  rsboppp-hero'>
            <Col className='m-0 p-0 d-flex justify-content-center align-items-center '>
              <h1 className=' text-center hero-text m-0 p-0'>BID OPPORTUNITIES</h1>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='p-5 md:p-10'>
      <Container className='m-0'>
  <Row className='justify-content-between gap-3'>
    <Col sm='12' md='8' className='text-center p-0'>
      <div className=' d-flex justify-content-center  align-items-center px-4 py-3 rsbopp-desc'>
        <p className=''>Presented here are forthcoming prequalifications or bid opportunities from esteemed corporate members of Rivers State PPA, accompanied by concise description that have been thoughtfully provided. Kindly click on the respective business opportunities to access comprehensive details.</p>
      </div>
    </Col>
    <Col sm='12' md='3' className='rounded shadow-lg p-0'>
      <div className='d-flex flex-column h-100 gap-1 '>
        <Button color='primary' className=' hover:bg-primary px-3 py-1 shadow-md rounded-top hover:text-white text-sm mb-1.5 w-full rounded-bottom-0  rsbopp-desc-btn'>
          Login
        </Button>
        <div className='d-flex flex-column justify-content-between align-items-center p-2 pt-4 h-100   rounded-bottom corporate-reg'>
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