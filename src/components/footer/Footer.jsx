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
            
            <div className='footer'>
            <a href='#' className='flex flex-row items-center gap-2 text-blue-800 text-sm'>
              <RiMailFill />
              <p>info@rsbopp.rv.gov.ng</p>
            </a>
            
            <a href='#' className='flex flex-row items-center gap-2 text-blue-800 text-sm'>
              <MdLocalPhone />
              <p>+234 703 604 5719</p>
            </a>
           
           <p className='text-blue-800 font-light text-sm'>Copyright &copy; 2023</p>
        
            <a href='#' className='flex flex-row items-center gap-2 text-blue-800 text-sm'>
              <p>Terms & Conditions</p>
            </a>
           
            <a href='#' className='flex flex-row items-center gap-2 text-blue-800 text-sm'>
              <p>Policy & Privacy</p>
            </a>
            </div>
            
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default Footer;