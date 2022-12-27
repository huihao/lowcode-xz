import _Table from "antd/es/table";
import React from 'react';
var CommoditySelector = function CommoditySelector(props) {
  var limit = props.limit,
    dataSource = props.dataSource,
    columns = props.columns,
    style = props.style;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_Table, {
    dataSource: dataSource,
    columns: columns
  }));
};
CommoditySelector.displayName = 'CommoditySelector';
export default CommoditySelector;