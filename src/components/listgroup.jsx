import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class ListGroup extends Component {
  render() {
    const { items, onItemSelect, selectedGenre } = this.props;
    return (
      <ul className="list-group">
        {items.map((g) => (
          <li
            key={g._id}
            onClick={() => onItemSelect(g)}
            className={
              g === selectedGenre ? "list-group-item active" : "list-group-item"
            }
          >
            {g.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default ListGroup;
