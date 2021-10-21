import moment from 'moment';
import React from 'react';
import styled, { useTheme } from 'styled-components';
import { Button, SecondaryButton } from './common/Button';
import { FlexRowWrapper } from './common/FlexRowWrapper';
import { RowWithLine } from './common/RowWithLine';
import { Heading, Text } from './common/Typography';
import Resource from './Resource';
import Resources from './Resources';
import StatsOnGithub from './StatsOnGithub';
import TrendChart from './TrendChart';
function LibraryStats({ library, trends }) {
  const { colors } = useTheme();

  return (
    <>
      <StatsOnGithub github={library.github} />
      <Info>
        <li>
          <Text>License: {library.licenseType}</Text>
        </li>
        <li>
          <Text>Author: {library.author}</Text>
        </li>
        <li>
          <Text>
            Last update:
            {moment(library.github.lastUpdate).format('DD MMM YYYY')}
          </Text>
        </li>
      </Info>
      <FlexRowWrapper marginTop="50px">
        <a
          href={`https://github.com/${library.repo}`}
          target="_blank"
          rel="nofollow"
          style={{ width: '60%', marginRight: '5px' }}
        >
          <SecondaryButton>View on Github</SecondaryButton>
        </a>
        <a
          href={library.examples}
          target="_blank"
          rel="nofollow"
          style={{ width: '40%', marginRight: '5px' }}
        >
          <Button>Demo</Button>
        </a>
      </FlexRowWrapper>
      <RowWithLine justifyContent="center">
        <Heading textAlign="center" marginTop="55px" level={3}>
          RESOURCES
        </Heading>
      </RowWithLine>
      <Resources library={library} />
      <RowWithLine justifyContent="center">
        {trends?.stars && trends?.forks && trends?.issues ? (
          <Heading textAlign="center" marginTop="25px" level={3}>
            TRENDS
          </Heading>
        ) : (
          <Heading textAlign="center" marginTop="25px" level={3}>
            LOADING TRENDS
          </Heading>
        )}
      </RowWithLine>
      <ChartWrapper>
        <TrendChart
          labels={trends?.stars?.days}
          label="Github Stars"
          chartData={trends?.stars?.data}
        />
      </ChartWrapper>
      <ChartWrapper>
        <TrendChart
          labels={trends?.forks?.days}
          label="Github Forks"
          chartData={trends?.forks?.data}
        />
      </ChartWrapper>
      <ChartWrapper>
        <TrendChart
          labels={trends?.issues?.days}
          label="Github Issues"
          chartData={trends?.issues?.data}
        />
      </ChartWrapper>
    </>
  );
}

export default LibraryStats;

const Info = styled.ul`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
  li {
    margin-bottom: 5px;
  }
`;

const ChartWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
`;
