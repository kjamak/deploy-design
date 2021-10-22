import React from 'react';
import { Col } from './grid-system';
import Link from 'next/link';
import { Card } from './common/Card';
import { Heading, Text } from './common/Typography';
import { FlexRowWrapper } from './common/FlexRowWrapper';
import styled, { useTheme } from 'styled-components';
import { Icon } from './common/Icon';
import Feature from './Feature';

function LibraryCard({ library }) {
  const { colors } = useTheme();

  const renderFrameworks = library?.framework.map((item, index) => (
    <Icon key={index} className={item} />
  ));

  return (
    <Link href={`/libraries/${library?.slug}`}>
      <Col lg={6} xl={4} style={{ marginTop: '10px' }}>
        <Card>
          <TopCard>
            <FlexRowWrapper justifyContent="space-between">
              <Heading textAlign="center" level="3">
                {library?.title}
              </Heading>

              <a
                onClick={() => {
                  window.open(`//github.com/${library.repo}`, '_blank');
                }}
              >
                <Icon className="github-icon" />
              </a>
            </FlexRowWrapper>
            <Text marginTop="20px">
              {library?.description?.length > 120
                ? `${library.description.substring(0, 120)}...`
                : library?.description}
            </Text>
          </TopCard>
          <BottomCard>
            <FlexRowWrapper justifyContent="space-between" padding="20px">
              <FrameworksWrapper>{renderFrameworks}</FrameworksWrapper>
              <StatWrapper>
                <Stat
                  onClick={() => {
                    window.open(
                      `//github.com/${library.repo}/stargazers`,
                      '_blank'
                    );
                  }}
                >
                  <Icon color={colors.primary} className="star-icon" />
                  <Text marginLeft="5px">{library?.github.stars}</Text>
                </Stat>
                <Stat
                  onClick={() => {
                    window.open(
                      `//github.com/${library.repo}/issues`,
                      '_blank'
                    );
                  }}
                >
                  <Icon className="issue-icon" />
                  <Text marginLeft="5px">{library?.github.issues}</Text>
                </Stat>
              </StatWrapper>
            </FlexRowWrapper>
          </BottomCard>
        </Card>
      </Col>
    </Link>
  );
}

export default LibraryCard;

const Stat = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const TopCard = styled.div`
  padding: 29px;
  flex: 1;
`;

const BottomCard = styled.div`
  border-top: 2px solid #353a52;
  background-color: #171a23;
  border-radius: 0 0 8px 8px;
  height: 66px;
`;

const FrameworksWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StatWrapper = styled.div`
  display: flex;
  align-items: center;
`;
