import React from "react";
// import _ from "loadash";

const Paginate = (props) => {
  const { pageSize, itemsCount } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  _.range(1, pagesCount);
  return (
    <nav>
      <ul className="pagination">
        <li className="page-item active">
          <a className="page-link">1</a>
        </li>
      </ul>
    </nav>
  );
};

export default Paginate;
