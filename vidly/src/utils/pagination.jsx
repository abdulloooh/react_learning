import _ from "lodash";

export function Pagination(items, pageSize, currentPage) {
  const startIndex = (currentPage - 1) * pageSize;
  // const endIndex = startIndex + (pageSize - 1);
  // return _.slice(items, startIndex, endIndex + 1); //slice from lodash does not include the end
  //I could have made it easy but just for revision sake
  //
  //_.slice(array,start,end) or _.slice(array,start) => _.take()
  //to chain them together=>
  //create a loadash object which wraps an array, methods can then be chained together
  let selected = _(items).slice(startIndex).take(pageSize).value();
  if (selected.length === 0) {
    selected = _(items).slice(0).take(pageSize).value();
  }
  return selected;
}
