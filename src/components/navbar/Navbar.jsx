import React from 'react';
import { RiLoginBoxFill, RiMailFill } from 'react-icons/ri';
import { TbTriangleInvertedFilled } from 'react-icons/tb';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdLocalPhone, MdLocationOn } from 'react-icons/md';
import { Container, Row, Col, Button } from 'reactstrap';
import rsbopp from '/rsbopp.png';
import rsvv from '/rsvv.png';

function Navbar() {
  return (
    <div>
      <div className=' py-3 px-5 rsbopp-nav'>
        <Container fluid className='p-0 m-0'>
          <Row className='justify-content-between align-items-center'>
            <Col xs={12} md={6} className='d-flex justify-content-start align-items-center rsbopp-sign'>
              <div className='d-flex gap-2 text-white justify-content-between  align-items-center cursor-pointer rsbopp-login'>
                <RiLoginBoxFill className='text-white font-extrabold text-3xl signing-icon' />
                <p className='text-sm rsbopp-login-text'>Sign In</p>
              </div>
              <div>
                <Button color='white' className='get-started hover:bg-blue-300 px-3 py-1 shadow-md rounded-4 text-black hover:text-white text-sm'>
                  Get Started
                </Button>
              </div>
            </Col>
            <Col xs={12} md={6} className='d-flex flex-rows justify-content-end align-items-center' >
              <div className='d-flex justify-content-end align-items-center rsbopp-search rounded-5 p-1'>
              <div className='text-lg text-gray-300'>
                <AiOutlineSearch />
              </div>
              <input type='search' id='search' className='p-0 border-0 rounded-lg bg-none focus:ring-none focus:border-none focus:outline-none dark:bg-none dark:border-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-none dark:focus:border-none' placeholder='Category' />
              <div className='pl-2 border border-0 border-r-0 border-b-0 border-t-0 text-gray-300'>
                <TbTriangleInvertedFilled />
              </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className=' py-3 px-5'>
        <Container fluid className='p-0 m-0'>
          <Row className='justify-content-between align-items-center w-100'>
            <Col  className='d-flex justify-content-between align-items-center mb-6 w-100'>
              <div>
                <img src={rsbopp} alt='rsbopp' />
              </div>
              <div>
                <img src={rsvv} alt='rsv' className='w-28' />
              </div>
            </Col>
            
          </Row>
          <Row className='justify-content-center align-items-center w-100'>
          <Col  className='d-flex justify-content-center align-items-center rsbopp-nav-contact gap-5 '>
              <a href='#' className='d-flex justify-content-center align-items-center gap-2 text-blue-800 rsbopp-footer'>
                <RiMailFill />
                <p className='p-0 m-0'>info@rsbopp.rv.gov.ng</p>
              </a>
              <a href='#' className='d-flex justify-content-center   align-items-center gap-2 text-blue-800 rsbopp-footer'>
                <MdLocationOn />
                <p className='p-0 m-0'>Water Line House, 169 Aba Road, Port Harcourt</p>
              </a>
              <a href='#' className='d-flex align-items-center justify-content-center  gap-2 text-blue-800 rsbopp-footer'>
                <MdLocalPhone />
                <p className='p-0 m-0'>+234 703 604 5719</p>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Navbar;