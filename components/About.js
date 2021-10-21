import React from 'react';
import { Col } from 'react-grid-system';
import { submitAnotherURL } from '../data/SUBMITANOTHER';
import { Heading, Text } from './common/Typography';

function About() {
  return (
    <Col md={4}>
      <Heading marginTop="20px" marginBottom="20px" level={2}>
        About this site
      </Heading>
      <Text>
        Here, at jspreadsheets.com we share with you a list of hand-picked data
        grids that we like the most. Some of them are open-source, some others
        purely commercial. You choose which fits your project better. Make a
        pull request on GitHub.
      </Text>
      <Heading marginBottom="20px" marginTop="20px" level={3}>
        Want to suggest a new project?
      </Heading>
      <Text>
        <a href={submitAnotherURL} target="_blank" rel="nofollow">
          Add new library
        </a>{' '}
        on GitHub.
      </Text>
    </Col>
  );
}

export default About;
