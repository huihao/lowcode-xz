import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { AttrInput } from '@wuhuihao/xz-common';

export default { title: 'AttrInput' };

export const Basic = () => {
  return (
    <div>
      basic demo
      <AttrInput />
    </div>
  );
};

Basic.storyName = '基础用法';
Basic.desc = 'CommoditySelector的基础用法';
