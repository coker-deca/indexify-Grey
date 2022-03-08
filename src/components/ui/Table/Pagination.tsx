import React, {FC} from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

interface Props {
  currentPage: number;
  totalPages: number;
  handleNextPage: (page: number) => void;
  handlePrevPage: (page: number) => void;
}
const Pagination: FC<Props> = ({
  currentPage,
  totalPages,
  handlePrevPage,
  handleNextPage,
}) => {
  return (
    <div className="pagination-button-wrapper">
      <button
        className="pagination-button"
        onClick={() => handlePrevPage(currentPage)}
        disabled={currentPage === 1}
        title="prev"
      >
        <AiFillCaretLeft />
      </button>

      <span className="pagination-page-info">
        <span className="current-page">{currentPage}</span> of {totalPages}
      </span>

      <button
        className="pagination-button"
        onClick={() => handleNextPage(currentPage)}
        disabled={currentPage === totalPages}
        title="Next"
      >
        <AiFillCaretRight />
      </button>
    </div>
  );
};

export default Pagination;
