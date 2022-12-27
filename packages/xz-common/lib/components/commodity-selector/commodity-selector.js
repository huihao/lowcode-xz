"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _table = _interopRequireDefault(require("antd/lib/table"));
var _react = _interopRequireDefault(require("react"));
var CommoditySelector = function CommoditySelector(props) {
  var limit = props.limit,
    dataSource = props.dataSource,
    columns = props.columns,
    style = props.style;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_table["default"], {
    dataSource: dataSource,
    columns: columns
  }));
};
CommoditySelector.displayName = 'CommoditySelector';
var _default = CommoditySelector;
exports["default"] = _default;