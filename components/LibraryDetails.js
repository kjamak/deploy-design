import React from 'react';
import styled, { useTheme } from 'styled-components';
import { Icon } from './common/Icon';
import { Heading, Text } from './common/Typography';
import parse from 'html-react-parser';
import { FlexRowWrapper } from './common/FlexRowWrapper';
import Feature from './Feature';

function LibraryDetails({ library }) {
  const { colors } = useTheme();

  const renderFrameworks = library?.framework.map((item, index) => (
    <Feature key={index} name={item} />
  ));

  const renderLicense = library?.license.map((item, index) => (
    <Feature key={index} name={item} />
  ));
  const renderType = library?.type.map((item, index) => (
    <Feature key={index} name={item} />
  ));
  const renderUseCase = library?.useCase.map((item, index) => (
    <Feature key={index} name={item} />
  ));

  return (
    <>
      <Heading level={1}>{library.title}</Heading>
      <Heading
        marginBottom="20px"
        marginTop="10px"
        color={colors.secondary}
        level={3}
      >
        {library.description}
      </Heading>
      <LinkWrapper rel="nofollow" href={library.homepage} target="_blank">
        <Icon className="home-icon" style={{ width: '25px' }} />
        <Text marginLeft="5px">{library.homepage}</Text>
      </LinkWrapper>
      <LinkWrapper
        rel="nofollow"
        href={`https://github.com/${library.repo}`}
        target="_blank"
      >
        <Icon className="github-icon" style={{ width: '25px' }} />
        <Text marginLeft="5px">{`https://github.com/${library.repo}`}</Text>
      </LinkWrapper>
      <FlexRowWrapper flexWrap="wrap">
        {renderFrameworks}
        {renderLicense}
        {renderType}
        {renderUseCase}
      </FlexRowWrapper>
      <ContentWrapper>{parse(library.content)}</ContentWrapper>
    </>
  );
}

export default LibraryDetails;

const LinkWrapper = styled.a`
  display: flex;
  align-items: center;

  margin-bottom: 5px;
`;

const ContentWrapper = styled.div`
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.colors.secondary};

  a {
    color: ${({ theme }) => theme.colors.primary};
  }

  h4 {
    font-size: 24px;
  }
  h3 {
    font-size: 28px;
  }
  h5 {
    font-size: 18px;
  }

  img {
    width: 80%;
  }
`;
