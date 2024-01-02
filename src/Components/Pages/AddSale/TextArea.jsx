import React from 'react';
import { Input } from 'antd';
const { TextArea } = Input;

const MultiLineField = ({ textAreas }) => (
  <>
    {textAreas.map((textArea, index) => (
      <div key={index}>
        <TextArea
          showCount={textArea.showCount || false}
          maxLength={textArea.maxLength || 100}
          onChange={textArea.onChange || (() => {})}
          placeholder={textArea.placeholder || 'Type here...'}
          style={{
            height: textArea.height || 45,
            resize: textArea.resize || 'none',
            width: textArea.width || 370,
            marginTop: textArea.marginTop || 20,
          }}
        />
        <br />
        <br />
      </div>
    ))}
  </>
);

export default MultiLineField;
