import React from 'react';
import { Col } from './grid-system';
import styled from 'styled-components';
import { submitAnotherURL } from '../data/SUBMITANOTHER';
import { Card } from './common/Card';
import { Heading, Text } from './common/Typography';

function SubmitAnother() {
  return (
    <Col lg={6} xl={4} style={{ marginTop: '10px' }}>
      <a href={submitAnotherURL} target="_blank" rel="nofollow">
        <Card>
          <TopCard>
            <Add>+</Add>
            <Text fontSize="28px" color="#6C7593" textAlign="center">
              Submit another
            </Text>
          </TopCard>
        </Card>
      </a>
    </Col>
  );
}

export default SubmitAnother;

const TopCard = styled.div`
  padding: 29px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Add = styled.div`
  color: #6c7593;
  font-size: 80px;
  font-family: 'Roboto', sans-serif;
`;
