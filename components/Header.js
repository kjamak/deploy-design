import React from 'react';
import { Col, Row } from './grid-system';
import Logo from './common/Logo';
import { Heading, Text } from './common/Typography';
import Link from 'next/link';
function Header() {
  return (
    <Row justify="center">
      <Col md={8} lg={5}>
        <Logo />
        <Text
          marginTop="40px"
          textAlign="center"
          fontSize="1.75rem"
          marginBottom="80px"
        >
          Browse through a list of best data grids for <a>React</a>,{' '}
          <Link href="/framework/angular">Angular</Link>,{' '}
          <Link href="/framework/vue">Vue</Link>, and plain{' '}
          <Link href="/framework/javascript-typescript">JavaScript</Link>.
        </Text>
      </Col>
    </Row>
  );
}

export default Header;
