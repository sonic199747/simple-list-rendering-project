import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Pagination extends Component {
  render() {
    const { items, pageSize, onPageChange, currentPage } = this.props;
    const pagesCount = items / pageSize;
    var index = [];
    if (pagesCount <= 1) return null;
    for (var i = 0; i < pagesCount; i++) {
      index.push(i + 1);
    }

    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {index.map((i) => (
            <li
              className={currentPage === i ? "page-item active" : "page-item"}
              key={i}
            >
              <a className="page-link" onClick={() => onPageChange(i)}>
                {i}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
