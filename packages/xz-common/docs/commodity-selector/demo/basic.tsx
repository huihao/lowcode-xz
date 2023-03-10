import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { CommoditySelector } from '@wuhuihao/xz-common';

export default { title: 'CommoditySelector' };

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];

export const Basic = () => {
  return (
    <div>
      basic demo
      <CommoditySelector type="normal" dataSource={[]} columns={[]} />
    </div>
  );
};

Basic.storyName = '基础用法';
Basic.desc = 'CommoditySelector的基础用法';
