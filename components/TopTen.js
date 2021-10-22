import React from 'react';
import { Col } from './grid-system';
import { Heading, Text } from './common/Typography';
import Link from 'next/link';
import LeaderboardItem from './LeaderboardItem';

function TopTen({ title, items }) {
  const RenderItems = items?.map((item, index) => (
    <LeaderboardItem key={index} title={item.title} slug={item.slug} />
  ));
  return (
    <Col md={4}>
      <Heading marginTop="20px" marginBottom="20px" level={2}>
        {title}
      </Heading>
      {RenderItems}
    </Col>
  );
}

export default TopTen;
