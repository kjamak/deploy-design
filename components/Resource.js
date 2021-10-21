import React from 'react';
import { Text } from './common/Typography';

function Resource({ href, name }) {
  return (
    <li>
      <a href={href} target="_blank" rel="nofollow">
        <Text>{name}</Text>
      </a>
    </li>
  );
}

export default Resource;
