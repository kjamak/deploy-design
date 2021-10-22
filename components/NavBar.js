import React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import styled from 'styled-components';
import { FlexRowWrapper } from './common/FlexRowWrapper';
import { Icon } from './common/Icon';
import Link from 'next/link';

function NavBar({ showSideBar, setShowSideBar }) {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col style={{ height: '70px' }}>
            <RowWrapper justifyContent="space-between">
              <Link href="/">
                <Logo>
                  <LogoImage src="/assets/logo.svg" />
                  JSpreadsheets
                </Logo>
              </Link>
              <span>Best JavaScript data grids</span>
            </RowWrapper>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}

export default NavBar;

const Wrapper = styled.div`
  background-color: #1e212a;
  border-radius: 0 0 8px 8px;
  height: 70px;
`;

const LogoImage = styled.img`
  width: 35px;

  filter: drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.1));
  margin-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 28px;
  color: white;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;

  :hover {
    cursor: pointer;
  }
`;

const RowWrapper = styled(FlexRowWrapper)`
  height: 100%;
  color: white;

  font-family: 'Roboto', sans-serif;

  span {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
