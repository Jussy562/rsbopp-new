import React, { useState } from 'react';
import SampleData from './tableData';
import { RiFolderTransferFill } from 'react-icons/ri';
import { Button, Table } from 'reactstrap';
import PageControl from '../controls/PageControl';

function TableComponent() {
  const data = SampleData;
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 4;
  const numOfTotalPages = Math.ceil(data.length / usersPerPage);
  const pages = [...Array(numOfTotalPages + 1).keys()].slice(1);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const visibleData = data.slice(indexOfFirstUser, indexOfLastUser);

  const prevPageHandler = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const nextPageHandler = () => {
    if (currentPage !== numOfTotalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="media h-auto">
      <div className="media-body w-full">
        <div className='d-flex flex-row justify-start align-items-center'>
          <Button color="primary" className="p-2 text-sm rounded-none">Bids Open for Bidding</Button>
          <Button color="danger" className="p-2 d-flex flex-row align-items-center justify-content-center gap-2 text-sm rounded-none">
            Closed Bids <RiFolderTransferFill />
          </Button>
        </div>

        <div className='table-container w-full text-black'>
          <Table bordered className="p-0 md:p-4 bg-white">
            <thead>
              <tr className='text-center'>
                <th className='text-sm'>Mda</th>
                <th className='text-sm'>Bid #</th>
                <th className='text-sm'>Bid Name</th>
                <th className='text-sm'>Date Posted</th>
                <th className='text-sm'>Deadline</th>
              </tr>
            </thead>
            <tbody>
              {visibleData.map((item, index) => (
                <tr key={index} className='text-start data-row'>
                  <td className='text-sm'>
                    <p>{item.mda}</p>
                  </td>
                  <td className='text-sm'>
                    <p>{item.bid}</p>
                  </td>
                  <td className='text-sm'>
                    <p>{item.bidName}</p>
                  </td>
                  <td className='text-sm'>
                    <p>{item.date}</p>
                  </td>
                  <td className='text-sm'>
                    <p>{item.Deadline}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

       {/* pagination */}
       <div className='w-full d-flex flex-row justify-content-center align-items-center'>
          <PageControl
            next={nextPageHandler}
            prev={prevPageHandler}
            pages={pages}
            currentPage={currentPage}
            updateCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}

export default TableComponent;