import React from 'react';
import styled from 'styled-components';

function SelectInput({ value, setValue, options }) {
  return (
    <Select value={value} onChange={(e) => setValue(e.target.value)}>
      {options.map((option, index) => (
        <Option key={index} value={option.value}>
          {option.placeholder}
        </Option>
      ))}
    </Select>
  );
}

export default SelectInput;

const Select = styled.select`
  width: ${({ width }) => width || '100%'};
  height: 40px;
  transition: all 0.3s;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  border-radius: 8px;
  background-color: ${({ theme, backgroundColor, loading }) =>
    loading ? theme.colors.background : backgroundColor || theme.colors.card};
  padding-left: 15px;
  background-image: url('/assets/icons/dropdown.svg');
  background-repeat: no-repeat;
  border: none;
  background-size: 16px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  background-position: 90% 50%;
`;

const Option = styled.option``;
