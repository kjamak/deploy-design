import React from 'react';
import styled, { useTheme } from 'styled-components';
import { FlexRowWrapper } from './common/FlexRowWrapper';
import { Icon } from './common/Icon';
import { RowWithLine } from './common/RowWithLine';
import { Heading, Text } from './common/Typography';

function StatsOnGithub({ github }) {
  const { colors } = useTheme();
  return (
    <>
      <Heading textAlign="center" marginBottom="15px" level={3}>
        STATS ON GITHUB
      </Heading>
      <RowWithLine justifyContent="center">
        <Stat>
          <Icon color={colors.primary} className="star-icon" />
          <Text marginLeft="5px">{github.stars}</Text>
        </Stat>
        <Stat>
          <Icon className="branch-icon" />
          <Text marginLeft="5px">{github.forks}</Text>
        </Stat>
        <Stat>
          <Icon className="github-icon" />
          <Text marginLeft="5px">{github.issues}</Text>
        </Stat>
      </RowWithLine>
    </>
  );
}

export default StatsOnGithub;

const Stat = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;
