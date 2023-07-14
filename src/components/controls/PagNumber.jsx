import React from 'react';
import { Button } from 'reactstrap';

function PageNumber({ pageNums, currentPage, updateCurrentPage }) {
  const pageNumHandler = () => updateCurrentPage(pageNums);

  return (
    <Button
      className={`rounded-lg d-flex justify-content-center align-items-center prevNext-num px-3 py-2 h-100 w-100 font-weight-bold ${
        currentPage === pageNums ? 'active' : ''
      }`}
      onClick={pageNumHandler}
    >
      {pageNums}
    </Button>
  );
}

export default PageNumber;







