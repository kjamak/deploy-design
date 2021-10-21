import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

function Feature({ name, url, color }) {
  return <Wrapper color={color}>{name}</Wrapper>;
}

export default Feature;

const Wrapper = styled.div`
  border: 2px solid ${({ theme, color }) => color || theme.colors.primary};
  border-radius: 50px;
  padding: 7px;
  padding-left: 8px;
  padding-right: 8px;
  margin-top: 10px;
  margin-right: 5px;
  color: ${({ theme, color }) => color || theme.colors.primary};
  font-family: 'Roboto', sans-serif;
`;
