import React, { createElement } from 'react';
import { Input } from 'antd';

export interface AttrInputProps {
  attrName: string;
  attrKey: string;
}

const AttrInput = (props: AttrInputProps) => {
  const { attrName, attrKey } = props;
  return (
    <div>
      <div>
        {attrName}:
      </div>
      <Input key={attrKey} />
    </div>
  );
};

AttrInput.displayName = "AttrInput";

export default AttrInput;
