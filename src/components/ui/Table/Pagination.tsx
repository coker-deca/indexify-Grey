import React, {FC} from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

interface Props {
  currentPage: number;
  totalPages: number;
  isLoading: boolean;
  handleNextPage: (page: number) => void;
  handlePrevPage: (page: number) => void;
}
const Pagination: FC<Props> = ({
  currentPage,
  totalPages,
  isLoading,
  handlePrevPage,
  handleNextPage,
}) => {
  return (
    <div className="pagination-button-wrapper">
      <button
        className="pagination-button"
        onClick={() => handlePrevPage(currentPage)}
        disabled={currentPage === 1 || isLoading}
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
        disabled={currentPage === totalPages || isLoading}
        title="Next"
      >
        <AiFillCaretRight />
      </button>
    </div>
  );
};

export default Pagination;
