import React from 'react';
import styled from 'styled-components';
import { Text } from './common/Typography';

function Footer() {
  return (
    <Wrapper>
      <Text>© 2021 JSpreadsheets.com</Text>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.div`
  margin-top: 40px;
  border-top: 1px solid #353a52;
  padding-top: 20px;
  margin-bottom: 20px;
`;
