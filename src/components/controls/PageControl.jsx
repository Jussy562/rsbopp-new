import React from 'react';
import { Button, Table } from 'reactstrap';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import PageNumber from './PagNumber';

function PageControl({ next, prev, pages, currentPage, updateCurrentPage }) {
  return (
    <div className='d-flex justify-content-end align-items-center'>
      <Button
        className='d-flex justify-content-center align-items-center bg-secondary py-2 px-3 rounded-xl mr-2 prevNext-btn'
        onClick={prev}
      >
         <FaAngleLeft />
      </Button>

      <div className='d-flex gap-1 mr-2'>
        {pages.map((page) => (
          <li className='list-unstyled' key={page}>
            <PageNumber
              pageNums={page}
              currentPage={currentPage}
              updateCurrentPage={updateCurrentPage}
            />
          </li>
        ))}
      </div>

      <Button
        className='d-flex justify-content-center align-items-center bg-dark py-2 px-3 rounded-xl text-white prevNext-btn'
        onClick={next}
      >
        <FaAngleRight />
      </Button>
    </div>
  );
}

export default PageControl;








