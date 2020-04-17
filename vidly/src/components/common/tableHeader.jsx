import React, { Component } from "react";

//columns: Array
//sortColumn : obj
//onSort : func
class TableHeader extends Component {
  raiseSort = (path) => {
    let order = "asc";
    if (path === this.props.sortColumn.path) {
      order = this.props.sortColumn.order === "asc" ? "desc" : "asc";
    }
    this.props.onSort({ path, order });
  };

  render() {
    const { columns } = this.props;
    return (
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={column.path || column.key}
              onClick={() => {
                this.raiseSort(column.path);
              }}
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
