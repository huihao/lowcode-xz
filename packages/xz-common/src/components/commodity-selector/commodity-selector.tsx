import React from 'react';
import { createElement } from 'react';
import { Table } from 'antd';

export interface CommoditySelectorProps {
  type: 'normal' | 'advanced';
  limit?: number;
  dataSource: any[];
  columns: any[];
  style?: 'object';
}

const CommoditySelector = (props: CommoditySelectorProps) => {
  const { limit, dataSource, columns, style } = props;
  return (
    <div>
      <Table dataSource={dataSource} columns={columns}></Table>
    </div>
  );
};

CommoditySelector.displayName = 'CommoditySelector';

export default CommoditySelector;
