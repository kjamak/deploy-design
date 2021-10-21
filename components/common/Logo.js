import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { FlexRowWrapper } from './FlexRowWrapper';
import { Heading } from './Typography';

function Logo({ small }) {
  return (
    <Wrapper>
      <Link href="/">
        <FlexRowWrapper marginTop="90px" justifyContent="center">
          <LogoImage src="/assets/logo.svg" alt="Logo" />
          <Heading marginLeft="10px" level={1}>
            JSpreadsheets
          </Heading>
        </FlexRowWrapper>
      </Link>
    </Wrapper>
  );
}

export default Logo;

const LogoImage = styled.img`
  width: 47px;
  height: 47px;

  filter: drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.1));
`;

const Wrapper = styled.div`
  :hover {
    cursor: pointer;
  }
`;
