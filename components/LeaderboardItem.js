import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Text } from './common/Typography';

function LeaderboardItem({ title, slug }) {
  return (
    <Wrapper>
      <Link href={`/libraries/${slug}`}>
        <Text>{title}</Text>
      </Link>
    </Wrapper>
  );
}

export default LeaderboardItem;

const Wrapper = styled.div`
  :hover {
    cursor: pointer;
  }
`;
