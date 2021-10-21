import React from 'react';
import styled from 'styled-components';
import Resource from './Resource';

function Resources({ library }) {
  return (
    <ResourcesWrapper>
      <Resource
        name="Bundlephobia"
        href={`https://bundlephobia.com/package/${library.npm}`}
      />
      <Resource
        name="Openbase"
        href={`https://openbase.com/js/${library.npm}`}
      />
      <Resource
        name="NPM"
        href={`https://www.npmjs.com/package/${library.npm}`}
      />
      <Resource
        name="CDN"
        href={`https://cdnjs.com/libraries/${library.cdn}`}
      />
    </ResourcesWrapper>
  );
}

export default Resources;

const ResourcesWrapper = styled.ul`
  color: ${({ theme }) => theme.colors.primary};

  li {
    margin-bottom: 5px;
  }
`;
