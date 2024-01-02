import React from 'react';
import { Select } from 'antd';

const SelectField = ({ options, placeholder }) => (
  <Select
    showSearch
    style={{
      width: 370,
      height: 45,
      marginTop: 20,
    }}
    placeholder={placeholder}
    optionFilterProp="children"
    filterOption={(input, option) => (option?.label ?? '').includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    options={options}
  />
);

export default SelectField;
