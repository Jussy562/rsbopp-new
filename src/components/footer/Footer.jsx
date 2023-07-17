import React from 'react';
import { RiMailFill } from 'react-icons/ri';
import { MdLocalPhone } from 'react-icons/md';
import { Container, Row, Col } from 'reactstrap';

function Footer() {
  return (
    <div className='flex flex-col items-center w-full '>
      <Container className='p-0'>
        <div className='w-full flex flex-col items-center gap-2 lg:gap-3'>
          <div className='flex flex-row justify-start items-center w-full'>
            <p className='text-blue-800 text-sm'>Contact us</p>
          </div>
          <Row className=' gap-4'>
            
            <div className='footer p-0'>
            <a href='#' className='d-flex flex-rows justify-content-center  align-items-center gap-2 rsbopp-footer'>
              <RiMailFill />
              <p className='m-0 p-0 '>info@rsbopp.rv.gov.ng</p>
            </a>
            
            <a href='#' className='d-flex flex-rows justify-content-center  align-items-center gap-2 rsbopp-footer'>
              <MdLocalPhone />
              <p className='m-0 p-0 '>+234 703 604 5719</p>
            </a>
           
           <p className='p-0 m-0 rsbopp-footer'>Copyright &copy; 2023</p>
        
            <a href='#' className='d-flex flex-rows justify-content-center  align-items-center gap-2 rsbopp-footer'>
              <p className='p-0 m-0 rsbopp-footer'>Terms & Conditions</p>
            </a>
           
            <a href='#' className='d-flex flex-rows justify-content-center  align-items-center gap-2'>
              <p className='m-0 p-0 rsbopp-footer'>Policy & Privacy</p>
            </a>
            </div>
            
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default Footer;