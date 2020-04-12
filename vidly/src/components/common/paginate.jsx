import React from "react";
import _ from "lodash";

const Paginate = (props) => {
  const { pageSize, itemsCount, currentPage, onPageChange } = props;

  const pagesCount = Math.ceil(itemsCount / pageSize); //ceil ceils the value to the nearest greater whole number

  if (pagesCount === 1) return null;

  const pages = _.range(1, pagesCount + 1);
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => {
          return (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <a
                className="page-link"
                onClick={() => {
                  onPageChange(page);
                }}
              >
                {page}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Paginate;
