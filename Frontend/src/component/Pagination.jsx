import React from 'react';

const Pagination = ({ totalPosts, postsPerPage, paginate, nextPage, prevPage, currentPage }) => {
  const pageNumbers = [];

  // Create an array of page numbers
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination flex justify-center items-center space-x-2 mt-8 p-3 w-full">
      {/* Previous Button */}
      <button                                  
        onClick={prevPage}
        className={`px-2 py-2 rounded-xl border transition-all text-sm md:text-base 
                  ${currentPage === 1 
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
                    : "bg-[#4D44B5] text-white border-[#4D44B5] hover:bg-[#4D44B5]"}`}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {/* Page Numbers */}
      <div className="flex overflow-x-auto space-x-1 scrollbar-hide">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`px-2 py-2 rounded-full transition-all border text-sm md:text-base 
                      ${currentPage === number
                        ? "bg-[#4D44B5] text-white border-[#4D44B5]"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-[#4D44B5] hover:text-white"}`}
          >
            {number}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={nextPage}
        className={`px-2 py-2 rounded-xl border transition-all text-sm md:text-base 
                  ${currentPage === pageNumbers.length 
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
                    : "bg-[#4D44B5] text-white border-[#4D44B5] hover:bg-[#4D44B5]"}`}
        disabled={currentPage === pageNumbers.length}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
