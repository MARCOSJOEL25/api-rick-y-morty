import React from "react";

const Pagination = ({ prev, next, onPrev, onNext }) => {
  return (
    <nav>
      <ul className="pagination justify-content-center mt-3">
        {prev ? (
          <li className="page-item">
            <button className="page-link" onClick={onPrev}>
              Previous
            </button>
          </li>
        ) : null}

        {next ? (
          <li className="page-item">
            <button className="page-link" onClick={onNext}>
              Next
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Pagination;
