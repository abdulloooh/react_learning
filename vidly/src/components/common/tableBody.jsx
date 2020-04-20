import React, { Component } from "react";
import _ from "lodash";

//data
//columns
class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    // if (column.path === "title")
    //   return <Link to={`/movies/${item._id}`}>{item[column.path]}</Link>;
    return _.get(item, column.path);
  };

  render() {
    const { data, columns } = this.props;

    return (
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            {columns.map((column) => (
              <td key={column.path || column.key}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
